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

const SUPER_ADMIN_EMAIL = "admin@gmail.com";

const normalizeEmail = (email: string | null | undefined) =>
  (email ?? "").trim().toLowerCase();

const normalizeCompanyName = (companyName: string | null | undefined) =>
  (companyName ?? "").trim().toLowerCase();

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

const getImplicitCompanyProjectIds = async (
  userId: string,
  context: AppContext
) => {
  const currentUserResult = await context.postgrest.client
    .from("User")
    .select("companyName")
    .eq("id", userId)
    .maybeSingle();

  if (currentUserResult.error) {
    throw currentUserResult.error;
  }

  const companyName = normalizeCompanyName(currentUserResult.data?.companyName);

  if (companyName === "") {
    return [];
  }

  const adminsResult = await context.postgrest.client
    .from("User")
    .select("id,email,role,companyName")
    .eq("role", "admin");

  if (adminsResult.error) {
    throw adminsResult.error;
  }

  const subAdminIds = adminsResult.data
    .filter(
      (user) =>
        normalizeEmail(user.email) !== SUPER_ADMIN_EMAIL &&
        normalizeCompanyName(user.companyName) === companyName
    )
    .map((user) => user.id);

  if (subAdminIds.length === 0) {
    return [];
  }

  const projectsResult = await context.postgrest.client
    .from("Project")
    .select("id")
    .in("userId", subAdminIds)
    .eq("isDeleted", false);

  if (projectsResult.error) {
    throw projectsResult.error;
  }

  return projectsResult.data.map((project) => project.id);
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

  const ownedProjects = await queryProjectList(
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
  if (ownedProjects.error) {
    throw ownedProjects.error;
  }

  const sharedAccess = await context.postgrest.client
    .from("UserProjectAccess")
    .select("projectId,accessLevel")
    .eq("userId", userId);

  if (sharedAccess.error) {
    throw sharedAccess.error;
  }

  const ownedProjectIds = new Set(ownedProjects.data.map((project) => project.id));
  const sharedProjectIds = sharedAccess.data
    .map((entry) => entry.projectId)
    .filter((projectId) => ownedProjectIds.has(projectId) === false);

  const sharedAccessByProjectId = new Map(
    sharedAccess.data.map((entry) => [entry.projectId, entry.accessLevel])
  );

  const implicitCompanyProjectIds = await getImplicitCompanyProjectIds(
    userId,
    context
  );
  const implicitVisibleProjectIds = implicitCompanyProjectIds.filter(
    (projectId) =>
      ownedProjectIds.has(projectId) === false &&
      sharedProjectIds.includes(projectId) === false
  );

  const sharedProjects =
    sharedProjectIds.length === 0
      ? []
      : await queryProjectList(
          (columns) =>
            context.postgrest.client
              .from("DashboardProject")
              .select(columns)
              .in("id", sharedProjectIds)
              .eq("isDeleted", false)
              .order("createdAt", { ascending: false })
              .order("id", { ascending: false }),
          (columns) =>
            context.postgrest.client
              .from("Project")
              .select(columns)
              .in("id", sharedProjectIds)
              .eq("isDeleted", false)
              .order("createdAt", { ascending: false })
              .order("id", { ascending: false })
        );

  if (Array.isArray(sharedProjects) === false && sharedProjects.error) {
    throw sharedProjects.error;
  }

  const implicitCompanyProjects =
    implicitVisibleProjectIds.length === 0
      ? []
      : await queryProjectList(
          (columns) =>
            context.postgrest.client
              .from("DashboardProject")
              .select(columns)
              .in("id", implicitVisibleProjectIds)
              .eq("isDeleted", false)
              .order("createdAt", { ascending: false })
              .order("id", { ascending: false }),
          (columns) =>
            context.postgrest.client
              .from("Project")
              .select(columns)
              .in("id", implicitVisibleProjectIds)
              .eq("isDeleted", false)
              .order("createdAt", { ascending: false })
              .order("id", { ascending: false })
        );

  if (
    Array.isArray(implicitCompanyProjects) === false &&
    implicitCompanyProjects.error
  ) {
    throw implicitCompanyProjects.error;
  }

  const mergedProjects = [
    ...ownedProjects.data.map((project) => ({
      ...project,
      accessLevel: "own" as const,
    })),
    ...(Array.isArray(sharedProjects)
      ? []
      : sharedProjects.data.map((project) => ({
          ...project,
          accessLevel: (sharedAccessByProjectId.get(project.id) ?? "view") as
            | "view"
            | "edit"
            | "admin",
        }))),
    ...(Array.isArray(implicitCompanyProjects)
      ? []
      : implicitCompanyProjects.data.map((project) => ({
          ...project,
          accessLevel: "view" as const,
        }))),
  ].sort((left, right) => {
    const dateCompare =
      new Date(right.createdAt).getTime() - new Date(left.createdAt).getTime();

    if (dateCompare !== 0) {
      return dateCompare;
    }

    return right.id.localeCompare(left.id);
  });

  return await fetchAndMapDomains(
    mergedProjects.map((project) => ({
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
