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
  "../../../packages/prisma-client/src/__generated__/index.js"
);

const prisma = new PrismaClient();

try {
  const adminUser =
    (await prisma.user.findFirst({ where: { email: "hello@webstudio.is" } })) ??
    (await prisma.user.findFirst({ orderBy: { createdAt: "asc" } }));

  if (adminUser === null) {
    throw new Error("No users found in database");
  }

  const project = await prisma.project.findFirst({
    where: { title: "neo-ecom" },
  });

  if (project === null) {
    throw new Error("Project neo-ecom not found");
  }

  const updated = await prisma.project.update({
    where: { id: project.id },
    data: { userId: adminUser.id },
  });

  console.log(
    JSON.stringify(
      {
        status: "ok",
        projectId: updated.id,
        title: updated.title,
        ownerUserId: updated.userId,
        ownerEmail: adminUser.email,
      },
      null,
      2
    )
  );
} finally {
  await prisma.$disconnect();
}
