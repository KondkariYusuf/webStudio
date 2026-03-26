import path, { resolve } from "node:path";
import { defineConfig, type CorsOptions } from "vite";
import { vitePlugin as remix } from "@remix-run/dev";
import { vercelPreset } from "@vercel/remix/vite";
import type { IncomingMessage } from "node:http";
import pc from "picocolors";
import { readFileSync, existsSync } from "node:fs";
import fg from "fast-glob";

const rootDir = ["..", "../..", "../../.."]
  .map((dir) => path.join(__dirname, dir))
  .find((dir) => existsSync(path.join(dir, ".git")));

const hasPrivateFolders =
  fg.sync([path.join(rootDir ?? "", "packages/*/private-src/*")], {
    ignore: ["**/node_modules/**"],
  }).length > 0;

const conditions = hasPrivateFolders
  ? ["webstudio-private", "webstudio"]
  : ["webstudio"];

const parseBuilderUrl = (urlStr: string) => {
  const url = new URL(urlStr);
  const fragments = url.host.split(".");
  const match = fragments[0]?.match(
    /^(?<prefix>[a-z-]+)(?<uuid>[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})(-dot-(?<branch>.*))?/
  );

  if (match?.groups?.prefix !== "p-" || match.groups.uuid === undefined) {
    return {
      projectId: undefined,
      sourceOrigin: url.origin,
    };
  }

  fragments[0] = fragments[0].replace(
    /^(?<prefix>[a-z-]+)(?<uuid>[0-9a-fA-F-]{36})(-dot-(?<branch>.*))?/,
    match.groups.branch ?? ""
  );

  const sourceUrl = new URL(url.origin);
  sourceUrl.protocol = "https";
  sourceUrl.host = fragments.filter(Boolean).join(".");

  return {
    projectId: match.groups.uuid,
    sourceOrigin: sourceUrl.origin,
  };
};

const isBuilderUrl = (urlStr: string) =>
  parseBuilderUrl(urlStr).projectId !== undefined;

const normalizeLocalDevAuthorizationOrigin = (origin: string) => {
  const url = new URL(origin);

  if (url.hostname === "vite.wstd.dev") {
    url.hostname = "wstd.dev";
  }

  return url.origin;
};

const getAuthorizationServerOrigin = (urlStr: string) =>
  normalizeLocalDevAuthorizationOrigin(
    parseBuilderUrl(new URL(urlStr).origin).sourceOrigin
  );

export default defineConfig(({ mode }) => {
  if (mode === "development") {
    // Enable self-signed certificates for development service 2 service fetch calls.
    // This is particularly important for secure communication with the oauth.ws.token endpoint.
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  }

  return {
    cacheDir: resolve(rootDir ?? process.cwd(), ".vite", "builder"),
    plugins: [
      remix({
        presets: [vercelPreset()],
        future: {
          v3_lazyRouteDiscovery: false,
          v3_relativeSplatPath: false,
          v3_singleFetch: false,
          v3_fetcherPersist: false,
          v3_throwAbortReason: false,
        },
      }),
      {
        name: "request-timing-logger",
        configureServer(server) {
          server.middlewares.use((req, res, next) => {
            const start = Date.now();
            res.on("finish", () => {
              const duration = Date.now() - start;
              if (
                !(
                  req.url?.startsWith("/@") ||
                  req.url?.startsWith("/app") ||
                  req.url?.includes("/node_modules")
                )
              ) {
                console.info(
                  `[${req.method}] ${req.url} - ${duration}ms : ${pc.dim(req.headers.host)}`
                );
              }
            });
            next();
          });
        },
      },
    ],
    resolve: {
      conditions: [...conditions, "browser", "development|production"],
      dedupe: ["react", "react-dom"],
      alias: [
        {
          find: "~",
          replacement: resolve("app"),
        },

        // before 2,899.74 kB, after 2,145.98 kB
        {
          find: "@supabase/node-fetch",
          replacement: resolve("./app/shared/empty.ts"),
        },
      ],
    },
    ssr: {
      resolve: {
        conditions: [...conditions, "node", "development|production"],
      },
    },
    define: {
      "process.env.NODE_ENV": JSON.stringify(mode),
    },
    server: {
      // Service-to-service OAuth token call requires a specified host for the wstd.dev domain
      host: "wstd.dev",
      port: 5173,
      strictPort: true,
      // Needed for SSL
      proxy: {},

      https: {
        key: readFileSync("../../https/privkey.pem"),
        cert: readFileSync("../../https/fullchain.pem"),
      },
      cors: ((
        req: IncomingMessage,
        callback: (error: Error | null, options: CorsOptions | null) => void
      ) => {
        // Handle CORS preflight requests in development to mimic Remix production behavior
        if (req.method === "OPTIONS" || req.method === "POST") {
          if (req.headers.origin != null && req.url != null) {
            const url = new URL(req.url, `https://${req.headers.host}`);

            // Allow CORS for /builder-logout path when requested from the authorization server
            if (url.pathname === "/builder-logout" && isBuilderUrl(url.href)) {
              return callback(null, {
                origin: getAuthorizationServerOrigin(url.href),
                preflightContinue: false,
                credentials: true,
              });
            }
          }

          if (req.method === "OPTIONS") {
            // Respond with method not allowed for other preflight requests
            return callback(null, {
              preflightContinue: false,
              optionsSuccessStatus: 405,
            });
          }
        }

        // Disable CORS for all other requests
        return callback(null, {
          origin: false,
        });
      }) as never,
    },
    envPrefix: "GITHUB_",
  };
});
