import type { AppContext } from "@webstudio-is/trpc-interface/index.server";
import {
  isSameCompanyUser,
  isSuperAdminUser,
  type User,
} from "~/shared/db/user.server";

export type AccessLevel = "view" | "edit" | "admin";

export const getAllProjectsForAdmin = async (context: AppContext) => {
  const result = await context.postgrest.client
    .from("Project")
    .select("id,title,userId,createdAt")
    .eq("isDeleted", false)
    .order("createdAt", { ascending: false });

  if (result.error) {
    console.error(result.error);
    throw new Error("Failed to fetch projects");
  }

  return result.data;
};

export const getProjectsVisibleToAdmin = async (
  context: AppContext,
  adminUser: Pick<User, "id" | "role" | "email" | "companyName">
) => {
  const projects = await getAllProjectsForAdmin(context);

  if (isSuperAdminUser(adminUser)) {
    return projects;
  }

  const ownersResult = await context.postgrest.client
    .from("User")
    .select("id,companyName")
    .in(
      "id",
      projects.length === 0
        ? ["00000000-0000-0000-0000-000000000000"]
        : projects
            .map((project) => project.userId)
            .filter((userId): userId is string => userId !== null)
    );

  if (ownersResult.error) {
    console.error(ownersResult.error);
    throw new Error("Failed to fetch project owners");
  }

  const ownerById = new Map(ownersResult.data.map((owner) => [owner.id, owner]));

  return projects.filter((project) => {
    const owner = project.userId ? ownerById.get(project.userId) : undefined;
    return owner ? isSameCompanyUser(adminUser, owner) : false;
  });
};

export const getProjectAccessList = async (
  context: AppContext,
  projectId: string
) => {
  const result = await context.postgrest.client
    .from("UserProjectAccess")
    .select("id,userId,projectId,accessLevel,grantedBy,createdAt")
    .eq("projectId", projectId);

  if (result.error) {
    console.error(result.error);
    throw new Error("Failed to fetch project access list");
  }

  return result.data;
};

export const getProjectAccessListVisibleToAdmin = async (
  context: AppContext,
  adminUser: Pick<User, "id" | "role" | "email" | "companyName">,
  projectId: string
) => {
  const accessList = await getProjectAccessList(context, projectId);

  if (isSuperAdminUser(adminUser)) {
    return accessList;
  }

  const usersResult = await context.postgrest.client
    .from("User")
    .select("id,role,companyName")
    .in(
      "id",
      accessList.length === 0
        ? ["00000000-0000-0000-0000-000000000000"]
        : accessList.map((entry) => entry.userId)
    );

  if (usersResult.error) {
    console.error(usersResult.error);
    throw new Error("Failed to fetch project access users");
  }

  const userById = new Map(usersResult.data.map((user) => [user.id, user]));

  return accessList.filter((entry) => {
    const targetUser = userById.get(entry.userId);
    return targetUser
      ? targetUser.role !== "admin" && isSameCompanyUser(adminUser, targetUser)
      : false;
  });
};

export const grantProjectAccess = async (
  context: AppContext,
  {
    userId,
    projectId,
    accessLevel,
    grantedBy,
  }: {
    userId: string;
    projectId: string;
    accessLevel: AccessLevel;
    grantedBy: string;
  }
) => {
  // Upsert: if the user already has access, update the level
  const existing = await context.postgrest.client
    .from("UserProjectAccess")
    .select("id")
    .eq("userId", userId)
    .eq("projectId", projectId)
    .maybeSingle();

  if (existing.data?.id) {
    const result = await context.postgrest.client
      .from("UserProjectAccess")
      .update({ accessLevel })
      .eq("id", existing.data.id);

    if (result.error) {
      console.error(result.error);
      throw new Error("Failed to update project access");
    }
    return { success: true, action: "updated" };
  }

  const id = crypto.randomUUID();
  const result = await context.postgrest.client
    .from("UserProjectAccess")
    .insert({
      id,
      userId,
      projectId,
      accessLevel,
      grantedBy,
    });

  if (result.error) {
    console.error(result.error);
    throw new Error("Failed to grant project access");
  }

  return { success: true, action: "created" };
};

export const revokeProjectAccess = async (
  context: AppContext,
  { userId, projectId }: { userId: string; projectId: string }
) => {
  const result = await context.postgrest.client
    .from("UserProjectAccess")
    .delete()
    .eq("userId", userId)
    .eq("projectId", projectId);

  if (result.error) {
    console.error(result.error);
    throw new Error("Failed to revoke project access");
  }

  return { success: true };
};

export const getUserAccessibleProjectIds = async (
  context: AppContext,
  userId: string
) => {
  const result = await context.postgrest.client
    .from("UserProjectAccess")
    .select("projectId,accessLevel")
    .eq("userId", userId);

  if (result.error) {
    console.error(result.error);
    throw new Error("Failed to fetch user accessible projects");
  }

  return result.data;
};

export const canUserAccessProject = async (
  context: AppContext,
  userId: string,
  projectId: string
): Promise<{ hasAccess: boolean; accessLevel: AccessLevel | "own" | null }> => {
  // Check if user owns the project
  const projectResult = await context.postgrest.client
    .from("Project")
    .select("userId")
    .eq("id", projectId)
    .maybeSingle();

  if (projectResult.data?.userId === userId) {
    return { hasAccess: true, accessLevel: "own" };
  }

  // Check UserProjectAccess
  const accessResult = await context.postgrest.client
    .from("UserProjectAccess")
    .select("accessLevel")
    .eq("userId", userId)
    .eq("projectId", projectId)
    .maybeSingle();

  if (accessResult.data?.accessLevel) {
    return {
      hasAccess: true,
      accessLevel: accessResult.data.accessLevel as AccessLevel,
    };
  }

  return { hasAccess: false, accessLevel: null };
};
