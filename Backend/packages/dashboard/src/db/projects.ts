import {
  AuthorizationError,
  type AppContext,
} from "@webstudio-is/trpc-interface/index.server";

type DomainVirtual = {
  domain: string;
  status: string;
  verified: boolean;
};

const fetchAndMapDomains = async <
  T extends {
    id: string;
    title: string;
    domain: string;
    createdAt: string;
    [key: string]: unknown;
  },
>(
  projects: T[],
  context: AppContext
) => {
  const projectIds = projects.map((project) => project.id);

  type ProjectWithDomains = T & {
    domainsVirtual: DomainVirtual[];
  };

  if (projectIds.length === 0) {
    return projects.map((project) => ({
      ...project,
      domainsVirtual: [],
    })) as ProjectWithDomains[];
  }

  // Query ProjectDomain and Domain tables
  const domainsData = await context.postgrest.client
    .from("ProjectDomain")
    .select("projectId, Domain!inner(domain, status, txtRecord), txtRecord")
    .in("projectId", projectIds);

  if (domainsData.error) {
    console.error("Error fetching domains:", domainsData.error);
    // Continue without domains rather than failing
  }

  // Map domains to projects
  const domainsByProject = new Map<string, DomainVirtual[]>();
  if (domainsData.data) {
    for (const projectDomain of domainsData.data) {
      if (!domainsByProject.has(projectDomain.projectId)) {
        domainsByProject.set(projectDomain.projectId, []);
      }
      // Type assertion needed for joined data
      const domainData = projectDomain.Domain as unknown as {
        domain: string;
        status: string;
        txtRecord: string;
      };
      const verified = domainData.txtRecord === projectDomain.txtRecord;
      domainsByProject.get(projectDomain.projectId)?.push({
        domain: domainData.domain,
        status: domainData.status,
        verified,
      });
    }
  }

  // Add domains to projects
  return projects.map((project) => ({
    ...project,
    domainsVirtual: project.id ? domainsByProject.get(project.id) || [] : [],
  })) as ProjectWithDomains[];
};

export type DashboardProject = Awaited<ReturnType<typeof findMany>>[number];

type DashboardProjectRow = {
  id: string;
  title: string;
  domain: string;
  createdAt: string;
  previewImageAsset?: unknown;
  latestBuildVirtual?: unknown;
  [key: string]: unknown;
};

const canRetryWithoutProjectListRelation = (error: { message?: string }) => {
  const message = error.message ?? "";

  return (
    message.includes(
      "Could not find a relationship between 'DashboardProject' and '"
    ) || message.includes("Could not find a relationship between 'Project' and '")
  );
};

const isMissingDashboardProjectView = (error: { message?: string }) =>
  error.message?.includes('relation "public.DashboardProject" does not exist') ===
  true;

const selectDashboardProjects = async (
  runQuery: (columns: string) => Promise<{
    data: DashboardProjectRow[];
    error: { message?: string } | null;
  }> | PromiseLike<{
    data: DashboardProjectRow[];
    error: { message?: string } | null;
  }>
) => {
  const selectShapes = [
    "*, previewImageAsset:Asset (*), latestBuildVirtual (*)",
    "*, previewImageAsset:Asset (*)",
    "*, latestBuildVirtual (*)",
    "*",
  ];

  let result = await runQuery(selectShapes[0]);

  for (const columns of selectShapes.slice(1)) {
    if (
      result.error === null ||
      canRetryWithoutProjectListRelation(result.error) === false
    ) {
      return result;
    }

    result = await runQuery(columns);
  }

  return result;
};

const queryProjectList = async (
  runDashboardProjectQuery: (columns: string) => Promise<{
    data: DashboardProjectRow[];
    error: { message?: string } | null;
  }> | PromiseLike<{
    data: DashboardProjectRow[];
    error: { message?: string } | null;
  }>,
  runProjectQuery: (columns: string) => Promise<{
    data: DashboardProjectRow[];
    error: { message?: string } | null;
  }> | PromiseLike<{
    data: DashboardProjectRow[];
    error: { message?: string } | null;
  }>
) => {
  const dashboardProjects = await selectDashboardProjects(runDashboardProjectQuery);

  if (
    dashboardProjects.error &&
    isMissingDashboardProjectView(dashboardProjects.error)
  ) {
    return await selectDashboardProjects(runProjectQuery);
  }

  return dashboardProjects;
};

export const findMany = async (userId: string, context: AppContext) => {
  if (context.authorization.type !== "user") {
    throw new AuthorizationError(
      "Only logged in users can view the project list"
    );
  }

  if (userId !== context.authorization.userId) {
    throw new AuthorizationError(
      "Only the project owner can view the project list"
    );
  }

  const data = await queryProjectList(
    (columns) =>
      context.postgrest.client
        .from("DashboardProject")
        .select(columns)
        .eq("userId", userId)
        .eq("isDeleted", false)
        .order("createdAt", { ascending: false })
        .order("id", { ascending: false }),
    (columns) =>
      context.postgrest.client
        .from("Project")
        .select(columns)
        .eq("userId", userId)
        .eq("isDeleted", false)
        .order("createdAt", { ascending: false })
        .order("id", { ascending: false })
  );
  if (data.error) {
    throw data.error;
  }

  // Type assertion: These fields are never null in practice (come from Project table which has them as required)
  return await fetchAndMapDomains(
    data.data.map((project) => ({
      ...project,
      previewImageAsset:
        "previewImageAsset" in project ? project.previewImageAsset : null,
      latestBuildVirtual:
        "latestBuildVirtual" in project ? project.latestBuildVirtual : null,
    })),
    context
  );
};

export const findManyByIds = async (
  projectIds: string[],
  context: AppContext
) => {
  if (projectIds.length === 0) {
    return [];
  }

  // Get the user ID for ownership filtering
  // Allow service context (no authorization) to access any projects (for templates)
  const userId =
    context.authorization.type === "user"
      ? context.authorization.userId
      : undefined;

  const data = await queryProjectList(
    (columns) => {
      let query = context.postgrest.client
        .from("DashboardProject")
        .select(columns)
        .in("id", projectIds)
        .eq("isDeleted", false);

      // If user context, also filter by userId OR isMarketplaceApproved (public templates)
      if (userId !== undefined) {
        query = query.or(
          `userId.eq.${userId},marketplaceApprovalStatus.eq.APPROVED`
        );
      }

      return query
        .order("createdAt", { ascending: false })
        .order("id", { ascending: false });
    },
    (columns) => {
      let query = context.postgrest.client
        .from("Project")
        .select(columns)
        .in("id", projectIds)
        .eq("isDeleted", false);

      if (userId !== undefined) {
        query = query.or(
          `userId.eq.${userId},marketplaceApprovalStatus.eq.APPROVED`
        );
      }

      return query
        .order("createdAt", { ascending: false })
        .order("id", { ascending: false });
    }
  );
  if (data.error) {
    throw data.error;
  }

  // Type assertion: These fields are never null in practice (come from Project table which has them as required)
  return await fetchAndMapDomains(
    data.data.map((project) => ({
      ...project,
      previewImageAsset:
        "previewImageAsset" in project ? project.previewImageAsset : null,
      latestBuildVirtual:
        "latestBuildVirtual" in project ? project.latestBuildVirtual : null,
    })),
    context
  );
};
