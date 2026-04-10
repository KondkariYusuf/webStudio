import {
  type ActionFunctionArgs,
  type LoaderFunctionArgs,
} from "@remix-run/server-runtime";
import { findAuthenticatedUser } from "~/services/auth.server";
import { createContext } from "~/shared/context.server";
import {
  getUsersVisibleToAdmin,
  updateUserRole,
  deleteUserById,
  createUserByAdmin,
  getUserById,
  AdminUserManagementError,
  type UserRole,
  isSuperAdminUser,
  canSubAdminManageUser,
} from "~/shared/db/user.server";
import { getProjectsVisibleToAdmin } from "~/shared/db/project-access.server";

const jsonResponse = (
  body: unknown,
  init?: ResponseInit
) =>
  new Response(JSON.stringify(body), {
    ...init,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      ...(init?.headers ?? {}),
    },
  });

const getErrorResponse = (error: unknown) => {
  if (error instanceof AdminUserManagementError) {
    return jsonResponse(
      { success: false, error: error.message },
      { status: 200 }
    );
  }

  return jsonResponse(
    { error: error instanceof Error ? error.message : "Unknown error" },
    { status: 500 }
  );
};

const getRequestData = async (request: Request) => {
  const contentType = request.headers.get("content-type") ?? "";

  if (contentType.includes("application/json")) {
    const body = await request.json();
    return {
      action: typeof body?.action === "string" ? body.action : undefined,
      values: body,
    };
  }

  const formData = await request.formData();
  return {
    action: formData.get("action")?.toString(),
    values: {
      action: formData.get("action")?.toString(),
      userId: formData.get("userId")?.toString(),
      role: formData.get("role")?.toString(),
      email: formData.get("email")?.toString(),
      password: formData.get("password")?.toString(),
      fullName: formData.get("fullName")?.toString(),
      companyName: formData.get("companyName")?.toString(),
      phone: formData.get("phone")?.toString(),
    },
  };
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
  try {
    const user = await findAuthenticatedUser(request);
    if (!user) {
      return jsonResponse({ error: "Unauthorized" }, { status: 401 });
    }

    const context = await createContext(request);
    const fullUser = await getUserById(context, user.id);

    if (fullUser.role !== "admin") {
      return jsonResponse({ error: "Forbidden: Admin only" }, { status: 403 });
    }

    const [users, projects] = await Promise.all([
      getUsersVisibleToAdmin(context, fullUser),
      getProjectsVisibleToAdmin(context, fullUser),
    ]);
    return jsonResponse({
      users,
      projects,
      currentUser: {
        id: fullUser.id,
        email: fullUser.email,
        role: fullUser.role,
        isSuperAdmin: isSuperAdminUser(fullUser),
        companyName: fullUser.companyName,
      },
    });
  } catch (error) {
    console.error("[RBAC] Loader error:", error);
    return getErrorResponse(error);
  }
};

export const action = async ({ request }: ActionFunctionArgs) => {
  try {
    const user = await findAuthenticatedUser(request);
    if (!user) {
      return jsonResponse({ error: "Unauthorized" }, { status: 401 });
    }

    const context = await createContext(request);
    const fullUser = await getUserById(context, user.id);

    if (fullUser.role !== "admin") {
      return jsonResponse({ error: "Forbidden: Admin only" }, { status: 403 });
    }

    const { action, values } = await getRequestData(request);
    const actionType = action;

    if (actionType === "updateRole") {
      const userId =
        typeof values?.userId === "string" ? values.userId : undefined;
      const role =
        typeof values?.role === "string" ? (values.role as UserRole) : undefined;
      if (!userId || !role) {
        return jsonResponse(
          { error: "userId and role are required" },
          { status: 400 }
        );
      }
      if (!["admin", "editor", "viewer"].includes(role)) {
        return jsonResponse({ error: "Invalid role" }, { status: 400 });
      }
      const targetUser = await getUserById(context, userId);
      if (
        canSubAdminManageUser({ actor: fullUser, target: targetUser }) === false
      ) {
        return jsonResponse(
          { error: "You can only manage users from your own company" },
          { status: 403 }
        );
      }
      if (isSuperAdminUser(fullUser) === false && role === "admin") {
        return jsonResponse(
          { error: "Only the super admin can assign admin role" },
          { status: 403 }
        );
      }
      await updateUserRole(context, { userId, role });
      return jsonResponse({ success: true });
    }

    if (actionType === "deleteUser") {
      const userId =
        typeof values?.userId === "string" ? values.userId : undefined;
      if (!userId) {
        return jsonResponse(
          { error: "userId is required" },
          { status: 400 }
        );
      }
      if (userId === user.id) {
        return jsonResponse(
          { error: "Cannot delete yourself" },
          { status: 400 }
        );
      }
      const targetUser = await getUserById(context, userId);
      if (
        canSubAdminManageUser({ actor: fullUser, target: targetUser }) === false
      ) {
        return jsonResponse(
          { error: "You can only manage users from your own company" },
          { status: 403 }
        );
      }
      await deleteUserById(context, userId);
      return jsonResponse({ success: true });
    }

    if (actionType === "createUser") {
      const email =
        typeof values?.email === "string" ? values.email : undefined;
      const fullName =
        typeof values?.fullName === "string" ? values.fullName : undefined;
      const companyName =
        typeof values?.companyName === "string"
          ? values.companyName
          : undefined;
      const phone =
        typeof values?.phone === "string" ? values.phone : undefined;
      const role = (
        typeof values?.role === "string" ? values.role : "viewer"
      ) as UserRole;
      const password =
        typeof values?.password === "string" ? values.password : undefined;
      if (!email || !password || !fullName || !companyName || !phone) {
        return jsonResponse(
          { error: "name, company name, phone, email and password are required" },
          { status: 400 }
        );
      }
      if (!["admin", "editor", "viewer"].includes(role)) {
        return jsonResponse({ error: "Invalid role" }, { status: 400 });
      }
      if (isSuperAdminUser(fullUser) === false && role === "admin") {
        return jsonResponse(
          { error: "Only the super admin can create admin users" },
          { status: 403 }
        );
      }
      if (
        isSuperAdminUser(fullUser) === false &&
        (fullUser.companyName?.trim().length ?? 0) === 0
      ) {
        return jsonResponse(
          { error: "Sub-admin must have a company name before creating users" },
          { status: 403 }
        );
      }
      if (
        isSuperAdminUser(fullUser) === false &&
        fullUser.companyName &&
        fullUser.companyName.trim().toLowerCase() !== companyName.trim().toLowerCase()
      ) {
        return jsonResponse(
          { error: "Sub-admins can only create users in their own company" },
          { status: 403 }
        );
      }
      const newUser = await createUserByAdmin(context, {
        email,
        role,
        password,
        fullName,
        companyName: isSuperAdminUser(fullUser)
          ? companyName
          : fullUser.companyName ?? companyName,
        phone,
      });
      return jsonResponse({ success: true, user: newUser });
    }

    return jsonResponse({ error: "Unknown action" }, { status: 400 });
  } catch (error) {
    if (error instanceof AdminUserManagementError === false) {
      console.error("[RBAC] Admin action error:", error);
    }
    return getErrorResponse(error);
  }
};
