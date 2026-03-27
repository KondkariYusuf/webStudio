// src/index.ts
var getLatestBuildUsingProjectId = async (params) => {
  const { origin, projectId, authToken } = params;
  const { sourceOrigin } = parseBuilderUrl(origin);
  const url = new URL(sourceOrigin);
  url.pathname = `/rest/buildId/${projectId}`;
  const headers = new Headers();
  headers.set("x-auth-token", authToken);
  const response = await fetch(url.href, { headers });
  if (response.ok) {
    return await response.json();
  }
  const message = await response.text();
  throw new Error(message.slice(0, 1e3));
};
var loadProjectDataByBuildId = async (params) => {
  const { sourceOrigin } = parseBuilderUrl(params.origin);
  const url = new URL(sourceOrigin);
  url.pathname = `/rest/build/${params.buildId}`;
  const headers = new Headers();
  if ("seviceToken" in params) {
    headers.set("Authorization", params.seviceToken);
  } else {
    headers.set("x-auth-token", params.authToken);
  }
  const response = await fetch(url.href, {
    headers
  });
  if (response.ok) {
    return await response.json();
  }
  const message = await response.text();
  throw new Error(message.slice(0, 1e3));
};
var loadProjectDataByProjectId = async (params) => {
  const result = await getLatestBuildUsingProjectId(params);
  if (result.buildId === null) {
    throw new Error(`The project is not published yet`);
  }
  return await loadProjectDataByBuildId({
    buildId: result.buildId,
    origin: params.origin,
    authToken: params.authToken
  });
};
var buildProjectDomainPrefix = "p-";
var isLocalhostLike = (hostname) => hostname === "localhost" || hostname.endsWith(".localhost");
var parseBuilderUrl = (urlStr) => {
  const url = new URL(urlStr);
  const fragments = url.host.split(".");
  const re = /^(?<prefix>[a-z-]+)(?<uuid>[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})(-dot-(?<branch>.*))?/;
  const match = fragments[0].match(re);
  const prefix = match?.groups?.prefix;
  const projectId = match?.groups?.uuid;
  const branch = match?.groups?.branch;
  if (prefix !== buildProjectDomainPrefix) {
    return {
      projectId: void 0,
      sourceOrigin: url.origin
    };
  }
  if (projectId === void 0) {
    return {
      projectId: void 0,
      sourceOrigin: url.origin
    };
  }
  fragments[0] = fragments[0].replace(re, branch ?? "");
  const sourceUrl = new URL(url.origin);
  sourceUrl.host = fragments.filter(Boolean).join(".");
  sourceUrl.protocol = isLocalhostLike(sourceUrl.hostname) ? "http:" : "https:";
  return {
    projectId,
    sourceOrigin: sourceUrl.origin
  };
};
export {
  loadProjectDataByBuildId,
  loadProjectDataByProjectId,
  parseBuilderUrl
};
