import { authorizeProject } from "@webstudio-is/trpc-interface/index.server";
import { createPostgrestContext } from "~/shared/context.server";
import env from "~/env/env.server";

/**
 * Check if a user is authorized to access a project during the Builder authentication process.
 */
export const isUserAuthorizedForProject = async (
  userId: string,
  projectId: string
) => {
  // Local dev can create projects under different test identities.
  // When dev login is enabled, allow any authenticated user to access builder.
  if (env.DEV_LOGIN === "true") {
    return true;
  }

  const postgrestContext = createPostgrestContext();

  // Only the project owner can access the Builder URL with authentication credentials (session).
  const isProjectOwner = await authorizeProject.checkProjectPermit(
    projectId,
    "own",
    { type: "user", userId },
    postgrestContext.client
  );

  return isProjectOwner;
};
