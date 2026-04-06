import {
  type ActionFunctionArgs,
  type LoaderFunctionArgs,
} from "@remix-run/server-runtime";
import { findAuthenticatedUser } from "~/services/auth.server";
import { createContext } from "~/shared/context.server";
import { getUserById } from "~/shared/db/user.server";
import {
  getProjectAccessList,
  grantProjectAccess,
  revokeProjectAccess,
  type AccessLevel,
} from "~/shared/db/project-access.server";

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

    const url = new URL(request.url);
    const projectId = url.searchParams.get("projectId");

    if (!projectId) {
      return Response.json(
        { error: "projectId is required" },
        { status: 400 }
      );
    }

    const accessList = await getProjectAccessList(context, projectId);
    return Response.json({ accessList });
  } catch (error) {
    console.error("[RBAC] Project access loader error:", error);
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

    if (actionType === "grant") {
      const userId = formData.get("userId")?.toString();
      const projectId = formData.get("projectId")?.toString();
      const accessLevel = formData.get("accessLevel")?.toString() as AccessLevel;

      if (!userId || !projectId || !accessLevel) {
        return Response.json(
          { error: "userId, projectId, and accessLevel are required" },
          { status: 400 }
        );
      }
      if (!["view", "edit"].includes(accessLevel)) {
        return Response.json(
          { error: "Invalid accessLevel" },
          { status: 400 }
        );
      }

      const result = await grantProjectAccess(context, {
        userId,
        projectId,
        accessLevel,
        grantedBy: user.id,
      });
      return Response.json(result);
    }

    if (actionType === "revoke") {
      const userId = formData.get("userId")?.toString();
      const projectId = formData.get("projectId")?.toString();
      if (!userId || !projectId) {
        return Response.json(
          { error: "userId and projectId are required" },
          { status: 400 }
        );
      }
      const result = await revokeProjectAccess(context, { userId, projectId });
      return Response.json(result);
    }

    return Response.json({ error: "Unknown action" }, { status: 400 });
  } catch (error) {
    console.error("[RBAC] Project access action error:", error);
    return Response.json(
      { error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
};

export default function AdminProjectAccess() {
  return null;
}
