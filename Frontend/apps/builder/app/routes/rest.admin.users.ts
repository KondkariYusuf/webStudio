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
  type UserRole,
} from "~/shared/db/user.server";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  try {
    const user = await findAuthenticatedUser(request);
    if (!user) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    const context = await createContext(request);
    const fullUser = await getUserById(context, user.id);

    if (fullUser.role !== "admin") {
      return Response.json({ error: "Forbidden: Admin only" }, { status: 403 });
    }

    const users = await getAllUsers(context);
    return Response.json({ users });
  } catch (error) {
    console.error("[RBAC] Loader error:", error);
    return Response.json(
      { error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
};

export const action = async ({ request }: ActionFunctionArgs) => {
  try {
    const user = await findAuthenticatedUser(request);
    if (!user) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    const context = await createContext(request);
    const fullUser = await getUserById(context, user.id);

    if (fullUser.role !== "admin") {
      return Response.json({ error: "Forbidden: Admin only" }, { status: 403 });
    }

    const formData = await request.formData();
    const actionType = formData.get("action")?.toString();

    if (actionType === "updateRole") {
      const userId = formData.get("userId")?.toString();
      const role = formData.get("role")?.toString() as UserRole;
      if (!userId || !role) {
        return Response.json(
          { error: "userId and role are required" },
          { status: 400 }
        );
      }
      if (!["admin", "editor", "viewer"].includes(role)) {
        return Response.json({ error: "Invalid role" }, { status: 400 });
      }
      await updateUserRole(context, { userId, role });
      return Response.json({ success: true });
    }

    if (actionType === "deleteUser") {
      const userId = formData.get("userId")?.toString();
      if (!userId) {
        return Response.json(
          { error: "userId is required" },
          { status: 400 }
        );
      }
      if (userId === user.id) {
        return Response.json(
          { error: "Cannot delete yourself" },
          { status: 400 }
        );
      }
      await deleteUserById(context, userId);
      return Response.json({ success: true });
    }

    if (actionType === "createUser") {
      const email = formData.get("email")?.toString();
      const role = (formData.get("role")?.toString() ?? "viewer") as UserRole;
      const password = formData.get("password")?.toString();
      if (!email || !password) {
        return Response.json(
          { error: "email and password are required" },
          { status: 400 }
        );
      }
      if (!["admin", "editor", "viewer"].includes(role)) {
        return Response.json({ error: "Invalid role" }, { status: 400 });
      }
      const newUser = await createUserByAdmin(context, {
        email,
        role,
        password,
      });
      return Response.json({ success: true, user: newUser });
    }

    return Response.json({ error: "Unknown action" }, { status: 400 });
  } catch (error) {
    console.error("[RBAC] Admin action error:", error);
    return Response.json(
      { error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
};

export default function AdminUsers() {
  return null;
}
