import {
  type ActionFunctionArgs,
  type LoaderFunctionArgs,
} from "@remix-run/server-runtime";
import { findAuthenticatedUser } from "~/services/auth.server";
import { createContext } from "~/shared/context.server";
import {
  getAllUsers,
  updateUserRole,
  deleteUserById,
  createUserByAdmin,
  getUserById,
  AdminUserManagementError,
  type UserRole,
} from "~/shared/db/user.server";
import { getAllProjectsForAdmin } from "~/shared/db/project-access.server";

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
      getAllUsers(context),
      getAllProjectsForAdmin(context),
    ]);
    return jsonResponse({ users, projects });
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
      await deleteUserById(context, userId);
      return jsonResponse({ success: true });
    }

    if (actionType === "createUser") {
      const email =
        typeof values?.email === "string" ? values.email : undefined;
      const role = (
        typeof values?.role === "string" ? values.role : "viewer"
      ) as UserRole;
      const password =
        typeof values?.password === "string" ? values.password : undefined;
      if (!email || !password) {
        return jsonResponse(
          { error: "email and password are required" },
          { status: 400 }
        );
      }
      if (!["admin", "editor", "viewer"].includes(role)) {
        return jsonResponse({ error: "Invalid role" }, { status: 400 });
      }
      const newUser = await createUserByAdmin(context, {
        email,
        role,
        password,
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
