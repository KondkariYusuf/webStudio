import { parseBuilderUrl } from "@webstudio-is/http-client";

const normalizeLocalDevAuthorizationOrigin = (origin: string) => {
  const url = new URL(origin);

  // The checked-in local certificate covers wstd.dev and *.wstd.dev, but not
  // *.vite.wstd.dev. Normalize local Vite hosts so project URLs stay within the
  // certificate SANs during development.
  if (url.hostname === "vite.wstd.dev") {
    url.hostname = "wstd.dev";
  }

  return url.origin;
};

export const getRequestOrigin = (urlStr: string) => {
  const url = new URL(urlStr);

  return url.origin;
};

export const isCanvas = (urlStr: string): boolean => {
  const url = new URL(urlStr);
  const projectId = url.searchParams.get("projectId");

  return projectId !== null;
};

export const isBuilderUrl = (urlStr: string): boolean => {
  const { projectId } = parseBuilderUrl(urlStr);
  return projectId !== undefined;
};

export const getAuthorizationServerOrigin = (urlStr: string): string => {
  const origin = getRequestOrigin(urlStr);
  const { sourceOrigin } = parseBuilderUrl(origin);
  return normalizeLocalDevAuthorizationOrigin(sourceOrigin);
};
