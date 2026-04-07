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
  getAllProjectsForAdmin,
  type AccessLevel,
} from "~/shared/db/project-access.server";

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
      projectId: formData.get("projectId")?.toString(),
      accessLevel: formData.get("accessLevel")?.toString(),
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

    const url = new URL(request.url);
    const projectId = url.searchParams.get("projectId");

    if (projectId === "all") {
      const projects = await getAllProjectsForAdmin(context);
      return jsonResponse({ projects });
    }

    if (!projectId) {
      return jsonResponse({ error: "projectId is required" }, { status: 400 });
    }

    const accessList = await getProjectAccessList(context, projectId);
    return jsonResponse({ accessList });
  } catch (error) {
    console.error("[RBAC] Project access loader error:", error);
    return jsonResponse(
      { error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
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

    if (actionType === "grant") {
      const userId =
        typeof values?.userId === "string" ? values.userId : undefined;
      const projectId =
        typeof values?.projectId === "string" ? values.projectId : undefined;
      const accessLevel =
        typeof values?.accessLevel === "string"
          ? (values.accessLevel as AccessLevel)
          : undefined;

      if (!userId || !projectId || !accessLevel) {
        return jsonResponse(
          { error: "userId, projectId, and accessLevel are required" },
          { status: 400 }
        );
      }
      if (!["view", "edit"].includes(accessLevel)) {
        return jsonResponse(
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
      return jsonResponse(result);
    }

    if (actionType === "revoke") {
      const userId =
        typeof values?.userId === "string" ? values.userId : undefined;
      const projectId =
        typeof values?.projectId === "string" ? values.projectId : undefined;
      if (!userId || !projectId) {
        return jsonResponse(
          { error: "userId and projectId are required" },
          { status: 400 }
        );
      }
      const result = await revokeProjectAccess(context, { userId, projectId });
      return jsonResponse(result);
    }

    return jsonResponse({ error: "Unknown action" }, { status: 400 });
  } catch (error) {
    console.error("[RBAC] Project access action error:", error);
    return jsonResponse(
      { error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
};
