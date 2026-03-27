import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const envFiles = [
  path.join(root, "apps", "builder", ".env.development"),
  path.join(root, "apps", "builder", ".env"),
];

const values = new Map();
for (const envFile of envFiles) {
  if (fs.existsSync(envFile) === false) continue;
  const source = fs.readFileSync(envFile, "utf8");
  for (const line of source.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (trimmed === "" || trimmed.startsWith("#")) continue;
    const separator = trimmed.indexOf("=");
    if (separator < 0) continue;

    const key = trimmed.slice(0, separator).trim();
    let value = trimmed.slice(separator + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    values.set(key, value);
  }
}

const databaseUrl = values.get("DIRECT_URL") ?? values.get("DATABASE_URL");
if (databaseUrl === undefined) {
  throw new Error("DIRECT_URL or DATABASE_URL not found");
}

const normalizedDatabaseUrl = databaseUrl.replace("?pgbouncer=true", "");
process.env.DATABASE_URL = normalizedDatabaseUrl;
process.env.DIRECT_URL = normalizedDatabaseUrl;

const { PrismaClient } = await import(
  "../../../../Backend/packages/prisma-client/src/__generated__/index.js"
);

const prisma = new PrismaClient();

const isFullUrl = (value) => /^https?:\/\//i.test(value);

const normalizePath = (value, fallbackToRoot = false) => {
  if (typeof value !== "string") {
    return fallbackToRoot ? "/" : value;
  }
  const trimmed = value.trim();
  if (trimmed === "") {
    return fallbackToRoot ? "/" : trimmed;
  }
  if (trimmed.startsWith("/") || isFullUrl(trimmed)) {
    return trimmed;
  }
  return `/${trimmed}`;
};

const normalizeHomePath = (value) => {
  if (typeof value !== "string") {
    return "";
  }
  const trimmed = value.trim();
  if (trimmed === "" || trimmed === "/") {
    return "";
  }
  return "";
};

try {
  const project = await prisma.project.findFirst({
    where: { title: "neo-ecom", isDeleted: false },
    select: { id: true, title: true },
  });

  if (project === null) {
    throw new Error("Project neo-ecom not found");
  }

  const build = await prisma.build.findFirst({
    where: { projectId: project.id },
    orderBy: { createdAt: "desc" },
    select: { id: true, pages: true },
  });

  if (build === null) {
    throw new Error("No build found for neo-ecom");
  }

  const originalPages = build.pages;
  const parsedPages =
    typeof originalPages === "string" ? JSON.parse(originalPages) : originalPages;

  if (parsedPages === null || typeof parsedPages !== "object") {
    throw new Error("Build pages payload is not an object");
  }

  const changes = [];

  if (parsedPages.homePage !== undefined) {
    const nextPath = normalizeHomePath(parsedPages.homePage.path);
    if (parsedPages.homePage.path !== nextPath) {
      changes.push({ section: "homePage", from: parsedPages.homePage.path, to: nextPath });
      parsedPages.homePage.path = nextPath;
    }
  }

  if (Array.isArray(parsedPages.pages)) {
    for (let index = 0; index < parsedPages.pages.length; index += 1) {
      const page = parsedPages.pages[index];
      if (page === null || typeof page !== "object") continue;
      const nextPath = normalizePath(page.path, false);
      if (page.path !== nextPath) {
        changes.push({ section: `pages[${index}]`, from: page.path, to: nextPath });
        page.path = nextPath;
      }
    }
  }

  if (changes.length === 0) {
    console.log(
      JSON.stringify(
        {
          status: "ok",
          message: "No invalid page paths found",
          projectId: project.id,
          buildId: build.id,
        },
        null,
        2
      )
    );
  } else {
    const updatedPages =
      typeof originalPages === "string" ? JSON.stringify(parsedPages) : parsedPages;

    await prisma.build.update({
      where: { id: build.id },
      data: { pages: updatedPages },
    });

    console.log(
      JSON.stringify(
        {
          status: "ok",
          projectId: project.id,
          buildId: build.id,
          updated: changes,
        },
        null,
        2
      )
    );
  }
} finally {
  await prisma.$disconnect();
}
