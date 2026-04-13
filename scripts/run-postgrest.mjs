import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { spawn } from "node:child_process";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const configPath = path.join(rootDir, "postgrest.conf");

const binaryByPlatform = {
  win32: path.join(
    rootDir,
    "postgrest-bin",
    "artifacts",
    "postgrest-windows-x64",
    "postgrest.exe"
  ),
};

const binaryPath = binaryByPlatform[process.platform];

if (binaryPath == null) {
  console.error(`Unsupported platform for bundled PostgREST binary: ${process.platform}`);
  process.exit(1);
}

if (existsSync(binaryPath) === false) {
  console.error(`PostgREST binary not found at ${binaryPath}`);
  process.exit(1);
}

if (process.env.DATABASE_URL == null || process.env.DATABASE_URL.trim() === "") {
  console.error("DATABASE_URL is required. Set it in root .env");
  process.exit(1);
}

const resolvePostgrestDbUri = (rawUrl) => {
  try {
    const parsed = new URL(rawUrl);
    // PostgREST 12 does not support this libpq parameter in the URI parser.
    parsed.searchParams.delete("channel_binding");

    const hostMatch = parsed.hostname.match(/^(ep-[^.]+?)-pooler\./);
    const endpointId = hostMatch?.[1];

    // Neon pooler may require explicit endpoint option for clients that
    // cannot infer SNI endpoint IDs from the host automatically.
    if (endpointId && parsed.searchParams.has("options") === false) {
      parsed.searchParams.set("options", `endpoint=${endpointId}`);
    }

    return parsed.toString();
  } catch {
    return rawUrl;
  }
};

const postgrestDbUri = resolvePostgrestDbUri(process.env.DATABASE_URL);

const childEnv = {
  ...process.env,
  PGRST_DB_URI: process.env.PGRST_DB_URI ?? postgrestDbUri,
  PGRST_DB_SCHEMAS: process.env.PGRST_DB_SCHEMAS ?? "public",
  PGRST_DB_ANON_ROLE: process.env.PGRST_DB_ANON_ROLE ?? "anon",
  PGRST_SERVER_PORT: process.env.PGRST_SERVER_PORT ?? "3000",
};

if (childEnv.PGRST_JWT_SECRET == null || childEnv.PGRST_JWT_SECRET.trim() === "") {
  console.error("PGRST_JWT_SECRET is required. Set it in root .env");
  process.exit(1);
}

const child = spawn(binaryPath, [configPath], {
  cwd: rootDir,
  env: childEnv,
  stdio: "inherit",
});

child.on("exit", (code, signal) => {
  if (signal != null) {
    process.kill(process.pid, signal);
    return;
  }
  process.exit(code ?? 0);
});

const terminate = () => {
  if (child.killed === false) {
    child.kill("SIGINT");
  }
};

process.on("SIGINT", terminate);
process.on("SIGTERM", terminate);
