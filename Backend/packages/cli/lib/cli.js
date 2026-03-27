var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _declarations, _dirtyBreakpoints, _a, _selector, _descendantSuffix, _mixinRules, _mixins, _declarations2, _cache, _NestingRule_instances, getDeclarations_fn, _b, _name, _c, _cached, _options, _d, _cssText, _mediaRules, _plainRules, _mixinRules2, _fontFaceRules, _transformValue, _element, _e, _element2, _name2, _f;
import { exit, cwd, chdir, argv } from "node:process";
import { hideBin } from "yargs/helpers";
import { join, dirname, normalize, basename, relative } from "node:path";
import envPaths from "env-paths";
import { z } from "zod";
import { access, constants, writeFile, mkdir, readFile, rm, readdir, cp, rename } from "node:fs/promises";
import { text, isCancel, cancel, log, spinner, confirm, select as select$2 } from "@clack/prompts";
import pc from "picocolors";
import { existsSync, createWriteStream } from "node:fs";
import { pipeline } from "node:stream/promises";
import { pathToFileURL, fileURLToPath } from "node:url";
import pLimit from "p-limit";
import merge from "deepmerge";
import hash from "@emotion/hash";
import "warn-once";
import { parseExpressionAt } from "acorn";
import { simple } from "acorn-walk";
import reservedIdentifiers from "reserved-identifiers";
import { kebabCase, camelCase } from "change-case";
import { parseFragment, defaultTreeAdapter } from "parse5";
import { x as x$2 } from "tinyexec";
import makeCLI from "yargs";
const GLOBAL_CONFIG_FOLDER = envPaths("webstudio").config;
const GLOBAL_CONFIG_FILE_NAME = "webstudio-config.json";
const GLOBAL_CONFIG_FILE = join(
  GLOBAL_CONFIG_FOLDER,
  GLOBAL_CONFIG_FILE_NAME
);
const LOCAL_CONFIG_FILE = ".webstudio/config.json";
const LOCAL_DATA_FILE = ".webstudio/data.json";
const zLocalConfig = z.object({
  projectId: z.string()
});
const jsonToLocalConfig = (json) => {
  return zLocalConfig.parse(json);
};
const zGlobalConfig = z.record(
  z.union([
    z.object({
      // origin mistakenly called host in the past
      host: z.string(),
      token: z.string()
    }),
    z.object({
      origin: z.string(),
      token: z.string()
    })
  ]).transform((value) => {
    if ("host" in value) {
      return {
        origin: value.host,
        token: value.token
      };
    }
    return value;
  })
);
const jsonToGlobalConfig = (json) => {
  return zGlobalConfig.parse(json);
};
const PROJECT_TEMPLATES = [
  {
    value: "docker",
    label: "Docker",
    expand: ["react-router", "react-router-docker"]
  },
  {
    value: "vercel",
    label: "Vercel",
    expand: ["react-router", "react-router-vercel"]
  },
  {
    value: "netlify",
    label: "Netlify",
    expand: ["react-router", "react-router-netlify"]
  },
  {
    value: "ssg",
    label: "Static Site Generation (SSG)"
  },
  {
    value: "ssg-netlify",
    label: "Static Site Generation (SSG) Netlify",
    expand: ["ssg", "ssg-netlify"]
  },
  {
    value: "ssg-vercel",
    label: "Static Site Generation (SSG) Vercel",
    expand: ["ssg", "ssg-vercel"]
  }
];
const INTERNAL_TEMPLATES = [
  {
    value: "cloudflare",
    label: "Cloudflare",
    expand: ["defaults", "cloudflare"]
  },
  {
    value: "cloudflare-new",
    label: "Cloudflare (new)",
    expand: ["react-router", "react-router-cloudflare"]
  }
];
const isFileExists = async (filePath) => {
  try {
    await access(filePath, constants.F_OK);
    return true;
  } catch {
    return false;
  }
};
const createFileIfNotExists = async (filePath, content) => {
  const dir = dirname(filePath);
  await createFolderIfNotExists(dir);
  try {
    await access(filePath, constants.F_OK);
  } catch {
    await writeFile(filePath, content || "", "utf8");
  }
};
const createFolderIfNotExists = async (folderPath) => {
  try {
    await access(folderPath, constants.F_OK);
  } catch {
    await mkdir(folderPath, { recursive: true });
  }
};
const loadJSONFile = async (filePath) => {
  try {
    const content = await readFile(filePath, "utf8");
    return JSON.parse(content);
  } catch (error) {
    return null;
  }
};
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
  var _a2, _b2, _c2;
  const url = new URL(urlStr);
  const fragments = url.host.split(".");
  const re = /^(?<prefix>[a-z-]+)(?<uuid>[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})(-dot-(?<branch>.*))?/;
  const match = fragments[0].match(re);
  const prefix = (_a2 = match == null ? void 0 : match.groups) == null ? void 0 : _a2.prefix;
  const projectId = (_b2 = match == null ? void 0 : match.groups) == null ? void 0 : _b2.uuid;
  const branch = (_c2 = match == null ? void 0 : match.groups) == null ? void 0 : _c2.branch;
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
const parseShareLink = (value) => {
  const url = new URL(value.replaceAll("'", ""));
  const token = url.searchParams.get("authToken");
  let { projectId, sourceOrigin } = parseBuilderUrl(url.href);
  if (projectId === void 0) {
    const segments = url.pathname.split("/").slice(1);
    if (segments.length !== 2 || segments[0] !== "builder") {
      throw Error("Segments not matching");
    }
    projectId = segments[1];
  }
  if (token == null) {
    throw Error("Token is missing");
  }
  return {
    origin: sourceOrigin,
    projectId,
    token
  };
};
const validateShareLink = (value) => {
  if (value.length === 0) {
    return "Share link is required";
  }
  if (URL.canParse(value) === false) {
    return "Share link is invalid";
  }
  try {
    parseShareLink(value);
  } catch {
    return "Share link is invalid";
  }
};
const linkOptions = (yargs) => yargs.option("link", {
  alias: "l",
  type: "string",
  describe: "Link to a webstudio project"
});
const link = async (options) => {
  let shareLink;
  if (options.link) {
    shareLink = options.link;
  } else {
    shareLink = await text({
      message: "Please paste a link from the Share Dialog in the builder",
      validate: validateShareLink
    });
    if (isCancel(shareLink)) {
      cancel("Project linking is cancelled");
      exit(1);
    }
  }
  const { origin, projectId, token } = parseShareLink(shareLink);
  const currentConfig = await readFile(GLOBAL_CONFIG_FILE, "utf-8");
  const currentConfigJson = jsonToGlobalConfig(JSON.parse(currentConfig));
  const newConfig = {
    ...currentConfigJson,
    [projectId]: {
      origin,
      token
    }
  };
  await writeFile(GLOBAL_CONFIG_FILE, JSON.stringify(newConfig, null, 2));
  log.info(`Saved credentials for project ${projectId}.
You can find your config at ${GLOBAL_CONFIG_FILE}`);
  const localConfig = {
    projectId
  };
  await createFileIfNotExists(
    join(cwd(), LOCAL_CONFIG_FILE),
    JSON.stringify(localConfig, null, 2)
  );
  log.step("The project is linked successfully");
};
const syncOptions = (yargs) => yargs.option("buildId", {
  type: "string",
  describe: "[Experimental] Project build id to sync"
}).option("origin", {
  type: "string",
  describe: "[Experimental] Remote origin to sync with"
}).option("authToken", {
  type: "string",
  describe: "[Experimental] Service token"
});
const sync = async (options) => {
  const syncing = spinner();
  let project;
  syncing.start(`Synchronizing project data`);
  if (options.buildId !== void 0 && options.origin !== void 0 && options.authToken !== void 0) {
    syncing.message(`Synchronizing project data from ${options.origin}`);
    project = await loadProjectDataByBuildId({
      buildId: options.buildId,
      seviceToken: options.authToken,
      origin: options.origin
    });
    project.origin = options.origin;
  } else {
    const globalConfigText = await readFile(GLOBAL_CONFIG_FILE, "utf-8");
    const globalConfig = jsonToGlobalConfig(JSON.parse(globalConfigText));
    if (await isFileExists(LOCAL_CONFIG_FILE) === false) {
      syncing.stop(
        `Local config file is not found. Please make sure current directory is a webstudio project`,
        2
      );
      return;
    }
    const localConfigText = await readFile(
      join(cwd(), LOCAL_CONFIG_FILE),
      "utf-8"
    );
    const localConfig = jsonToLocalConfig(JSON.parse(localConfigText));
    const projectConfig = globalConfig[localConfig.projectId];
    if (projectConfig === void 0) {
      syncing.stop(
        `Project config is not found, please run ${pc.dim("webstudio link")}`,
        2
      );
      return;
    }
    const { origin, token } = projectConfig;
    syncing.message(`Synchronizing project data from ${origin}`);
    try {
      project = options.buildId !== void 0 ? await loadProjectDataByBuildId({
        buildId: options.buildId,
        authToken: token,
        origin
      }) : await loadProjectDataByProjectId({
        projectId: localConfig.projectId,
        authToken: token,
        origin
      });
      project.origin = origin;
    } catch (error) {
      syncing.stop(error.message, 2);
      throw error;
    }
  }
  const localBuildFilePath = join(cwd(), LOCAL_DATA_FILE);
  await createFileIfNotExists(localBuildFilePath);
  await writeFile(localBuildFilePath, JSON.stringify(project, null, 2), "utf8");
  syncing.stop("Project data synchronized successfully");
};
var SYSTEM_FONTS = /* @__PURE__ */ new Map([
  [
    "System UI",
    {
      stack: ["system-ui", "sans-serif"],
      description: "System UI fonts are those native to the operating system interface. They are highly legible and easy to read at small sizes, contains many font weights, and is ideal for UI elements."
    }
  ],
  // Modern font stacks
  // https://github.com/system-fonts/modern-font-stacks
  [
    "Transitional",
    {
      stack: ["Charter", "Bitstream Charter", "Sitka Text", "Cambria", "serif"],
      description: "Transitional typefaces are a mix between Old Style and Modern typefaces that was developed during The Enlightenment. One of the most famous examples of a Transitional typeface is Times New Roman, which was developed for the Times of London newspaper."
    }
  ],
  [
    "Old Style",
    {
      stack: [
        "Iowan Old Style",
        "Palatino Linotype",
        "URW Palladio L",
        "P052",
        "serif"
      ],
      description: "Old Style typefaces are characterized by diagonal stress, low contrast between thick and thin strokes, and rounded serifs, and were developed in the Renaissance period. One of the most famous examples of an Old Style typeface is Garamond."
    }
  ],
  [
    "Humanist",
    {
      stack: [
        "Seravek",
        "Gill Sans Nova",
        "Ubuntu",
        "Calibri",
        "DejaVu Sans",
        "source-sans-pro",
        "sans-serif"
      ],
      description: "Humanist typefaces are characterized by their organic, calligraphic forms and low contrast between thick and thin strokes. These typefaces are inspired by the handwriting of the Renaissance period and are often considered to be more legible and easier to read than other sans-serif typefaces."
    }
  ],
  [
    "Geometric Humanist",
    {
      stack: [
        "Avenir",
        "Montserrat",
        "Corbel",
        "URW Gothic",
        "source-sans-pro",
        "sans-serif"
      ],
      description: "Geometric Humanist typefaces are characterized by their clean, geometric forms and uniform stroke widths. These typefaces are often considered to be modern and sleek in appearance, and are often used for headlines and other display purposes. Futura is a famous example of this classification."
    }
  ],
  [
    "Classical Humanist",
    {
      stack: [
        "Optima",
        "Candara",
        "Noto Sans",
        "source-sans-pro",
        "sans-serif"
      ],
      description: "Classical Humanist typefaces are characterized by how the strokes subtly widen as they reach the stroke terminals without ending in a serif. These typefaces are inspired by classical Roman capitals and the stone-carving on Renaissance-period tombstones."
    }
  ],
  [
    "Neo-Grotesque",
    {
      stack: [
        "Inter",
        "Roboto",
        "Helvetica Neue",
        "Arial Nova",
        "Nimbus Sans",
        "Arial",
        "sans-serif"
      ],
      description: "Neo-Grotesque typefaces are a style of sans-serif that was developed in the late 19th and early 20th centuries and is characterized by its clean, geometric forms and uniform stroke widths. One of the most famous examples of a Neo-Grotesque typeface is Helvetica."
    }
  ],
  [
    "Monospace Slab Serif",
    {
      stack: ["Nimbus Mono PS", "Courier New", "monospace"],
      description: "Monospace Slab Serif typefaces are characterized by their fixed-width letters, which have the same width regardless of their shape, and its simple, geometric forms. Used to emulate typewriter output for reports, tabular work and technical documentation."
    }
  ],
  [
    "Monospace Code",
    {
      stack: [
        "ui-monospace",
        "Cascadia Code",
        "Source Code Pro",
        "Menlo",
        "Consolas",
        "DejaVu Sans Mono",
        "monospace"
      ],
      description: "Monospace Code typefaces are specifically designed for use in programming and other technical applications. These typefaces are characterized by their monospaced design, which means that all letters and characters have the same width, and their clear, legible forms."
    }
  ],
  [
    "Industrial",
    {
      stack: [
        "Bahnschrift",
        "DIN Alternate",
        "Franklin Gothic Medium",
        "Nimbus Sans Narrow",
        "sans-serif-condensed",
        "sans-serif"
      ],
      description: "Industrial typefaces originated in the late 19th century and was heavily influenced by the advancements in technology and industry during that time. Industrial typefaces are characterized by their bold, sans-serif letterforms, simple and straightforward appearance, and the use of straight lines and geometric shapes."
    }
  ],
  [
    "Rounded Sans",
    {
      stack: [
        "ui-rounded",
        "Hiragino Maru Gothic ProN",
        "Quicksand",
        "Comfortaa",
        "Manjari",
        "Arial Rounded MT",
        "Arial Rounded MT Bold",
        "Calibri",
        "source-sans-pro",
        "sans-serif"
      ],
      description: "Rounded typefaces are characterized by the rounded curved letterforms and give a softer, friendlier appearance. The rounded edges give the typeface a more organic and playful feel, making it suitable for use in informal or child-friendly designs. The rounded sans-serif style has been popular since the 1950s, and it continues to be widely used in advertising, branding, and other forms of graphic design."
    }
  ],
  [
    "Slab Serif",
    {
      stack: [
        "Rockwell",
        "Rockwell Nova",
        "Roboto Slab",
        "DejaVu Serif",
        "Sitka Small",
        "serif"
      ],
      description: "Slab Serif typefaces are characterized by the presence of thick, block-like serifs on the ends of each letterform. These serifs are usually unbracketed, meaning they do not have any curved or tapered transitions to the main stroke of the letter."
    }
  ],
  [
    "Antique",
    {
      stack: [
        "Superclarendon",
        "Bookman Old Style",
        "URW Bookman",
        "URW Bookman L",
        "Georgia Pro",
        "Georgia",
        "serif"
      ],
      description: "Antique typefaces, also known as Egyptians, are a subset of serif typefaces that were popular in the 19th century. They are characterized by their block-like serifs and thick uniform stroke weight."
    }
  ],
  [
    "Didone",
    {
      stack: [
        "Didot",
        "Bodoni MT",
        "Noto Serif Display",
        "URW Palladio L",
        "P052",
        "Sylfaen",
        "serif"
      ],
      description: "Didone typefaces, also known as Modern typefaces, are characterized by the high contrast between thick and thin strokes, vertical stress, and hairline serifs with no bracketing. The Didone style emerged in the late 18th century and gained popularity during the 19th century."
    }
  ],
  [
    "Handwritten",
    {
      stack: [
        "Segoe Print",
        "Bradley Hand",
        "Chilanka",
        "TSCu_Comic",
        "casual",
        "cursive"
      ],
      description: "Handwritten typefaces are designed to mimic the look and feel of handwriting. Despite the vast array of handwriting styles, this font stack tend to adopt a more informal and everyday style of handwriting."
    }
  ],
  [
    "Arial",
    {
      stack: ["Arial", "Roboto", "sans-serif"],
      description: "A clean, sans-serif font designed for legibility and versatility. Ideal for modern, minimalistic designs or digital content that requires simplicity."
    }
  ],
  [
    "Times New Roman",
    {
      stack: ["Times New Roman", "sans"],
      description: "A classic serif font known for its formal, professional appearance. Best suited for traditional documents, reports, and academic writing."
    }
  ],
  [
    "Courier New",
    {
      stack: ["Courier New", "monospace"],
      description: "A monospaced serif font with uniform spacing, mimicking typewriter text. Perfect for coding, technical documents, or retro-styled designs."
    }
  ],
  // Chineese fonts
  [
    "SimSun",
    {
      stack: ["SimSun", "Songti SC, sans-serif"],
      description: "A traditional serif font designed for Chinese characters, offering clear and readable text. Ideal for formal Chinese documents or multilingual content requiring both Chinese and Latin text."
    }
  ],
  [
    "PingFang SC",
    {
      stack: ["PingFang SC", "Microsoft Ya Hei", "sans-serif"],
      description: "A modern sans-serif font designed for simplified Chinese characters. Sleek and clean, it’s best for digital content and interfaces where modern, streamlined design is needed."
    }
  ]
]);
var DEFAULT_FONT_FALLBACK = "sans-serif";
var FONT_FORMATS = /* @__PURE__ */ new Map([
  ["woff", "woff"],
  ["woff2", "woff2"],
  ["ttf", "truetype"]
]);
Array.from(FONT_FORMATS.keys()).map((format) => `.${format}`).join(", ");
var FONT_STYLES = ["normal", "italic", "oblique"];
var sanitizeCssUrl$1 = (str) => JSON.stringify(str);
var formatFace = (asset, format, url) => {
  var _a2;
  if ("variationAxes" in asset.meta) {
    const { wght, wdth } = ((_a2 = asset.meta) == null ? void 0 : _a2.variationAxes) ?? {};
    return {
      fontFamily: asset.meta.family,
      fontStyle: "normal",
      fontDisplay: "swap",
      src: `url(${sanitizeCssUrl$1(url)}) format("${format}")`,
      fontStretch: wdth ? `${wdth.min}% ${wdth.max}%` : void 0,
      fontWeight: wght ? `${wght.min} ${wght.max}` : void 0
    };
  }
  return {
    fontFamily: asset.meta.family,
    fontStyle: asset.meta.style,
    fontWeight: asset.meta.weight,
    fontDisplay: "swap",
    src: `url(${sanitizeCssUrl$1(url)}) format("${format}")`
  };
};
var getKey = (asset) => {
  if ("variationAxes" in asset.meta) {
    return asset.meta.family + Object.values(asset.meta.variationAxes).join("");
  }
  return asset.meta.family + asset.meta.style + asset.meta.weight;
};
var getFontFaces = (assets, options) => {
  const { assetBaseUrl } = options;
  const faces = /* @__PURE__ */ new Map();
  for (const asset of assets) {
    const url = `${assetBaseUrl}${asset.name}`;
    const assetKey = getKey(asset);
    const face = faces.get(assetKey);
    const format = FONT_FORMATS.get(asset.format);
    if (format === void 0) {
      continue;
    }
    if (face === void 0) {
      const face2 = formatFace(asset, format, url);
      faces.set(assetKey, face2);
      continue;
    }
    face.src += `, url(${sanitizeCssUrl$1(url)}) format("${format}")`;
  }
  return Array.from(faces.values());
};
var FontFormat = z.union([
  z.literal("ttf"),
  z.literal("woff"),
  z.literal("woff2")
]);
var AxisName = z.enum([
  "wght",
  "wdth",
  "slnt",
  "opsz",
  "ital",
  "GRAD",
  "XTRA",
  "XOPQ",
  "YOPQ",
  "YTLC",
  "YTUC",
  "YTAS",
  "YTDE",
  "YTFI"
]);
var VariationAxes = z.record(
  AxisName,
  z.object({
    name: z.string(),
    min: z.number(),
    default: z.number(),
    max: z.number()
  })
);
var FontMetaStatic = z.object({
  family: z.string(),
  style: z.enum(FONT_STYLES),
  weight: z.number()
});
var FontMetaVariable = z.object({
  family: z.string(),
  variationAxes: VariationAxes
});
var FontMeta = z.union([FontMetaStatic, FontMetaVariable]);
var fontWeights = {
  "100": {
    label: "Thin",
    names: ["thin", "hairline"]
  },
  "200": {
    label: "Extra Light",
    names: ["extra light", "extralight", "ultra light", "ultralight"]
  },
  "300": {
    label: "Light",
    names: ["light"]
  },
  "400": {
    label: "Normal",
    names: ["normal", "regular"]
  },
  "500": {
    label: "Medium",
    names: ["medium"]
  },
  "600": {
    label: "Semi Bold",
    names: ["semi bold", "semibold", "demi bold", "demibold"]
  },
  "700": {
    label: "Bold",
    names: ["bold", "bold"]
  },
  "800": {
    label: "Extra Bold",
    names: ["extra bold", "extrabold", "ultra bold", "ultrabold"]
  },
  "900": {
    label: "Black",
    names: ["black", "heavy"]
  }
};
new Map(
  Object.keys(fontWeights).map((weight) => {
    const weightData = fontWeights[weight];
    return weightData.names.map((name2) => [name2, weight]);
  }).flat()
);
var prefixStyles = (styleMap) => {
  const newStyleMap = /* @__PURE__ */ new Map();
  for (const [property, value] of styleMap) {
    if (property === "background-clip") {
      newStyleMap.set("-webkit-background-clip", value);
    }
    if (property === "user-select") {
      newStyleMap.set("-webkit-user-select", value);
    }
    if (property === "text-size-adjust") {
      newStyleMap.set("-webkit-text-size-adjust", value);
    }
    if (property === "backdrop-filter") {
      newStyleMap.set("-webkit-backdrop-filter", value);
    }
    if (property === "view-timeline-name" || property === "scroll-timeline-name" || property === "view-timeline-inset") {
      newStyleMap.set(`--${property}`, value);
    }
    newStyleMap.set(property, value);
  }
  return newStyleMap;
};
var cssWideKeywords = /* @__PURE__ */ new Set([
  "initial",
  "inherit",
  "unset",
  "revert",
  "revert-layer"
]);
var fallbackTransform = (styleValue) => {
  var _a2;
  if (styleValue.type !== "fontFamily") {
    return;
  }
  let { value } = styleValue;
  if (value.length === 0) {
    value = [DEFAULT_FONT_FALLBACK];
  }
  if (value.length === 1) {
    const stack = (_a2 = SYSTEM_FONTS.get(value[0])) == null ? void 0 : _a2.stack;
    value = stack ?? [value[0], DEFAULT_FONT_FALLBACK];
  }
  return {
    type: "fontFamily",
    value: Array.from(new Set(value))
  };
};
var sanitizeCssUrl = (str) => JSON.stringify(str);
var toValue = (styleValue, transformValue) => {
  if (styleValue === void 0) {
    return "";
  }
  const transformedValue = (transformValue == null ? void 0 : transformValue(styleValue)) ?? fallbackTransform(styleValue);
  const value = transformedValue ?? styleValue;
  if (value.type === "unit") {
    return value.value + (value.unit === "number" ? "" : value.unit);
  }
  if (value.type === "fontFamily") {
    const families = [];
    for (const family of value.value) {
      families.push(family.includes(" ") ? `"${family}"` : family);
    }
    return families.join(", ");
  }
  if (value.type === "var") {
    if (value.hidden) {
      return "";
    }
    let fallbacksString = "";
    if (value.fallback) {
      fallbacksString = `, ${toValue(value.fallback, transformValue)}`;
    }
    return `var(--${value.value}${fallbacksString})`;
  }
  if (value.type === "keyword") {
    if (value.hidden === true) {
      return "";
    }
    return value.value;
  }
  if (value.type === "invalid") {
    return value.value;
  }
  if (value.type === "unset") {
    return value.value;
  }
  if (value.type === "rgb") {
    return `rgb(${value.r} ${value.g} ${value.b} / ${value.alpha})`;
  }
  if (value.type === "color") {
    let [c1, c2, c3] = value.components;
    const alpha = value.alpha;
    switch (value.colorSpace) {
      case "srgb": {
        c1 = Math.round(c1 * 255);
        c2 = Math.round(c2 * 255);
        c3 = Math.round(c3 * 255);
        return `rgb(${c1} ${c2} ${c3} / ${alpha})`;
      }
      case "hsl":
        return `hsl(${c1} ${c2}% ${c3}% / ${alpha})`;
      case "hwb":
        return `hwb(${c1} ${c2}% ${c3}% / ${alpha})`;
      case "lab":
        return `lab(${c1}% ${c2} ${c3} / ${alpha})`;
      case "lch":
        return `lch(${c1}% ${c2} ${c3} / ${alpha})`;
      case "oklab":
        return `oklab(${c1} ${c2} ${c3} / ${alpha})`;
      case "oklch":
        return `oklch(${c1} ${c2} ${c3} / ${alpha})`;
      case "p3":
      case "srgb-linear":
      case "a98rgb":
      case "prophoto":
      case "rec2020":
      case "xyz-d65":
      case "xyz-d50":
      default:
        return `color(${value.colorSpace} ${c1} ${c2} ${c3} / ${alpha})`;
    }
  }
  if (value.type === "image") {
    if (value.hidden || value.value.type !== "url") {
      return "none";
    }
    return `url(${sanitizeCssUrl(value.value.url)})`;
  }
  if (value.type === "unparsed") {
    if (value.hidden === true) {
      return "none";
    }
    return value.value;
  }
  if (value.type === "layers") {
    const valueString = value.value.filter((layer) => layer.hidden !== true).map((layer) => toValue(layer, transformValue)).join(", ");
    return valueString === "" ? "none" : valueString;
  }
  if (value.type === "tuple") {
    if (value.hidden === true) {
      return "none";
    }
    return value.value.filter((value2) => value2.hidden !== true).map((value2) => toValue(value2, transformValue)).join(" ");
  }
  if (value.type === "shadow") {
    let shadow = `${toValue(value.offsetX)} ${toValue(value.offsetY)}`;
    if (value.blur) {
      shadow += ` ${toValue(value.blur)}`;
    }
    if (value.spread) {
      shadow += ` ${toValue(value.spread)}`;
    }
    if (value.color) {
      shadow += ` ${toValue(value.color)}`;
    }
    if (value.position === "inset") {
      shadow += ` inset`;
    }
    return shadow;
  }
  if (value.type === "function") {
    if (value.hidden === true) {
      return "";
    }
    return `${value.name}(${toValue(value.args, transformValue)})`;
  }
  if (value.type === "guaranteedInvalid") {
    return "";
  }
  return "";
};
var isLonghandValue = (value) => {
  if (value === void 0) {
    return false;
  }
  if (value.type === "keyword" && cssWideKeywords.has(value.value)) {
    return false;
  }
  if (value.type === "var") {
    const fallback = value.fallback;
    if ((fallback == null ? void 0 : fallback.type) === "keyword" && cssWideKeywords.has(fallback.value)) {
      return false;
    }
  }
  return true;
};
var mergeBorder = (styleMap, base) => {
  const width = styleMap.get(`${base}-width`);
  const style = styleMap.get(`${base}-style`);
  const color = styleMap.get(`${base}-color`);
  if (isLonghandValue(width) && isLonghandValue(style) && isLonghandValue(color)) {
    styleMap.delete(`${base}-width`);
    styleMap.delete(`${base}-style`);
    styleMap.delete(`${base}-color`);
    styleMap.set(base, { type: "tuple", value: [width, style, color] });
  }
};
var mergeBox = (styleMap, base) => {
  const topValue = styleMap.get(`${base}-top`);
  const top = toValue(topValue);
  const right = toValue(styleMap.get(`${base}-right`));
  const bottom = toValue(styleMap.get(`${base}-bottom`));
  const left = toValue(styleMap.get(`${base}-left`));
  if (isLonghandValue(topValue) && top === right && top === bottom && top === left) {
    styleMap.delete(`${base}-top`);
    styleMap.delete(`${base}-right`);
    styleMap.delete(`${base}-bottom`);
    styleMap.delete(`${base}-left`);
    styleMap.set(base, topValue);
  }
};
var mergeWhiteSpaceAndTextWrap = (styleMap) => {
  const collapseValue = styleMap.get("white-space-collapse");
  const collapse = toValue(collapseValue);
  const modeValue = styleMap.get("text-wrap-mode");
  const mode = toValue(modeValue);
  const styleValue = styleMap.get("text-wrap-style");
  const style = toValue(styleValue);
  styleMap.delete("text-wrap-mode");
  styleMap.delete("text-wrap-style");
  if (collapse === "collapse" || collapse === "initial" || mode === "wrap" || mode === "initial") {
    styleMap.set("white-space", { type: "keyword", value: "normal" });
  }
  if (mode === "nowrap") {
    styleMap.set("white-space", { type: "keyword", value: "nowrap" });
  }
  if (collapse === "preserve") {
    if (mode === "nowrap") {
      styleMap.set("white-space", { type: "keyword", value: "pre" });
    } else {
      styleMap.set("white-space", { type: "keyword", value: "pre-wrap" });
    }
  }
  if (collapse === "preserve-breaks") {
    styleMap.set("white-space", { type: "keyword", value: "pre-line" });
  }
  if (collapse === "break-spaces") {
    styleMap.set("white-space", { type: "keyword", value: "break-spaces" });
  }
  if (style === "auto") {
    styleMap.set("text-wrap", modeValue ?? { type: "keyword", value: "wrap" });
  }
  if (style === "balance" || style === "stable" || style === "pretty") {
    styleMap.set("text-wrap", { type: "keyword", value: style });
  }
  const textWrap = ((styleValue == null ? void 0 : styleValue.type) !== "keyword" ? styleValue : void 0) ?? ((modeValue == null ? void 0 : modeValue.type) !== "keyword" ? modeValue : void 0);
  if (textWrap) {
    styleMap.set("text-wrap", textWrap);
  }
  if (collapseValue) {
    styleMap.delete("white-space-collapse");
    styleMap.set("white-space-collapse", collapseValue);
  }
};
var mergeBackgroundPosition = (styleMap) => {
  const x2 = styleMap.get("background-position-x");
  const y2 = styleMap.get("background-position-y");
  if ((x2 == null ? void 0 : x2.type) === "layers" && (y2 == null ? void 0 : y2.type) === "layers" && x2.value.length === y2.value.length) {
    const position = x2.value.map((xValue, index) => {
      const yValue = y2.value[index];
      return {
        type: "tuple",
        value: [xValue, yValue]
      };
    });
    styleMap.delete("background-position-x");
    styleMap.delete("background-position-y");
    styleMap.set("background-position", {
      type: "layers",
      value: position
    });
  }
};
var mergeStyles = (styleMap) => {
  const newStyle = new Map(styleMap);
  mergeBorder(newStyle, "border-top");
  mergeBorder(newStyle, "border-right");
  mergeBorder(newStyle, "border-bottom");
  mergeBorder(newStyle, "border-left");
  mergeBorder(newStyle, "border");
  mergeBorder(newStyle, "outline");
  mergeBox(newStyle, "border");
  mergeBox(newStyle, "margin");
  mergeBox(newStyle, "padding");
  mergeWhiteSpaceAndTextWrap(newStyle);
  mergeBackgroundPosition(newStyle);
  return newStyle;
};
var hyphenateProperty = (property) => property.replace(
  /[A-Z]/g,
  (match) => "-" + match.toLowerCase()
);
var mapGroupBy = (array, getKey2) => {
  const groups = /* @__PURE__ */ new Map();
  for (const item of array) {
    const key = getKey2(item);
    let group = groups.get(key);
    if (group === void 0) {
      group = [];
      groups.set(key, group);
    }
    group.push(item);
  }
  return groups;
};
var mergeDeclarations = (declarations) => {
  const newDeclarations = [];
  const groups = mapGroupBy(
    declarations,
    (declaration) => declaration.breakpoint + declaration.selector
  );
  for (const groupDeclarations of groups.values()) {
    const { breakpoint, selector } = groupDeclarations[0];
    const merged = mergeStyles(
      new Map(
        groupDeclarations.map((item) => [item.property, item.value])
      )
    );
    for (const [property, value] of merged) {
      newDeclarations.push({
        breakpoint,
        selector,
        property,
        value
      });
    }
  }
  return newDeclarations;
};
var generateStyleMap = (style, {
  indent = 0,
  transformValue
} = {}) => {
  const spaces = " ".repeat(indent);
  let lines = "";
  for (const [property, value] of style) {
    const propertyString = hyphenateProperty(property);
    const valueString = toValue(value, transformValue);
    const line = `${spaces}${propertyString}: ${valueString}`;
    lines += lines === "" ? line : `;
${line}`;
  }
  return lines;
};
var normalizeDeclaration = (declaration) => ({
  ...declaration,
  property: hyphenateProperty(declaration.property)
});
var getDeclarationKey = (declaraionKey) => {
  const { breakpoint, selector, property } = declaraionKey;
  return `${breakpoint}:${selector}:${property}`;
};
var MixinRule = (_a = class {
  constructor() {
    // use map to avoid duplicated properties
    __privateAdd(this, _declarations, /* @__PURE__ */ new Map());
    __privateAdd(this, _dirtyBreakpoints, /* @__PURE__ */ new Set());
  }
  /*
   * check if breakpoint was updated
   */
  isDirtyBreakpoint(breakpoint) {
    return __privateGet(this, _dirtyBreakpoints).has(breakpoint);
  }
  /**
   * reset breakpoints invalidation
   */
  clearBreakpoints() {
    __privateGet(this, _dirtyBreakpoints).clear();
  }
  setDeclaration(declaration) {
    declaration = normalizeDeclaration(declaration);
    __privateGet(this, _declarations).set(getDeclarationKey(declaration), declaration);
    __privateGet(this, _dirtyBreakpoints).add(declaration.breakpoint);
  }
  deleteDeclaration(declaration) {
    declaration = normalizeDeclaration(declaration);
    __privateGet(this, _declarations).delete(getDeclarationKey(declaration));
    __privateGet(this, _dirtyBreakpoints).add(declaration.breakpoint);
  }
  getDeclarations() {
    return __privateGet(this, _declarations).values();
  }
}, _declarations = new WeakMap(), _dirtyBreakpoints = new WeakMap(), _a);
var NestingRule = (_b = class {
  constructor(mixinRules, selector, descendantSuffix) {
    __privateAdd(this, _NestingRule_instances);
    __privateAdd(this, _selector);
    __privateAdd(this, _descendantSuffix);
    __privateAdd(this, _mixinRules, /* @__PURE__ */ new Map());
    __privateAdd(this, _mixins, /* @__PURE__ */ new Set());
    // use map to avoid duplicated properties
    __privateAdd(this, _declarations2, /* @__PURE__ */ new Map());
    // cached generated rule by breakpoint
    __privateAdd(this, _cache, /* @__PURE__ */ new Map());
    __privateSet(this, _selector, selector);
    __privateSet(this, _descendantSuffix, descendantSuffix);
    __privateSet(this, _mixinRules, mixinRules);
  }
  getSelector() {
    return __privateGet(this, _selector);
  }
  setSelector(selector) {
    __privateSet(this, _selector, selector);
    __privateGet(this, _cache).clear();
  }
  getDescendantSuffix() {
    return __privateGet(this, _descendantSuffix);
  }
  addMixin(mixin) {
    __privateGet(this, _mixins).add(mixin);
    __privateGet(this, _cache).clear();
  }
  applyMixins(mixins) {
    __privateSet(this, _mixins, new Set(mixins));
    __privateGet(this, _cache).clear();
  }
  setDeclaration(declaration) {
    declaration = normalizeDeclaration(declaration);
    __privateGet(this, _declarations2).set(getDeclarationKey(declaration), declaration);
    __privateGet(this, _cache).delete(declaration.breakpoint);
  }
  deleteDeclaration(declaration) {
    declaration = normalizeDeclaration(declaration);
    __privateGet(this, _declarations2).delete(getDeclarationKey(declaration));
    __privateGet(this, _cache).delete(declaration.breakpoint);
  }
  getMergedDeclarations() {
    return mergeDeclarations(__privateMethod(this, _NestingRule_instances, getDeclarations_fn).call(this));
  }
  toString({
    breakpoint,
    indent = 0,
    transformValue
  }) {
    for (const mixin of __privateGet(this, _mixins)) {
      const rule = __privateGet(this, _mixinRules).get(mixin);
      if (rule == null ? void 0 : rule.isDirtyBreakpoint(breakpoint)) {
        __privateGet(this, _cache).delete(breakpoint);
      }
    }
    const cached = __privateGet(this, _cache).get(breakpoint);
    if (cached && cached.indent === indent && cached.transformValue === transformValue) {
      return cached.generated;
    }
    const styleBySelector = /* @__PURE__ */ new Map();
    for (const declaration of this.getMergedDeclarations()) {
      if (declaration.breakpoint !== breakpoint) {
        continue;
      }
      let nestedSelector = declaration.selector;
      if (nestedSelector === ":local-link") {
        nestedSelector = "[aria-current=page]";
      }
      const selector = __privateGet(this, _selector) + __privateGet(this, _descendantSuffix) + nestedSelector;
      let style = styleBySelector.get(selector);
      if (style === void 0) {
        style = /* @__PURE__ */ new Map();
        styleBySelector.set(selector, style);
      }
      style.set(declaration.property, declaration.value);
    }
    const spaces = " ".repeat(indent);
    const generated = Array.from(styleBySelector).sort(
      ([leftSelector], [rightSelector]) => leftSelector.localeCompare(rightSelector)
    ).map(([selector, style]) => {
      const content = generateStyleMap(prefixStyles(style), {
        indent: indent + 2,
        transformValue
      });
      return `${spaces}${selector} {
${content}
${spaces}}
`;
    }).join("").trimEnd();
    __privateGet(this, _cache).set(breakpoint, { generated, indent, transformValue });
    return generated;
  }
}, _selector = new WeakMap(), _descendantSuffix = new WeakMap(), _mixinRules = new WeakMap(), _mixins = new WeakMap(), _declarations2 = new WeakMap(), _cache = new WeakMap(), _NestingRule_instances = new WeakSet(), getDeclarations_fn = function() {
  const declarations = /* @__PURE__ */ new Map();
  for (const mixin of __privateGet(this, _mixins)) {
    const rule = __privateGet(this, _mixinRules).get(mixin);
    if (rule === void 0) {
      continue;
    }
    for (const declaration of rule.getDeclarations()) {
      declarations.set(getDeclarationKey(declaration), declaration);
    }
  }
  for (const declaration of __privateGet(this, _declarations2).values()) {
    declarations.set(getDeclarationKey(declaration), declaration);
  }
  return declarations.values();
}, _b);
var MediaRule = (_c = class {
  constructor(name2, options = {}) {
    __privateAdd(this, _name);
    __privateSet(this, _name, name2);
    this.options = options;
    this.rules = /* @__PURE__ */ new Map();
  }
  insertRule(rule) {
    this.rules.set(rule.cssText, rule);
    return rule;
  }
  get cssText() {
    return this.toString();
  }
  toString() {
    return this.generateRule({ nestingRules: [] });
  }
  generateRule({
    nestingRules,
    transformValue
  }) {
    if (this.rules.size === 0 && nestingRules.length === 0) {
      return "";
    }
    const rules = [];
    for (const rule of this.rules.values()) {
      rules.push(rule.toString());
    }
    for (const rule of nestingRules) {
      const generatedRule = rule.toString({
        breakpoint: __privateGet(this, _name),
        indent: 2,
        transformValue
      });
      if (generatedRule !== "") {
        rules.push(generatedRule);
      }
    }
    if (rules.length === 0) {
      return "";
    }
    let conditionText = "";
    const { minWidth, maxWidth, condition, mediaType = "all" } = this.options;
    if (condition !== void 0) {
      conditionText = ` and (${condition})`;
    } else {
      if (minWidth !== void 0) {
        conditionText = ` and (min-width: ${minWidth}px)`;
      }
      if (maxWidth !== void 0) {
        conditionText += ` and (max-width: ${maxWidth}px)`;
      }
    }
    return `@media ${mediaType}${conditionText} {
${rules.join("\n")}
}`;
  }
}, _name = new WeakMap(), _c);
var PlaintextRule = class {
  constructor(cssText) {
    this.cssText = cssText;
  }
  toString() {
    return this.cssText;
  }
};
var FontFaceRule = (_d = class {
  constructor(options) {
    __privateAdd(this, _cached);
    __privateAdd(this, _options);
    __privateSet(this, _options, options);
  }
  get cssText() {
    return this.toString();
  }
  toString() {
    if (__privateGet(this, _cached)) {
      return __privateGet(this, _cached);
    }
    const decls = [];
    const { fontFamily, fontStyle, fontWeight, fontDisplay, src } = __privateGet(this, _options);
    const value = toValue(
      { type: "fontFamily", value: [fontFamily] },
      // Avoids adding a fallback automatically which needs to happen for font family in general but not for font face.
      (value2) => value2
    );
    decls.push(`font-family: ${value}`);
    decls.push(`font-style: ${fontStyle}`);
    decls.push(`font-weight: ${fontWeight}`);
    decls.push(`font-display: ${fontDisplay}`);
    decls.push(`src: ${src}`);
    __privateSet(this, _cached, `@font-face {
  ${decls.join("; ")};
}`);
    return __privateGet(this, _cached);
  }
}, _cached = new WeakMap(), _options = new WeakMap(), _d);
var isSimulatedCondition = (options) => options.mediaType !== void 0 && options.condition === void 0 && options.minWidth === void 0 && options.maxWidth === void 0;
var isCondition = (options) => options.condition !== void 0 || isSimulatedCondition(options);
var compareMedia = (optionA, optionB) => {
  const aIsCondition = isCondition(optionA);
  const bIsCondition = isCondition(optionB);
  if (aIsCondition && bIsCondition) {
    return (optionA.condition ?? "").localeCompare(optionB.condition ?? "");
  }
  if (aIsCondition) {
    if (optionB.minWidth === void 0 && optionB.maxWidth === void 0) {
      return 1;
    }
    return -1;
  }
  if (bIsCondition) {
    if (optionA.minWidth === void 0 && optionA.maxWidth === void 0) {
      return -1;
    }
    return 1;
  }
  if (optionA.minWidth === void 0 && optionA.maxWidth === void 0) {
    return -1;
  }
  if (optionB.minWidth === void 0 && optionB.maxWidth === void 0) {
    return 1;
  }
  if (optionA.minWidth !== void 0 && optionB.minWidth !== void 0) {
    return optionA.minWidth - optionB.minWidth;
  }
  if (optionA.maxWidth !== void 0 && optionB.maxWidth !== void 0) {
    return optionB.maxWidth - optionA.maxWidth;
  }
  return "minWidth" in optionA ? 1 : -1;
};
var StyleSheet = (_e = class {
  constructor(element) {
    __privateAdd(this, _cssText);
    __privateAdd(this, _mediaRules);
    __privateAdd(this, _plainRules);
    __privateAdd(this, _mixinRules2);
    __privateAdd(this, _fontFaceRules);
    __privateAdd(this, _transformValue);
    __privateAdd(this, _element);
    __privateSet(this, _cssText, "");
    __privateSet(this, _mediaRules, /* @__PURE__ */ new Map());
    __privateSet(this, _plainRules, /* @__PURE__ */ new Map());
    __privateSet(this, _mixinRules2, /* @__PURE__ */ new Map());
    this.nestingRules = /* @__PURE__ */ new Map();
    __privateSet(this, _fontFaceRules, []);
    __privateSet(this, _element, element);
  }
  setTransformer(transformValue) {
    __privateSet(this, _transformValue, transformValue);
  }
  addMediaRule(id, options) {
    let mediaRule = __privateGet(this, _mediaRules).get(id);
    if (mediaRule === void 0) {
      mediaRule = new MediaRule(id, options);
      __privateGet(this, _mediaRules).set(id, mediaRule);
      return mediaRule;
    }
    if (options) {
      mediaRule.options = options;
    }
    if (mediaRule === void 0) {
      throw new Error("No media rule found");
    }
    return mediaRule;
  }
  addPlaintextRule(cssText) {
    const rule = __privateGet(this, _plainRules).get(cssText);
    if (rule !== void 0) {
      return rule;
    }
    return __privateGet(this, _plainRules).set(cssText, new PlaintextRule(cssText));
  }
  addMixinRule(name2) {
    let rule = __privateGet(this, _mixinRules2).get(name2);
    if (rule === void 0) {
      rule = new MixinRule();
      __privateGet(this, _mixinRules2).set(name2, rule);
    }
    return rule;
  }
  addNestingRule(selector, descendantSuffix = "") {
    const key = selector + descendantSuffix;
    let rule = this.nestingRules.get(key);
    if (rule === void 0) {
      rule = new NestingRule(__privateGet(this, _mixinRules2), selector, descendantSuffix);
      this.nestingRules.set(key, rule);
    }
    return rule;
  }
  addFontFaceRule(options) {
    return __privateGet(this, _fontFaceRules).push(new FontFaceRule(options));
  }
  generateWith({
    nestingRules,
    transformValue
  }) {
    const css = [];
    css.push(...__privateGet(this, _fontFaceRules).map((rule) => rule.cssText));
    for (const plaintextRule of __privateGet(this, _plainRules).values()) {
      css.push(plaintextRule.cssText);
    }
    const sortedMediaRules = Array.from(__privateGet(this, _mediaRules).values()).sort(
      (ruleA, ruleB) => compareMedia(ruleA.options, ruleB.options)
    );
    for (const mediaRule of sortedMediaRules) {
      const cssText = mediaRule.generateRule({
        nestingRules,
        transformValue
      });
      if (cssText !== "") {
        css.push(cssText);
      }
    }
    for (const rule of __privateGet(this, _mixinRules2).values()) {
      rule.clearBreakpoints();
    }
    __privateSet(this, _cssText, css.join("\n"));
    return __privateGet(this, _cssText);
  }
  get cssText() {
    return this.generateWith({
      nestingRules: Array.from(this.nestingRules.values()),
      transformValue: __privateGet(this, _transformValue)
    });
  }
  clear() {
    __privateGet(this, _mediaRules).clear();
    __privateGet(this, _mixinRules2).clear();
    this.nestingRules.clear();
    __privateGet(this, _plainRules).clear();
    __privateSet(this, _fontFaceRules, []);
  }
  render() {
    __privateGet(this, _element).mount();
    __privateGet(this, _element).render(this.cssText);
  }
  unmount() {
    __privateGet(this, _element).unmount();
  }
  setAttribute(name2, value) {
    __privateGet(this, _element).setAttribute(name2, value);
  }
  getAttribute(name2) {
    return __privateGet(this, _element).getAttribute(name2);
  }
}, _cssText = new WeakMap(), _mediaRules = new WeakMap(), _plainRules = new WeakMap(), _mixinRules2 = new WeakMap(), _fontFaceRules = new WeakMap(), _transformValue = new WeakMap(), _element = new WeakMap(), _e);
var StyleSheetRegular = class extends StyleSheet {
};
var StyleElement = (_f = class {
  constructor(name2 = "") {
    __privateAdd(this, _element2);
    __privateAdd(this, _name2);
    __privateSet(this, _name2, name2);
  }
  get isMounted() {
    var _a2;
    return ((_a2 = __privateGet(this, _element2)) == null ? void 0 : _a2.parentElement) != null;
  }
  mount() {
    if (this.isMounted === false) {
      __privateSet(this, _element2, document.createElement("style"));
      __privateGet(this, _element2).setAttribute("data-webstudio", __privateGet(this, _name2));
      document.head.appendChild(__privateGet(this, _element2));
    }
  }
  unmount() {
    var _a2, _b2;
    if (this.isMounted) {
      (_b2 = (_a2 = __privateGet(this, _element2)) == null ? void 0 : _a2.parentElement) == null ? void 0 : _b2.removeChild(__privateGet(this, _element2));
      __privateSet(this, _element2, void 0);
    }
  }
  render(cssText) {
    if (__privateGet(this, _element2)) {
      __privateGet(this, _element2).textContent = cssText;
    }
  }
  setAttribute(name2, value) {
    if (__privateGet(this, _element2)) {
      __privateGet(this, _element2).setAttribute(name2, value);
    }
  }
  getAttribute(name2) {
    if (__privateGet(this, _element2)) {
      return __privateGet(this, _element2).getAttribute(name2);
    }
  }
}, _element2 = new WeakMap(), _name2 = new WeakMap(), _f);
var createRegularStyleSheet = (options) => {
  const element = (options == null ? void 0 : options.element) ?? new StyleElement(options == null ? void 0 : options.name);
  return new StyleSheetRegular(element);
};
var generateAtomic = (sheet, options) => {
  const { getKey: getKey2, transformValue } = options;
  const atomicRules = /* @__PURE__ */ new Map();
  const classes = options.classes ?? /* @__PURE__ */ new Map();
  for (const rule of sheet.nestingRules.values()) {
    const descendantSuffix = rule.getDescendantSuffix();
    const groupKey = getKey2(rule);
    if (groupKey === void 0) {
      atomicRules.set(rule.getSelector(), rule);
      continue;
    }
    let classList = classes.get(groupKey);
    if (classList === void 0) {
      classList = [];
      classes.set(groupKey, classList);
    }
    for (const declaration of rule.getMergedDeclarations()) {
      const atomicHash = hash(
        descendantSuffix + declaration.breakpoint + declaration.selector + declaration.property + toValue(declaration.value, transformValue)
      );
      const className = `c${atomicHash}`;
      let atomicRule = atomicRules.get(atomicHash);
      if (atomicRule === void 0) {
        atomicRule = new NestingRule(
          /* @__PURE__ */ new Map(),
          `.${className}`,
          descendantSuffix
        );
        atomicRule.setDeclaration(declaration);
        atomicRules.set(atomicHash, atomicRule);
      }
      classList.push(className);
    }
  }
  const cssText = sheet.generateWith({
    nestingRules: Array.from(atomicRules.values()),
    transformValue
  });
  return { cssText, classes };
};
var Unit = z.string();
var UnitValue = z.object({
  type: z.literal("unit"),
  unit: Unit,
  value: z.number(),
  hidden: z.boolean().optional()
});
var KeywordValue = z.object({
  type: z.literal("keyword"),
  // @todo use exact type
  value: z.string(),
  hidden: z.boolean().optional()
});
var UnparsedValue = z.object({
  type: z.literal("unparsed"),
  value: z.string(),
  // For the builder we want to be able to hide background-image
  hidden: z.boolean().optional()
});
var FontFamilyValue = z.object({
  type: z.literal("fontFamily"),
  value: z.array(z.string()),
  hidden: z.boolean().optional()
});
var RgbValue = z.object({
  type: z.literal("rgb"),
  r: z.number(),
  g: z.number(),
  b: z.number(),
  alpha: z.number(),
  hidden: z.boolean().optional()
});
var ColorValue = z.object({
  type: z.literal("color"),
  // all these color spaces are defined by design tokens specification
  colorSpace: z.union([
    z.literal("srgb"),
    z.literal("p3"),
    z.literal("srgb-linear"),
    z.literal("hsl"),
    z.literal("hwb"),
    z.literal("lab"),
    z.literal("lch"),
    z.literal("oklab"),
    z.literal("oklch"),
    z.literal("a98rgb"),
    z.literal("prophoto"),
    z.literal("rec2020"),
    z.literal("xyz-d65"),
    z.literal("xyz-d50")
  ]),
  components: z.tuple([z.number(), z.number(), z.number()]),
  alpha: z.number(),
  hidden: z.boolean().optional()
});
var FunctionValue = z.object({
  type: z.literal("function"),
  name: z.string(),
  args: z.lazy(() => StyleValue),
  hidden: z.boolean().optional()
});
var ImageValue = z.object({
  type: z.literal("image"),
  value: z.union([
    z.object({ type: z.literal("asset"), value: z.string() }),
    // url is not stored in db and only used by css-engine transformValue
    // to prepare image value for rendering
    z.object({ type: z.literal("url"), url: z.string() })
  ]),
  // For the builder we want to be able to hide images
  hidden: z.boolean().optional()
});
var GuaranteedInvalidValue = z.object({
  type: z.literal("guaranteedInvalid"),
  hidden: z.boolean().optional()
});
var InvalidValue = z.object({
  type: z.literal("invalid"),
  value: z.string(),
  hidden: z.boolean().optional()
});
var UnsetValue = z.object({
  type: z.literal("unset"),
  value: z.literal(""),
  hidden: z.boolean().optional()
});
var VarFallback = z.union([
  UnparsedValue,
  KeywordValue,
  UnitValue,
  ColorValue,
  RgbValue
]);
var VarValue = z.object({
  type: z.literal("var"),
  value: z.string(),
  fallback: VarFallback.optional(),
  hidden: z.boolean().optional()
});
var TupleValueItem = z.union([
  UnitValue,
  KeywordValue,
  UnparsedValue,
  ImageValue,
  ColorValue,
  RgbValue,
  FunctionValue,
  VarValue
]);
var TupleValue = z.object({
  type: z.literal("tuple"),
  value: z.array(TupleValueItem),
  hidden: z.boolean().optional()
});
var ShadowValue = z.object({
  type: z.literal("shadow"),
  hidden: z.boolean().optional(),
  position: z.union([z.literal("inset"), z.literal("outset")]),
  offsetX: z.union([UnitValue, VarValue]),
  offsetY: z.union([UnitValue, VarValue]),
  blur: z.union([UnitValue, VarValue]).optional(),
  spread: z.union([UnitValue, VarValue]).optional(),
  color: z.union([ColorValue, RgbValue, KeywordValue, VarValue]).optional()
});
var LayerValueItem = z.union([
  UnitValue,
  KeywordValue,
  UnparsedValue,
  ImageValue,
  TupleValue,
  ShadowValue,
  ColorValue,
  RgbValue,
  InvalidValue,
  FunctionValue,
  VarValue
]);
var LayersValue = z.object({
  type: z.literal("layers"),
  value: z.array(LayerValueItem),
  hidden: z.boolean().optional()
});
var StyleValue = z.union([
  ImageValue,
  LayersValue,
  UnitValue,
  KeywordValue,
  FontFamilyValue,
  ColorValue,
  RgbValue,
  UnparsedValue,
  TupleValue,
  FunctionValue,
  GuaranteedInvalidValue,
  InvalidValue,
  UnsetValue,
  VarValue,
  ShadowValue
]);
var AccordionIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width="100%" height="100%" style="display: block;"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.056 8H14.5V4.101a1.3 1.3 0 0 0-1.3-1.299H2.8a1.3 1.3 0 0 0-1.3 1.3V8H13.056ZM13.056 13.198h.145a1.3 1.3 0 0 0 1.299-1.3V8h-13v3.899a1.3 1.3 0 0 0 1.3 1.299h10.256Z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m10.026 4.913.975.976.976-.976M10.026 10.111l.975.976.976-.976"/></svg>`;
var AddTemplateInstanceIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width="100%" height="100%" style="display: block;"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 2H3.333A1.333 1.333 0 0 0 2 3.333V4.5M14 12.667c0 .021 0 .042-.002.063M11.5 14h1.167a1.333 1.333 0 0 0 1.331-1.27m0 0V11.5M2 11.5v1.167A1.333 1.333 0 0 0 3.333 14H4.5M7 14h2M2 7v2M8.461 4.77H14M11.23 2v5.538"/></svg>`;
var AnimationGroupIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width="100%" height="100%" style="display: block;"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 8.3C6.3 7.7 7.8 8 9.3 11c.3-1.8 1.2-4.5 2.1-6M4.208 1.5H2.944A1.444 1.444 0 0 0 1.5 2.944v1.264m13 0V2.944A1.444 1.444 0 0 0 13.056 1.5h-1.264M14.5 13.056c0 .023 0 .046-.002.069M11.792 14.5h1.264a1.444 1.444 0 0 0 1.442-1.375m0 0v-1.333m-12.998 0v1.264A1.444 1.444 0 0 0 2.944 14.5h1.264m2.709-13h2.166m-2.166 13h2.166M1.5 6.917v2.166m13-2.166v2.166"/></svg>`;
var BoxIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width="100%" height="100%" style="display: block;"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.667 2H3.333C2.597 2 2 2.597 2 3.333v9.334C2 13.403 2.597 14 3.333 14h9.334c.736 0 1.333-.597 1.333-1.333V3.333C14 2.597 13.403 2 12.667 2Z"/></svg>`;
var BracesIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width="100%" height="100%" style="display: block;"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.333 2h-.666a1.333 1.333 0 0 0-1.334 1.333v3.334A1.333 1.333 0 0 1 2 8a1.333 1.333 0 0 1 1.333 1.333v3.334c0 .733.6 1.333 1.334 1.333h.666M10.667 14h.666a1.333 1.333 0 0 0 1.334-1.333V9.333C12.667 8.6 13.267 8 14 8a1.333 1.333 0 0 1-1.333-1.333V3.333A1.333 1.333 0 0 0 11.333 2h-.666"/></svg>`;
var ButtonElementIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width="100%" height="100%" style="display: block;"><path fill="currentColor" fill-rule="evenodd" d="M1.833 8a3.5 3.5 0 0 1 3.5-3.5h5.334a3.5 3.5 0 1 1 0 7H5.333a3.5 3.5 0 0 1-3.5-3.5Zm3.5-4.5a4.5 4.5 0 0 0 0 9h5.334a4.5 4.5 0 1 0 0-9H5.333ZM5.72 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM8 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm4.28-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" clip-rule="evenodd"/></svg>`;
var CalendarIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width="100%" height="100%" style="display: block;"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.333 9.333H8V12M10.667 1.333V4M2 6.667h12M5.333 1.333V4"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.667 2.667H3.333C2.597 2.667 2 3.264 2 4v9.333c0 .737.597 1.334 1.333 1.334h9.334c.736 0 1.333-.597 1.333-1.334V4c0-.736-.597-1.333-1.333-1.333Z"/></svg>`;
var CheckMarkIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width="100%" height="100%" style="display: block;"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.091" d="m13.636 3.667-8 8L2 8.03"/></svg>`;
var CheckboxCheckedIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width="100%" height="100%" style="display: block;"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.667 2H3.333C2.597 2 2 2.597 2 3.333v9.334C2 13.403 2.597 14 3.333 14h9.334c.736 0 1.333-.597 1.333-1.333V3.333C14 2.597 13.403 2 12.667 2Z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m6 8.238 1.383 1.383L10.003 7"/></svg>`;
var CollapsibleIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width="100%" height="100%" style="display: block;"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8 14.667v-4M8 5.333v-4M2.5 8h-1M6.5 8h-1M10.5 8h-1M14.5 8h-1M10 12.667l-2-2-2 2M10 3.333l-2 2-2-2"/></svg>`;
var ContentBlockIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width="100%" height="100%" style="display: block;"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8 2H3.333A1.333 1.333 0 0 0 2 3.333v9.334A1.333 1.333 0 0 0 3.333 14h9.334A1.334 1.334 0 0 0 14 12.667V8"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.25 1.75a1.414 1.414 0 1 1 2 2L8.24 9.76a1.333 1.333 0 0 1-.568.336l-1.916.56a.334.334 0 0 1-.413-.413l.56-1.916c.063-.214.179-.41.337-.568L12.25 1.75Z"/></svg>`;
var ContentIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width="100%" height="100%" style="display: block;"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.667 5.333h4M4.666 8H10m-5.333 2.667h4M2 3.5A1.5 1.5 0 0 1 3.5 2h9A1.5 1.5 0 0 1 14 3.5v9.188c0 .724-.588 1.312-1.313 1.312H3.313A1.312 1.312 0 0 1 2 12.687V3.5Z"/></svg>`;
var DialogIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width="100%" height="100%" style="display: block;"><path fill="#D2D2D2" d="M13.444 1H2.556C1.696 1 1 1.696 1 2.556v10.888C1 14.304 1.696 15 2.556 15h10.888c.86 0 1.556-.696 1.556-1.556V2.556C15 1.696 14.304 1 13.444 1Z"/><path fill="#fff" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.334 5.667H4.667v4.666h6.667V5.667Z"/></svg>`;
var EmbedIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width="100%" height="100%" style="display: block;"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12 10.667 14.667 8 12 5.333M4 5.333 1.333 8 4 10.667M9.667 2.667 6.333 13.333"/></svg>`;
var FormTextFieldIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width="100%" height="100%" style="display: block;"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.333 2.667H4a2 2 0 0 1 2 2 2 2 0 0 1 2-2h.667M8.667 13.333H8a2 2 0 0 1-2-2 2 2 0 0 1-2 2h-.667M3.333 10.667h-.666a1.333 1.333 0 0 1-1.334-1.334V6.667a1.333 1.333 0 0 1 1.334-1.334h.666M8.667 5.333h4.666a1.333 1.333 0 0 1 1.334 1.334v2.666a1.333 1.333 0 0 1-1.334 1.334H8.667M6 4.667v6.666"/></svg>`;
var HeaderIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width="100%" height="100%" style="display: block;"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.667 2H3.333C2.597 2 2 2.597 2 3.333v9.334C2 13.403 2.597 14 3.333 14h9.334c.736 0 1.333-.597 1.333-1.333V3.333C14 2.597 13.403 2 12.667 2ZM4 4h8"/></svg>`;
var HeadingIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width="100%" height="100%" style="display: block;"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4 8h8M4 13.333V2.667M12 13.333V2.667"/></svg>`;
var ItemIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width="100%" height="100%" style="display: block;"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2 6h.007M5.333 10H14M5.333 6H14"/></svg>`;
var LabelIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width="100%" height="100%" style="display: block;"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.667 2H3.333C2.597 2 2 2.597 2 3.333v9.334C2 13.403 2.597 14 3.333 14h9.334c.736 0 1.333-.597 1.333-1.333V3.333C14 2.597 13.403 2 12.667 2Z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.476 11.074V4.926m0 6.148h3.77v-.615m-3.77.615h-.722m.722-6.148h.632m-.632 0h-.722"/></svg>`;
var ListItemIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" width="100%" height="100%" style="display: block;"><path d="M3.7 6.175a.85.85 0 1 1-1.7 0 .85.85 0 0 1 1.7 0Z"/><path fill-rule="evenodd" d="M5 6.175c0-.345.28-.625.625-.625h7.75a.625.625 0 1 1 0 1.25h-7.75A.625.625 0 0 1 5 6.175ZM5 10.05c0-.345.28-.625.625-.625h7.75a.625.625 0 1 1 0 1.25h-7.75A.625.625 0 0 1 5 10.05Z" clip-rule="evenodd"/></svg>`;
var ListViewIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width="100%" height="100%" style="display: block;"><path fill="currentColor" fill-rule="evenodd" d="M3.333 2.5a.833.833 0 0 0-.833.833v9.334c0 .46.373.833.833.833h9.334c.46 0 .833-.373.833-.833V3.333a.833.833 0 0 0-.833-.833H3.333ZM1.5 3.333c0-1.012.82-1.833 1.833-1.833h9.334c1.012 0 1.833.82 1.833 1.833v9.334c0 1.012-.82 1.833-1.833 1.833H3.333A1.833 1.833 0 0 1 1.5 12.667V3.333Z" clip-rule="evenodd"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14 6H2M14 10H2"/></svg>`;
var ListIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" width="100%" height="100%" style="display: block;"><path d="M3.7 4.35a.85.85 0 1 1-1.7 0 .85.85 0 0 1 1.7 0Z"/><path fill-rule="evenodd" d="M5 4.35c0-.346.28-.626.625-.626h7.75a.625.625 0 1 1 0 1.25h-7.75A.625.625 0 0 1 5 4.35Z" clip-rule="evenodd"/><path d="M3.7 8A.85.85 0 1 1 2 8a.85.85 0 0 1 1.7 0Z"/><path fill-rule="evenodd" d="M5 8c0-.345.28-.625.625-.625h7.75a.625.625 0 1 1 0 1.25h-7.75A.625.625 0 0 1 5 8Z" clip-rule="evenodd"/><path d="M3.7 11.65a.85.85 0 1 1-1.7 0 .85.85 0 0 1 1.7 0Z"/><path fill-rule="evenodd" d="M5 11.65c0-.346.28-.626.625-.626h7.75a.625.625 0 1 1 0 1.25h-7.75A.625.625 0 0 1 5 11.65Z" clip-rule="evenodd"/></svg>`;
var MarkdownEmbedIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width="100%" height="100%" style="display: block;"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.667 5.333h4M4.667 8H10M14 8.75V3.5A1.5 1.5 0 0 0 12.5 2h-9A1.5 1.5 0 0 0 2 3.5v9.191c0 .725.588 1.313 1.313 1.313h4.691"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10 14.314v-4l2 2.03 2-2.03v4"/></svg>`;
var NavigationMenuIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width="100%" height="100%" style="display: block;"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14 7v5.833c0 .645-.597 1.167-1.333 1.167H3.333C2.597 14 2 13.478 2 12.833V7"/><path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.978 2.003H2.6a.6.6 0 0 0-.6.6v1.4h11.971v-1.4a.6.6 0 0 0-.6-.6h-2.393Z"/></svg>`;
var OverlayIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width="100%" height="100%" style="display: block;"><path fill="#D2D2D2" d="M13.444 1H2.556C1.696 1 1 1.696 1 2.556v10.888C1 14.304 1.696 15 2.556 15h10.888c.86 0 1.556-.696 1.556-1.556V2.556C15 1.696 14.304 1 13.444 1Z"/></svg>`;
var PaintBrushIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width="100%" height="100%" style="display: block;"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m6.04 7.933 5.38-5.373a1.9 1.9 0 1 1 2.687 2.687l-5.374 5.386M4.713 9.96c-1.106 0-2 .9-2 2.013 0 .887-1.666 1.014-1.333 1.347.72.733 1.66 1.347 2.667 1.347 1.466 0 2.666-1.2 2.666-2.694a2.007 2.007 0 0 0-2-2.013Z"/></svg>`;
var PlayIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width="100%" height="100%" style="display: block;"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m4 2 9.333 6L4 14V2Z"/></svg>`;
var PopoverIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width="100%" height="100%" style="display: block;"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14 6V4a1.334 1.334 0 0 0-1.333-1.333h-10A1.333 1.333 0 0 0 1.333 4v6.667c0 .733.6 1.333 1.334 1.333h2.666"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.333 8.667h-4C8.597 8.667 8 9.264 8 10v2c0 .736.597 1.333 1.333 1.333h4c.737 0 1.334-.597 1.334-1.333v-2c0-.736-.597-1.333-1.334-1.333Z"/></svg>`;
var RadioCheckedIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width="100%" height="100%" style="display: block;"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8 14.5a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13Z"/><path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"/></svg>`;
var RadioGroupIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width="100%" height="100%" style="display: block;"><path fill="#000" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M8.839 8a1.82 1.82 0 1 1-3.64 0 1.82 1.82 0 0 1 3.64 0Z"/><path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M7.019 13.027a5.027 5.027 0 1 0 0-10.054 5.027 5.027 0 0 0 0 10.054Z"/><path stroke="#000" stroke-linecap="round" d="M12.629 12.077v0a6.73 6.73 0 0 0-.337-8.565v0"/></svg>`;
var ResourceIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width="100%" height="100%" style="display: block;"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.667 5.333h4M4.667 8H10M14 8.75V3.5A1.5 1.5 0 0 0 12.5 2h-9A1.5 1.5 0 0 0 2 3.5v9.252c0 .69.56 1.25 1.25 1.25v0H6"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.45 14.5h-.7a1.75 1.75 0 1 1 0-3.5h.7M12.55 11h.7a1.75 1.75 0 1 1 0 3.5h-.7M10.1 12.75h2.8"/></svg>`;
var SelectIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width="100%" height="100%" style="display: block;"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.184 10.33h.149c.736 0 1.332-.597 1.332-1.332V6.332c0-.735-.596-1.332-1.332-1.332H2.667c-.735 0-1.332.597-1.332 1.332v2.666c0 .735.597 1.332 1.333 1.332h10.516Z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m10.078 7.165 1 1 1-1"/></svg>`;
var SettingsIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width="100%" height="100%" style="display: block;"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.987 6H9.32M13.932 6h-12M14 10.5H2"/><rect width="4" height="4" x="1.932" y="8.534" fill="#fff" stroke="currentColor" rx="2"/><rect width="4" height="4" x="10.068" y="4" fill="#fff" stroke="currentColor" rx="2"/></svg>`;
var SlotComponentIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width="100%" height="100%" style="display: block;"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 2H3.333A1.333 1.333 0 0 0 2 3.333V4.5M14 4.5V3.333A1.333 1.333 0 0 0 12.667 2H11.5M14 12.667c0 .021 0 .042-.002.063M11.5 14h1.167a1.333 1.333 0 0 0 1.331-1.27m0 0V11.5M2 11.5v1.167A1.333 1.333 0 0 0 3.333 14H4.5M7 2h2M7 14h2M2 7v2M14 7v2"/></svg>`;
var StaggerAnimationIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width="100%" height="100%" style="display: block;"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.222 5H8.778A.778.778 0 0 0 8 5.778v5.444c0 .43.348.778.778.778h5.444c.43 0 .778-.348.778-.778V5.778A.778.778 0 0 0 14.222 5ZM5.444 6H1.556A.556.556 0 0 0 1 6.556v3.888c0 .307.249.556.556.556h3.888A.556.556 0 0 0 6 10.444V6.556A.556.556 0 0 0 5.444 6Z"/></svg>`;
var SwitchIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width="100%" height="100%" style="display: block;"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.667 4H5.333a4 4 0 1 0 0 8h5.334a4 4 0 0 0 0-8Z"/><path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.333 9.333a1.333 1.333 0 1 0 0-2.666 1.333 1.333 0 0 0 0 2.666Z"/></svg>`;
var TabsIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width="100%" height="100%" style="display: block;"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.75 5H13M9.75 5H7.401A1.684 1.684 0 0 1 6 4.25v0l-.5-.75-.5-.75L4.5 2m5.25 3-1-1.5-.5-.75-.5-.75M4.5 2H3v0a1.5 1.5 0 0 0-1.5 1.5v9A1.5 1.5 0 0 0 3 14h10v0a1.5 1.5 0 0 0 1.5-1.5v0-6A1.5 1.5 0 0 0 13 5v0M4.5 2h3.25m0 0h2.375v0c.547 0 1.057.273 1.36.728l.015.022.5.75L13 5"/></svg>`;
var TextAnimationIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width="100%" height="100%" style="display: block;"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.476 4.3 7.817 3l6.935 1.817-.34 1.3m-6.245 4.386 2.601.682m.517-7.276-1.817 6.935M2 9.938V9h5v.938M3.562 14h1.875M4.5 9v5"/></svg>`;
var TextIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width="100%" height="100%" style="display: block;"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.667 4.667v-2h10.666v2M6 13.333h4M8 2.667v10.666"/></svg>`;
var TooltipIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width="100%" height="100%" style="display: block;"><path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M14 10a1.333 1.333 0 0 1-1.333 1.333h-8L2 14V3.333A1.333 1.333 0 0 1 3.333 2h9.334A1.333 1.333 0 0 1 14 3.333V10Z"/></svg>`;
var TriggerIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width="100%" height="100%" style="display: block;"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.915 7.354v-.647a1.294 1.294 0 1 0-2.587 0"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.328 6.707V6.06a1.294 1.294 0 1 0-2.587 0v.647"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.74 6.383V2.826a1.293 1.293 0 1 0-2.586 0v6.467"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.914 7.353a1.293 1.293 0 0 1 2.587 0v1.94a5.174 5.174 0 0 1-5.174 5.174H8.034c-1.81 0-2.91-.556-3.874-1.513l-2.328-2.328a1.293 1.293 0 0 1 1.83-1.824L4.8 9.94"/></svg>`;
var VideoIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width="100%" height="100%" style="display: block;"><path fill="currentColor" fill-rule="evenodd" d="M1.833 5.333c0-.46.373-.833.834-.833h6.666c.46 0 .834.373.834.833v5.334c0 .46-.374.833-.834.833H2.667a.833.833 0 0 1-.834-.833V5.333ZM2.667 3.5C1.654 3.5.833 4.32.833 5.333v5.334c0 1.012.821 1.833 1.834 1.833h6.666c1.013 0 1.834-.82 1.834-1.833V9.6l2.704 1.803a.833.833 0 0 0 1.296-.693V5.247a.833.833 0 0 0-1.254-.72l-2.746 1.602v-.796c0-1.012-.821-1.833-1.834-1.833H2.667Zm8.5 3.787V8.4l3 2V5.537l-3 1.75Z" clip-rule="evenodd"/></svg>`;
var ViewportIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" width="100%" height="100%" style="display: block;"><path fill-rule="evenodd" d="M5.173 1.35h.157a.65.65 0 0 1 0 1.3H5.2c-.57 0-.96 0-1.26.025-.294.024-.446.068-.553.122a1.35 1.35 0 0 0-.59.59c-.054.107-.098.259-.122.552-.025.301-.025.69-.025 1.261v.13a.65.65 0 0 1-1.3 0v-.157c0-.537 0-.98.03-1.34.03-.373.095-.715.259-1.036a2.65 2.65 0 0 1 1.158-1.158c.32-.164.663-.229 1.036-.26.36-.029.803-.029 1.34-.029Zm6.888 1.325c-.301-.024-.69-.025-1.261-.025h-.13a.65.65 0 1 1 0-1.3h.157c.537 0 .98 0 1.34.03.373.03.715.095 1.036.259.499.254.904.66 1.158 1.158.164.32.229.663.26 1.036.029.36.029.803.029 1.34v.157a.65.65 0 1 1-1.3 0V5.2c0-.57 0-.96-.025-1.26-.024-.294-.068-.446-.122-.553a1.35 1.35 0 0 0-.59-.59c-.107-.054-.26-.098-.552-.122ZM2 10.02a.65.65 0 0 1 .65.65v.13c0 .57 0 .96.025 1.26.024.294.068.446.122.553.13.254.336.46.59.59.107.054.259.098.552.122.301.025.69.025 1.261.025h.13a.65.65 0 1 1 0 1.3h-.157c-.537 0-.98 0-1.34-.03-.373-.03-.715-.095-1.036-.259a2.65 2.65 0 0 1-1.158-1.158c-.164-.32-.23-.663-.26-1.037-.029-.36-.029-.802-.029-1.34v-.156a.65.65 0 0 1 .65-.65Zm12 0a.65.65 0 0 1 .65.65v.157c0 .537 0 .98-.03 1.34-.03.373-.095.715-.259 1.036a2.65 2.65 0 0 1-1.158 1.158c-.32.164-.663.23-1.037.26-.36.029-.802.029-1.34.029h-.156a.65.65 0 1 1 0-1.3h.13c.57 0 .96 0 1.26-.025.294-.024.446-.068.553-.122.254-.13.46-.336.59-.59.054-.107.098-.259.122-.552.025-.301.025-.69.025-1.261v-.13a.65.65 0 0 1 .65-.65ZM8 10.033a2.033 2.033 0 1 0 0-4.066 2.033 2.033 0 0 0 0 4.066Zm0 1.3a3.333 3.333 0 1 0 0-6.666 3.333 3.333 0 0 0 0 6.666Z" clip-rule="evenodd"/></svg>`;
var VimeoIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width="100%" height="100%" style="display: block;"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.993 4.801c-.062 1.363-1.014 3.228-2.855 5.597-1.903 2.473-3.514 3.71-4.83 3.71-.817 0-1.508-.753-2.072-2.26l-1.13-4.143c-.419-1.506-.868-2.259-1.349-2.26a4.332 4.332 0 0 0-1.099.66L1 5.257c.69-.607 1.372-1.214 2.043-1.822.921-.796 1.613-1.215 2.074-1.257 1.09-.105 1.76.64 2.012 2.234.272 1.72.461 2.79.566 3.208.315 1.427.66 2.14 1.038 2.14.292 0 .733-.463 1.32-1.39.586-.925.9-1.63.942-2.113.084-.798-.23-1.198-.942-1.199-.357.005-.71.084-1.036.23.688-2.253 2.002-3.349 3.942-3.285 1.439.042 2.117.975 2.034 2.798Z"/></svg>`;
var WebhookFormIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width="100%" height="100%" style="display: block;"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12 11.32H8.007c-.734 0-1.3.627-1.654 1.267a2.666 2.666 0 0 1-5.02-1.254A2.62 2.62 0 0 1 1.713 10"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4 11.333 6.087 7.48c.353-.647.066-1.453-.334-2.067a2.667 2.667 0 1 1 4.594-2.706"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m8 4 2.087 3.82c.353.647 1.18.847 1.913.847A2.667 2.667 0 0 1 12 14"/></svg>`;
var WindowInfoIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width="100%" height="100%" style="display: block;"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.667 2H3.333C2.597 2 2 2.597 2 3.333v9.334C2 13.403 2.597 14 3.333 14h9.334c.736 0 1.333-.597 1.333-1.333V3.333C14 2.597 13.403 2 12.667 2ZM8 11.516V7.853"/><rect width="1.4" height="1.4" x="7.3" y="4.484" fill="currentColor" rx=".7"/></svg>`;
var WindowTitleIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width="100%" height="100%" style="display: block;"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.667 4H3.333C2.597 4 2 4.497 2 5.111v7.778C2 13.503 2.597 14 3.333 14h9.334c.736 0 1.333-.498 1.333-1.111V5.11C14 4.497 13.403 4 12.667 4ZM4 2h8"/></svg>`;
var XmlIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width="100%" height="100%" style="display: block;"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.163 9.02v-4L8.83 1.686h-5.5A1.333 1.333 0 0 0 1.997 3.02v6"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.164 2.186v1.667a1.333 1.333 0 0 0 1.333 1.333h2.667M1.997 11.314l3 3M4.997 11.314l-3 3M6.997 14.314v-3l1.5 1.523 1.5-1.523v3M12.163 11.314v3h1.84"/></svg>`;
var YoutubeIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 16 16" width="100%" height="100%" style="display: block;"><path d="M.892 11.528a18.047 18.047 0 0 1 0-7.482A1.496 1.496 0 0 1 1.94 3a37.082 37.082 0 0 1 12.12 0 1.497 1.497 0 0 1 1.048 1.047 18.046 18.046 0 0 1 0 7.482 1.497 1.497 0 0 1-1.048 1.048 37.077 37.077 0 0 1-12.12 0 1.497 1.497 0 0 1-1.048-1.048Z"/><path d="m6.5 10.3 4-2.4-4-2.4v4.8Z"/></svg>`;
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name2 in all)
    __defProp(target, name2, { get: all[name2], enumerable: true });
};
var AssetId = z.string();
var baseAsset = {
  id: AssetId,
  projectId: z.string(),
  size: z.number(),
  name: z.string(),
  filename: z.string().optional(),
  description: z.union([z.string().optional(), z.null()]),
  createdAt: z.string()
};
var FontAsset = z.object({
  ...baseAsset,
  format: FontFormat,
  meta: FontMeta,
  type: z.literal("font")
});
var ImageMeta = z.object({
  width: z.number(),
  height: z.number()
});
var ImageAsset = z.object({
  ...baseAsset,
  format: z.string(),
  meta: ImageMeta,
  type: z.literal("image")
});
var FileAsset = z.object({
  ...baseAsset,
  format: z.string(),
  meta: z.object({}),
  type: z.literal("file")
});
var Asset = z.union([FontAsset, ImageAsset, FileAsset]);
z.map(AssetId, Asset);
var MIN_TITLE_LENGTH = 2;
var PageId = z.string();
var FolderId = z.string();
var FolderName = z.string().refine((value) => value.trim() !== "", "Can't be empty");
var Slug = z.string().refine(
  (path) => /^[-a-z0-9]*$/.test(path),
  "Only a-z, 0-9 and - are allowed"
);
var Folder = z.object({
  id: FolderId,
  name: FolderName,
  slug: Slug,
  children: z.array(z.union([FolderId, PageId]))
});
var PageName = z.string().refine((value) => value.trim() !== "", "Can't be empty");
var PageTitle = z.string().refine(
  (val) => val.length >= MIN_TITLE_LENGTH,
  `Minimum ${MIN_TITLE_LENGTH} characters required`
);
var documentTypes = ["html", "xml"];
var commonPageFields = {
  id: PageId,
  name: PageName,
  title: PageTitle,
  history: z.optional(z.array(z.string())),
  rootInstanceId: z.string(),
  systemDataSourceId: z.string().optional(),
  meta: z.object({
    description: z.string().optional(),
    title: z.string().optional(),
    excludePageFromSearch: z.string().optional(),
    language: z.string().optional(),
    socialImageAssetId: z.string().optional(),
    socialImageUrl: z.string().optional(),
    status: z.string().optional(),
    redirect: z.string().optional(),
    documentType: z.optional(z.enum(documentTypes)),
    custom: z.array(
      z.object({
        property: z.string(),
        content: z.string()
      })
    ).optional()
  }),
  marketplace: z.optional(
    z.object({
      include: z.optional(z.boolean()),
      category: z.optional(z.string()),
      thumbnailAssetId: z.optional(z.string())
    })
  )
};
var HomePagePath = z.string().refine((path) => path === "", "Home page path must be empty");
var HomePage = z.object({
  ...commonPageFields,
  path: HomePagePath
});
var DefaultPagePage = z.string().refine((path) => path !== "", "Can't be empty").refine((path) => path !== "/", "Can't be just a /").refine((path) => path.endsWith("/") === false, "Can't end with a /").refine((path) => path.includes("//") === false, "Can't contain repeating /").refine(
  (path) => /^[-_a-z0-9*:?\\/.]*$/.test(path),
  "Only a-z, 0-9, -, _, /, :, ?, . and * are allowed"
).refine(
  // We use /s for our system stuff like /s/css or /s/uploads
  (path) => path !== "/s" && path.startsWith("/s/") === false,
  "/s prefix is reserved for the system"
).refine(
  // Remix serves build artefacts like JS bundles from /build
  // And we cannot customize it due to bug in Remix: https://github.com/remix-run/remix/issues/2933
  (path) => path !== "/build" && path.startsWith("/build/") === false,
  "/build prefix is reserved for the system"
);
var OldPagePath = z.string().refine((path) => path !== "", "Can't be empty").refine((path) => path !== "/", "Can't be just a /").refine(
  (path) => path === "" || path.startsWith("/"),
  "Must start with a / or a full URL e.g. https://website.org"
).refine((path) => path.endsWith("/") === false, "Can't end with a /").refine((path) => path.includes("//") === false, "Can't contain repeating /").refine((path) => {
  const disallowedChars = /[\s<>"{}|\\^`[\]\u0000-\u001f\u007f]/;
  return !disallowedChars.test(path);
}, "Path contains invalid characters (spaces or URL-unsafe characters are not allowed)").refine(
  (path) => path !== "/s" && path.startsWith("/s/") === false,
  "/s prefix is reserved for the system"
).refine(
  (path) => path !== "/build" && path.startsWith("/build/") === false,
  "/build prefix is reserved for the system"
);
var PagePath = DefaultPagePage.refine(
  (path) => path === "" || path.startsWith("/"),
  "Must start with a / or a full URL e.g. https://website.org"
);
var Page = z.object({
  ...commonPageFields,
  path: PagePath
});
var ProjectMeta = z.object({
  // All fields are optional to ensure consistency and allow for the addition of new fields without requiring migration
  siteName: z.string().optional(),
  contactEmail: z.string().optional(),
  faviconAssetId: z.string().optional(),
  code: z.string().optional()
});
var ProjectNewRedirectPath = z.string().min(1, "Path is required").refine((data) => {
  try {
    new URL(data, "http://url.com");
    return true;
  } catch {
    return false;
  }
}, "Must be a valid URL");
var PageRedirect = z.object({
  old: OldPagePath,
  new: ProjectNewRedirectPath,
  status: z.enum(["301", "302"]).optional()
});
var CompilerSettings = z.object({
  // All fields are optional to ensure consistency and allow for the addition of new fields without requiring migration
  atomicStyles: z.boolean().optional()
});
z.object({
  meta: ProjectMeta.optional(),
  compiler: CompilerSettings.optional(),
  redirects: z.array(PageRedirect).optional(),
  homePage: HomePage,
  pages: z.array(Page),
  folders: z.array(Folder).refine((folders) => folders.length > 0, "Folders can't be empty")
});
var TextChild = z.object({
  type: z.literal("text"),
  value: z.string(),
  placeholder: z.boolean().optional()
});
var InstanceId = z.string();
var IdChild = z.object({
  type: z.literal("id"),
  value: InstanceId
});
var ExpressionChild = z.object({
  type: z.literal("expression"),
  value: z.string()
});
var InstanceChild = z.union([IdChild, TextChild, ExpressionChild]);
var Instance = z.object({
  type: z.literal("instance"),
  id: InstanceId,
  component: z.string(),
  tag: z.string().optional(),
  label: z.string().optional(),
  children: z.array(InstanceChild)
});
z.map(InstanceId, Instance);
var DataSourceId = z.string();
var DataSourceVariableValue = z.union([
  z.object({
    type: z.literal("number"),
    // initial value of variable store
    value: z.number()
  }),
  z.object({
    type: z.literal("string"),
    value: z.string()
  }),
  z.object({
    type: z.literal("boolean"),
    value: z.boolean()
  }),
  z.object({
    type: z.literal("string[]"),
    value: z.array(z.string())
  }),
  z.object({
    type: z.literal("json"),
    value: z.unknown()
  })
]);
var DataSource = z.union([
  z.object({
    type: z.literal("variable"),
    id: DataSourceId,
    // The instance should always be specified for variables,
    // however, there was a bug in the embed template
    // which produced variables without an instance
    // and these variables will fail validation
    // if we make it required
    scopeInstanceId: z.string().optional(),
    name: z.string(),
    value: DataSourceVariableValue
  }),
  z.object({
    type: z.literal("parameter"),
    id: DataSourceId,
    scopeInstanceId: z.string().optional(),
    name: z.string()
  }),
  z.object({
    type: z.literal("resource"),
    id: DataSourceId,
    scopeInstanceId: z.string().optional(),
    name: z.string(),
    resourceId: z.string()
  })
]);
z.map(DataSourceId, DataSource);
var ResourceId = z.string();
var Method = z.union([
  z.literal("get"),
  z.literal("post"),
  z.literal("put"),
  z.literal("delete")
]);
var Resource = z.object({
  id: ResourceId,
  name: z.string(),
  control: z.optional(z.union([z.literal("system"), z.literal("graphql")])),
  method: Method,
  // expression
  url: z.string(),
  searchParams: z.array(
    z.object({
      name: z.string(),
      // expression
      value: z.string()
    })
  ).optional(),
  headers: z.array(
    z.object({
      name: z.string(),
      // expression
      value: z.string()
    })
  ),
  // expression
  body: z.optional(z.string())
});
z.object({
  name: z.string(),
  method: Method,
  url: z.string(),
  searchParams: z.array(
    z.object({
      name: z.string(),
      // can be string or object which should be serialized
      value: z.unknown()
    })
  ),
  headers: z.array(
    z.object({
      name: z.string(),
      // can be string or object which should be serialized
      value: z.unknown()
    })
  ),
  body: z.optional(z.unknown())
});
z.map(ResourceId, Resource);
var literalUnion = (arr) => z.union(
  arr.map((val) => z.literal(val))
);
var RANGE_UNITS = [
  "%",
  "px",
  "cm",
  "mm",
  "q",
  "in",
  "pt",
  "pc",
  "em",
  "rem",
  "ex",
  "rex",
  "cap",
  "rcap",
  "ch",
  "rch",
  "lh",
  "rlh",
  "vw",
  "svw",
  "lvw",
  "dvw",
  "vh",
  "svh",
  "lvh",
  "dvh",
  "vi",
  "svi",
  "lvi",
  "dvi",
  "vb",
  "svb",
  "lvb",
  "dvb",
  "vmin",
  "svmin",
  "lvmin",
  "dvmin",
  "vmax",
  "svmax",
  "lvmax",
  "dvmax"
];
var rangeUnitSchema = literalUnion(RANGE_UNITS);
var rangeUnitValueSchema = z.union([
  z.object({
    type: z.literal("unit"),
    value: z.number(),
    unit: rangeUnitSchema
  }),
  z.object({
    type: z.literal("unparsed"),
    value: z.string()
  }),
  z.object({
    type: z.literal("var"),
    value: z.string()
  })
]);
var TIME_UNITS = ["ms", "s"];
var timeUnitSchema = literalUnion(TIME_UNITS);
var durationUnitValueSchema = z.union([
  z.object({
    type: z.literal("unit"),
    value: z.number(),
    unit: timeUnitSchema
  }),
  z.object({
    type: z.literal("var"),
    value: z.string()
  })
]);
var iterationsUnitValueSchema = z.union([z.number(), z.literal("infinite")]);
var insetUnitValueSchema = z.union([
  rangeUnitValueSchema,
  z.object({
    type: z.literal("keyword"),
    value: z.literal("auto")
  })
]);
var keyframeStylesSchema = z.record(StyleValue);
var animationKeyframeSchema = z.object({
  offset: z.number().optional(),
  styles: keyframeStylesSchema
});
var keyframeEffectOptionsSchema = z.object({
  easing: z.string().optional(),
  fill: z.union([
    z.literal("none"),
    z.literal("forwards"),
    z.literal("backwards"),
    z.literal("both")
  ]).optional(),
  // FillMode
  duration: durationUnitValueSchema.optional(),
  delay: durationUnitValueSchema.optional(),
  iterations: iterationsUnitValueSchema.optional()
});
var scrollNamedRangeSchema = z.union([
  z.literal("start"),
  z.literal("end")
]);
var scrollRangeValueSchema = z.tuple([
  scrollNamedRangeSchema,
  rangeUnitValueSchema
]);
var scrollRangeOptionsSchema = z.object({
  rangeStart: scrollRangeValueSchema.optional(),
  rangeEnd: scrollRangeValueSchema.optional()
});
var animationAxisSchema = z.union([
  z.literal("block"),
  z.literal("inline"),
  z.literal("x"),
  z.literal("y")
]);
var viewNamedRangeSchema = z.union([
  z.literal("contain"),
  z.literal("cover"),
  z.literal("entry"),
  z.literal("exit"),
  z.literal("entry-crossing"),
  z.literal("exit-crossing")
]);
var viewRangeValueSchema = z.tuple([
  viewNamedRangeSchema,
  rangeUnitValueSchema
]);
var viewRangeOptionsSchema = z.object({
  rangeStart: viewRangeValueSchema.optional(),
  rangeEnd: viewRangeValueSchema.optional()
});
var baseAnimation = z.object({
  name: z.string().optional(),
  description: z.string().optional(),
  enabled: z.array(z.tuple([z.string().describe("breakpointId"), z.boolean()])).optional(),
  keyframes: z.array(animationKeyframeSchema)
});
var scrollAnimationSchema = baseAnimation.merge(
  z.object({
    timing: keyframeEffectOptionsSchema.merge(scrollRangeOptionsSchema)
  })
);
var scrollActionSchema = z.object({
  type: z.literal("scroll"),
  source: z.union([z.literal("closest"), z.literal("nearest"), z.literal("root")]).optional(),
  axis: animationAxisSchema.optional(),
  animations: z.array(scrollAnimationSchema),
  isPinned: z.boolean().optional(),
  debug: z.boolean().optional()
});
var viewAnimationSchema = baseAnimation.merge(
  z.object({
    timing: keyframeEffectOptionsSchema.merge(viewRangeOptionsSchema)
  })
);
var viewActionSchema = z.object({
  type: z.literal("view"),
  subject: z.string().optional(),
  axis: animationAxisSchema.optional(),
  animations: z.array(viewAnimationSchema),
  insetStart: insetUnitValueSchema.optional(),
  insetEnd: insetUnitValueSchema.optional(),
  isPinned: z.boolean().optional(),
  debug: z.boolean().optional()
});
var animationActionSchema = z.discriminatedUnion("type", [
  scrollActionSchema,
  viewActionSchema
]);
var PropId = z.string();
var baseProp = {
  id: PropId,
  instanceId: z.string(),
  name: z.string(),
  required: z.optional(z.boolean())
};
var Prop = z.union([
  z.object({
    ...baseProp,
    type: z.literal("number"),
    value: z.number()
  }),
  z.object({
    ...baseProp,
    type: z.literal("string"),
    value: z.string()
  }),
  z.object({
    ...baseProp,
    type: z.literal("boolean"),
    value: z.boolean()
  }),
  z.object({
    ...baseProp,
    type: z.literal("json"),
    value: z.unknown()
  }),
  z.object({
    ...baseProp,
    type: z.literal("asset"),
    value: z.string()
    // asset id
  }),
  z.object({
    ...baseProp,
    type: z.literal("page"),
    value: z.union([
      z.string(),
      // page id
      z.object({
        pageId: z.string(),
        instanceId: z.string()
      })
    ])
  }),
  z.object({
    ...baseProp,
    type: z.literal("string[]"),
    value: z.array(z.string())
  }),
  z.object({
    ...baseProp,
    type: z.literal("parameter"),
    // data source id
    value: z.string()
  }),
  z.object({
    ...baseProp,
    type: z.literal("resource"),
    // resource id
    value: z.string()
  }),
  z.object({
    ...baseProp,
    type: z.literal("expression"),
    // expression code
    value: z.string()
  }),
  z.object({
    ...baseProp,
    type: z.literal("action"),
    value: z.array(
      z.object({
        type: z.literal("execute"),
        args: z.array(z.string()),
        code: z.string()
      })
    )
  }),
  z.object({
    ...baseProp,
    type: z.literal("animationAction"),
    value: animationActionSchema
  })
]);
z.map(PropId, Prop);
var BreakpointId = z.string();
var Breakpoint = z.object({
  id: BreakpointId,
  label: z.string(),
  minWidth: z.number().optional(),
  maxWidth: z.number().optional(),
  condition: z.string().optional()
}).transform((data) => {
  if (data.condition !== void 0 && data.condition.trim() === "") {
    return { ...data, condition: void 0 };
  }
  return data;
}).refine(({ minWidth, maxWidth, condition }) => {
  if (condition !== void 0) {
    return minWidth === void 0 && maxWidth === void 0;
  }
  return (
    // Either min or max width have to be defined
    minWidth !== void 0 && maxWidth === void 0 || minWidth === void 0 && maxWidth !== void 0 || // This is a base breakpoint
    minWidth === void 0 && maxWidth === void 0
  );
}, "Either minWidth, maxWidth, or condition should be defined, but not both");
z.map(BreakpointId, Breakpoint);
var StyleSourceId = z.string();
var StyleSourceToken = z.object({
  type: z.literal("token"),
  id: StyleSourceId,
  name: z.string()
});
var StyleSourceLocal = z.object({
  type: z.literal("local"),
  id: StyleSourceId
});
var StyleSource = z.union([StyleSourceToken, StyleSourceLocal]);
z.map(StyleSourceId, StyleSource);
var InstanceId2 = z.string();
var StyleSourceId2 = z.string();
var StyleSourceSelection = z.object({
  instanceId: InstanceId2,
  values: z.array(StyleSourceId2)
});
z.map(InstanceId2, StyleSourceSelection);
var StyleDeclRaw = z.object({
  styleSourceId: z.string(),
  breakpointId: z.string(),
  state: z.optional(z.string()),
  // @todo can't figure out how to make property to be enum
  property: z.string(),
  value: StyleValue,
  listed: z.boolean().optional().describe("Whether the style is from the Advanced panel")
});
var StyleDecl = StyleDeclRaw;
z.map(z.string(), StyleDecl);
var Templates = z.enum([
  "docker",
  "vercel",
  "netlify",
  "ssg",
  "ssg-netlify",
  "ssg-vercel"
]);
z.union([
  z.object({
    destination: z.literal("static"),
    name: z.string(),
    assetsDomain: z.string(),
    // Must be validated very strictly
    templates: z.array(Templates)
  }),
  z.object({
    destination: z.literal("saas").optional(),
    domains: z.array(z.string()),
    assetsDomain: z.string().optional(),
    /**
     * @deprecated This field is deprecated, use `domains` instead.
     */
    projectDomain: z.string().optional(),
    excludeWstdDomainFromSearch: z.boolean().optional()
  })
]);
z.object({
  children: z.array(InstanceChild),
  instances: z.array(Instance),
  assets: z.array(Asset),
  dataSources: z.array(DataSource),
  resources: z.array(Resource),
  props: z.array(Prop),
  breakpoints: z.array(Breakpoint),
  styleSourceSelections: z.array(StyleSourceSelection),
  styleSources: z.array(StyleSource),
  styles: z.array(StyleDecl)
});
var common = {
  label: z.string().optional(),
  description: z.string().optional(),
  required: z.boolean()
};
var Tag = z.object({
  ...common,
  control: z.literal("tag"),
  type: z.literal("string"),
  defaultValue: z.undefined().optional(),
  options: z.array(z.string())
});
var Number = z.object({
  ...common,
  control: z.literal("number"),
  type: z.literal("number"),
  defaultValue: z.number().optional()
});
var Range = z.object({
  ...common,
  control: z.literal("range"),
  type: z.literal("number"),
  defaultValue: z.number().optional()
});
var Text = z.object({
  ...common,
  control: z.literal("text"),
  type: z.literal("string"),
  defaultValue: z.string().optional(),
  /**
   * The number of rows in <textarea>. If set to 0 an <input> will be used instead.
   * In line with Storybook team's plan: https://github.com/storybookjs/storybook/issues/21100
   */
  rows: z.number().optional()
});
var Resource2 = z.object({
  ...common,
  control: z.literal("resource"),
  type: z.literal("resource"),
  defaultValue: z.string().optional()
});
var Code = z.object({
  ...common,
  control: z.literal("code"),
  type: z.literal("string"),
  language: z.union([z.literal("html"), z.literal("markdown")]),
  defaultValue: z.string().optional()
});
var CodeText = z.object({
  ...common,
  control: z.literal("codetext"),
  type: z.literal("string"),
  defaultValue: z.string().optional()
});
var Color = z.object({
  ...common,
  control: z.literal("color"),
  type: z.literal("string"),
  defaultValue: z.string().optional()
});
var Boolean$1 = z.object({
  ...common,
  control: z.literal("boolean"),
  type: z.literal("boolean"),
  defaultValue: z.boolean().optional()
});
var Radio = z.object({
  ...common,
  control: z.literal("radio"),
  type: z.literal("string"),
  defaultValue: z.string().optional(),
  options: z.array(z.string())
});
var InlineRadio = z.object({
  ...common,
  control: z.literal("inline-radio"),
  type: z.literal("string"),
  defaultValue: z.string().optional(),
  options: z.array(z.string())
});
var Select = z.object({
  ...common,
  control: z.literal("select"),
  type: z.literal("string"),
  defaultValue: z.string().optional(),
  options: z.array(z.string())
});
var Check = z.object({
  ...common,
  control: z.literal("check"),
  type: z.literal("string[]"),
  defaultValue: z.array(z.string()).optional(),
  options: z.array(z.string())
});
var InlineCheck = z.object({
  ...common,
  control: z.literal("inline-check"),
  type: z.literal("string[]"),
  defaultValue: z.array(z.string()).optional(),
  options: z.array(z.string())
});
var MultiSelect = z.object({
  ...common,
  control: z.literal("multi-select"),
  type: z.literal("string[]"),
  defaultValue: z.array(z.string()).optional(),
  options: z.array(z.string())
});
var File = z.object({
  ...common,
  control: z.literal("file"),
  type: z.literal("string"),
  defaultValue: z.string().optional(),
  /** https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept */
  accept: z.string().optional()
});
var Url = z.object({
  ...common,
  control: z.literal("url"),
  type: z.literal("string"),
  defaultValue: z.string().optional()
});
var Json = z.object({
  ...common,
  control: z.literal("json"),
  type: z.literal("json"),
  defaultValue: z.unknown().optional()
});
var Date$1 = z.object({
  ...common,
  control: z.literal("date"),
  // @todo not sure what type should be here
  // (we don't support Date yet, added for completeness)
  type: z.literal("string"),
  defaultValue: z.string().optional()
});
var Action = z.object({
  ...common,
  control: z.literal("action"),
  type: z.literal("action"),
  defaultValue: z.undefined().optional()
});
var TextContent = z.object({
  ...common,
  control: z.literal("textContent"),
  type: z.literal("string"),
  defaultValue: z.string().optional()
});
var AnimationAction = z.object({
  ...common,
  control: z.literal("animationAction"),
  type: z.literal("animationAction"),
  defaultValue: z.undefined().optional()
});
var PropMeta = z.union([
  Tag,
  Number,
  Range,
  Text,
  Resource2,
  Code,
  CodeText,
  Color,
  Boolean$1,
  Radio,
  InlineRadio,
  Select,
  MultiSelect,
  Check,
  InlineCheck,
  File,
  Url,
  Json,
  Date$1,
  Action,
  TextContent,
  AnimationAction
]);
var PresetStyleDecl = z.object({
  // State selector, e.g. :hover
  state: z.optional(z.string()),
  property: z.string(),
  value: StyleValue
});
var componentCategories = [
  "general",
  "typography",
  "media",
  "animations",
  "data",
  "forms",
  "localization",
  "radix",
  "xml",
  "other",
  "hidden",
  "internal"
];
var ComponentState = z.object({
  selector: z.string(),
  label: z.string()
});
var ComponentContent = z.string();
var ContentModel = z.object({
  /*
   * instance - accepted by any parent with "instance" in children categories
   * none - accepted by parents with this component name in children categories
   */
  category: z.union([z.literal("instance"), z.literal("none")]),
  /**
   * enforce direct children of category or components
   */
  children: z.array(ComponentContent),
  /**
   * enforce descendants of category or components
   */
  descendants: z.array(ComponentContent).optional()
});
z.object({
  category: z.enum(componentCategories).optional(),
  contentModel: ContentModel.optional(),
  // when this field is specified component receives
  // prop with index of same components withiin specified ancestor
  // important to automatically enumerate collections without
  // naming every item manually
  indexWithinAncestor: z.optional(z.string()),
  label: z.optional(z.string()),
  description: z.string().optional(),
  icon: z.string().optional(),
  presetStyle: z.optional(z.record(z.string(), z.array(PresetStyleDecl))),
  states: z.optional(z.array(ComponentState)),
  order: z.number().optional(),
  // properties and html attributes that will be always visible in properties panel
  initialProps: z.array(z.string()).optional(),
  props: z.record(PropMeta).optional()
});
var ALLOWED_FILE_TYPES = {
  // Documents
  pdf: "application/pdf",
  doc: "application/msword",
  docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  xls: "application/vnd.ms-excel",
  xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  csv: "text/csv",
  ppt: "application/vnd.ms-powerpoint",
  pptx: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  // Code
  txt: "text/plain",
  md: "text/markdown",
  js: "text/javascript",
  css: "text/css",
  json: "application/json",
  html: "text/html",
  xml: "application/xml",
  // Archives
  zip: "application/zip",
  rar: "application/vnd.rar",
  // Audio
  mp3: "audio/mpeg",
  wav: "audio/wav",
  ogg: "audio/ogg",
  m4a: "audio/mp4",
  // Video
  mp4: "video/mp4",
  mov: "video/quicktime",
  avi: "video/x-msvideo",
  webm: "video/webm",
  // Images
  // Note: Cloudflare Image Resizing supports: jpg, jpeg, png, gif, webp, svg, avif
  // Other formats (bmp, ico, tif, tiff) are served as-is without optimization
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  png: "image/png",
  gif: "image/gif",
  svg: "image/svg+xml",
  webp: "image/webp",
  avif: "image/avif",
  ico: "image/vnd.microsoft.icon",
  // Used for favicons
  bmp: "image/bmp",
  // Served without optimization
  tif: "image/tiff",
  // Served without optimization
  tiff: "image/tiff",
  // Served without optimization
  // Fonts
  woff: "font/woff",
  woff2: "font/woff2",
  ttf: "font/ttf",
  otf: "font/otf"
};
new Set(
  Object.keys(ALLOWED_FILE_TYPES)
);
var MIME_CATEGORIES = [
  "image",
  "video",
  "audio",
  "font",
  "text",
  "application"
];
var FILE_EXTENSIONS_BY_CATEGORY = (() => {
  const categories = Object.fromEntries(
    MIME_CATEGORIES.map((category) => [category, []])
  );
  Object.entries(ALLOWED_FILE_TYPES).forEach(([ext, mimeType]) => {
    const [category] = mimeType.split("/");
    if (category in categories) {
      categories[category].push(ext);
    }
  });
  return categories;
})();
var extensionToMime = new Map(
  Object.entries(ALLOWED_FILE_TYPES).map(([ext, mime]) => [`.${ext}`, mime])
);
var mimeTypes = new Set(extensionToMime.values());
/* @__PURE__ */ new Set([
  ...mimeTypes.values(),
  ...MIME_CATEGORIES.map((category) => `${category}/*`)
]);
var IMAGE_EXTENSIONS = FILE_EXTENSIONS_BY_CATEGORY.image;
IMAGE_EXTENSIONS.map(
  (ext) => ALLOWED_FILE_TYPES[ext]
);
var VIDEO_EXTENSIONS = FILE_EXTENSIONS_BY_CATEGORY.video;
VIDEO_EXTENSIONS.map(
  (ext) => ALLOWED_FILE_TYPES[ext]
);
var FONT_EXTENSIONS = FILE_EXTENSIONS_BY_CATEGORY.font;
var detectAssetType = (fileName) => {
  var _a2;
  const ext = (_a2 = fileName.split(".").pop()) == null ? void 0 : _a2.toLowerCase();
  if (!ext) {
    return "file";
  }
  if (IMAGE_EXTENSIONS.includes(ext)) {
    return "image";
  }
  if (FONT_EXTENSIONS.includes(ext)) {
    return "font";
  }
  if (VIDEO_EXTENSIONS.includes(ext)) {
    return "video";
  }
  return "file";
};
var getAssetUrl = (asset, origin) => {
  let path;
  const assetType = detectAssetType(asset.name);
  if (assetType === "image") {
    path = `/cgi/image/${asset.name}?format=raw`;
  } else {
    path = `/cgi/asset/${asset.name}?format=raw`;
  }
  return new URL(path, origin);
};
var extractImageMetadata = (asset) => {
  if (asset.type !== "image") {
    return;
  }
  if (asset.meta.width && asset.meta.height) {
    return {
      width: asset.meta.width,
      height: asset.meta.height
    };
  }
};
var extractFontMetadata = (asset) => {
  if (asset.type !== "font") {
    return;
  }
  const metadata = {
    family: asset.meta.family
  };
  if ("style" in asset.meta) {
    metadata.style = asset.meta.style;
    metadata.weight = asset.meta.weight;
  }
  return metadata;
};
var extractFileMetadata = (_asset) => {
  return;
};
var metadataExtractors = {
  image: extractImageMetadata,
  font: extractFontMetadata,
  file: extractFileMetadata
};
var toRuntimeAsset = (asset, origin) => {
  const extractor = metadataExtractors[asset.type];
  const metadata = extractor(asset);
  const url = getAssetUrl(asset, origin);
  const relativeUrl = url.pathname + url.search;
  return {
    url: relativeUrl,
    ...metadata
  };
};
var normalize_css_exports = {};
__export(normalize_css_exports, {
  a: () => a$7,
  address: () => address$1,
  article: () => article$1,
  aside: () => aside$1,
  b: () => b$6,
  body: () => body$1,
  button: () => button$1,
  checkbox: () => checkbox$1,
  code: () => code$1,
  div: () => div$1,
  figure: () => figure$1,
  footer: () => footer$1,
  form: () => form$1,
  h1: () => h1$1,
  h2: () => h2$1,
  h3: () => h3$1,
  h4: () => h4$1,
  h5: () => h5$1,
  h6: () => h6$1,
  header: () => header$1,
  hr: () => hr$1,
  html: () => html,
  i: () => i$b,
  img: () => img$1,
  input: () => input$1,
  kbd: () => kbd,
  label: () => label$1,
  legend: () => legend,
  li: () => li$1,
  main: () => main$2,
  nav: () => nav$1,
  ol: () => ol$1,
  optgroup: () => optgroup,
  p: () => p$9,
  pre: () => pre,
  progress: () => progress,
  radio: () => radio$1,
  samp: () => samp,
  section: () => section$1,
  select: () => select$1,
  small: () => small,
  span: () => span$1,
  strong: () => strong,
  sub: () => sub$1,
  summary: () => summary,
  sup: () => sup$1,
  table: () => table,
  textarea: () => textarea$1,
  time: () => time$1,
  ul: () => ul$1
});
var div$1 = [
  { property: "box-sizing", value: { type: "keyword", value: "border-box" } }
];
var address$1 = div$1;
var article$1 = div$1;
var aside$1 = div$1;
var figure$1 = div$1;
var footer$1 = div$1;
var header$1 = div$1;
var main$2 = div$1;
var nav$1 = div$1;
var section$1 = div$1;
var form$1 = div$1;
var label$1 = div$1;
var time$1 = div$1;
var h1$1 = div$1;
var h2$1 = div$1;
var h3$1 = div$1;
var h4$1 = div$1;
var h5$1 = div$1;
var h6$1 = div$1;
var i$b = div$1;
var img$1 = div$1;
var a$7 = div$1;
var li$1 = div$1;
var ul$1 = div$1;
var ol$1 = div$1;
var p$9 = div$1;
var span$1 = div$1;
var html = [
  { property: "display", value: { type: "keyword", value: "grid" } },
  { property: "min-height", value: { type: "unit", unit: "%", value: 100 } },
  { property: "grid-template-rows", value: { type: "keyword", value: "auto" } },
  {
    property: "grid-template-columns",
    value: { type: "unit", unit: "fr", value: 1 }
  },
  {
    property: "font-family",
    value: { type: "fontFamily", value: ["Arial", "Roboto", "sans-serif"] }
  },
  { property: "font-size", value: { type: "unit", unit: "px", value: 16 } },
  {
    property: "line-height",
    value: { type: "unit", unit: "number", value: 1.2 }
  },
  {
    property: "white-space-collapse",
    value: { type: "keyword", value: "preserve" }
  }
];
var body$1 = [
  { property: "margin-top", value: { type: "unit", unit: "number", value: 0 } },
  {
    property: "margin-right",
    value: { type: "unit", unit: "number", value: 0 }
  },
  {
    property: "margin-bottom",
    value: { type: "unit", unit: "number", value: 0 }
  },
  {
    property: "margin-left",
    value: { type: "unit", unit: "number", value: 0 }
  },
  { property: "box-sizing", value: { type: "keyword", value: "border-box" } },
  {
    property: "-webkit-font-smoothing",
    value: { type: "keyword", value: "antialiased" }
  },
  {
    property: "-moz-osx-font-smoothing",
    value: { type: "keyword", value: "grayscale" }
  }
];
var hr$1 = [
  { property: "height", value: { type: "unit", unit: "number", value: 0 } },
  { property: "color", value: { type: "keyword", value: "inherit" } },
  { property: "box-sizing", value: { type: "keyword", value: "border-box" } }
];
var b$6 = [
  {
    property: "font-weight",
    value: { type: "unit", unit: "number", value: 700 }
  },
  { property: "box-sizing", value: { type: "keyword", value: "border-box" } }
];
var strong = b$6;
var code$1 = [
  {
    property: "font-family",
    value: {
      type: "fontFamily",
      value: [
        "ui-monospace",
        "SFMono-Regular",
        "Consolas",
        "Liberation Mono",
        "Menlo",
        "monospace"
      ]
    }
  },
  { property: "font-size", value: { type: "unit", unit: "em", value: 1 } },
  { property: "box-sizing", value: { type: "keyword", value: "border-box" } }
];
var kbd = code$1;
var samp = code$1;
var pre = code$1;
var small = [
  { property: "font-size", value: { type: "unit", unit: "%", value: 80 } },
  { property: "box-sizing", value: { type: "keyword", value: "border-box" } }
];
var sub$1 = [
  { property: "font-size", value: { type: "unit", unit: "%", value: 75 } },
  {
    property: "line-height",
    value: { type: "unit", unit: "number", value: 0 }
  },
  { property: "position", value: { type: "keyword", value: "relative" } },
  { property: "vertical-align", value: { type: "keyword", value: "baseline" } },
  { property: "box-sizing", value: { type: "keyword", value: "border-box" } },
  { property: "bottom", value: { type: "unit", unit: "em", value: -0.25 } }
];
var sup$1 = [
  { property: "font-size", value: { type: "unit", unit: "%", value: 75 } },
  {
    property: "line-height",
    value: { type: "unit", unit: "number", value: 0 }
  },
  { property: "position", value: { type: "keyword", value: "relative" } },
  { property: "vertical-align", value: { type: "keyword", value: "baseline" } },
  { property: "box-sizing", value: { type: "keyword", value: "border-box" } },
  { property: "top", value: { type: "unit", unit: "em", value: -0.5 } }
];
var table = [
  {
    property: "text-indent",
    value: { type: "unit", unit: "number", value: 0 }
  },
  {
    property: "border-top-color",
    value: { type: "keyword", value: "inherit" }
  },
  {
    property: "border-right-color",
    value: { type: "keyword", value: "inherit" }
  },
  {
    property: "border-bottom-color",
    value: { type: "keyword", value: "inherit" }
  },
  {
    property: "border-left-color",
    value: { type: "keyword", value: "inherit" }
  },
  { property: "box-sizing", value: { type: "keyword", value: "border-box" } }
];
var input$1 = [
  { property: "font-family", value: { type: "keyword", value: "inherit" } },
  { property: "font-size", value: { type: "unit", unit: "%", value: 100 } },
  {
    property: "line-height",
    value: { type: "unit", unit: "number", value: 1.15 }
  },
  { property: "margin-top", value: { type: "unit", unit: "number", value: 0 } },
  {
    property: "margin-right",
    value: { type: "unit", unit: "number", value: 0 }
  },
  {
    property: "margin-bottom",
    value: { type: "unit", unit: "number", value: 0 }
  },
  {
    property: "margin-left",
    value: { type: "unit", unit: "number", value: 0 }
  },
  { property: "box-sizing", value: { type: "keyword", value: "border-box" } },
  { property: "border-top-style", value: { type: "keyword", value: "solid" } },
  {
    property: "border-right-style",
    value: { type: "keyword", value: "solid" }
  },
  {
    property: "border-bottom-style",
    value: { type: "keyword", value: "solid" }
  },
  { property: "border-left-style", value: { type: "keyword", value: "solid" } }
];
var textarea$1 = input$1;
var optgroup = [
  { property: "font-family", value: { type: "keyword", value: "inherit" } },
  { property: "font-size", value: { type: "unit", unit: "%", value: 100 } },
  {
    property: "line-height",
    value: { type: "unit", unit: "number", value: 1.15 }
  },
  { property: "margin-top", value: { type: "unit", unit: "number", value: 0 } },
  {
    property: "margin-right",
    value: { type: "unit", unit: "number", value: 0 }
  },
  {
    property: "margin-bottom",
    value: { type: "unit", unit: "number", value: 0 }
  },
  {
    property: "margin-left",
    value: { type: "unit", unit: "number", value: 0 }
  },
  { property: "box-sizing", value: { type: "keyword", value: "border-box" } }
];
var radio$1 = [
  { property: "font-family", value: { type: "keyword", value: "inherit" } },
  { property: "font-size", value: { type: "unit", unit: "%", value: 100 } },
  {
    property: "line-height",
    value: { type: "unit", unit: "number", value: 1.15 }
  },
  { property: "margin-top", value: { type: "unit", unit: "number", value: 0 } },
  {
    property: "margin-right",
    value: { type: "unit", unit: "number", value: 0 }
  },
  {
    property: "margin-bottom",
    value: { type: "unit", unit: "number", value: 0 }
  },
  {
    property: "margin-left",
    value: { type: "unit", unit: "number", value: 0 }
  },
  { property: "box-sizing", value: { type: "keyword", value: "border-box" } },
  { property: "border-top-style", value: { type: "keyword", value: "none" } },
  { property: "border-right-style", value: { type: "keyword", value: "none" } },
  {
    property: "border-bottom-style",
    value: { type: "keyword", value: "none" }
  },
  { property: "border-left-style", value: { type: "keyword", value: "none" } }
];
var checkbox$1 = radio$1;
var button$1 = [
  { property: "font-family", value: { type: "keyword", value: "inherit" } },
  { property: "font-size", value: { type: "unit", unit: "%", value: 100 } },
  {
    property: "line-height",
    value: { type: "unit", unit: "number", value: 1.15 }
  },
  { property: "margin-top", value: { type: "unit", unit: "number", value: 0 } },
  {
    property: "margin-right",
    value: { type: "unit", unit: "number", value: 0 }
  },
  {
    property: "margin-bottom",
    value: { type: "unit", unit: "number", value: 0 }
  },
  {
    property: "margin-left",
    value: { type: "unit", unit: "number", value: 0 }
  },
  { property: "box-sizing", value: { type: "keyword", value: "border-box" } },
  { property: "border-top-style", value: { type: "keyword", value: "solid" } },
  {
    property: "border-right-style",
    value: { type: "keyword", value: "solid" }
  },
  {
    property: "border-bottom-style",
    value: { type: "keyword", value: "solid" }
  },
  { property: "border-left-style", value: { type: "keyword", value: "solid" } },
  { property: "text-transform", value: { type: "keyword", value: "none" } }
];
var select$1 = button$1;
var legend = [
  {
    property: "padding-top",
    value: { type: "unit", unit: "number", value: 0 }
  },
  {
    property: "padding-right",
    value: { type: "unit", unit: "number", value: 0 }
  },
  {
    property: "padding-bottom",
    value: { type: "unit", unit: "number", value: 0 }
  },
  {
    property: "padding-left",
    value: { type: "unit", unit: "number", value: 0 }
  },
  { property: "box-sizing", value: { type: "keyword", value: "border-box" } }
];
var progress = [
  { property: "vertical-align", value: { type: "keyword", value: "baseline" } },
  { property: "box-sizing", value: { type: "keyword", value: "border-box" } }
];
var summary = [
  { property: "display", value: { type: "keyword", value: "list-item" } },
  { property: "box-sizing", value: { type: "keyword", value: "border-box" } }
];
var tagProperty$1 = "data-ws-tag";
var tags = [
  "div",
  "span",
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "bdi",
  "bdo",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "main",
  "map",
  "mark",
  "menu",
  "meter",
  "nav",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "search",
  "section",
  "select",
  "slot",
  "small",
  "source",
  "strong",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  "svg",
  "g",
  "defs",
  "desc",
  "symbol",
  "use",
  "image",
  "switch",
  "path",
  "rect",
  "circle",
  "ellipse",
  "line",
  "polyline",
  "polygon",
  "text",
  "tspan",
  "textPath",
  "marker",
  "linearGradient",
  "radialGradient",
  "stop",
  "pattern",
  "clipPath",
  "mask",
  "filter",
  "feDistantLight",
  "fePointLight",
  "feSpotLight",
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feFuncR",
  "feFuncG",
  "feFuncB",
  "feFuncA",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feFlood",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMergeNode",
  "feMorphology",
  "feOffset",
  "feSpecularLighting",
  "feTile",
  "feTurbulence",
  "view",
  "animate",
  "set",
  "animateMotion",
  "mpath",
  "animateTransform",
  "metadata",
  "foreignObject"
];
var rootComponent = "ws:root";
var rootMeta = {
  label: "Global root",
  icon: SettingsIcon,
  presetStyle: {
    html
  }
};
var elementComponent = "ws:element";
var elementMeta = {
  label: "Element",
  // convert [object Module] to [object Object] to enable structured cloning
  presetStyle: { ...normalize_css_exports },
  initialProps: [tagProperty$1, "id", "class"],
  props: {
    [tagProperty$1]: {
      type: "string",
      control: "tag",
      required: true,
      options: tags
    }
  }
};
var collectionComponent = "ws:collection";
var collectionMeta = {
  label: "Collection",
  icon: ListViewIcon,
  contentModel: {
    category: "instance",
    children: ["instance"]
  },
  initialProps: ["data"],
  props: {
    data: {
      required: true,
      control: "json",
      type: "json"
    },
    item: {
      required: false,
      control: "text",
      type: "string"
    },
    itemKey: {
      required: false,
      control: "text",
      type: "string"
    }
  }
};
var descendantComponent = "ws:descendant";
var descendantMeta = {
  label: "Descendant",
  icon: PaintBrushIcon,
  contentModel: {
    category: "none",
    children: []
  },
  // @todo infer possible presets
  presetStyle: {},
  initialProps: ["selector"],
  props: {
    selector: {
      required: true,
      type: "string",
      control: "select",
      options: [
        " p",
        " h1",
        " h2",
        " h3",
        " h4",
        " h5",
        " h6",
        " :where(strong, b)",
        " :where(em, i)",
        " a",
        " img",
        " blockquote",
        " code",
        " :where(ul, ol)",
        " li",
        " hr"
      ]
    }
  }
};
var blockComponent = "ws:block";
var blockTemplateComponent = "ws:block-template";
var blockTemplateMeta = {
  icon: AddTemplateInstanceIcon,
  contentModel: {
    category: "none",
    children: ["instance"]
  }
};
var blockMeta = {
  label: "Content Block",
  icon: ContentBlockIcon,
  contentModel: {
    category: "instance",
    children: [blockTemplateComponent, "instance"]
  }
};
var coreMetas = {
  [rootComponent]: rootMeta,
  [elementComponent]: elementMeta,
  [collectionComponent]: collectionMeta,
  [descendantComponent]: descendantMeta,
  [blockComponent]: blockMeta,
  [blockTemplateComponent]: blockTemplateMeta
};
var isCoreComponent = (component) => component === rootComponent || component === elementComponent || component === collectionComponent || component === descendantComponent || component === blockComponent || component === blockTemplateComponent;
var ROOT_INSTANCE_ID = ":root";
var traverseInstances = (instances, instanceId, callback) => {
  const instance = instances.get(instanceId);
  if (instance === void 0) {
    return;
  }
  const skipTraversingChildren = callback(instance);
  if (skipTraversingChildren === false) {
    return;
  }
  for (const child of instance.children) {
    if (child.type === "id") {
      traverseInstances(instances, child.value, callback);
    }
  }
};
var findTreeInstanceIds = (instances, rootInstanceId) => {
  const ids = /* @__PURE__ */ new Set([rootInstanceId]);
  traverseInstances(instances, rootInstanceId, (instance) => {
    ids.add(instance.id);
  });
  return ids;
};
var parseComponentName = (componentName) => {
  const parts = componentName.split(":");
  let namespace;
  let name2;
  if (parts.length === 1) {
    [name2] = parts;
  } else {
    [namespace, name2] = parts;
  }
  return [namespace, name2];
};
var getIndexesWithinAncestors = (metas, instances, rootIds) => {
  const ancestors = /* @__PURE__ */ new Set();
  for (const meta of metas.values()) {
    if (meta.indexWithinAncestor !== void 0) {
      ancestors.add(meta.indexWithinAncestor);
    }
  }
  const indexes = /* @__PURE__ */ new Map();
  const traverseInstances2 = (instances2, instanceId, latestIndexes2 = /* @__PURE__ */ new Map()) => {
    const instance = instances2.get(instanceId);
    if (instance === void 0) {
      return;
    }
    const meta = metas.get(instance.component);
    if (ancestors.has(instance.component)) {
      latestIndexes2 = new Map(latestIndexes2);
      latestIndexes2.set(instance.component, /* @__PURE__ */ new Map());
    }
    if (instance.component === blockTemplateComponent) {
      latestIndexes2 = new Map(latestIndexes2);
      for (const key of latestIndexes2.keys()) {
        latestIndexes2.set(key, /* @__PURE__ */ new Map());
      }
    }
    if ((meta == null ? void 0 : meta.indexWithinAncestor) !== void 0) {
      const ancestorIndexes = latestIndexes2.get(meta.indexWithinAncestor);
      if (ancestorIndexes) {
        let index = ancestorIndexes.get(instance.component) ?? -1;
        index += 1;
        ancestorIndexes.set(instance.component, index);
        indexes.set(instance.id, index);
      }
    }
    for (const child of instance.children) {
      if (child.type === "id") {
        traverseInstances2(instances2, child.value, latestIndexes2);
      }
    }
  };
  const latestIndexes = /* @__PURE__ */ new Map();
  for (const instanceId of rootIds) {
    traverseInstances2(instances, instanceId, latestIndexes);
  }
  return indexes;
};
var SYSTEM_VARIABLE_ID = ":system";
var systemParameter = {
  id: SYSTEM_VARIABLE_ID,
  scopeInstanceId: ROOT_INSTANCE_ID,
  type: "parameter",
  name: "system"
};
var transpileExpression = ({
  expression,
  executable = false,
  replaceVariable
}) => {
  let root;
  try {
    root = parseExpressionAt(expression, 0, { ecmaVersion: "latest" });
  } catch (error) {
    const message = error.message;
    throw Error(`${message} in ${JSON.stringify(expression)}`);
  }
  const replacements = [];
  const replaceIdentifier = (node, assignee) => {
    const newName = replaceVariable == null ? void 0 : replaceVariable(node.name, assignee);
    if (newName) {
      replacements.push([node.start, node.end, newName]);
    }
  };
  simple(root, {
    Identifier: (node) => replaceIdentifier(node, false),
    AssignmentExpression(node) {
      simple(node.left, {
        Identifier: (node2) => replaceIdentifier(node2, true)
      });
    },
    MemberExpression(node) {
      if (executable === false || node.optional) {
        return;
      }
      if (node.computed === false) {
        const dotIndex = expression.indexOf(".", node.object.end);
        replacements.push([dotIndex, dotIndex, "?"]);
      }
      if (node.computed === true) {
        const dotIndex = expression.indexOf("[", node.object.end);
        replacements.push([dotIndex, dotIndex, "?."]);
      }
    },
    CallExpression(node) {
      if (executable === false || node.optional) {
        return;
      }
      if (node.callee.type === "MemberExpression") {
        const openParenIndex = expression.indexOf("(", node.callee.end);
        if (openParenIndex !== -1) {
          replacements.push([openParenIndex, openParenIndex, "?."]);
        }
      }
    }
  });
  replacements.sort(([leftStart], [rightStart]) => rightStart - leftStart);
  for (const [start, end, fragment] of replacements) {
    const before = expression.slice(0, start);
    const after = expression.slice(end);
    expression = before + fragment + after;
  }
  return expression;
};
var dataSourceVariablePrefix = "$ws$dataSource$";
var decodeDataVariableId = (name2) => {
  if (name2 === "$ws$system") {
    return SYSTEM_VARIABLE_ID;
  }
  if (name2.startsWith(dataSourceVariablePrefix)) {
    const encoded = name2.slice(dataSourceVariablePrefix.length);
    return encoded.replaceAll("__DASH__", "-");
  }
  return;
};
var generateExpression = ({
  expression,
  dataSources,
  usedDataSources,
  scope
}) => {
  return transpileExpression({
    expression,
    executable: true,
    replaceVariable: (identifier) => {
      const depId = decodeDataVariableId(identifier);
      let dep = depId ? dataSources.get(depId) : void 0;
      if (depId === SYSTEM_VARIABLE_ID) {
        dep = systemParameter;
      }
      if (dep) {
        usedDataSources == null ? void 0 : usedDataSources.set(dep.id, dep);
        return scope.getName(dep.id, dep.name);
      }
      return "undefined";
    }
  });
};
var executeExpression = (expression) => {
  try {
    const fn = new Function(`return (${expression})`);
    return fn();
  } catch {
  }
};
var tokenRegex = new RegExp(":(?<name>\\w+)(?<modifier>[?*]?)|(?<wildcard>(?<!:\\w+)\\*)");
var isPathnamePattern = (pathname) => tokenRegex.test(pathname);
var findPageByIdOrPath = (idOrPath, pages) => {
  if (idOrPath === "" || idOrPath === "/" || idOrPath === pages.homePage.id) {
    return pages.homePage;
  }
  return pages.pages.find(
    (page) => page.id === idOrPath || getPagePath(page.id, pages) === idOrPath
  );
};
var getPagePath = (id, pages) => {
  const foldersMap = /* @__PURE__ */ new Map();
  const childParentMap = /* @__PURE__ */ new Map();
  for (const folder of pages.folders) {
    foldersMap.set(folder.id, folder);
    for (const childId of folder.children) {
      childParentMap.set(childId, folder.id);
    }
  }
  const paths = [];
  let currentId = id;
  const allPages = [pages.homePage, ...pages.pages];
  for (const page of allPages) {
    if (page.id === id) {
      paths.push(page.path);
      currentId = childParentMap.get(page.id);
      break;
    }
  }
  while (currentId) {
    const folder = foldersMap.get(currentId);
    if (folder === void 0) {
      break;
    }
    paths.push(folder.slug);
    currentId = childParentMap.get(currentId);
  }
  return paths.reverse().join("/").replace(/\/+/g, "/");
};
var getStaticSiteMapXml = (pages, updatedAt) => {
  const allPages = [pages.homePage, ...pages.pages];
  return allPages.filter((page) => (page.meta.documentType ?? "html") === "html").filter(
    (page) => executeExpression(page.meta.excludePageFromSearch) !== true
  ).filter((page) => false === isPathnamePattern(page.path)).map((page) => ({
    path: getPagePath(page.id, pages),
    lastModified: updatedAt.split("T")[0]
  }));
};
var identifiers = reservedIdentifiers({ includeGlobalProperties: true });
var isReserved = (identifier) => identifiers.has(identifier);
var normalizeJsName = (name2) => {
  name2 = name2.replaceAll(/[^\w$]/g, "");
  if (name2.length === 0) {
    return "_";
  }
  if (/[A-Za-z_$]/.test(name2[0]) === false) {
    name2 = `_${name2}`;
  }
  if (isReserved(name2)) {
    return `${name2}_`;
  }
  return name2;
};
var createScope = (occupiedIdentifiers = [], normalizeName = normalizeJsName, separator = "_") => {
  const nameById = /* @__PURE__ */ new Map();
  const usedNames = /* @__PURE__ */ new Set();
  for (const identifier of occupiedIdentifiers) {
    usedNames.add(identifier);
  }
  const getName = (id, preferredName) => {
    const cachedName = nameById.get(id);
    if (cachedName !== void 0) {
      return cachedName;
    }
    preferredName = normalizeName(preferredName);
    let index = 0;
    let scopedName = preferredName;
    while (usedNames.has(scopedName)) {
      index += 1;
      scopedName = `${preferredName}${separator}${index}`;
    }
    nameById.set(id, scopedName);
    usedNames.add(scopedName);
    return scopedName;
  };
  return {
    getName
  };
};
var generateResources = ({
  scope,
  page,
  dataSources,
  props,
  resources
}) => {
  const usedDataSources = /* @__PURE__ */ new Map();
  let generatedRequests = "";
  for (const resource of resources.values()) {
    let generatedRequest = "";
    const resourceName = scope.getName(resource.id, resource.name);
    generatedRequest += `  const ${resourceName}: ResourceRequest = {
`;
    generatedRequest += `    name: ${JSON.stringify(resource.name)},
`;
    const url = generateExpression({
      expression: resource.url,
      dataSources,
      usedDataSources,
      scope
    });
    generatedRequest += `    url: ${url},
`;
    generatedRequest += `    searchParams: [
`;
    for (const searchParam of resource.searchParams ?? []) {
      const value = generateExpression({
        expression: searchParam.value,
        dataSources,
        usedDataSources,
        scope
      });
      generatedRequest += `      { name: "${searchParam.name}", value: ${value} },
`;
    }
    generatedRequest += `    ],
`;
    generatedRequest += `    method: "${resource.method}",
`;
    generatedRequest += `    headers: [
`;
    for (const header2 of resource.headers) {
      const value = generateExpression({
        expression: header2.value,
        dataSources,
        usedDataSources,
        scope
      });
      generatedRequest += `      { name: "${header2.name}", value: ${value} },
`;
    }
    generatedRequest += `    ],
`;
    if (resource.body !== void 0 && resource.body.length > 0) {
      const body2 = generateExpression({
        expression: resource.body,
        dataSources,
        usedDataSources,
        scope
      });
      generatedRequest += `    body: ${body2},
`;
    }
    generatedRequest += `  }
`;
    generatedRequests += generatedRequest;
  }
  let generatedVariables = "";
  for (const dataSource of usedDataSources.values()) {
    if (dataSource.type === "variable") {
      const name2 = scope.getName(dataSource.id, dataSource.name);
      const value = JSON.stringify(dataSource.value.value);
      generatedVariables += `  let ${name2} = ${value}
`;
    }
    if (dataSource.type === "parameter") {
      if (dataSource.id === page.systemDataSourceId || dataSource.id === SYSTEM_VARIABLE_ID) {
        const name2 = scope.getName(dataSource.id, dataSource.name);
        generatedVariables += `  const ${name2} = _props.system
`;
      }
    }
  }
  let generated = "";
  generated += `import type { System, ResourceRequest } from "@webstudio-is/sdk";
`;
  generated += `export const getResources = (_props: { system: System }) => {
`;
  generated += generatedVariables;
  generated += generatedRequests;
  generated += `  const _data = new Map<string, ResourceRequest>([
`;
  for (const dataSource of dataSources.values()) {
    if (dataSource.type === "resource") {
      const name2 = scope.getName(dataSource.resourceId, dataSource.name);
      generated += `    ["${name2}", ${name2}],
`;
    }
  }
  generated += `  ])
`;
  generated += `  const _action = new Map<string, ResourceRequest>([
`;
  for (const prop of props.values()) {
    if (prop.type === "resource") {
      const name2 = scope.getName(prop.value, prop.name);
      generated += `    ["${name2}", ${name2}],
`;
    }
  }
  generated += `  ])
`;
  generated += `  return { data: _data, action: _action }
`;
  generated += `}
`;
  return generated;
};
var getMethod = (value) => {
  switch (value == null ? void 0 : value.toLowerCase()) {
    case "get":
      return "get";
    case "delete":
      return "delete";
    case "put":
      return "put";
    default:
      return "post";
  }
};
var replaceFormActionsWithResources = ({
  props,
  instances,
  resources
}) => {
  var _a2, _b2;
  const formProps = /* @__PURE__ */ new Map();
  for (const prop of props.values()) {
    if (prop.name === "method" && prop.type === "string" && ((_a2 = instances.get(prop.instanceId)) == null ? void 0 : _a2.component) === "Form") {
      let data = formProps.get(prop.instanceId);
      if (data === void 0) {
        data = {};
        formProps.set(prop.instanceId, data);
      }
      data.method = prop.value;
      props.delete(prop.id);
    }
    if (prop.name === "action" && prop.type === "string" && prop.value && ((_b2 = instances.get(prop.instanceId)) == null ? void 0 : _b2.component) === "Form") {
      let data = formProps.get(prop.instanceId);
      if (data === void 0) {
        data = {};
        formProps.set(prop.instanceId, data);
      }
      data.action = prop.value;
      props.set(prop.id, {
        id: prop.id,
        instanceId: prop.instanceId,
        name: prop.name,
        type: "resource",
        value: prop.instanceId
      });
    }
  }
  for (const [instanceId, { action, method }] of formProps) {
    if (action) {
      resources.set(instanceId, {
        id: instanceId,
        name: "action",
        method: getMethod(method),
        url: JSON.stringify(action),
        headers: [
          { name: "Content-Type", value: JSON.stringify("application/json") }
        ]
      });
    }
  }
};
var generatePageMeta = ({
  globalScope,
  page,
  dataSources,
  assets
}) => {
  var _a2;
  const localScope = createScope(["system", "resources"]);
  const usedDataSources = /* @__PURE__ */ new Map();
  const titleExpression = generateExpression({
    expression: page.title,
    dataSources,
    usedDataSources,
    scope: localScope
  });
  const descriptionExpression = generateExpression({
    expression: page.meta.description ?? "undefined",
    dataSources,
    usedDataSources,
    scope: localScope
  });
  const excludePageFromSearchExpression = generateExpression({
    expression: page.meta.excludePageFromSearch ?? "undefined",
    dataSources,
    usedDataSources,
    scope: localScope
  });
  const languageExpression = generateExpression({
    expression: page.meta.language ?? "undefined",
    dataSources,
    usedDataSources,
    scope: localScope
  });
  const socialImageAssetNameExpression = JSON.stringify(
    page.meta.socialImageAssetId ? (_a2 = assets.get(page.meta.socialImageAssetId)) == null ? void 0 : _a2.name : void 0
  );
  const socialImageUrlExpression = generateExpression({
    expression: page.meta.socialImageUrl ?? "undefined",
    dataSources,
    usedDataSources,
    scope: localScope
  });
  const statusExpression = generateExpression({
    expression: page.meta.status ?? "undefined",
    dataSources,
    usedDataSources,
    scope: localScope
  });
  const redirectExpression = generateExpression({
    expression: page.meta.redirect ?? "undefined",
    dataSources,
    usedDataSources,
    scope: localScope
  });
  let customExpression = "";
  customExpression += `[
`;
  for (const customMeta of page.meta.custom ?? []) {
    if (customMeta.property.trim().length === 0) {
      continue;
    }
    const propertyExpression = JSON.stringify(customMeta.property);
    const contentExpression = generateExpression({
      expression: customMeta.content,
      dataSources,
      usedDataSources,
      scope: localScope
    });
    customExpression += `      {
`;
    customExpression += `        property: ${propertyExpression},
`;
    customExpression += `        content: ${contentExpression},
`;
    customExpression += `      },
`;
  }
  customExpression += `    ]`;
  let generated = "";
  generated += `export const getPageMeta = ({
`;
  generated += `  system,
`;
  generated += `  resources,
`;
  generated += `}: {
`;
  generated += `  system: System;
`;
  generated += `  resources: Record<string, any>;
`;
  generated += `}): PageMeta => {
`;
  for (const dataSource of usedDataSources.values()) {
    if (dataSource.type === "variable") {
      const valueName = localScope.getName(dataSource.id, dataSource.name);
      const initialValueString = JSON.stringify(dataSource.value.value);
      generated += `  let ${valueName} = ${initialValueString}
`;
      continue;
    }
    if (dataSource.type === "parameter") {
      if (dataSource.id === page.systemDataSourceId || dataSource.id === SYSTEM_VARIABLE_ID) {
        const valueName = localScope.getName(dataSource.id, dataSource.name);
        generated += `  let ${valueName} = system
`;
      }
      continue;
    }
    if (dataSource.type === "resource") {
      const valueName = localScope.getName(dataSource.id, dataSource.name);
      const resourceName = globalScope.getName(
        dataSource.resourceId,
        dataSource.name
      );
      generated += `  let ${valueName} = resources.${resourceName}
`;
      continue;
    }
  }
  generated += `  return {
`;
  generated += `    title: ${titleExpression},
`;
  generated += `    description: ${descriptionExpression},
`;
  generated += `    excludePageFromSearch: ${excludePageFromSearchExpression},
`;
  generated += `    language: ${languageExpression},
`;
  generated += `    socialImageAssetName: ${socialImageAssetNameExpression},
`;
  generated += `    socialImageUrl: ${socialImageUrlExpression},
`;
  generated += `    status: ${statusExpression},
`;
  generated += `    redirect: ${redirectExpression},
`;
  generated += `    custom: ${customExpression},
`;
  generated += `  };
`;
  generated += `};
`;
  return generated;
};
var addFontRules = ({
  sheet,
  assets,
  assetBaseUrl
}) => {
  const fontAssets = [];
  for (const asset of assets.values()) {
    if (asset.type === "font") {
      fontAssets.push(asset);
    }
  }
  const fontFaces = getFontFaces(fontAssets, { assetBaseUrl });
  for (const fontFace of fontFaces) {
    sheet.addFontFaceRule(fontFace);
  }
};
var createImageValueTransformer = (assets, { assetBaseUrl }) => (styleValue) => {
  if (styleValue.type === "image" && styleValue.value.type === "asset") {
    const asset = assets.get(styleValue.value.value);
    if (asset === void 0) {
      return { type: "keyword", value: "none" };
    }
    const url = `${assetBaseUrl}${asset.name}`;
    return {
      type: "image",
      value: {
        type: "url",
        url
      },
      hidden: styleValue.hidden
    };
  }
};
var normalizeClassName = (name2) => kebabCase(name2);
var generateCss = ({
  assets,
  instances,
  props,
  breakpoints,
  styles,
  styleSourceSelections,
  componentMetas,
  assetBaseUrl,
  atomic
}) => {
  const fontSheet = createRegularStyleSheet({ name: "ssr" });
  const presetSheet = createRegularStyleSheet({ name: "ssr" });
  const userSheet = createRegularStyleSheet({ name: "ssr" });
  addFontRules({ sheet: fontSheet, assets, assetBaseUrl });
  presetSheet.addMediaRule("presets");
  const presetClasses = /* @__PURE__ */ new Map();
  const scope = createScope([], normalizeClassName, "-");
  const tagsByComponent = /* @__PURE__ */ new Map();
  tagsByComponent.set(rootComponent, /* @__PURE__ */ new Set(["html"]));
  const tagByInstanceId = /* @__PURE__ */ new Map();
  for (const prop of props.values()) {
    if (prop.type === "string" && prop.name === "tag") {
      tagByInstanceId.set(prop.instanceId, prop.value);
    }
  }
  for (const instance of instances.values()) {
    const propTag = tagByInstanceId.get(instance.id);
    const meta = componentMetas.get(instance.component);
    const metaTag = Object.keys((meta == null ? void 0 : meta.presetStyle) ?? {}).at(0);
    let componentTags = tagsByComponent.get(instance.component);
    if (componentTags === void 0) {
      componentTags = /* @__PURE__ */ new Set();
      tagsByComponent.set(instance.component, componentTags);
    }
    const tag = instance.tag ?? propTag ?? metaTag;
    if (tag) {
      componentTags.add(tag);
    }
  }
  for (const [component, meta] of componentMetas) {
    const componentTags = tagsByComponent.get(component);
    const [_namespace, componentName] = parseComponentName(component);
    const className = `w-${scope.getName(component, meta.label ?? componentName)}`;
    const presetStyle = Object.entries(meta.presetStyle ?? {});
    if (presetStyle.length > 0) {
      presetClasses.set(component, className);
    }
    for (const [tag, styles2] of presetStyle) {
      if (!(componentTags == null ? void 0 : componentTags.has(tag))) {
        continue;
      }
      const selector = component === rootComponent ? ":root" : `${tag}.${className}`;
      const rule = presetSheet.addNestingRule(selector);
      for (const declaration of styles2) {
        rule.setDeclaration({
          breakpoint: "presets",
          selector: declaration.state ?? "",
          property: declaration.property,
          value: declaration.value
        });
      }
    }
  }
  for (const breakpoint of breakpoints.values()) {
    userSheet.addMediaRule(breakpoint.id, breakpoint);
  }
  const imageValueTransformer = createImageValueTransformer(assets, {
    assetBaseUrl
  });
  userSheet.setTransformer(imageValueTransformer);
  for (const styleDecl of styles.values()) {
    const rule = userSheet.addMixinRule(styleDecl.styleSourceId);
    rule.setDeclaration({
      breakpoint: styleDecl.breakpointId,
      selector: styleDecl.state ?? "",
      property: styleDecl.property,
      value: styleDecl.value
    });
  }
  const classes = /* @__PURE__ */ new Map();
  const parentIdByInstanceId = /* @__PURE__ */ new Map();
  for (const instance of instances.values()) {
    const presetClass = presetClasses.get(instance.component);
    if (presetClass) {
      classes.set(instance.id, [presetClass]);
    }
    for (const child of instance.children) {
      if (child.type === "id") {
        parentIdByInstanceId.set(child.value, instance.id);
      }
    }
  }
  const descendantSelectorByInstanceId = /* @__PURE__ */ new Map();
  for (const prop of props.values()) {
    if (prop.name === "selector" && prop.type === "string") {
      descendantSelectorByInstanceId.set(prop.instanceId, prop.value);
    }
  }
  const instanceByRule = /* @__PURE__ */ new Map();
  for (const selection of styleSourceSelections.values()) {
    let { instanceId } = selection;
    const { values } = selection;
    if (instanceId === ROOT_INSTANCE_ID) {
      const rule2 = userSheet.addNestingRule(`:root`);
      rule2.applyMixins(values);
      continue;
    }
    let descendantSuffix = "";
    const instance = instances.get(instanceId);
    if (instance === void 0) {
      continue;
    }
    if (instance.component === descendantComponent) {
      const parentId = parentIdByInstanceId.get(instanceId);
      const descendantSelector = descendantSelectorByInstanceId.get(instanceId);
      if (parentId && descendantSelector) {
        descendantSuffix = descendantSelector;
        instanceId = parentId;
      }
    }
    const meta = componentMetas.get(instance.component);
    const [_namespace, shortName] = parseComponentName(instance.component);
    const baseName = instance.label ?? (meta == null ? void 0 : meta.label) ?? shortName;
    const className = `w-${scope.getName(instanceId, baseName)}`;
    if (atomic === false) {
      let classList = classes.get(instanceId);
      if (classList === void 0) {
        classList = [];
        classes.set(instanceId, classList);
      }
      classList.push(className);
    }
    const rule = userSheet.addNestingRule(`.${className}`, descendantSuffix);
    rule.applyMixins(values);
    instanceByRule.set(rule, instanceId);
  }
  const fontCss = fontSheet.cssText;
  const presetCss = presetSheet.cssText.replaceAll(
    "@media all ",
    "@layer presets "
  );
  if (atomic) {
    const { cssText } = generateAtomic(userSheet, {
      getKey: (rule) => instanceByRule.get(rule),
      transformValue: imageValueTransformer,
      classes
    });
    return {
      cssText: `${fontCss}${presetCss}
${cssText}`,
      classes
    };
  }
  return {
    cssText: `${fontCss}${presetCss}
${userSheet.cssText}`,
    classes
  };
};
var tagProperty = "data-ws-tag";
var indexProperty = "data-ws-index";
var getRemixSegment = (segment) => {
  var _a2, _b2;
  if (segment === "*") {
    return "$";
  }
  const match = segment.match(/^:(?<name>\w+)(?<modifier>\*|\?)?$/);
  const name2 = (_a2 = match == null ? void 0 : match.groups) == null ? void 0 : _a2.name;
  const modifier = (_b2 = match == null ? void 0 : match.groups) == null ? void 0 : _b2.modifier;
  if (name2) {
    if (modifier === "*") {
      return "$";
    }
    if (modifier === "?") {
      return `($${name2})`;
    }
    return `$${name2}`;
  }
  return `[${segment}]`;
};
var generateRemixRoute = (pathname) => {
  if (pathname.startsWith("/")) {
    pathname = pathname.slice(1);
  }
  if (pathname === "") {
    return `_index`;
  }
  const base = pathname.split("/").map(getRemixSegment).join(".");
  const tail = pathname.endsWith("*") ? "" : "._index";
  return `${base}${tail}`;
};
var generateRemixParams = (pathname) => {
  var _a2, _b2;
  const name2 = (_b2 = (_a2 = pathname.match(/:(?<name>\w+)\*$/)) == null ? void 0 : _a2.groups) == null ? void 0 : _b2.name;
  let generated = "";
  generated += `type Params = Record<string, string | undefined>;
`;
  generated += `export const getRemixParams = ({ ...params }: Params): Params => {
`;
  if (name2) {
    generated += `  params["${name2}"] = params["*"]
`;
    generated += `  delete params["*"]
`;
  }
  if (pathname.endsWith("/*")) {
    generated += `  params[0] = params["*"]
`;
    generated += `  delete params["*"]
`;
  }
  generated += `  return params
`;
  generated += `}
`;
  return generated;
};
var normalizeProps = ({
  props,
  assetBaseUrl,
  assets,
  uploadingImageAssets,
  pages,
  source
}) => {
  const newProps = [];
  for (const prop of props) {
    if (prop.type === "asset") {
      const assetId = prop.value;
      const asset = assets.get(assetId) ?? uploadingImageAssets.find((asset2) => asset2.id === assetId);
      if (asset === void 0) {
        continue;
      }
      const propBase = {
        id: prop.id,
        name: prop.name,
        required: prop.required,
        instanceId: prop.instanceId
      };
      if (prop.name === "width" && asset.type === "image") {
        newProps.push({
          ...propBase,
          type: "number",
          value: asset.meta.width
        });
        continue;
      }
      if (prop.name === "height" && asset.type === "image") {
        newProps.push({
          ...propBase,
          type: "number",
          value: asset.meta.height
        });
        continue;
      }
      if (prop.name === "alt" && asset.type === "image") {
        newProps.push({
          ...propBase,
          type: "string",
          value: asset.description ?? ""
        });
        continue;
      }
      newProps.push({
        ...propBase,
        type: "string",
        value: `${assetBaseUrl}${asset.name}`
      });
      continue;
    }
    if (prop.type === "page") {
      let idProp;
      const pageId = typeof prop.value === "string" ? prop.value : prop.value.pageId;
      const page = findPageByIdOrPath(pageId, pages);
      if (page === void 0) {
        continue;
      }
      if (typeof prop.value !== "string") {
        const { instanceId } = prop.value;
        idProp = props.find(
          (prop2) => prop2.instanceId === instanceId && prop2.name === "id"
        );
      }
      const path = getPagePath(page.id, pages);
      const url = new URL(path, "https://any-valid.url");
      let value = url.pathname;
      if ((idProp == null ? void 0 : idProp.type) === "string") {
        const hash2 = idProp.value;
        url.hash = encodeURIComponent(hash2);
        value = `${url.pathname}${url.hash}`;
      }
      newProps.push({
        id: prop.id,
        name: prop.name,
        required: prop.required,
        instanceId: prop.instanceId,
        type: "string",
        value
      });
      continue;
    }
    newProps.push(prop);
  }
  return newProps;
};
var showAttribute = "data-ws-show";
var attributeNameStartChar = "A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD";
var attributeNameChar = attributeNameStartChar + ":\\-0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040";
var validAttributeNameRegex = new RegExp(
  // eslint-disable-next-line no-misleading-character-class
  "^[" + attributeNameStartChar + "][" + attributeNameChar + "]*$"
);
var illegalAttributeNameCache = /* @__PURE__ */ new Map();
var validatedAttributeNameCache = /* @__PURE__ */ new Map();
var isAttributeNameSafe = (attributeName) => {
  if (validatedAttributeNameCache.has(attributeName)) {
    return true;
  }
  if (illegalAttributeNameCache.has(attributeName)) {
    return false;
  }
  if (validAttributeNameRegex.test(attributeName)) {
    validatedAttributeNameCache.set(attributeName, true);
    return true;
  }
  illegalAttributeNameCache.set(attributeName, true);
  return false;
};
var generateCollectionIterationCode = ({
  dataExpression,
  keyVariable,
  itemVariable
}) => {
  return `Object.entries(
  // @ts-ignore
  ${dataExpression} ?? {}
).map(([_key, ${itemVariable}]: any) => {
  const ${keyVariable} = Array.isArray(${dataExpression}) ? Number(_key) : _key;
  return`;
};
var standardAttributesToReactProps = {
  "accept-charset": "acceptCharset",
  accesskey: "accessKey",
  allowfullscreen: "allowFullScreen",
  autocapitalize: "autoCapitalize",
  autocomplete: "autoComplete",
  autocorrect: "autoCorrect",
  autofocus: "autoFocus",
  autoplay: "autoPlay",
  charset: "charSet",
  class: "className",
  colspan: "colSpan",
  contenteditable: "contentEditable",
  crossorigin: "crossOrigin",
  datetime: "dateTime",
  enctype: "encType",
  enterkeyhint: "enterKeyHint",
  fetchpriority: "fetchPriority",
  for: "htmlFor",
  formmethod: "formMethod",
  formaction: "formAction",
  formenctype: "formEncType",
  formnovalidate: "formNoValidate",
  formtarget: "formTarget",
  hreflang: "hrefLang",
  "http-equiv": "httpEquiv",
  imagesizes: "imageSizes",
  imagesrcset: "imageSrcSet",
  inputmode: "inputMode",
  itemid: "itemID",
  itemprop: "itemProp",
  itemref: "itemRef",
  itemscope: "itemScope",
  itemtype: "itemType",
  maxlength: "maxLength",
  minlength: "minLength",
  nomodule: "noModule",
  novalidate: "noValidate",
  playsinline: "playsInline",
  readonly: "readOnly",
  referrerpolicy: "referrerPolicy",
  rowspan: "rowSpan",
  spellcheck: "spellCheck",
  srcdoc: "srcDoc",
  srclang: "srcLang",
  srcset: "srcSet",
  tabindex: "tabIndex",
  usemap: "useMap",
  "alignment-baseline": "alignmentBaseline",
  "baseline-shift": "baselineShift",
  "clip-path": "clipPath",
  "clip-rule": "clipRule",
  "color-interpolation": "colorInterpolation",
  "color-interpolation-filters": "colorInterpolationFilters",
  "color-profile": "colorProfile",
  "color-rendering": "colorRendering",
  "dominant-baseline": "dominantBaseline",
  "enable-background": "enableBackground",
  "fill-opacity": "fillOpacity",
  "fill-rule": "fillRule",
  "flood-opacity": "floodOpacity",
  "flood-color": "floodColor",
  "font-family": "fontFamily",
  "font-size": "fontSize",
  "font-size-adjust": "fontSizeAdjust",
  "font-stretch": "fontStretch",
  "font-style": "fontStyle",
  "font-variant": "fontVariant",
  "font-weight": "fontWeight",
  "glyph-orientation-horizontal": "glyphOrientationHorizontal",
  "glyph-orientation-vertical": "glyphOrientationVertical",
  "image-rendering": "imageRendering",
  "letter-spacing": "letterSpacing",
  "lighting-color": "lightingColor",
  "marker-end": "markerEnd",
  "marker-mid": "markerMid",
  "marker-start": "markerStart",
  "pointer-events": "pointerEvents",
  popovertarget: "popoverTarget",
  popovertargetaction: "popoverTargetAction",
  "shape-rendering": "shapeRendering",
  "stop-color": "stopColor",
  "stop-opacity": "stopOpacity",
  "stroke-dasharray": "strokeDasharray",
  "stroke-dashoffset": "strokeDashoffset",
  "stroke-linecap": "strokeLinecap",
  "stroke-linejoin": "strokeLinejoin",
  "stroke-miterlimit": "strokeMiterlimit",
  "stroke-width": "strokeWidth",
  "stroke-opacity": "strokeOpacity",
  "text-anchor": "textAnchor",
  "text-decoration": "textDecoration",
  "text-rendering": "textRendering",
  "unicode-bidi": "unicodeBidi",
  "word-spacing": "wordSpacing",
  "writing-mode": "writingMode",
  "xlink:actuate": "xlinkActuate",
  "xlink:arcrole": "xlinkArcrole",
  "xlink:href": "xlinkHref",
  "xlink:role": "xlinkRole",
  "xlink:show": "xlinkShow",
  "xlink:title": "xlinkTitle",
  "xlink:type": "xlinkType",
  "xml:base": "xmlBase",
  "xml:lang": "xmlLang",
  "xml:space": "xmlSpace",
  dirname: "dirName"
};
var generateAction = ({
  scope,
  prop,
  dataSources,
  usedDataSources
}) => {
  const setters = /* @__PURE__ */ new Set();
  let args = [];
  let assignersCode = "";
  for (const value of prop.value) {
    args = value.args;
    assignersCode += transpileExpression({
      expression: value.code,
      executable: true,
      replaceVariable: (identifier, assignee) => {
        if (args == null ? void 0 : args.includes(identifier)) {
          return;
        }
        const depId = decodeDataVariableId(identifier);
        const dep = depId ? dataSources.get(depId) : void 0;
        if (dep) {
          usedDataSources.set(dep.id, dep);
          if (assignee) {
            setters.add(dep);
          }
          const valueName = scope.getName(dep.id, dep.name);
          return valueName;
        }
        console.error(`Unknown dependency "${identifier}"`);
      }
    });
    assignersCode += `
`;
  }
  let settersCode = "";
  for (const dataSource of setters) {
    const valueName = scope.getName(dataSource.id, dataSource.name);
    const setterName = scope.getName(
      `set$${dataSource.id}`,
      `set$${dataSource.name}`
    );
    settersCode += `${setterName}(${valueName})
`;
  }
  const argsList = args.map((arg) => `${arg}: any`).join(", ");
  let generated = "";
  generated += `(${argsList}) => {
`;
  generated += assignersCode;
  generated += settersCode;
  generated += `}`;
  return generated;
};
var generatePropValue = ({
  scope,
  prop,
  dataSources,
  usedDataSources
}) => {
  if (prop.type === "asset" || prop.type === "page") {
    return;
  }
  if (prop.type === "string" || prop.type === "number" || prop.type === "boolean" || prop.type === "string[]" || prop.type === "json" || prop.type === "animationAction") {
    return JSON.stringify(prop.value);
  }
  if (prop.type === "parameter") {
    const dataSource = dataSources.get(prop.value);
    if (dataSource === void 0) {
      return;
    }
    usedDataSources.set(dataSource.id, dataSource);
    return scope.getName(dataSource.id, dataSource.name);
  }
  if (prop.type === "expression") {
    return generateExpression({
      expression: prop.value,
      dataSources,
      usedDataSources,
      scope
    });
  }
  if (prop.type === "action") {
    return generateAction({ scope, prop, dataSources, usedDataSources });
  }
  if (prop.type === "resource") {
    return JSON.stringify(scope.getName(prop.value, prop.name));
  }
};
var generateJsxElement = ({
  context = "jsx",
  scope,
  metas,
  tagsOverrides,
  instance,
  props,
  dataSources,
  usedDataSources,
  indexesWithinAncestors,
  children,
  classesMap
}) => {
  var _a2;
  if (instance.component === descendantComponent) {
    return "";
  }
  const meta = metas.get(instance.component);
  const hasTags = Object.keys((meta == null ? void 0 : meta.presetStyle) ?? {}).length > 0;
  let generatedProps = "";
  const index = indexesWithinAncestors.get(instance.id);
  if (index !== void 0) {
    generatedProps += `
${indexProperty}="${index}"`;
  }
  if (instance.tag !== void 0 && instance.component !== elementComponent) {
    generatedProps += `
${tagProperty}=${JSON.stringify(instance.tag)}`;
  }
  let conditionValue;
  let collectionDataValue;
  let collectionItemValue;
  let collectionItemKeyValue;
  let classNameValue;
  for (const prop of props.values()) {
    if (prop.instanceId !== instance.id) {
      continue;
    }
    const propValue = generatePropValue({
      scope,
      prop,
      dataSources,
      usedDataSources
    });
    if (isAttributeNameSafe(prop.name) === false) {
      continue;
    }
    let name2 = prop.name;
    if (hasTags && !((_a2 = meta == null ? void 0 : meta.props) == null ? void 0 : _a2[prop.name])) {
      name2 = standardAttributesToReactProps[prop.name] ?? prop.name;
    }
    if (prop.name === showAttribute) {
      if (propValue === "true") {
        continue;
      }
      if (propValue === "false") {
        return "";
      }
      conditionValue = propValue;
      continue;
    }
    if (instance.component === collectionComponent) {
      if (prop.name === "data") {
        collectionDataValue = propValue;
      }
      if (prop.name === "item") {
        collectionItemValue = propValue;
      }
      if (prop.name === "itemKey") {
        collectionItemKeyValue = propValue;
      }
      continue;
    }
    if (name2 === "className" && propValue !== void 0) {
      classNameValue = propValue;
      continue;
    }
    if (propValue !== void 0) {
      generatedProps += `
${name2}={${propValue}}`;
    }
  }
  const classMapArray = classesMap == null ? void 0 : classesMap.get(instance.id);
  if (classMapArray || classNameValue) {
    let classNameTemplate = classMapArray ? classMapArray.join(" ") : "";
    if (classNameValue) {
      if (classNameTemplate) {
        classNameTemplate += " ";
      }
      classNameTemplate += "${" + classNameValue + "}";
    }
    generatedProps += "\nclassName={`" + classNameTemplate + "`}";
  }
  let generatedElement = "";
  if (instance.component === blockTemplateComponent) {
    return "";
  }
  if (instance.component === collectionComponent) {
    if (collectionDataValue === void 0 || collectionItemValue === void 0) {
      return "";
    }
    const indexVariable = scope.getName(`${instance.id}-index`, "index");
    const keyVariable = collectionItemKeyValue ?? indexVariable;
    generatedElement += `{${generateCollectionIterationCode({
      dataExpression: collectionDataValue,
      keyVariable,
      itemVariable: collectionItemValue
    })} (
`;
    generatedElement += `<Fragment key={${keyVariable}}>
`;
    generatedElement += children;
    generatedElement += `</Fragment>
`;
    generatedElement += `)
`;
    generatedElement += `})
`;
    generatedElement += `}
`;
  } else if (instance.component === blockComponent) {
    generatedElement += children;
  } else {
    let componentVariable;
    if (instance.component === elementComponent) {
      componentVariable = instance.tag ?? "div";
      const componentDescriptor = tagsOverrides == null ? void 0 : tagsOverrides[componentVariable];
      if (componentDescriptor !== void 0) {
        const [_importSource, importSpecifier] = componentDescriptor.split(":");
        componentVariable = scope.getName(componentDescriptor, importSpecifier);
      }
    } else {
      const [_namespace, shortName] = parseComponentName(instance.component);
      componentVariable = scope.getName(instance.component, shortName);
    }
    if (instance.children.length === 0) {
      generatedElement += `<${componentVariable}${generatedProps} />
`;
    } else {
      generatedElement += `<${componentVariable}${generatedProps}>
`;
      generatedElement += children;
      generatedElement += `</${componentVariable}>
`;
    }
  }
  if (conditionValue) {
    let conditionalElement = "";
    let before = "";
    let after = "";
    if (context === "jsx") {
      before = "{";
      after = "}";
    }
    conditionalElement += `${before}(${conditionValue}) &&
`;
    if (instance.component === collectionComponent) {
      conditionalElement += "<>\n";
      conditionalElement += generatedElement;
      conditionalElement += "</>\n";
    } else {
      conditionalElement += generatedElement;
    }
    conditionalElement += `${after}
`;
    return conditionalElement;
  }
  return generatedElement;
};
var generateJsxChildren = ({
  scope,
  metas,
  tagsOverrides,
  children,
  instances,
  props,
  dataSources,
  usedDataSources,
  indexesWithinAncestors,
  classesMap,
  excludePlaceholders
}) => {
  let generatedChildren = "";
  for (const child of children) {
    if (child.type === "text") {
      if (excludePlaceholders && child.placeholder === true) {
        continue;
      }
      generatedChildren += child.value.split("\n").map((line) => `{${JSON.stringify(line)}}
`).join(`<br />
`);
      continue;
    }
    if (child.type === "expression") {
      const expression = generateExpression({
        expression: child.value,
        dataSources,
        usedDataSources,
        scope
      });
      generatedChildren = `{${expression}}
`;
      continue;
    }
    if (child.type === "id") {
      const instanceId = child.value;
      const instance = instances.get(instanceId);
      if (instance === void 0) {
        continue;
      }
      generatedChildren += generateJsxElement({
        context: "jsx",
        scope,
        metas,
        tagsOverrides,
        instance,
        props,
        dataSources,
        usedDataSources,
        indexesWithinAncestors,
        classesMap,
        children: generateJsxChildren({
          classesMap,
          scope,
          metas,
          tagsOverrides,
          children: instance.children,
          instances,
          props,
          dataSources,
          usedDataSources,
          indexesWithinAncestors,
          excludePlaceholders
        })
      });
      continue;
    }
  }
  return generatedChildren;
};
var generateWebstudioComponent = ({
  scope,
  name: name2,
  rootInstanceId,
  parameters,
  instances,
  props,
  dataSources,
  metas,
  tagsOverrides,
  classesMap
}) => {
  const instance = instances.get(rootInstanceId);
  const indexesWithinAncestors = getIndexesWithinAncestors(metas, instances, [
    rootInstanceId
  ]);
  const usedDataSources = /* @__PURE__ */ new Map();
  let generatedJsx = "<></>\n";
  if (instance) {
    generatedJsx = generateJsxElement({
      context: "expression",
      scope,
      metas,
      tagsOverrides,
      instance,
      props,
      dataSources,
      usedDataSources,
      indexesWithinAncestors,
      classesMap,
      children: generateJsxChildren({
        scope,
        metas,
        tagsOverrides,
        children: instance.children,
        instances,
        props,
        dataSources,
        usedDataSources,
        indexesWithinAncestors,
        classesMap
      })
    });
  }
  let generatedProps = "";
  let generatedParameters = "";
  const uniqueParameters = new Set(
    parameters.map((parameter) => parameter.name)
  );
  if (parameters.length > 0) {
    let generatedPropsType = "";
    for (const parameterName of uniqueParameters) {
      generatedPropsType += `${parameterName}: any; `;
    }
    generatedProps = `_props: { ${generatedPropsType}}`;
    for (const parameter of parameters) {
      const dataSource = usedDataSources.get(parameter.value);
      if (dataSource) {
        const valueName = scope.getName(dataSource.id, dataSource.name);
        generatedParameters += `const ${valueName} = _props.${parameter.name};
`;
      }
    }
  }
  let generatedDataSources = "";
  for (const dataSource of usedDataSources.values()) {
    if (dataSource.type === "variable") {
      const valueName = scope.getName(dataSource.id, dataSource.name);
      const setterName = scope.getName(
        `set$${dataSource.id}`,
        `set$${dataSource.name}`
      );
      const initialValue = dataSource.value.value;
      const initialValueString = JSON.stringify(initialValue);
      generatedDataSources += `let [${valueName}, ${setterName}] = useVariableState<any>(${initialValueString})
`;
    }
    if (dataSource.type === "resource") {
      const valueName = scope.getName(dataSource.id, dataSource.name);
      const resourceName = scope.getName(
        dataSource.resourceId,
        dataSource.name
      );
      const resourceNameString = JSON.stringify(resourceName);
      generatedDataSources += `let ${valueName} = useResource(${resourceNameString})
`;
    }
  }
  let generatedComponent = "";
  generatedComponent += `const ${name2} = (${generatedProps}) => {
`;
  generatedComponent += `${generatedParameters}`;
  generatedComponent += `${generatedDataSources}`;
  generatedComponent += `return ${generatedJsx}`;
  generatedComponent += `}
`;
  return generatedComponent;
};
const BOOLEAN_ATTRIBUTES = /* @__PURE__ */ new Set([
  "async",
  "autofocus",
  "autoplay",
  "checked",
  "contenteditable",
  "controls",
  "default",
  "defer",
  "disabled",
  "formnovalidate",
  "hidden",
  "ismap",
  "itemscope",
  "loop",
  "multiple",
  "muted",
  "nomodule",
  "novalidate",
  "open",
  "playsinline",
  "readonly",
  "required",
  "reversed",
  "scoped",
  "selected",
  "truespeed"
]);
const isBooleanAttr = (name2) => BOOLEAN_ATTRIBUTES.has(name2.toLowerCase());
function* walkChildNodes(node) {
  if (defaultTreeAdapter.isCommentNode(node) || defaultTreeAdapter.isTextNode(node) || defaultTreeAdapter.isDocumentTypeNode(node)) {
    throw new Error("Unsupported node type");
  }
  for (const childNode of node.childNodes) {
    if (defaultTreeAdapter.isCommentNode(childNode)) {
      continue;
    }
    if (defaultTreeAdapter.isTextNode(childNode)) {
      yield { type: "text", value: childNode.value };
      continue;
    }
    if (false === defaultTreeAdapter.isElementNode(childNode)) {
      continue;
    }
    const attributes = childNode.attrs.map((attr) => [
      attr.name,
      attr.value
    ]);
    yield { type: "element-start", tagName: childNode.tagName, attributes };
    yield* walkChildNodes(childNode);
    yield { type: "element-end", tagName: childNode.tagName };
  }
}
const convertStyleString = (style) => {
  const styles = style.split(";").map((style2) => style2.trim()).map((style2) => style2.split(":").map((part) => part.trim()));
  const res = {};
  for (const [name2, value] of styles) {
    res[camelCase(name2)] = value;
  }
  return JSON.stringify(res);
};
const escape = (value) => JSON.stringify(value);
const toAttrString = (name2, value) => {
  const attName = name2.toLowerCase();
  const jsxName = attName === "class" ? "className" : attName;
  if (value === "" && isBooleanAttr(attName)) {
    return `${jsxName}`;
  }
  if (attName === "style") {
    return `${jsxName}={${convertStyleString(value)}}`;
  }
  return `${jsxName}={${escape(value)}}`;
};
const attributesToString = (attributes) => attributes.map(([attName, value]) => ` ${toAttrString(attName, value)}`).join("");
const convertTagName = (tagName) => {
  const tag = tagName.toLowerCase();
  if (tag === "script") {
    return "Script";
  }
  if (tag === "style") {
    return "Style";
  }
  return tag;
};
const htmlToJsx = (html2) => {
  const parsedHtml = parseFragment(html2, { scriptingEnabled: false });
  let result = "";
  for (const walkNode of walkChildNodes(parsedHtml)) {
    switch (walkNode.type) {
      case "text": {
        const escapedValue = escape(walkNode.value);
        const re = /^\s$/g;
        if (re.test(walkNode.value)) {
          break;
        }
        result += escapedValue ? "{" + escapedValue + "}" : "";
        break;
      }
      case "element-start": {
        const tag = convertTagName(walkNode.tagName);
        result += `<${tag}${attributesToString(walkNode.attributes)}>`;
        break;
      }
      case "element-end": {
        result += `</${convertTagName(walkNode.tagName)}>`;
        break;
      }
    }
  }
  return result;
};
const o$H = {
  category: "general",
  description: "Slot is a container for content that you want to reference across the project. Changes made to a Slot's children will be reflected in all other instances of that Slot.",
  icon: SlotComponentIcon,
  order: 4
};
const t$i = {};
const e$u = {
  className: {
    required: false,
    control: "text",
    type: "string",
    description: ""
  },
  clientOnly: { required: false, control: "boolean", type: "boolean" },
  code: { required: true, control: "text", type: "string" },
  executeScriptOnCanvas: {
    required: false,
    control: "boolean",
    type: "boolean"
  }
};
const a$6 = {
  category: "general",
  label: "HTML Embed",
  description: "Used to add HTML code to the page, such as an SVG or script.",
  icon: EmbedIcon,
  order: 3,
  contentModel: {
    category: "instance",
    children: [descendantComponent]
  },
  presetStyle: {
    div: [
      {
        property: "display",
        value: { type: "keyword", value: "contents" }
      },
      {
        property: "white-space-collapse",
        value: { type: "keyword", value: "collapse" }
      }
    ]
  },
  initialProps: ["class", "clientOnly", "executeScriptOnCanvas"],
  props: {
    ...e$u,
    clientOnly: {
      ...e$u.clientOnly,
      description: "Activate it for any scripts that can mutate the DOM or introduce interactivity. This only affects the published site."
    },
    executeScriptOnCanvas: {
      ...e$u.executeScriptOnCanvas,
      label: "Run scripts on canvas",
      description: "Dangerously allow script execution on canvas without switching to preview mode. This only affects build mode, but may result in unwanted side effects inside builder!"
    },
    code: {
      required: true,
      control: "code",
      language: "html",
      type: "string"
    }
  }
};
const t$h = {
  code: { required: true, control: "text", type: "string" }
};
const a$5 = {
  icon: MarkdownEmbedIcon,
  contentModel: {
    category: "instance",
    children: [descendantComponent]
  },
  presetStyle: {
    div: [
      {
        property: "display",
        value: { type: "keyword", value: "contents" }
      },
      {
        property: "white-space-collapse",
        value: { type: "keyword", value: "collapse" }
      }
    ]
  },
  initialProps: ["class"],
  props: {
    ...t$h,
    code: {
      required: true,
      control: "code",
      language: "markdown",
      type: "string"
    }
  }
};
var div = [
  { property: "box-sizing", value: { type: "keyword", value: "border-box" } }
];
var address = div;
var article = div;
var aside = div;
var figure = div;
var footer = div;
var header = div;
var main$1 = div;
var nav = div;
var section = div;
var form = div;
var label = div;
var time = div;
var h1 = div;
var h2 = div;
var h3 = div;
var h4 = div;
var h5 = div;
var h6 = div;
var i$a = div;
var img = div;
var a$4 = div;
var li = div;
var ul = div;
var ol = div;
var p$8 = div;
var span = div;
var body = [
  { property: "margin-top", value: { type: "unit", unit: "number", value: 0 } },
  {
    property: "margin-right",
    value: { type: "unit", unit: "number", value: 0 }
  },
  {
    property: "margin-bottom",
    value: { type: "unit", unit: "number", value: 0 }
  },
  {
    property: "margin-left",
    value: { type: "unit", unit: "number", value: 0 }
  },
  { property: "box-sizing", value: { type: "keyword", value: "border-box" } },
  {
    property: "-webkit-font-smoothing",
    value: { type: "keyword", value: "antialiased" }
  },
  {
    property: "-moz-osx-font-smoothing",
    value: { type: "keyword", value: "grayscale" }
  }
];
var hr = [
  { property: "height", value: { type: "unit", unit: "number", value: 0 } },
  { property: "color", value: { type: "keyword", value: "inherit" } },
  { property: "box-sizing", value: { type: "keyword", value: "border-box" } }
];
var b$5 = [
  {
    property: "font-weight",
    value: { type: "unit", unit: "number", value: 700 }
  },
  { property: "box-sizing", value: { type: "keyword", value: "border-box" } }
];
var code = [
  {
    property: "font-family",
    value: {
      type: "fontFamily",
      value: [
        "ui-monospace",
        "SFMono-Regular",
        "Consolas",
        "Liberation Mono",
        "Menlo",
        "monospace"
      ]
    }
  },
  { property: "font-size", value: { type: "unit", unit: "em", value: 1 } },
  { property: "box-sizing", value: { type: "keyword", value: "border-box" } }
];
var sub = [
  { property: "font-size", value: { type: "unit", unit: "%", value: 75 } },
  {
    property: "line-height",
    value: { type: "unit", unit: "number", value: 0 }
  },
  { property: "position", value: { type: "keyword", value: "relative" } },
  { property: "vertical-align", value: { type: "keyword", value: "baseline" } },
  { property: "box-sizing", value: { type: "keyword", value: "border-box" } },
  { property: "bottom", value: { type: "unit", unit: "em", value: -0.25 } }
];
var sup = [
  { property: "font-size", value: { type: "unit", unit: "%", value: 75 } },
  {
    property: "line-height",
    value: { type: "unit", unit: "number", value: 0 }
  },
  { property: "position", value: { type: "keyword", value: "relative" } },
  { property: "vertical-align", value: { type: "keyword", value: "baseline" } },
  { property: "box-sizing", value: { type: "keyword", value: "border-box" } },
  { property: "top", value: { type: "unit", unit: "em", value: -0.5 } }
];
var input = [
  { property: "font-family", value: { type: "keyword", value: "inherit" } },
  { property: "font-size", value: { type: "unit", unit: "%", value: 100 } },
  {
    property: "line-height",
    value: { type: "unit", unit: "number", value: 1.15 }
  },
  { property: "margin-top", value: { type: "unit", unit: "number", value: 0 } },
  {
    property: "margin-right",
    value: { type: "unit", unit: "number", value: 0 }
  },
  {
    property: "margin-bottom",
    value: { type: "unit", unit: "number", value: 0 }
  },
  {
    property: "margin-left",
    value: { type: "unit", unit: "number", value: 0 }
  },
  { property: "box-sizing", value: { type: "keyword", value: "border-box" } },
  { property: "border-top-style", value: { type: "keyword", value: "solid" } },
  {
    property: "border-right-style",
    value: { type: "keyword", value: "solid" }
  },
  {
    property: "border-bottom-style",
    value: { type: "keyword", value: "solid" }
  },
  { property: "border-left-style", value: { type: "keyword", value: "solid" } }
];
var textarea = input;
var radio = [
  { property: "font-family", value: { type: "keyword", value: "inherit" } },
  { property: "font-size", value: { type: "unit", unit: "%", value: 100 } },
  {
    property: "line-height",
    value: { type: "unit", unit: "number", value: 1.15 }
  },
  { property: "margin-top", value: { type: "unit", unit: "number", value: 0 } },
  {
    property: "margin-right",
    value: { type: "unit", unit: "number", value: 0 }
  },
  {
    property: "margin-bottom",
    value: { type: "unit", unit: "number", value: 0 }
  },
  {
    property: "margin-left",
    value: { type: "unit", unit: "number", value: 0 }
  },
  { property: "box-sizing", value: { type: "keyword", value: "border-box" } },
  { property: "border-top-style", value: { type: "keyword", value: "none" } },
  { property: "border-right-style", value: { type: "keyword", value: "none" } },
  {
    property: "border-bottom-style",
    value: { type: "keyword", value: "none" }
  },
  { property: "border-left-style", value: { type: "keyword", value: "none" } }
];
var checkbox = radio;
var button = [
  { property: "font-family", value: { type: "keyword", value: "inherit" } },
  { property: "font-size", value: { type: "unit", unit: "%", value: 100 } },
  {
    property: "line-height",
    value: { type: "unit", unit: "number", value: 1.15 }
  },
  { property: "margin-top", value: { type: "unit", unit: "number", value: 0 } },
  {
    property: "margin-right",
    value: { type: "unit", unit: "number", value: 0 }
  },
  {
    property: "margin-bottom",
    value: { type: "unit", unit: "number", value: 0 }
  },
  {
    property: "margin-left",
    value: { type: "unit", unit: "number", value: 0 }
  },
  { property: "box-sizing", value: { type: "keyword", value: "border-box" } },
  { property: "border-top-style", value: { type: "keyword", value: "solid" } },
  {
    property: "border-right-style",
    value: { type: "keyword", value: "solid" }
  },
  {
    property: "border-bottom-style",
    value: { type: "keyword", value: "solid" }
  },
  { property: "border-left-style", value: { type: "keyword", value: "solid" } },
  { property: "text-transform", value: { type: "keyword", value: "none" } }
];
var select = button;
const o$G = {};
const i$9 = {
  presetStyle: { body },
  initialProps: ["id", "class"],
  props: o$G
};
const t$g = {
  tag: { required: false, control: "text", type: "string" }
};
const g$3 = {
  presetStyle: {
    div,
    address,
    article,
    aside,
    figure,
    footer,
    header,
    main: main$1,
    nav,
    section
  },
  initialProps: ["tag", "id", "class"],
  props: {
    ...t$g,
    tag: {
      required: true,
      control: "tag",
      type: "string",
      options: [
        "div",
        "header",
        "footer",
        "nav",
        "main",
        "section",
        "article",
        "aside",
        "address",
        "figure",
        "span"
      ]
    }
  }
};
const t$f = {
  tag: { required: false, control: "text", type: "string" }
};
const n$6 = {
  icon: TextIcon,
  presetStyle: {
    div: [
      ...div,
      {
        property: "min-height",
        value: { type: "unit", unit: "em", value: 1 }
      }
    ]
  },
  initialProps: ["tag", "id", "class"],
  props: {
    ...t$f,
    tag: {
      required: true,
      control: "tag",
      type: "string",
      options: ["div", "cite", "figcaption", "span"]
    }
  }
};
const t$e = {
  tag: { required: false, control: "text", type: "string" }
};
const m$9 = {
  presetStyle: {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6
  },
  initialProps: ["tag", "id", "class"],
  props: {
    ...t$e,
    tag: {
      required: true,
      control: "tag",
      type: "string",
      options: ["h1", "h2", "h3", "h4", "h5", "h6"]
    }
  }
};
const o$F = {};
const i$8 = {
  presetStyle: { p: p$8 },
  initialProps: ["id", "class"],
  props: o$F
};
const e$t = {
  download: {
    required: false,
    control: "boolean",
    type: "boolean",
    description: "Whether to download the resource instead of navigating to it, and its filename if so"
  },
  prefetch: {
    required: false,
    control: "select",
    type: "string",
    options: ["none", "intent", "render", "viewport"]
  },
  preventScrollReset: { required: false, control: "boolean", type: "boolean" },
  reloadDocument: { required: false, control: "boolean", type: "boolean" },
  replace: { required: false, control: "boolean", type: "boolean" },
  target: {
    required: false,
    control: "select",
    type: "string",
    options: ["_self", "_blank", "_parent", "_top"],
    description: "Navigable for form submission"
  }
};
const t$d = {
  a: [
    ...a$4,
    {
      property: "display",
      value: { type: "keyword", value: "inline-block" }
    }
  ]
}, p$7 = {
  presetStyle: t$d,
  states: [{ label: "Current page", selector: "[aria-current=page]" }],
  initialProps: ["id", "class", "href", "target", "prefetch", "download"],
  props: {
    ...e$t,
    href: {
      type: "string",
      control: "url",
      required: false
    }
  }
};
const a$3 = p$7;
const o$E = {};
const e$s = {
  label: "Text",
  icon: PaintBrushIcon,
  presetStyle: { span },
  initialProps: ["id", "class"],
  props: o$E
};
const o$D = {};
const p$6 = {
  label: "Bold Text",
  presetStyle: { b: b$5 },
  initialProps: ["id", "class"],
  props: o$D
};
const o$C = {};
const e$r = {
  label: "Italic Text",
  presetStyle: { i: i$a },
  initialProps: ["id", "class"],
  props: o$C
};
const o$B = {};
const o$A = {
  label: "Superscript Text",
  presetStyle: { sup },
  initialProps: ["id", "class"],
  props: o$B
};
const o$z = {};
const s$4 = {
  label: "Subscript Text",
  presetStyle: { sub },
  initialProps: ["id", "class"],
  props: o$z
};
const o$y = {};
const e$q = {
  presetStyle: { button },
  initialProps: ["id", "class", "type", "aria-label"],
  props: o$y
};
const o$x = {};
const p$5 = {
  input: [
    ...input,
    {
      property: "display",
      value: { type: "keyword", value: "block" }
    }
  ]
}, l$5 = {
  label: "Text Input",
  presetStyle: p$5,
  initialProps: [
    "id",
    "class",
    "name",
    "value",
    "type",
    "placeholder",
    "required",
    "autofocus"
  ],
  props: o$x
};
const e$p = {
  state: {
    description: "Use this property to reveal the Success and Error states on the canvas so they can be styled. The Initial state is displayed when the page first opens. The Success and Error states are displayed depending on whether the Form submits successfully or unsuccessfully.",
    required: false,
    control: "radio",
    type: "string",
    defaultValue: "initial",
    options: ["initial", "success", "error"]
  }
};
const c$4 = {
  label: "Webhook Form",
  icon: WebhookFormIcon,
  presetStyle: {
    form
  },
  states: [
    { selector: "[data-state=error]", label: "Error" },
    { selector: "[data-state=success]", label: "Success" }
  ],
  initialProps: ["id", "class", "state", "action"],
  props: {
    ...e$p,
    action: {
      type: "resource",
      control: "resource",
      description: "The URI of a program that processes the information submitted via the form.",
      required: false
    }
  }
};
const o$w = {};
const r$c = {
  form: [
    ...form,
    { property: "min-height", value: { type: "unit", unit: "px", value: 20 } }
  ]
}, p$4 = {
  label: "Form",
  presetStyle: r$c,
  initialProps: ["id", "class", "action"],
  props: o$w
};
const e$o = {
  optimize: {
    description: "Optimize the image for enhanced performance.",
    required: false,
    control: "boolean",
    type: "boolean",
    defaultValue: true
  },
  quality: { required: false, control: "number", type: "number" }
};
const o$v = {
  img: [
    ...img,
    // Otherwise on new image insert onto canvas it can overfit screen size multiple times
    {
      property: "max-width",
      value: { type: "unit", unit: "%", value: 100 }
    },
    // inline | inline-block is not suitable because without line-height: 0 on the parent you get unsuitable spaces/margins
    // see https://stackoverflow.com/questions/24771194/is-the-margin-of-inline-block-4px-is-static-for-all-browsers
    {
      property: "display",
      value: { type: "keyword", value: "block" }
    },
    // Set image height to "auto" to reduce layout shift, improving compatibility across browsers like Safari.
    // Unlike "fit-content," "auto" preserves the aspect ratio when the width exceeds max-width. (in Safari)
    // See https://web.dev/articles/optimize-cls#best_practice_for_setting_image_dimensions
    {
      property: "height",
      value: { type: "keyword", value: "auto" }
    }
  ]
}, i$7 = {
  category: "media",
  description: "Add an image asset to the page. Webstudio automatically converts images to WebP or AVIF format and makes them responsive for best performance.",
  presetStyle: o$v,
  order: 0,
  initialProps: [
    "id",
    "class",
    "src",
    "width",
    "height",
    "alt",
    "loading",
    "optimize"
  ],
  props: {
    ...e$o,
    // Automatically generated props don't have the right control.
    src: {
      type: "string",
      control: "file",
      label: "Source",
      required: false,
      accept: "image/*"
    }
  }
};
const o$u = {};
const e$n = {
  blockquote: [
    {
      property: "margin-top",
      value: { type: "unit", value: 0, unit: "number" }
    },
    {
      property: "margin-right",
      value: { type: "unit", value: 0, unit: "number" }
    },
    {
      property: "margin-bottom",
      value: { type: "unit", value: 10, unit: "px" }
    },
    {
      property: "margin-left",
      value: { type: "unit", value: 0, unit: "number" }
    },
    {
      property: "padding-top",
      value: { type: "unit", value: 10, unit: "px" }
    },
    {
      property: "padding-bottom",
      value: { type: "unit", value: 10, unit: "px" }
    },
    {
      property: "padding-left",
      value: { type: "unit", value: 20, unit: "px" }
    },
    {
      property: "padding-right",
      value: { type: "unit", value: 20, unit: "px" }
    },
    {
      property: "border-left-width",
      value: { type: "unit", value: 5, unit: "px" }
    },
    {
      property: "border-left-style",
      value: { type: "keyword", value: "solid" }
    },
    {
      property: "border-left-color",
      value: { type: "rgb", r: 226, g: 226, b: 226, alpha: 1 }
    }
  ]
}, r$b = {
  presetStyle: e$n,
  initialProps: ["id", "class", "cite"],
  props: o$u
};
const e$m = {
  ordered: {
    description: "Shows numbers instead of bullets when toggled. See the “List Style Type” property under the “List Item” section in the Style panel for more options.",
    required: false,
    control: "boolean",
    type: "boolean",
    defaultValue: false
  }
};
const t$c = {
  ol: [
    ...ol,
    {
      property: "margin-top",
      value: { type: "keyword", value: "0" }
    },
    {
      property: "margin-bottom",
      value: { type: "keyword", value: "10px" }
    },
    {
      property: "padding-left",
      value: { type: "keyword", value: "40px" }
    }
  ],
  ul: [
    ...ul,
    {
      property: "margin-top",
      value: { type: "keyword", value: "0" }
    },
    {
      property: "margin-bottom",
      value: { type: "keyword", value: "10px" }
    },
    {
      property: "padding-left",
      value: { type: "keyword", value: "40px" }
    }
  ]
}, l$4 = {
  presetStyle: t$c,
  initialProps: ["id", "class", "ordered", "start", "reversed"],
  props: e$m
};
const o$t = {};
const p$3 = {
  presetStyle: { li },
  initialProps: ["id", "class"],
  props: o$t
};
const o$s = {};
const o$r = {
  hr: [
    ...hr,
    {
      property: "height",
      value: { type: "keyword", value: "1px" }
    },
    {
      property: "background-color",
      value: { type: "keyword", value: "gray" }
    },
    {
      property: "border-top-style",
      value: { type: "keyword", value: "none" }
    },
    {
      property: "border-right-style",
      value: { type: "keyword", value: "none" }
    },
    {
      property: "border-left-style",
      value: { type: "keyword", value: "none" }
    },
    {
      property: "border-bottom-style",
      value: { type: "keyword", value: "none" }
    }
  ]
}, y$2 = {
  presetStyle: o$r,
  initialProps: ["id", "class"],
  props: o$s
};
const e$l = {
  code: { required: false, control: "text", type: "string" }
};
const o$q = {
  code: [
    ...code,
    {
      property: "display",
      value: { type: "keyword", value: "block" }
    },
    {
      property: "white-space-collapse",
      value: { type: "keyword", value: "preserve" }
    },
    {
      property: "text-wrap-mode",
      value: { type: "keyword", value: "wrap" }
    },
    {
      property: "padding-left",
      value: { type: "unit", value: 0.2, unit: "em" }
    },
    {
      property: "padding-right",
      value: { type: "unit", value: 0.2, unit: "em" }
    },
    {
      property: "background-color",
      value: { type: "rgb", r: 238, g: 238, b: 238, alpha: 1 }
    }
  ]
}, c$3 = {
  icon: BracesIcon,
  contentModel: {
    category: "instance",
    children: []
  },
  presetStyle: o$q,
  initialProps: ["id", "class", "lang", "code"],
  props: {
    ...e$l,
    code: {
      required: true,
      control: "codetext",
      type: "string"
    }
  }
};
const o$p = {};
const o$o = {
  label: [
    ...label,
    { property: "display", value: { type: "keyword", value: "block" } }
  ]
}, t$b = {
  label: "Input Label",
  presetStyle: o$o,
  initialProps: ["id", "class", "for"],
  props: o$p
};
const o$n = {};
const t$a = {
  textarea: [
    ...textarea,
    // resize doesn't work well while on canvas
    { property: "resize", value: { type: "keyword", value: "none" } },
    {
      property: "display",
      value: { type: "keyword", value: "block" }
    }
  ]
}, l$3 = {
  label: "Text Area",
  presetStyle: t$a,
  contentModel: {
    category: "instance",
    children: []
  },
  initialProps: [
    "id",
    "class",
    "name",
    "value",
    "placeholder",
    "required",
    "autofocus"
  ],
  props: o$n
};
const e$k = {
  value: {
    required: false,
    control: "text",
    type: "string",
    description: "Value of the form control"
  }
};
const r$a = {
  input: [
    ...radio,
    {
      property: "margin-right",
      value: { type: "unit", unit: "em", value: 0.5 }
    }
  ]
}, m$8 = {
  label: "Radio",
  icon: RadioCheckedIcon,
  presetStyle: r$a,
  initialProps: ["id", "class", "name", "value", "required", "checked"],
  props: e$k
};
const e$j = {
  value: {
    required: false,
    control: "text",
    type: "string",
    description: "Value of the form control"
  }
};
const t$9 = {
  input: [
    ...checkbox,
    {
      property: "margin-right",
      value: { type: "unit", unit: "em", value: 0.5 }
    }
  ]
}, m$7 = {
  icon: CheckboxCheckedIcon,
  presetStyle: t$9,
  initialProps: ["id", "class", "name", "value", "required", "checked"],
  props: e$j
};
const e$i = {
  autopause: {
    description: "Whether to pause the current video when another Vimeo video on the same page starts to play. Set this value to false to permit simultaneous playback of all the videos on the page. This option has no effect if you've disabled cookies in your browser, either through browser settings or with an extension or plugin.",
    required: false,
    control: "boolean",
    type: "boolean",
    defaultValue: true
  },
  autopip: {
    description: "Whether to enable the browser to enter picture-in-picture mode automatically when switching tabs or windows, where supported.",
    required: false,
    control: "boolean",
    type: "boolean"
  },
  autoplay: {
    description: "Whether to start playback of the video automatically. This feature might not work on all devices.\nSome browsers require the `muted` parameter to be set to `true` for autoplay to work.",
    required: false,
    control: "boolean",
    type: "boolean",
    defaultValue: false
  },
  backgroundMode: {
    description: "Whether the player is in background mode, which hides the playback controls, enables autoplay, and loops the video.",
    required: false,
    control: "boolean",
    type: "boolean"
  },
  controlsColor: {
    description: "A color value of the playback controls, which is normally #00ADEF. The embed settings of the video might override this value.",
    required: false,
    control: "color",
    type: "string"
  },
  doNotTrack: {
    description: "Whether to prevent the player from tracking session data, including cookies. Keep in mind that setting this argument to true also blocks video stats.",
    required: false,
    control: "boolean",
    type: "boolean",
    defaultValue: false
  },
  interactiveParams: {
    description: "Key-value pairs representing dynamic parameters that are utilized on interactive videos with live elements, such as title=my-video,subtitle=interactive.",
    required: false,
    control: "text",
    type: "string"
  },
  keyboard: {
    description: "Whether to enable keyboard input to trigger player events. This setting doesn't affect tab control.",
    required: false,
    control: "boolean",
    type: "boolean",
    defaultValue: true
  },
  loading: {
    description: "Not a Vimeo attribute: Loading attribute for the iframe allows to eager or lazy load the source",
    required: false,
    control: "radio",
    type: "string",
    defaultValue: "lazy",
    options: ["eager", "lazy"]
  },
  loop: {
    description: "Whether to restart the video automatically after reaching the end.",
    required: false,
    control: "boolean",
    type: "boolean",
    defaultValue: false
  },
  muted: {
    description: "Whether the video is muted upon loading. The true value is required for the autoplay behavior in some browsers.",
    required: false,
    control: "boolean",
    type: "boolean",
    defaultValue: false
  },
  pip: {
    description: "Whether to include the picture-in-picture button among the player controls and enable the picture-in-picture API.",
    required: false,
    control: "boolean",
    type: "boolean",
    defaultValue: false
  },
  playsinline: {
    description: "Whether the video plays inline on supported mobile devices. To force the device to play the video in fullscreen mode instead, set this value to false.",
    required: false,
    control: "boolean",
    type: "boolean",
    defaultValue: false
  },
  quality: {
    description: "For videos on a Vimeo Plus account or higher: the playback quality of the video. Use auto for the best possible quality given available bandwidth and other factors. You can also specify 360p, 540p, 720p, 1080p, 2k, and 4k.",
    required: false,
    control: "select",
    type: "string",
    defaultValue: "auto",
    options: ["auto", "360p", "540p", "720p", "1080p", "2k", "4k"]
  },
  responsive: {
    description: "Whether to return a responsive embed code, or one that provides intelligent adjustments based on viewing conditions. We recommend this option for mobile-optimized sites.",
    required: false,
    control: "boolean",
    type: "boolean",
    defaultValue: true
  },
  showByline: {
    description: "Whether to display the video owner's name.",
    required: false,
    control: "boolean",
    type: "boolean",
    defaultValue: false
  },
  showControls: {
    description: "Whether to display the player's interactive elements, including the play bar and sharing buttons. Set this option to false for a chromeless experience. To control playback when the play/pause button is hidden, set autoplay to true, use keyboard controls (which remain active), or implement our player SDK.",
    required: false,
    control: "boolean",
    type: "boolean",
    defaultValue: true
  },
  showPortrait: {
    description: "Whether to display the video owner's portrait. Only works if either title or byline are also enabled",
    required: false,
    control: "boolean",
    type: "boolean",
    defaultValue: true
  },
  showPreview: {
    description: "Not a Vimeo attribute: Whether the preview image should be loaded from Vimeo API. Ideally don't use it, because it will show up with some delay and will make your project feel slower.",
    required: false,
    control: "boolean",
    type: "boolean",
    defaultValue: false
  },
  showTitle: {
    description: "Whether the player displays the title overlay.",
    required: false,
    control: "boolean",
    type: "boolean",
    defaultValue: false
  },
  speed: {
    description: "Whether the player displays speed controls in the preferences menu and enables the playback rate API.",
    required: false,
    control: "boolean",
    type: "boolean",
    defaultValue: false
  },
  texttrack: {
    description: `The text track to display with the video. Specify the text track by its language code (en), the language code and locale (en-US), or the language code and kind (en.captions). For this argument to work, the video must already have a text track of the given type; see our Help Center or Working with Text Track Uploads for more information.
To enable automatically generated closed captions instead, provide the value en-x-autogen. Please note that, at the present time, automatic captions are always in English.`,
    required: false,
    control: "text",
    type: "string"
  },
  transparent: {
    description: "Whether the responsive player and transparent background are enabled.",
    required: false,
    control: "boolean",
    type: "boolean",
    defaultValue: true
  },
  url: {
    description: "The ID or the URL of the video on Vimeo. You must supply one of these values to identify the video. When the video's privacy setting is Private, you must use the URL, and the URL must include the h parameter. For more information, see Vimeo’s introductory guide.",
    required: false,
    control: "text",
    type: "string"
  }
};
const i$6 = [
  "id",
  "className",
  "url",
  "title",
  "quality",
  "loading",
  "showPreview",
  "autoplay",
  "doNotTrack",
  "loop",
  "muted",
  "showPortrait",
  "showByline",
  "showTitle",
  "showControls",
  "controlsColor",
  "playsinline"
], s$3 = {
  icon: VimeoIcon,
  contentModel: {
    category: "instance",
    children: ["instance"],
    descendants: ["VimeoSpinner", "VimeoPlayButton", "VimeoPreviewImage"]
  },
  presetStyle: { div },
  initialProps: i$6,
  props: e$i
};
const e$h = {
  allowFullscreen: {
    description: "Whether to allow fullscreen mode.\nOriginal parameter: `fs`",
    required: false,
    control: "boolean",
    type: "boolean",
    defaultValue: true
  },
  autoplay: {
    description: "Whether the video should autoplay.\nSome browsers require the `muted` parameter to be set to `true` for autoplay to work.",
    required: false,
    control: "boolean",
    type: "boolean",
    defaultValue: false
  },
  captionLanguage: {
    description: "Specifies the default language that the player will use to display captions.\nThe value is an ISO 639-1 two-letter language code.\nOriginal parameter: `cc_lang_pref`",
    required: false,
    control: "text",
    type: "string"
  },
  color: {
    description: `Specifies the color that will be used in the player's video progress bar to highlight the amount of the video that the viewer has already seen.
Valid values are 'red' and 'white'.`,
    required: false,
    control: "radio",
    type: "string",
    options: ["red", "white"]
  },
  disableKeyboard: {
    description: "Whether to disable keyboard controls.\nOriginal parameter: `disablekb`",
    required: false,
    control: "boolean",
    type: "boolean",
    defaultValue: false
  },
  endTime: {
    description: "End time of the video in seconds.\nOriginal parameter: `end`",
    required: false,
    control: "number",
    type: "number"
  },
  inline: {
    description: "Whether to play inline on mobile (not fullscreen).",
    required: false,
    control: "boolean",
    type: "boolean",
    defaultValue: false
  },
  keyboard: {
    description: "Whether to enable keyboard controls.",
    required: false,
    control: "boolean",
    type: "boolean",
    defaultValue: true
  },
  language: {
    description: "Sets the player's interface language. The value is an ISO 639-1 two-letter language code or a fully specified locale.\nOriginal parameter: `hl`",
    required: false,
    control: "text",
    type: "string"
  },
  listId: {
    description: "ID of the playlist to load.\nOriginal parameter: `list`",
    required: false,
    control: "text",
    type: "string"
  },
  listType: {
    description: "Type of playlist to load.",
    required: false,
    control: "radio",
    type: "string",
    options: ["playlist", "user_uploads"]
  },
  loading: {
    description: "Loading strategy for iframe",
    required: false,
    control: "radio",
    type: "string",
    defaultValue: "lazy",
    options: ["eager", "lazy"]
  },
  loop: {
    description: "Whether the video should loop continuously.",
    required: false,
    control: "boolean",
    type: "boolean",
    defaultValue: false
  },
  muted: {
    description: "Whether the video should start muted.\nUseful for enabling autoplay in browsers that require videos to be muted.\nOriginal parameter: `mute`",
    required: false,
    control: "boolean",
    type: "boolean",
    defaultValue: false
  },
  origin: {
    description: "Your domain for API compliance (e.g., `https://yourdomain.com`).",
    required: false,
    control: "text",
    type: "string"
  },
  playlist: {
    description: "This parameter specifies a comma-separated list of video IDs to play",
    required: false,
    control: "text",
    type: "string"
  },
  privacyEnhancedMode: {
    description: `The Privacy Enhanced Mode of the YouTube embedded player prevents the use of views of embedded YouTube content from influencing the viewer’s browsing experience on YouTube.
https://support.google.com/youtube/answer/171780?hl=en#zippy=%2Cturn-on-privacy-enhanced-mode`,
    required: false,
    control: "boolean",
    type: "boolean",
    defaultValue: true
  },
  referrer: {
    description: "Referrer URL for tracking purposes.\nOriginal parameter: `widget_referrer`",
    required: false,
    control: "text",
    type: "string"
  },
  showAnnotations: {
    description: "Whether to show annotations on the video.\nOriginal parameter: `iv_load_policy`",
    required: false,
    control: "boolean",
    type: "boolean",
    defaultValue: true
  },
  showCaptions: {
    description: "Whether captions should be shown by default.\nOriginal parameter: `cc_load_policy`",
    required: false,
    control: "boolean",
    type: "boolean",
    defaultValue: false
  },
  showControls: {
    description: "Whether to show player controls.",
    required: false,
    control: "boolean",
    type: "boolean",
    defaultValue: true
  },
  showPreview: { required: false, control: "boolean", type: "boolean" },
  showRelatedVideos: {
    description: "Whether to show related videos at the end.\nOriginal parameter: `rel`",
    required: false,
    control: "boolean",
    type: "boolean",
    defaultValue: true
  },
  startTime: {
    description: "Start time of the video in seconds.\nOriginal parameter: `start`",
    required: false,
    control: "number",
    type: "number"
  },
  url: {
    description: "The YouTube video URL or ID",
    required: false,
    control: "text",
    type: "string"
  }
};
const n$5 = [
  "id",
  "className",
  "url",
  "privacyEnhancedMode",
  "title",
  "loading",
  "showPreview",
  "autoplay",
  "showControls",
  "showRelatedVideos",
  "keyboard",
  "loop",
  "inline",
  "allowFullscreen",
  "showCaptions",
  "showAnnotations",
  "startTime",
  "endTime",
  "disableKeyboard",
  "referrer",
  "listType",
  "listId",
  "origin",
  "captionLanguage",
  "language",
  "color",
  "playlist"
], s$2 = {
  icon: YoutubeIcon,
  contentModel: {
    category: "instance",
    children: ["instance"],
    descendants: ["VimeoSpinner", "VimeoPlayButton", "VimeoPreviewImage"]
  },
  presetStyle: { div },
  initialProps: n$5,
  props: e$h
};
const e$g = {
  optimize: {
    description: "Optimize the image for enhanced performance.",
    required: false,
    control: "boolean",
    type: "boolean"
  },
  quality: { required: false, control: "number", type: "number" }
};
const i$5 = {
  ...i$7,
  category: "hidden",
  label: "Preview Image",
  contentModel: {
    category: "none",
    children: []
  },
  initialProps: i$7.initialProps,
  props: {
    ...e$g,
    // Automatically generated props don't have the right control.
    src: {
      type: "string",
      control: "file",
      label: "Source",
      required: false
    }
  }
};
const o$m = {};
const c$2 = {
  category: "hidden",
  label: "Play Button",
  icon: ButtonElementIcon,
  contentModel: {
    category: "none",
    children: ["instance"]
  },
  presetStyle: { button },
  initialProps: ["id", "class"],
  props: o$m
};
const o$l = {};
const c$1 = {
  icon: BoxIcon,
  category: "hidden",
  label: "Spinner",
  contentModel: {
    category: "none",
    children: ["instance"]
  },
  presetStyle: { div },
  initialProps: ["id", "class"],
  props: o$l
};
const e$f = {
  href: {
    required: false,
    control: "text",
    type: "string",
    description: "Address of the hyperlink"
  },
  hreflang: {
    required: false,
    control: "text",
    type: "string",
    description: "Language of the linked resource"
  },
  rel: {
    required: false,
    control: "text",
    type: "string",
    description: "Relationship between the location in the document containing the hyperlink and the destination resource"
  },
  tag: { required: false, control: "text", type: "string", defaultValue: "" },
  xmlns: { required: false, control: "text", type: "string" },
  "xmlns:xhtml": { required: false, control: "text", type: "string" }
};
const m$6 = {
  category: "xml",
  order: 6,
  icon: XmlIcon,
  description: "XML Node",
  initialProps: ["tag"],
  props: e$f
};
const e$e = {
  dateStyle: {
    required: false,
    control: "radio",
    type: "string",
    defaultValue: "short",
    options: ["long", "short"]
  },
  datetime: {
    required: false,
    control: "text",
    type: "string",
    defaultValue: "dateTime attribute is not set",
    description: "Machine-readable value"
  }
};
const a$2 = {
  category: "xml",
  description: "Converts machine-readable date and time to ISO format.",
  icon: CalendarIcon,
  order: 7,
  initialProps: ["datetime", "dateStyle"],
  props: e$e
};
const e$d = {
  country: {
    required: false,
    control: "select",
    type: "string",
    defaultValue: "GB",
    options: [
      "AF",
      "AL",
      "DZ",
      "AS",
      "AD",
      "AO",
      "AI",
      "AQ",
      "AG",
      "AR",
      "AM",
      "AW",
      "AU",
      "AT",
      "AZ",
      "BS",
      "BH",
      "BD",
      "BB",
      "BY",
      "BE",
      "BZ",
      "BJ",
      "BM",
      "BT",
      "BO",
      "BA",
      "BW",
      "BR",
      "BN",
      "BG",
      "BF",
      "BI",
      "CV",
      "KH",
      "CM",
      "CA",
      "KY",
      "CF",
      "TD",
      "CL",
      "CN",
      "CO",
      "KM",
      "CG",
      "CD",
      "CR",
      "HR",
      "CU",
      "CY",
      "CZ",
      "DK",
      "DJ",
      "DM",
      "DO",
      "EC",
      "EG",
      "SV",
      "GQ",
      "ER",
      "EE",
      "SZ",
      "ET",
      "FJ",
      "FI",
      "FR",
      "GA",
      "GM",
      "GE",
      "DE",
      "GH",
      "GR",
      "GD",
      "GT",
      "GN",
      "GW",
      "GY",
      "HT",
      "HN",
      "HU",
      "IS",
      "IN",
      "ID",
      "IR",
      "IQ",
      "IE",
      "IL",
      "IT",
      "JM",
      "JP",
      "JO",
      "KZ",
      "KE",
      "KI",
      "KP",
      "KR",
      "KW",
      "KG",
      "LA",
      "LV",
      "LB",
      "LS",
      "LR",
      "LY",
      "LI",
      "LT",
      "LU",
      "MG",
      "MW",
      "MY",
      "MV",
      "ML",
      "MT",
      "MH",
      "MR",
      "MU",
      "MX",
      "FM",
      "MD",
      "MC",
      "MN",
      "ME",
      "MA",
      "MZ",
      "MM",
      "NA",
      "NR",
      "NP",
      "NL",
      "NZ",
      "NI",
      "NE",
      "NG",
      "NO",
      "OM",
      "PK",
      "PW",
      "PA",
      "PG",
      "PY",
      "PE",
      "PH",
      "PL",
      "PT",
      "QA",
      "RO",
      "RU",
      "RW",
      "KN",
      "LC",
      "VC",
      "WS",
      "SM",
      "ST",
      "SA",
      "SN",
      "RS",
      "SC",
      "SL",
      "SG",
      "SK",
      "SI",
      "SB",
      "SO",
      "ZA",
      "SS",
      "ES",
      "LK",
      "SD",
      "SR",
      "SE",
      "CH",
      "SY",
      "TW",
      "TJ",
      "TZ",
      "TH",
      "TL",
      "TG",
      "TO",
      "TT",
      "TN",
      "TR",
      "TM",
      "TV",
      "UG",
      "UA",
      "AE",
      "GB",
      "US",
      "UY",
      "UZ",
      "VU",
      "VA",
      "VE",
      "VN",
      "YE",
      "ZM",
      "ZW"
    ]
  },
  dateStyle: {
    required: false,
    control: "select",
    type: "string",
    defaultValue: "medium",
    options: ["full", "long", "medium", "short", "none"]
  },
  format: {
    description: `Custom format template. Overrides Date Style and Time Style.

Tokens: YYYY/YY (year), MMMM/MMM/MM/M (month), DDDD/DDD/DD/D (day), HH/H (hours), mm/m (minutes), ss/s (seconds)

Examples:
"YYYY-MM-DD" → 2025-11-03
"DDDD, MMMM D" → Monday, November 3
"DDD, D. MMM YYYY" → Mon, 3. Nov 2025

Day and month names use the selected language.`,
    required: false,
    control: "text",
    type: "string"
  },
  language: {
    required: false,
    control: "select",
    type: "string",
    defaultValue: "en",
    options: [
      "hr",
      "th",
      "tr",
      "id",
      "is",
      "cy",
      "fr",
      "af",
      "am",
      "ar",
      "az",
      "be",
      "bg",
      "bn",
      "bs",
      "ca",
      "cs",
      "da",
      "de",
      "el",
      "en",
      "es",
      "et",
      "eu",
      "fa",
      "fi",
      "ga",
      "gl",
      "gu",
      "he",
      "hi",
      "hu",
      "hy",
      "it",
      "ja",
      "ka",
      "kk",
      "km",
      "kn",
      "ko",
      "ky",
      "lb",
      "lt",
      "lv",
      "mk",
      "ml",
      "mn",
      "mr",
      "ms",
      "mt",
      "nb",
      "nl",
      "nn",
      "pl",
      "pt",
      "ro",
      "ru",
      "si",
      "sk",
      "sl",
      "sq",
      "sr",
      "sv",
      "sw",
      "ta",
      "te",
      "uk",
      "ur",
      "uz",
      "vi",
      "zh"
    ]
  },
  timeStyle: {
    required: false,
    control: "select",
    type: "string",
    defaultValue: "none",
    options: ["full", "long", "medium", "short", "none"]
  }
};
const r$9 = {
  category: "localization",
  description: "Converts machine-readable date and time to a human-readable format.",
  contentModel: {
    category: "instance",
    children: []
  },
  presetStyle: {
    time
  },
  initialProps: [
    "datetime",
    "language",
    "country",
    "dateStyle",
    "timeStyle",
    "format"
  ],
  props: e$d
};
const o$k = {};
const o$j = {
  select: [
    ...select,
    {
      property: "display",
      value: { type: "keyword", value: "block" }
    }
  ]
}, p$2 = {
  presetStyle: o$j,
  initialProps: [
    "id",
    "class",
    "name",
    "value",
    "multiple",
    "required",
    "autofocus"
  ],
  props: o$k
};
const o$i = {};
const l$2 = {
  option: [
    {
      property: "background-color",
      state: ":checked",
      value: {
        type: "rgb",
        alpha: 1,
        r: 209,
        g: 209,
        b: 209
      }
    }
  ]
}, a$1 = {
  category: "hidden",
  description: "An item within a drop-down menu that users can select as their chosen value.",
  presetStyle: l$2,
  states: [
    // Applies when option is being activated (clicked)
    { selector: ":active", label: "Active" },
    // Applies to the currently selected option
    { selector: ":checked", label: "Checked" },
    // For <option> elements: The :default pseudo-class selects the <option> that has the selected attribute when the page loads. This is true even if the user later selects a different option.
    { selector: ":default", label: "Default" },
    { selector: ":hover", label: "Hover" },
    { selector: ":disabled", label: "Disabled" }
  ],
  initialProps: ["label", "value", "label", "disabled"],
  props: o$i
};
const o$h = {};
const r$8 = {
  icon: HeaderIcon,
  description: "Inserts children into the head of the document",
  contentModel: {
    category: "instance",
    children: ["HeadLink", "HeadMeta", "HeadTitle"]
  },
  props: o$h
};
const o$g = {};
const t$8 = {
  icon: ResourceIcon,
  contentModel: {
    category: "none",
    children: []
  },
  initialProps: ["rel", "hrefLang", "href", "type", "as"],
  props: o$g
};
const o$f = {};
const e$c = {
  icon: WindowInfoIcon,
  contentModel: {
    category: "none",
    children: []
  },
  initialProps: ["name", "property", "content"],
  props: o$f
};
const o$e = {};
const r$7 = {
  icon: WindowTitleIcon,
  contentModel: {
    category: "none",
    children: ["text"]
  },
  props: o$e
};
const o$d = {};
const i$4 = {
  icon: VideoIcon,
  contentModel: {
    category: "instance",
    children: []
  },
  presetStyle: {
    video: [
      {
        property: "max-width",
        value: { type: "unit", unit: "%", value: 100 }
      }
    ]
  },
  initialProps: [
    "id",
    "class",
    "width",
    "height",
    "src",
    "autoPlay",
    "controls",
    "loop",
    "muted",
    "preload",
    "playsInline"
  ],
  props: {
    ...o$d,
    // Automatically generated props don't have the right control.
    src: {
      type: "string",
      control: "file",
      label: "Source",
      required: false,
      accept: ".mp4,.webm,.mpg,.mpeg,.mov"
    }
  }
};
const baseComponentMetas = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Blockquote: r$b,
  Body: i$9,
  Bold: p$6,
  Box: g$3,
  Button: e$q,
  Checkbox: m$7,
  CodeText: c$3,
  Form: c$4,
  Fragment: t$i,
  HeadLink: t$8,
  HeadMeta: e$c,
  HeadSlot: r$8,
  HeadTitle: r$7,
  Heading: m$9,
  HtmlEmbed: a$6,
  Image: i$7,
  Input: l$5,
  Italic: e$r,
  Label: t$b,
  Link: p$7,
  List: l$4,
  ListItem: p$3,
  MarkdownEmbed: a$5,
  Option: a$1,
  Paragraph: i$8,
  RadioButton: m$8,
  RemixForm: p$4,
  RichTextLink: a$3,
  Select: p$2,
  Separator: y$2,
  Slot: o$H,
  Span: e$s,
  Subscript: s$4,
  Superscript: o$A,
  Text: n$6,
  Textarea: l$3,
  Time: r$9,
  Video: i$4,
  Vimeo: s$3,
  VimeoPlayButton: c$2,
  VimeoPreviewImage: i$5,
  VimeoSpinner: c$1,
  XmlNode: m$6,
  XmlTime: a$2,
  YouTube: s$2
}, Symbol.toStringTag, { value: "Module" }));
//! SPDX-License-Identifier: LicenseRef-Webstudio,Inc-Proprietary
const l$1 = (n2) => new Proxy({}, { get(w2, t2) {
  return `${n2}${t2}`;
} }), i$3 = l$1("@webstudio-is/sdk-components-animation:"), c = { category: "animations", description: "Animation Group component is designed to animate its children.", icon: AnimationGroupIcon, order: 0, label: "Animation Group", contentModel: { category: "instance", children: ["instance", i$3.AnimateText, i$3.StaggerAnimation, i$3.VideoAnimation] }, initialProps: ["action"], props: { action: { required: false, control: "animationAction", type: "animationAction", description: "Animation Action" } } }, d$2 = { className: { required: false, control: "text", type: "string", description: "Classes to which the element belongs" }, easing: { description: "Easing function applied within the sliding window.", required: false, control: "select", type: "string", defaultValue: "linear", options: ["linear", "easeIn", "easeInCubic", "easeInQuart", "easeOut", "easeOutCubic", "easeOutQuart", "ease", "easeInOutCubic", "easeInOutQuart"] }, slidingWindow: { description: `Size of the sliding window for the animation:
- 0: Typewriter effect (no animation).
- (0..1]: Animates one part of the text at a time.
- (1..n]: Animates multiple parts of the text within the sliding window.`, required: false, control: "number", type: "number", defaultValue: 5 }, splitBy: { description: "Defines how the text is split for animation (e.g., by character, space, or symbol).", required: false, control: "select", type: "string", defaultValue: "char", options: ["char", "space", 'symbol "#"', 'symbol "~"'] } }, p$1 = { category: "animations", description: "Text animation allows you to split text by char or by word to animate it.", icon: TextAnimationIcon, order: 1, label: "Text Animation", contentModel: { category: "none", children: ["instance"] }, presetStyle: { div }, initialProps: ["slidingWindow", "easing", "splitBy"], props: d$2 }, m$5 = { className: { required: false, control: "text", type: "string", description: "Classes to which the element belongs" }, easing: { description: "Easing function applied within the sliding window.", required: false, control: "select", type: "string", defaultValue: "linear", options: ["linear", "easeIn", "easeInCubic", "easeInQuart", "easeOut", "easeOutCubic", "easeOutQuart", "ease", "easeInOutCubic", "easeInOutQuart"] }, slidingWindow: { description: `Size of the sliding window for the animation:
- 0: Typewriter effect (no animation).
- (0..1]: Animates one child at a time.
- (1..n]: Animates multiple children within the sliding window.`, required: false, control: "number", type: "number", defaultValue: 1 } }, u$1 = { category: "animations", description: "Stagger animation allows you to animate children elements with a sliding window.", icon: StaggerAnimationIcon, order: 4, label: "Stagger Animation", contentModel: { category: "none", children: ["instance"] }, presetStyle: { div }, initialProps: ["slidingWindow", "easing"], props: m$5 }, g$2 = { timeline: { required: false, control: "boolean", type: "boolean" } }, h$2 = { icon: PlayIcon, label: "Video Animation", contentModel: { category: "none", children: ["instance"] }, presetStyle: { div }, props: g$2, initialProps: ["timeline"] };
const animationComponentMetas = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AnimateChildren: c,
  AnimateText: p$1,
  StaggerAnimation: u$1,
  VideoAnimation: h$2
}, Symbol.toStringTag, { value: "Module" }));
const r$6 = (t2) => new Proxy(
  {},
  {
    get(o2, e2) {
      return `${t2}${e2}`;
    }
  }
), n$4 = r$6(
  "@webstudio-is/sdk-components-react-radix:"
);
const o$c = {
  disabled: {
    required: false,
    control: "boolean",
    type: "boolean",
    description: "Whether the form control is disabled"
  },
  open: {
    required: false,
    control: "boolean",
    type: "boolean",
    description: "Show or hide the content of this component on the canvas. This will not affect the initial state of the component."
  }
}, e$b = {}, t$7 = {};
const g$1 = {
  icon: CollapsibleIcon,
  contentModel: {
    category: "instance",
    children: ["instance"],
    descendants: [n$4.CollapsibleTrigger, n$4.CollapsibleContent]
  },
  presetStyle: {
    div
  },
  initialProps: ["open"],
  props: o$c
}, m$4 = {
  icon: TriggerIcon,
  contentModel: {
    category: "none",
    children: ["instance", "rich-text"]
  },
  props: e$b
}, d$1 = {
  icon: ContentIcon,
  contentModel: {
    category: "none",
    children: ["instance", "rich-text"]
  },
  presetStyle: {
    div
  },
  props: t$7
};
const o$b = {
  open: {
    required: false,
    control: "boolean",
    type: "boolean",
    description: "Show or hide the content of this component on the canvas. This will not affect the initial state of the component."
  }
}, t$6 = {}, e$a = {}, n$3 = {}, s$1 = {}, i$2 = {
  tag: {
    required: false,
    control: "select",
    type: "string",
    options: ["h2", "h3", "h1", "h4", "h5", "h6"]
  }
}, p = {};
const o$a = (r2, t2, p2) => ({
  property: r2,
  value: { type: "unit", unit: p2, value: t2 }
}), e$9 = (r2, t2) => ({
  property: r2,
  value: { type: "keyword", value: t2 }
}), d = (r2, t2, p2, l2) => ({
  property: r2,
  value: { type: "rgb", alpha: 1, r: t2, g: p2, b: l2 }
}), b$4 = [
  {
    property: "background-color",
    value: { type: "keyword", value: "transparent" }
  },
  {
    property: "background-image",
    value: { type: "keyword", value: "none" }
  },
  o$a("border-top-width", 0, "px"),
  o$a("border-right-width", 0, "px"),
  o$a("border-bottom-width", 0, "px"),
  o$a("border-left-width", 0, "px"),
  e$9("border-top-style", "solid"),
  e$9("border-right-style", "solid"),
  e$9("border-bottom-style", "solid"),
  e$9("border-left-style", "solid"),
  d("border-top-color", 226, 232, 240),
  d("border-right-color", 226, 232, 240),
  d("border-bottom-color", 226, 232, 240),
  d("border-left-color", 226, 232, 240),
  o$a("padding-top", 0, "px"),
  o$a("padding-right", 0, "px"),
  o$a("padding-bottom", 0, "px"),
  o$a("padding-left", 0, "px")
];
const S$1 = {
  icon: TriggerIcon,
  contentModel: {
    category: "none",
    children: ["instance"]
  },
  props: t$6
}, b$3 = {
  icon: OverlayIcon,
  contentModel: {
    category: "none",
    children: ["instance"],
    descendants: [n$4.DialogContent]
  },
  presetStyle: { div },
  props: e$a
}, O = {
  icon: ContentIcon,
  contentModel: {
    category: "none",
    children: ["instance"],
    descendants: [
      n$4.DialogTitle,
      n$4.DialogDescription,
      n$4.DialogClose
    ]
  },
  presetStyle: { div },
  props: n$3
}, B = {
  icon: HeadingIcon,
  contentModel: {
    category: "none",
    children: ["instance", "rich-text"]
  },
  presetStyle: { h2 },
  props: i$2
}, E = {
  icon: TextIcon,
  contentModel: {
    category: "none",
    children: ["instance", "rich-text"]
  },
  presetStyle: { p: p$8 },
  props: p
}, H$1 = {
  icon: ButtonElementIcon,
  label: "Close Button",
  contentModel: {
    category: "none",
    children: ["instance", "rich-text"]
  },
  presetStyle: {
    button: [b$4, button].flat()
  },
  props: s$1
}, P$1 = {
  icon: DialogIcon,
  contentModel: {
    category: "instance",
    children: ["instance"],
    descendants: [n$4.DialogTrigger, n$4.DialogOverlay]
  },
  initialProps: ["open"],
  props: o$b
};
const e$8 = {
  open: {
    required: false,
    control: "boolean",
    type: "boolean",
    description: "Show or hide the content of this component on the canvas. This will not affect the initial state of the component."
  }
}, o$9 = {}, t$5 = {
  align: {
    required: false,
    control: "radio",
    type: "string",
    defaultValue: "center",
    options: ["center", "start", "end"]
  },
  alignOffset: {
    required: false,
    control: "number",
    type: "number",
    description: "The offset in pixels from the “start“ or “end“ alignment options."
  },
  arrowPadding: { required: false, control: "number", type: "number" },
  avoidCollisions: { required: false, control: "boolean", type: "boolean" },
  hideWhenDetached: {
    required: false,
    control: "boolean",
    type: "boolean",
    defaultValue: true
  },
  side: {
    required: false,
    control: "select",
    type: "string",
    options: ["top", "right", "bottom", "left"],
    description: "The preferred alignment against the Trigger. May change when collisions occur."
  },
  sideOffset: {
    required: false,
    control: "number",
    type: "number",
    defaultValue: 4,
    description: "The distance in pixels between the Content and the Trigger."
  },
  sticky: {
    required: false,
    control: "radio",
    type: "string",
    options: ["partial", "always"]
  },
  updatePositionStrategy: {
    required: false,
    control: "radio",
    type: "string",
    options: ["always", "optimized"]
  }
}, r$5 = {};
const C$3 = {
  icon: TriggerIcon,
  contentModel: {
    category: "none",
    children: ["instance"]
  },
  props: o$9
}, y$1 = {
  icon: ContentIcon,
  contentModel: {
    category: "none",
    children: ["instance"],
    descendants: [n$4.PopoverClose]
  },
  presetStyle: {
    div
  },
  initialProps: ["side", "sideOffset", "align", "alignOffset"],
  props: t$5
}, h$1 = {
  icon: PopoverIcon,
  contentModel: {
    category: "instance",
    children: ["instance"],
    descendants: [n$4.PopoverTrigger, n$4.PopoverContent]
  },
  initialProps: ["open"],
  props: e$8
}, u = {
  icon: ButtonElementIcon,
  label: "Close Button",
  contentModel: {
    category: "none",
    children: ["instance", "rich-text"]
  },
  presetStyle: {
    button: [b$4, button].flat()
  },
  props: r$5
};
const e$7 = {
  delayDuration: {
    description: "The delay before the Tooltip shows after the Trigger is hovered, in milliseconds. If no value is specified, the default is 700ms",
    required: false,
    control: "number",
    type: "number"
  },
  disableHoverableContent: {
    description: "When toggled, prevents the Tooltip content from showing when the Trigger is hovered.",
    required: false,
    control: "boolean",
    type: "boolean"
  },
  open: {
    required: false,
    control: "boolean",
    type: "boolean",
    description: "Show or hide the content of this component on the canvas. This will not affect the initial state of the component."
  }
}, o$8 = {}, t$4 = {
  align: {
    required: false,
    control: "radio",
    type: "string",
    options: ["center", "start", "end"]
  },
  alignOffset: {
    required: false,
    control: "number",
    type: "number",
    description: "The offset in pixels from the “start“ or “end“ alignment options."
  },
  "aria-label": {
    description: "A more descriptive label for accessibility purpose",
    required: false,
    control: "text",
    type: "string"
  },
  arrowPadding: { required: false, control: "number", type: "number" },
  avoidCollisions: { required: false, control: "boolean", type: "boolean" },
  hideWhenDetached: {
    required: false,
    control: "boolean",
    type: "boolean",
    defaultValue: true
  },
  side: {
    required: false,
    control: "select",
    type: "string",
    options: ["top", "right", "bottom", "left"],
    description: "The preferred alignment against the Trigger. May change when collisions occur."
  },
  sideOffset: {
    required: false,
    control: "number",
    type: "number",
    defaultValue: 4,
    description: "The distance in pixels between the Content and the Trigger."
  },
  sticky: {
    required: false,
    control: "radio",
    type: "string",
    options: ["partial", "always"]
  },
  updatePositionStrategy: {
    required: false,
    control: "radio",
    type: "string",
    options: ["always", "optimized"]
  }
};
const g = {
  icon: TriggerIcon,
  contentModel: {
    category: "none",
    children: ["instance"]
  },
  props: o$8
}, T = {
  icon: ContentIcon,
  contentModel: {
    category: "none",
    children: ["instance"]
  },
  presetStyle: { div },
  initialProps: ["side", "sideOffset", "align", "alignOffset"],
  props: t$4
}, m$3 = {
  icon: TooltipIcon,
  contentModel: {
    category: "instance",
    children: ["instance"],
    descendants: [n$4.TooltipTrigger, n$4.TooltipContent]
  },
  initialProps: ["open", "delayDuration", "disableHoverableContent"],
  props: e$7
};
const e$6 = {
  activationMode: {
    description: `Whether a tab is activated automatically or manually.
@defaultValue automatic`,
    required: false,
    control: "radio",
    type: "string",
    options: ["automatic", "manual"]
  },
  defaultValue: {
    description: "The value of the tab to select by default, if uncontrolled",
    required: false,
    control: "text",
    type: "string"
  },
  dir: {
    description: "The direction of navigation between toolbar items.",
    required: false,
    control: "radio",
    type: "string",
    options: ["ltr", "rtl"]
  },
  orientation: {
    description: `The orientation the tabs are layed out.
Mainly so arrow navigation is done accordingly (left & right vs. up & down)
@defaultValue horizontal`,
    required: false,
    control: "radio",
    type: "string",
    options: ["horizontal", "vertical"]
  },
  value: {
    description: "The value for the selected tab, if controlled",
    required: false,
    control: "text",
    type: "string"
  }
}, t$3 = {
  loop: {
    required: false,
    control: "boolean",
    type: "boolean",
    description: "Whether to loop the media resource"
  }
}, o$7 = {
  value: {
    required: false,
    control: "text",
    type: "string",
    description: "Current value of the element"
  }
}, r$4 = {
  value: {
    required: false,
    control: "text",
    type: "string",
    description: "Current value of the element"
  }
};
const y = {
  icon: TabsIcon,
  contentModel: {
    category: "instance",
    children: ["instance"],
    descendants: [n$4.TabsList, n$4.TabsContent]
  },
  presetStyle: { div },
  props: e$6
}, f$2 = {
  icon: HeaderIcon,
  contentModel: {
    category: "none",
    children: ["instance"],
    descendants: [n$4.TabsTrigger]
  },
  presetStyle: { div },
  props: t$3
}, x$1 = {
  icon: TriggerIcon,
  label: "Tab Trigger",
  indexWithinAncestor: n$4.Tabs,
  contentModel: {
    category: "none",
    children: ["instance", "rich-text"]
  },
  states: [{ label: "Active", selector: "[data-state=active]" }],
  presetStyle: {
    button: [button, b$4].flat()
  },
  props: o$7
}, C$2 = {
  label: "Tab Content",
  icon: ContentIcon,
  indexWithinAncestor: n$4.Tabs,
  contentModel: {
    category: "none",
    children: ["instance", "rich-text"]
  },
  presetStyle: { div },
  props: r$4
};
const o$6 = {};
const m$2 = {
  icon: LabelIcon,
  presetStyle: { label },
  initialProps: ["id", "class", "for"],
  props: o$6
};
const e$5 = {
  collapsible: {
    description: "Whether an accordion item can be collapsed after it has been opened.",
    required: false,
    control: "boolean",
    type: "boolean",
    defaultValue: false
  },
  defaultValue: {
    description: "The value of the item whose content is expanded when the accordion is initially rendered. Use\n`defaultValue` if you do not need to control the state of an accordion.",
    required: false,
    control: "text",
    type: "string"
  },
  dir: {
    description: "The language read direction.",
    required: false,
    control: "radio",
    type: "string",
    options: ["ltr", "rtl"]
  },
  disabled: {
    description: `Whether or not an accordion is disabled from user interaction.
@defaultValue false`,
    required: false,
    control: "boolean",
    type: "boolean"
  },
  orientation: {
    description: "The layout in which the Accordion operates.",
    required: false,
    control: "radio",
    type: "string",
    defaultValue: "vertical",
    options: ["horizontal", "vertical"]
  },
  value: {
    description: "The controlled stateful value of the accordion item whose content is expanded.",
    required: false,
    control: "text",
    type: "string"
  }
}, o$5 = {
  disabled: {
    description: `Whether or not an accordion item is disabled from user interaction.
@defaultValue false`,
    required: false,
    control: "boolean",
    type: "boolean"
  },
  value: {
    required: false,
    control: "text",
    type: "string",
    description: "Current value of the element"
  }
}, t$2 = {}, r$3 = {}, n$2 = {};
const v$1 = {
  icon: AccordionIcon,
  contentModel: {
    category: "instance",
    children: ["instance"],
    descendants: [n$4.AccordionItem]
  },
  presetStyle: { div },
  initialProps: ["value", "collapsible"],
  props: e$5
}, x = {
  label: "Item",
  icon: ItemIcon,
  indexWithinAncestor: n$4.Accordion,
  contentModel: {
    category: "none",
    children: ["instance"],
    descendants: [n$4.AccordionHeader, n$4.AccordionContent]
  },
  presetStyle: { div },
  initialProps: ["value"],
  props: o$5
}, f$1 = {
  label: "Item Header",
  icon: HeaderIcon,
  contentModel: {
    category: "none",
    children: ["instance"],
    descendants: [n$4.AccordionTrigger]
  },
  presetStyle: {
    h3: [
      ...h3,
      {
        property: "margin-top",
        value: { type: "unit", unit: "px", value: 0 }
      },
      {
        property: "margin-bottom",
        value: { type: "unit", unit: "px", value: 0 }
      }
    ]
  },
  props: t$2
}, C$1 = {
  label: "Item Trigger",
  icon: TriggerIcon,
  contentModel: {
    category: "none",
    children: ["instance", "rich-text"]
  },
  states: [{ label: "Open", selector: "[data-state=open]" }],
  presetStyle: {
    button: [button, b$4].flat()
  },
  props: r$3
}, H = {
  label: "Item Content",
  icon: ContentIcon,
  contentModel: {
    category: "none",
    children: ["instance", "rich-text"]
  },
  presetStyle: {
    div
  },
  props: n$2
};
const e$4 = {
  defaultValue: { required: false, control: "text", type: "string" },
  delayDuration: {
    description: `The duration from when the pointer enters the trigger until the tooltip gets opened.
@defaultValue 200`,
    required: false,
    control: "number",
    type: "number"
  },
  dir: {
    required: false,
    control: "radio",
    type: "string",
    options: ["ltr", "rtl"],
    description: "The text directionality of the element"
  },
  skipDelayDuration: {
    description: `How much time a user has to enter another trigger without incurring a delay again.
@defaultValue 300`,
    required: false,
    control: "number",
    type: "number"
  },
  value: {
    required: false,
    control: "text",
    type: "string",
    description: "Current value of the element"
  }
}, t$1 = {}, r$2 = {}, n$1 = {}, o$4 = {
  value: {
    required: false,
    control: "text",
    type: "string",
    description: "Current value of the element"
  }
}, i$1 = {
  active: { required: false, control: "boolean", type: "boolean" }
}, a = {};
const L = {
  icon: NavigationMenuIcon,
  contentModel: {
    category: "instance",
    children: ["instance"],
    descendants: [n$4.NavigationMenuList, n$4.NavigationMenuViewport]
  },
  presetStyle: {
    div
  },
  props: e$4
}, h = {
  icon: ListIcon,
  label: "Menu List",
  contentModel: {
    category: "none",
    children: ["instance"],
    descendants: [n$4.NavigationMenuItem]
  },
  presetStyle: {
    div
  },
  props: t$1
}, b$2 = {
  icon: ListItemIcon,
  label: "Menu Item",
  indexWithinAncestor: n$4.NavigationMenu,
  contentModel: {
    category: "none",
    children: ["instance"],
    descendants: [
      n$4.NavigationMenuTrigger,
      n$4.NavigationMenuContent,
      n$4.NavigationMenuLink
    ]
  },
  presetStyle: {
    div
  },
  props: o$4
}, k$3 = {
  icon: TriggerIcon,
  label: "Menu Trigger",
  contentModel: {
    category: "none",
    children: ["instance"]
  },
  props: a
}, w$1 = {
  icon: ContentIcon,
  label: "Menu Content",
  contentModel: {
    category: "none",
    children: ["instance"],
    descendants: [n$4.NavigationMenuLink]
  },
  presetStyle: {
    div
  },
  props: n$1
}, C = {
  icon: BoxIcon,
  label: "Accessible Link Wrapper",
  contentModel: {
    category: "none",
    children: ["instance"]
  },
  props: i$1
}, S = {
  icon: ViewportIcon,
  label: "Menu Viewport",
  contentModel: {
    category: "none",
    children: ["instance"]
  },
  presetStyle: {
    div
  },
  props: r$2
};
const e$3 = {
  autoComplete: {
    required: false,
    control: "text",
    type: "string",
    description: "Hint for form autofill feature"
  },
  defaultValue: { required: false, control: "text", type: "string" },
  dir: {
    required: false,
    control: "radio",
    type: "string",
    options: ["ltr", "rtl"],
    description: "The text directionality of the element"
  },
  disabled: {
    required: false,
    control: "boolean",
    type: "boolean",
    description: "Whether the form control is disabled"
  },
  form: {
    required: false,
    control: "text",
    type: "string",
    description: "Associates the element with a form element"
  },
  name: {
    required: false,
    control: "text",
    type: "string",
    description: "Name of the element to use for form submission and in the form.elements API"
  },
  open: {
    required: false,
    control: "boolean",
    type: "boolean",
    description: "Whether the dialog box is showing"
  },
  required: {
    required: false,
    control: "boolean",
    type: "boolean",
    description: "Whether the control is required for form submission"
  },
  value: {
    required: false,
    control: "text",
    type: "string",
    description: "Current value of the element"
  }
}, t = {}, o$3 = {
  placeholder: {
    required: false,
    control: "text",
    type: "string",
    description: "User-visible label to be placed within the form control"
  }
}, r$1 = {
  align: {
    required: false,
    control: "radio",
    type: "string",
    options: ["center", "start", "end"]
  },
  alignOffset: { required: false, control: "number", type: "number" },
  arrowPadding: { required: false, control: "number", type: "number" },
  avoidCollisions: { required: false, control: "boolean", type: "boolean" },
  hideWhenDetached: { required: false, control: "boolean", type: "boolean" },
  sideOffset: { required: false, control: "number", type: "number" },
  sticky: {
    required: false,
    control: "radio",
    type: "string",
    options: ["partial", "always"]
  },
  updatePositionStrategy: {
    required: false,
    control: "radio",
    type: "string",
    options: ["always", "optimized"]
  }
}, n = {
  nonce: {
    required: false,
    control: "text",
    type: "string",
    description: "Cryptographic nonce used in Content Security Policy checks [CSP]"
  }
}, i = {
  disabled: {
    required: false,
    control: "boolean",
    type: "boolean",
    description: "Whether the form control is disabled"
  },
  textValue: { required: false, control: "text", type: "string" },
  value: {
    required: true,
    control: "text",
    type: "string",
    description: "Current value of the element"
  }
}, l = {}, s = {};
const b$1 = {
  icon: SelectIcon,
  contentModel: {
    category: "instance",
    children: ["instance"],
    descendants: [n$4.SelectTrigger, n$4.SelectContent]
  },
  initialProps: ["name", "value", "open", "required"],
  props: e$3
}, f = {
  icon: TriggerIcon,
  contentModel: {
    category: "none",
    children: ["instance"],
    descendants: [n$4.SelectValue]
  },
  presetStyle: { button },
  props: t
}, w = {
  label: "Value",
  icon: FormTextFieldIcon,
  contentModel: {
    category: "none",
    children: []
  },
  presetStyle: { span },
  initialProps: ["placeholder"],
  props: o$3
}, v = {
  icon: ContentIcon,
  contentModel: {
    category: "none",
    children: ["instance"],
    descendants: [n$4.SelectViewport]
  },
  presetStyle: { div },
  props: r$1
}, P = {
  icon: ViewportIcon,
  contentModel: {
    category: "none",
    children: ["instance"],
    descendants: [n$4.SelectItem]
  },
  presetStyle: { div },
  props: n
}, k$2 = {
  icon: ItemIcon,
  contentModel: {
    category: "none",
    children: ["instance"],
    descendants: [n$4.SelectItemIndicator, n$4.SelectItemText]
  },
  presetStyle: { div },
  initialProps: ["value"],
  props: i
}, F = {
  label: "Indicator",
  icon: CheckMarkIcon,
  contentModel: {
    category: "none",
    children: ["instance"]
  },
  presetStyle: { span },
  props: l
}, q = {
  label: "Item Text",
  icon: TextIcon,
  contentModel: {
    category: "none",
    children: ["instance", "rich-text"]
  },
  presetStyle: { span },
  props: s
};
const e$2 = {
  checked: {
    required: false,
    control: "boolean",
    type: "boolean",
    description: "Whether the control is checked"
  },
  required: {
    required: false,
    control: "boolean",
    type: "boolean",
    description: "Whether the control is required for form submission"
  }
}, o$2 = {};
const m$1 = {
  icon: SwitchIcon,
  contentModel: {
    category: "instance",
    children: ["instance"],
    descendants: [n$4.SwitchThumb]
  },
  states: [
    { label: "Checked", selector: "[data-state=checked]" },
    { label: "Unchecked", selector: "[data-state=unchecked]" }
  ],
  presetStyle: {
    button: [button, b$4].flat()
  },
  initialProps: ["id", "class", "name", "value", "checked", "required"],
  props: e$2
}, b = {
  icon: TriggerIcon,
  contentModel: {
    category: "none",
    children: ["instance"]
  },
  states: [
    { label: "Checked", selector: "[data-state=checked]" },
    { label: "Unchecked", selector: "[data-state=unchecked]" }
  ],
  presetStyle: {
    span
  },
  props: o$2
};
const e$1 = {
  checked: {
    required: false,
    control: "boolean",
    type: "boolean",
    description: "Whether the control is checked"
  },
  required: {
    required: false,
    control: "boolean",
    type: "boolean",
    description: "Whether the control is required for form submission"
  }
}, o$1 = {};
const m = {
  icon: CheckboxCheckedIcon,
  contentModel: {
    category: "instance",
    children: ["instance"],
    descendants: [n$4.CheckboxIndicator]
  },
  states: [
    { label: "Checked", selector: "[data-state=checked]" },
    { label: "Unchecked", selector: "[data-state=unchecked]" }
  ],
  presetStyle: {
    button: [button, b$4].flat()
  },
  initialProps: ["id", "class", "name", "value", "required", "checked"],
  props: e$1
}, k$1 = {
  icon: TriggerIcon,
  contentModel: {
    category: "none",
    children: ["instance", "rich-text"]
  },
  presetStyle: {
    span
  },
  props: o$1
};
const e = {
  defaultValue: { required: false, control: "text", type: "string" },
  dir: {
    required: false,
    control: "radio",
    type: "string",
    options: ["ltr", "rtl"],
    description: "The text directionality of the element"
  },
  disabled: {
    required: false,
    control: "boolean",
    type: "boolean",
    description: "Whether the form control is disabled"
  },
  loop: {
    required: false,
    control: "boolean",
    type: "boolean",
    description: "Whether to loop the media resource"
  },
  name: {
    required: false,
    control: "text",
    type: "string",
    description: "Name of the element to use for form submission and in the form.elements API"
  },
  orientation: {
    required: false,
    control: "radio",
    type: "string",
    options: ["horizontal", "vertical"]
  },
  required: {
    required: false,
    control: "boolean",
    type: "boolean",
    description: "Whether the control is required for form submission"
  },
  value: {
    required: false,
    control: "text",
    type: "string",
    description: "Current value of the element"
  }
}, o = {
  checked: {
    required: false,
    control: "boolean",
    type: "boolean",
    description: "Whether the control is checked"
  },
  required: {
    required: false,
    control: "boolean",
    type: "boolean",
    description: "Whether the control is required for form submission"
  },
  value: {
    required: true,
    control: "text",
    type: "string",
    description: "Current value of the element"
  }
}, r = {};
const R = {
  icon: RadioGroupIcon,
  contentModel: {
    category: "instance",
    children: ["instance"],
    descendants: [n$4.RadioGroupItem]
  },
  presetStyle: {
    div
  },
  initialProps: ["id", "class", "name", "value", "required"],
  props: e
}, G = {
  icon: ItemIcon,
  contentModel: {
    category: "none",
    children: ["instance"],
    descendants: [n$4.RadioGroupIndicator]
  },
  states: [
    { label: "Checked", selector: "[data-state=checked]" },
    { label: "Unchecked", selector: "[data-state=unchecked]" }
  ],
  presetStyle: {
    button: [button, b$4].flat()
  },
  initialProps: ["value"],
  props: o
}, k = {
  icon: TriggerIcon,
  contentModel: {
    category: "none",
    children: ["instance"]
  },
  states: [
    { label: "Checked", selector: "[data-state=checked]" },
    { label: "Unchecked", selector: "[data-state=unchecked]" }
  ],
  presetStyle: {
    span
  },
  props: r
};
const radixComponentMetas = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Accordion: v$1,
  AccordionContent: H,
  AccordionHeader: f$1,
  AccordionItem: x,
  AccordionTrigger: C$1,
  Checkbox: m,
  CheckboxIndicator: k$1,
  Collapsible: g$1,
  CollapsibleContent: d$1,
  CollapsibleTrigger: m$4,
  Dialog: P$1,
  DialogClose: H$1,
  DialogContent: O,
  DialogDescription: E,
  DialogOverlay: b$3,
  DialogTitle: B,
  DialogTrigger: S$1,
  Label: m$2,
  NavigationMenu: L,
  NavigationMenuContent: w$1,
  NavigationMenuItem: b$2,
  NavigationMenuLink: C,
  NavigationMenuList: h,
  NavigationMenuTrigger: k$3,
  NavigationMenuViewport: S,
  Popover: h$1,
  PopoverClose: u,
  PopoverContent: y$1,
  PopoverTrigger: C$3,
  RadioGroup: R,
  RadioGroupIndicator: k,
  RadioGroupItem: G,
  Select: b$1,
  SelectContent: v,
  SelectItem: k$2,
  SelectItemIndicator: F,
  SelectItemText: q,
  SelectTrigger: f,
  SelectValue: w,
  SelectViewport: P,
  Switch: m$1,
  SwitchThumb: b,
  Tabs: y,
  TabsContent: C$2,
  TabsList: f$2,
  TabsTrigger: x$1,
  Tooltip: m$3,
  TooltipContent: T,
  TooltipTrigger: g
}, Symbol.toStringTag, { value: "Module" }));
const createFramework$2 = async () => {
  const routeTemplatesDir = join("app", "route-templates");
  const htmlTemplate = await readFile(
    join(routeTemplatesDir, "html.tsx"),
    "utf8"
  );
  const xmlTemplate = await readFile(
    join(routeTemplatesDir, "xml.tsx"),
    "utf8"
  );
  const defaultSitemapTemplate = await readFile(
    join(routeTemplatesDir, "default-sitemap.tsx"),
    "utf8"
  );
  const redirectTemplate = await readFile(
    join(routeTemplatesDir, "redirect.tsx"),
    "utf8"
  );
  await rm(routeTemplatesDir, { recursive: true, force: true });
  const base = "@webstudio-is/sdk-components-react";
  const remix = "@webstudio-is/sdk-components-react-remix";
  const reactRadix = "@webstudio-is/sdk-components-react-radix";
  const animation = "@webstudio-is/sdk-components-animation";
  const components = {};
  const metas = {};
  for (const [name2, meta] of Object.entries(baseComponentMetas)) {
    components[name2] = `${base}:${name2}`;
    metas[name2] = meta;
  }
  for (const name2 of ["Body", "Link", "RichTextLink", "Form", "RemixForm"]) {
    components[name2] = `${remix}:${name2}`;
  }
  for (const [name2, meta] of Object.entries(radixComponentMetas)) {
    components[`${reactRadix}:${name2}`] = `${reactRadix}:${name2}`;
    metas[`${reactRadix}:${name2}`] = meta;
  }
  for (const [name2, meta] of Object.entries(animationComponentMetas)) {
    components[`${animation}:${name2}`] = `${animation}:${name2}`;
    metas[`${animation}:${name2}`] = meta;
  }
  return {
    metas,
    components,
    tags: {
      textarea: `${base}:Textarea`,
      input: `${base}:Input`,
      select: `${base}:Select`,
      body: `${remix}:Body`,
      a: `${remix}:Link`,
      form: `${remix}:RemixForm`
    },
    html: ({ pagePath }) => [
      {
        file: join("app", "routes", `${generateRemixRoute(pagePath)}.tsx`),
        template: htmlTemplate
      }
    ],
    xml: ({ pagePath }) => [
      {
        file: join("app", "routes", `${generateRemixRoute(pagePath)}.tsx`),
        template: xmlTemplate
      }
    ],
    redirect: ({ pagePath }) => [
      {
        file: join("app", "routes", `${generateRemixRoute(pagePath)}.ts`),
        template: redirectTemplate
      }
    ],
    defaultSitemap: () => [
      {
        file: join(
          "app",
          "routes",
          `${generateRemixRoute("/sitemap.xml")}.tsx`
        ),
        template: defaultSitemapTemplate
      }
    ]
  };
};
const createFramework$1 = async () => {
  const routeTemplatesDir = join("app", "route-templates");
  const htmlTemplate = await readFile(
    join(routeTemplatesDir, "html.tsx"),
    "utf8"
  );
  const xmlTemplate = await readFile(
    join(routeTemplatesDir, "xml.tsx"),
    "utf8"
  );
  const defaultSitemapTemplate = await readFile(
    join(routeTemplatesDir, "default-sitemap.tsx"),
    "utf8"
  );
  const redirectTemplate = await readFile(
    join(routeTemplatesDir, "redirect.tsx"),
    "utf8"
  );
  await rm(routeTemplatesDir, { recursive: true, force: true });
  const base = "@webstudio-is/sdk-components-react";
  const reactRouter = "@webstudio-is/sdk-components-react-router";
  const reactRadix = "@webstudio-is/sdk-components-react-radix";
  const animation = "@webstudio-is/sdk-components-animation";
  const components = {};
  const metas = {};
  for (const [name2, meta] of Object.entries(baseComponentMetas)) {
    components[name2] = `${base}:${name2}`;
    metas[name2] = meta;
  }
  for (const name2 of ["Body", "Link", "RichTextLink", "Form", "RemixForm"]) {
    components[name2] = `${reactRouter}:${name2}`;
  }
  for (const [name2, meta] of Object.entries(radixComponentMetas)) {
    components[`${reactRadix}:${name2}`] = `${reactRadix}:${name2}`;
    metas[`${reactRadix}:${name2}`] = meta;
  }
  for (const [name2, meta] of Object.entries(animationComponentMetas)) {
    components[`${animation}:${name2}`] = `${animation}:${name2}`;
    metas[`${animation}:${name2}`] = meta;
  }
  return {
    metas,
    components,
    tags: {
      textarea: `${base}:Textarea`,
      input: `${base}:Input`,
      select: `${base}:Select`,
      body: `${reactRouter}:Body`,
      a: `${reactRouter}:Link`,
      form: `${reactRouter}:RemixForm`
    },
    html: ({ pagePath }) => [
      {
        file: join("app", "routes", `${generateRemixRoute(pagePath)}.tsx`),
        template: htmlTemplate
      }
    ],
    xml: ({ pagePath }) => [
      {
        file: join("app", "routes", `${generateRemixRoute(pagePath)}.tsx`),
        template: xmlTemplate
      }
    ],
    redirect: ({ pagePath }) => [
      {
        file: join("app", "routes", `${generateRemixRoute(pagePath)}.ts`),
        template: redirectTemplate
      }
    ],
    defaultSitemap: () => [
      {
        file: join(
          "app",
          "routes",
          `${generateRemixRoute("/sitemap.xml")}.tsx`
        ),
        template: defaultSitemapTemplate
      }
    ]
  };
};
const generateVikeRoute = (pagePath) => {
  if (pagePath === "/") {
    return "index";
  }
  return pagePath;
};
const createFramework = async () => {
  const routeTemplatesDir = join("app", "route-templates");
  const htmlPageTemplate = await readFile(
    join(routeTemplatesDir, "html", "+Page.tsx"),
    "utf8"
  );
  const htmlHeadTemplate = await readFile(
    join(routeTemplatesDir, "html", "+Head.tsx"),
    "utf8"
  );
  const htmlDataTemplate = await readFile(
    join(routeTemplatesDir, "html", "+data.ts"),
    "utf8"
  );
  await rm(routeTemplatesDir, { recursive: true, force: true });
  const base = "@webstudio-is/sdk-components-react";
  const reactRadix = "@webstudio-is/sdk-components-react-radix";
  const animation = "@webstudio-is/sdk-components-animation";
  const components = {};
  const metas = {};
  for (const [name2, meta] of Object.entries(baseComponentMetas)) {
    components[name2] = `${base}:${name2}`;
    metas[name2] = meta;
  }
  for (const [name2, meta] of Object.entries(radixComponentMetas)) {
    components[`${reactRadix}:${name2}`] = `${reactRadix}:${name2}`;
    metas[`${reactRadix}:${name2}`] = meta;
  }
  for (const [name2, meta] of Object.entries(animationComponentMetas)) {
    components[`${animation}:${name2}`] = `${animation}:${name2}`;
    metas[`${animation}:${name2}`] = meta;
  }
  return {
    metas,
    components,
    tags: {
      textarea: `${base}:Textarea`,
      input: `${base}:Input`,
      select: `${base}:Select`
    },
    html: ({ pagePath }) => {
      if (isPathnamePattern(pagePath)) {
        return [];
      }
      return [
        {
          file: join("pages", generateVikeRoute(pagePath), "+Page.tsx"),
          template: htmlPageTemplate
        },
        {
          file: join("pages", generateVikeRoute(pagePath), "+Head.tsx"),
          template: htmlHeadTemplate
        },
        {
          file: join("pages", generateVikeRoute(pagePath), "+data.ts"),
          template: htmlDataTemplate
        }
      ];
    },
    xml: () => [],
    redirect: () => [],
    defaultSitemap: () => []
  };
};
const limit = pLimit(10);
const downloadAsset = async (url, name2, assetBaseUrl) => {
  const assetPath = join("public", assetBaseUrl, name2);
  const tempAssetPath = `${assetPath}.tmp`;
  try {
    await access(assetPath);
  } catch {
    await createFolderIfNotExists(dirname(assetPath));
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
      }
      const writableStream = createWriteStream(tempAssetPath);
      await pipeline(
        response.body,
        writableStream
      );
      await rename(tempAssetPath, assetPath);
    } catch (error) {
      console.error(`Error in downloading file ${name2} 
 ${error}`);
    }
  }
};
const mergeJsonInto = async (sourcePath, destinationPath) => {
  const sourceJson = await readFile(sourcePath, "utf8");
  const destinationJson = await readFile(destinationPath, "utf8").catch(
    (error) => {
      if (error instanceof Error && "code" in error && error.code === "ENOENT") {
        return "{}";
      }
      throw new Error(error);
    }
  );
  const content = JSON.stringify(
    merge(JSON.parse(destinationJson), JSON.parse(sourceJson), {
      arrayMerge: (_target, source) => source
    }),
    null,
    "  "
  );
  await writeFile(destinationPath, content, "utf8");
};
const isCliTemplate = async (template) => {
  const currentPath = fileURLToPath(new URL(import.meta.url));
  const templatesPath = normalize(
    join(dirname(currentPath), "..", "templates")
  );
  const dirents = await readdir(templatesPath, { withFileTypes: true });
  for (const dirent of dirents) {
    if (dirent.isDirectory() && dirent.name === template) {
      return true;
    }
  }
  return false;
};
const getTemplatePath = async (template) => {
  const currentPath = fileURLToPath(new URL(import.meta.url));
  const templatePath = await isCliTemplate(template) ? normalize(join(dirname(currentPath), "..", "templates", template)) : template;
  return templatePath;
};
const copyTemplates = async (template) => {
  const templatePath = await getTemplatePath(template);
  await cp(templatePath, cwd(), {
    recursive: true,
    filter: (source) => {
      const name2 = basename(source);
      return name2 !== "package.json" && name2 !== "tsconfig.json";
    }
  });
  if (existsSync(join(templatePath, "package.json"))) {
    await mergeJsonInto(
      join(templatePath, "package.json"),
      join(cwd(), "package.json")
    );
  }
  if (existsSync(join(templatePath, "tsconfig.json"))) {
    await mergeJsonInto(
      join(templatePath, "tsconfig.json"),
      join(cwd(), "tsconfig.json")
    );
  }
};
const importFrom = (importee, importer) => {
  return relative(dirname(importer), importee).replaceAll("\\", "/");
};
const npmrc = `force=true
loglevel=error
audit=false
fund=false
`;
const prebuild = async (options) => {
  var _a2, _b2, _c2, _d2, _e2, _f2, _g, _h, _i, _j, _k;
  if (options.template.length === 0) {
    log.error(
      `Template is not provided
Please check webstudio --help for more details`
    );
    exit(1);
  }
  for (const template of options.template) {
    if (template.startsWith(".") || template.startsWith("/")) {
      continue;
    }
    if (await isCliTemplate(template) === false) {
      log.error(
        `Template ${options.template} is not available
Please check webstudio --help for more details`
      );
      exit(1);
    }
  }
  log.step("Scaffolding the project files");
  const appRoot = "app";
  const generatedDir = join(appRoot, "__generated__");
  await rm(generatedDir, { recursive: true, force: true });
  const routesDir = join(appRoot, "routes");
  await rm(routesDir, { recursive: true, force: true });
  await writeFile(join(cwd(), ".npmrc"), npmrc);
  for (const template of options.template) {
    await copyTemplates(template);
  }
  let framework;
  if (options.template.includes("ssg")) {
    framework = await createFramework();
  } else if (options.template.includes("react-router")) {
    framework = await createFramework$1();
  } else {
    framework = await createFramework$2();
  }
  const constants2 = await import(pathToFileURL(join(cwd(), "app/constants.mjs")).href);
  const { assetBaseUrl } = constants2;
  const siteData = await loadJSONFile(LOCAL_DATA_FILE);
  if (siteData === null) {
    throw new Error(
      `Project data is missing, please make sure you the project is synced.`
    );
  }
  const usedMetas = new Map(
    Object.entries(coreMetas)
  );
  const siteDataByPage = {};
  const fontAssetsByPage = {};
  const backgroundImageAssetsByPage = {};
  const normalizedProps = normalizeProps({
    props: siteData.build.props.map(([_id, prop]) => prop),
    assetBaseUrl,
    assets: new Map(siteData.assets.map((asset) => [asset.id, asset])),
    uploadingImageAssets: [],
    pages: siteData.build.pages,
    source: "prebuild"
  });
  for (const page of Object.values(siteData.pages)) {
    const instanceMap = new Map(siteData.build.instances);
    const pageInstanceSet = findTreeInstanceIds(
      instanceMap,
      page.rootInstanceId
    );
    pageInstanceSet.add(ROOT_INSTANCE_ID);
    const instances = [];
    for (const [_instanceId, instance] of siteData.build.instances) {
      if (pageInstanceSet.has(instance.id)) {
        instances.push([instance.id, instance]);
        const meta = framework.metas[instance.component];
        if (meta) {
          usedMetas.set(instance.component, meta);
        }
      }
    }
    const resourceIds = /* @__PURE__ */ new Set();
    const props = [];
    for (const prop of normalizedProps) {
      if (pageInstanceSet.has(prop.instanceId)) {
        props.push([prop.id, prop]);
        if (prop.type === "resource") {
          resourceIds.add(prop.value);
        }
      }
    }
    const dataSources = [];
    for (const [dataSourceId, dataSource] of siteData.build.dataSources) {
      if (pageInstanceSet.has(dataSource.scopeInstanceId ?? "")) {
        dataSources.push([dataSourceId, dataSource]);
        if (dataSource.type === "resource") {
          resourceIds.add(dataSource.resourceId);
        }
      }
    }
    const resources = [];
    for (const [resourceId, resource] of siteData.build.resources ?? []) {
      if (resourceIds.has(resourceId)) {
        resources.push([resourceId, resource]);
      }
    }
    siteDataByPage[page.id] = {
      build: {
        props,
        instances,
        dataSources,
        resources
      },
      pages: siteData.pages,
      page,
      assets: siteData.assets
    };
    const styleSourceSelections = ((_a2 = siteData.build) == null ? void 0 : _a2.styleSourceSelections) ?? [];
    const pageStyleSourceIds = new Set(
      styleSourceSelections.filter(([, { instanceId }]) => pageInstanceSet.has(instanceId)).map(([, { values }]) => values).flat()
    );
    const pageStyles = (_c2 = (_b2 = siteData.build) == null ? void 0 : _b2.styles) == null ? void 0 : _c2.filter(
      ([, { styleSourceId }]) => pageStyleSourceIds.has(styleSourceId)
    );
    const pageFontFamilySet = new Set(
      pageStyles.filter(([, { property }]) => property === "fontFamily").map(
        ([, { value }]) => value.type === "fontFamily" ? value.value : void 0
      ).flat().filter((value) => value !== void 0)
    );
    const pageFontAssets = siteData.assets.filter((asset) => asset.type === "font").filter((fontAsset) => pageFontFamilySet.has(fontAsset.meta.family)).map((asset) => asset.name);
    fontAssetsByPage[page.id] = pageFontAssets;
    const backgroundImageAssetIdSet = new Set(
      pageStyles.filter(([, { property }]) => property === "backgroundImage").map(
        ([, { value }]) => value.type === "layers" ? value.value.map(
          (layer) => layer.type === "image" ? layer.value.type === "asset" ? layer.value.value : void 0 : void 0
        ) : void 0
      ).flat().filter((value) => value !== void 0)
    );
    const backgroundImageAssets = siteData.assets.filter((asset) => asset.type === "image").filter((imageAsset) => backgroundImageAssetIdSet.has(imageAsset.id)).map((asset) => asset.name);
    backgroundImageAssetsByPage[page.id] = backgroundImageAssets;
  }
  const assetsToDownload = [];
  if (options.assets === true) {
    const assetOrigin = siteData.origin;
    if (!assetOrigin) {
      console.warn("Warning: Asset origin is not defined in project data.");
    }
    for (const asset of siteData.assets) {
      assetsToDownload.push(
        limit(
          () => downloadAsset(
            getAssetUrl(asset, assetOrigin || "").href,
            asset.name,
            assetBaseUrl
          )
        )
      );
    }
  }
  const assets = new Map(siteData.assets.map((asset) => [asset.id, asset]));
  const { cssText, classes } = generateCss({
    instances: new Map(siteData.build.instances),
    props: new Map(siteData.build.props),
    assets,
    breakpoints: new Map((_d2 = siteData.build) == null ? void 0 : _d2.breakpoints),
    styles: new Map((_e2 = siteData.build) == null ? void 0 : _e2.styles),
    styleSourceSelections: new Map((_f2 = siteData.build) == null ? void 0 : _f2.styleSourceSelections),
    // pass only used metas to not generate unused preset styles
    componentMetas: usedMetas,
    assetBaseUrl,
    atomic: ((_g = siteData.build.pages.compiler) == null ? void 0 : _g.atomicStyles) ?? true
  });
  await createFileIfNotExists(join(generatedDir, "index.css"), cssText);
  for (const page of Object.values(siteData.pages)) {
    const scope = createScope([
      // manually maintained list of occupied identifiers
      "useState",
      "Fragment",
      "useResource",
      "useVariableState",
      "Page",
      "_props"
    ]);
    const pageData = siteDataByPage[page.id];
    const instances = new Map(pageData.build.instances);
    const documentType = page.meta.documentType ?? "html";
    let rootInstanceId = page.rootInstanceId;
    if (documentType === "xml") {
      const bodyInstance = instances.get(rootInstanceId);
      const firstChild = bodyInstance == null ? void 0 : bodyInstance.children.at(0);
      if ((firstChild == null ? void 0 : firstChild.type) === "id") {
        rootInstanceId = firstChild.value;
      }
      for (const instance of instances.values()) {
        if (isCoreComponent(instance.component)) {
          continue;
        }
        if (((_h = usedMetas.get(instance.component)) == null ? void 0 : _h.category) === "xml") {
          continue;
        }
        instances.delete(instance.id);
      }
    }
    const imports2 = /* @__PURE__ */ new Map();
    for (const instance of instances.values()) {
      let descriptor = framework.components[instance.component];
      let id = instance.component;
      if (instance.component === elementComponent && instance.tag) {
        descriptor = framework.tags[instance.tag];
        id = descriptor;
      }
      if (descriptor === void 0) {
        continue;
      }
      const [importSource, importSpecifier] = descriptor.split(":");
      let specifiers = imports2.get(importSource);
      if (specifiers === void 0) {
        specifiers = /* @__PURE__ */ new Map();
        imports2.set(importSource, specifiers);
      }
      specifiers.set(id, importSpecifier);
    }
    let importsString = "";
    for (const [importSource, specifiers] of imports2) {
      const specifiersString = Array.from(specifiers).map(
        ([id, importSpecifier]) => `${importSpecifier} as ${scope.getName(id, importSpecifier)}`
      ).join(", ");
      importsString += `import { ${specifiersString} } from "${importSource}";
`;
    }
    const pageFontAssets = fontAssetsByPage[page.id];
    const pageBackgroundImageAssets = backgroundImageAssetsByPage[page.id];
    const props = new Map(pageData.build.props);
    const dataSources = new Map(pageData.build.dataSources);
    const resources = new Map(pageData.build.resources);
    replaceFormActionsWithResources({
      instances,
      resources,
      props
    });
    const pageComponent = generateWebstudioComponent({
      scope,
      name: "Page",
      rootInstanceId,
      parameters: [
        {
          id: `page-system`,
          instanceId: "",
          name: "system",
          type: "parameter",
          value: page.systemDataSourceId ?? ""
        },
        {
          id: "global-system",
          type: "parameter",
          instanceId: "",
          name: "system",
          value: SYSTEM_VARIABLE_ID
        }
      ],
      instances,
      props,
      dataSources,
      classesMap: classes,
      metas: usedMetas,
      tagsOverrides: framework.tags
    });
    const projectMeta = siteData.build.pages.meta;
    const contactEmail = (
      // fallback to user email when contact email is empty string
      (projectMeta == null ? void 0 : projectMeta.contactEmail) || ((_i = siteData.user) == null ? void 0 : _i.email) || void 0
    );
    const favIconAsset = (_j = assets.get((projectMeta == null ? void 0 : projectMeta.faviconAssetId) ?? "")) == null ? void 0 : _j.name;
    const pagePath = getPagePath(page.id, siteData.build.pages);
    const breakpoints = siteData.build.breakpoints.map(([_, value]) => ({
      id: value.id,
      minWidth: value.minWidth,
      maxWidth: value.maxWidth
    })).sort(compareMedia);
    const pageExports = `/* eslint-disable */
      /* This is a auto generated file for building the project */ 


      import { Fragment, useState } from "react";
      import { useResource, useVariableState } from "@webstudio-is/react-sdk/runtime";
      ${importsString}

      export const projectId = "${siteData.build.projectId}";

      export const lastPublished = "${new Date(siteData.build.createdAt).toISOString()}";

      export const siteName = ${JSON.stringify(projectMeta == null ? void 0 : projectMeta.siteName)};

      export const breakpoints = ${JSON.stringify(breakpoints)};

      export const favIconAsset: string | undefined =
        ${JSON.stringify(favIconAsset)};

      // Font assets on current page (can be preloaded)
      export const pageFontAssets: string[] =
        ${JSON.stringify(pageFontAssets)}

      export const pageBackgroundImageAssets: string[] =
        ${JSON.stringify(pageBackgroundImageAssets)}

      ${pagePath === "/" ? `
            ${(projectMeta == null ? void 0 : projectMeta.code) ? `
            const Script = ({children, ...props}: Record<string, string | boolean>) => {
              if (children == null) {
                return <script {...props} />;
              }

              return <script {...props} dangerouslySetInnerHTML={{__html: children}} />;
            };
            const Style = ({children, ...props}: Record<string, string | boolean>) => {
              if (children == null) {
                return <style {...props} />;
              }

              return <style {...props} dangerouslySetInnerHTML={{__html: children}} />;
            };
            ` : ""}

            export const CustomCode = () => {
              return (<>${(projectMeta == null ? void 0 : projectMeta.code) ? htmlToJsx(projectMeta.code) : ""}</>);
            }
          ` : ""}

      ${pageComponent}

      export { Page }
    `;
    const serverExports = `/* eslint-disable */
      /* This is a auto generated file for building the project */ 


      import type { PageMeta } from "@webstudio-is/sdk";
      ${generateResources({
      scope,
      page,
      dataSources,
      props,
      resources
    })}

      ${generatePageMeta({
      globalScope: scope,
      page,
      dataSources,
      assets
    })}

      ${generateRemixParams(page.path)}

      export const contactEmail = ${JSON.stringify(contactEmail)};
    `;
    const generatedBasename = generateRemixRoute(pagePath);
    const clientFile = join(generatedDir, `${generatedBasename}.tsx`);
    await createFileIfNotExists(clientFile, pageExports);
    const serverFile = join(generatedDir, `${generatedBasename}.server.tsx`);
    await createFileIfNotExists(serverFile, serverExports);
    const getTemplates = documentType === "html" ? framework.html : framework.xml;
    for (const { file, template } of getTemplates({ pagePath })) {
      const content = template.replaceAll("__CONSTANTS__", importFrom("./app/constants.mjs", file)).replaceAll(
        "__SITEMAP__",
        importFrom(`./app/__generated__/$resources.sitemap.xml`, file)
      ).replaceAll(
        "__ASSETS__",
        importFrom(`./app/__generated__/$resources.assets`, file)
      ).replaceAll(
        "__CLIENT__",
        importFrom(`./app/__generated__/${generatedBasename}`, file)
      ).replaceAll(
        "__SERVER__",
        importFrom(`./app/__generated__/${generatedBasename}.server`, file)
      ).replaceAll(
        "__CSS__",
        importFrom(`./app/__generated__/index.css`, file)
      );
      await createFileIfNotExists(file, content);
    }
  }
  for (const { file, template } of framework.defaultSitemap()) {
    const content = template.replaceAll(
      "__SITEMAP__",
      importFrom(`./app/__generated__/$resources.sitemap.xml`, file)
    );
    await createFileIfNotExists(file, content);
  }
  await createFileIfNotExists(
    join(generatedDir, "$resources.sitemap.xml.ts"),
    `
      export const sitemap = ${JSON.stringify(
      getStaticSiteMapXml(siteData.build.pages, siteData.build.updatedAt),
      null,
      2
    )};
    `
  );
  const assetsById = Object.fromEntries(
    siteData.assets.map((asset) => [
      asset.id,
      toRuntimeAsset(asset, "https://placeholder.local")
    ])
  );
  await createFileIfNotExists(
    join(generatedDir, "$resources.assets.ts"),
    `
    export const assets = ${JSON.stringify(assetsById, null, 2)};
    `
  );
  const redirects = (_k = siteData.build.pages) == null ? void 0 : _k.redirects;
  if (redirects !== void 0 && redirects.length > 0) {
    for (const redirect of redirects) {
      const generatedBasename = generateRemixRoute(redirect.old);
      await createFileIfNotExists(
        join(generatedDir, `${generatedBasename}.ts`),
        `
        export const url = "${redirect.new}";
        export const status = ${redirect.status ?? 301};
        `
      );
      for (const { file, template } of framework.redirect({
        pagePath: redirect.old
      })) {
        const content = template.replaceAll(
          "__REDIRECT__",
          importFrom(`./app/__generated__/${generatedBasename}`, file)
        );
        await createFileIfNotExists(file, content);
      }
    }
  }
  if (assetsToDownload.length > 0) {
    const downloading = spinner();
    downloading.start("Downloading fonts and images");
    await Promise.all(assetsToDownload);
    downloading.stop("Downloaded fonts and images");
  }
  log.step("Build finished");
};
const mapToTemplatesFromOptions = (values) => {
  const templates = [];
  for (const value of values) {
    const template = PROJECT_TEMPLATES.find((item) => item.value === value) ?? INTERNAL_TEMPLATES.find((item) => item.value === value);
    if (template == null) {
      templates.push(value);
      continue;
    }
    if ("expand" in template && template.expand != null) {
      templates.push(...template.expand);
      continue;
    }
    templates.push(value);
  }
  return templates;
};
const buildOptions = (yargs) => yargs.option("assets", {
  type: "boolean",
  default: true,
  describe: "[Experimental] Download assets"
}).option("template", {
  type: "array",
  string: true,
  default: [],
  coerce: mapToTemplatesFromOptions,
  describe: `Template to use for the build [choices: ${PROJECT_TEMPLATES.map(
    (item) => item.value
  ).join(", ")}]`
});
const build = async (options) => {
  try {
    await access(LOCAL_DATA_FILE);
  } catch (error) {
    if (error instanceof Error && "code" in error && error.code === "ENOENT") {
      log.error(
        `You need to link a webstudio project before building it. Run \`webstudio link\` to link a project.`
      );
      exit(1);
    }
    throw error;
  }
  await prebuild(options);
};
const exitIfCancelled = (value) => {
  if (isCancel(value)) {
    cancel("Project initialization is cancelled");
    process.exit(1);
  }
  return value;
};
const initFlow = async (options) => {
  const isProjectConfigured = await isFileExists(".webstudio/config.json");
  let shouldInstallDeps = false;
  let folderName;
  let projectTemplate;
  if (isProjectConfigured === false) {
    const shouldCreateFolder = exitIfCancelled(
      await confirm({
        message: "Would you like to create a project folder? (no to use current folder)",
        initialValue: true
      })
    );
    if (shouldCreateFolder === true) {
      folderName = exitIfCancelled(
        await text({
          message: "Please enter a project name",
          validate(value) {
            if (value.length === 0) {
              return "Folder name is required";
            }
          }
        })
      );
      await createFolderIfNotExists(join(cwd(), folderName));
      chdir(join(cwd(), folderName));
    }
    const shareLink = exitIfCancelled(
      await text({
        message: "Please paste a link from the Share Dialog in the builder",
        validate: validateShareLink
      })
    );
    await link({ link: shareLink });
    if (!options.template.length) {
      projectTemplate = exitIfCancelled(
        await select$2({
          message: "Where would you like to deploy your project?",
          options: PROJECT_TEMPLATES
        })
      );
    }
    shouldInstallDeps = exitIfCancelled(
      await confirm({
        message: "Would you like to install dependencies? (recommended)",
        initialValue: true
      })
    );
  }
  if (!options.template.length && projectTemplate === void 0) {
    projectTemplate = exitIfCancelled(
      await select$2({
        message: "Where would you like to deploy your project?",
        options: PROJECT_TEMPLATES
      })
    );
  }
  await sync({ buildId: void 0, origin: void 0, authToken: void 0 });
  await build({
    ...options,
    template: projectTemplate ? mapToTemplatesFromOptions([projectTemplate]) : options.template
  });
  if (shouldInstallDeps === true) {
    const install = spinner();
    install.start("Installing dependencies");
    await x$2("npm", ["install"]);
    install.stop("Installed dependencies");
  }
  log.message();
  log.message(pc.green(pc.bold(`Your project was successfully synced 🎉`)));
  log.message(
    [
      "Now you can:",
      folderName && `Go to your project: ${pc.dim(`cd ${folderName}`)}`,
      `Run ${pc.dim("npm run dev")} to preview your project on a local server.`,
      projectTemplate && getDeploymentInstructions(projectTemplate)
    ].filter(Boolean).join("\n")
  );
};
const getDeploymentInstructions = (deployTarget) => {
  switch (deployTarget) {
    case "vercel":
      return `Run ${pc.dim("npx vercel")} to publish on Vercel.`;
    case "netlify":
      return [
        `To deploy to Netlify, run the following commands: `,
        `Run ${pc.dim("npx netlify-cli login")} to login to Netlify.`,
        `Run ${pc.dim(
          "npx netlify-cli sites:create"
        )} to create a new project.`,
        `Run ${pc.dim("npx netlify-cli build")} to build the project`,
        `Run ${pc.dim("npx netlify-cli deploy")} to deploy on Netlify.`
      ].join("\n");
  }
};
const name = "webstudio";
const version = "0.0.0-webstudio-version";
const description = "Webstudio CLI";
const author = "Webstudio <github@webstudio.is>";
const homepage = "https://webstudio.is";
const type = "module";
const bin = { "webstudio-cli": "./bin.js", "webstudio": "./bin.js" };
const imports = { "#cli": { "webstudio": "./src/cli.ts", "default": "./lib/cli.js" } };
const files = ["lib/*", "templates/*", "bin.js", "!*.{test,stories}.*"];
const scripts = { "typecheck": "tsgo --noEmit", "build": `node -e "require('node:fs').rmSync('lib', { recursive: true, force: true })" && vite build`, "test": "vitest run" };
const license = "AGPL-3.0-or-later";
const engines = { "node": ">=22" };
const dependencies = { "@clack/prompts": "^0.10.0", "@emotion/hash": "^0.9.2", "acorn": "^8.14.1", "acorn-walk": "^8.3.4", "change-case": "^5.4.4", "deepmerge": "^4.3.1", "env-paths": "^3.0.0", "nanoid": "^5.1.5", "p-limit": "^6.2.0", "parse5": "7.3.0", "picocolors": "^1.1.1", "reserved-identifiers": "^1.0.0", "tinyexec": "^0.3.2", "warn-once": "^0.1.1", "yargs": "^17.7.2", "zod": "^3.24.2" };
const devDependencies = { "@cloudflare/vite-plugin": "^1.1.0", "@netlify/vite-plugin-react-router": "^1.0.1", "@react-router/dev": "^7.5.3", "@react-router/fs-routes": "^7.5.3", "@remix-run/cloudflare": "^2.16.5", "@remix-run/cloudflare-pages": "^2.16.5", "@remix-run/dev": "^2.16.5", "@remix-run/node": "^2.16.5", "@remix-run/react": "^2.16.5", "@remix-run/server-runtime": "^2.16.5", "@types/react": "^18.2.70", "@types/react-dom": "^18.2.25", "@types/yargs": "^17.0.33", "@vercel/react-router": "^1.1.0", "@vitejs/plugin-react": "^4.4.1", "@webstudio-is/css-engine": "0.0.0-webstudio-version", "@webstudio-is/http-client": "0.0.0-webstudio-version", "@webstudio-is/image": "0.0.0-webstudio-version", "@webstudio-is/react-sdk": "0.0.0-webstudio-version", "@webstudio-is/sdk": "0.0.0-webstudio-version", "@webstudio-is/sdk-components-animation": "0.0.0-webstudio-version", "@webstudio-is/sdk-components-react": "0.0.0-webstudio-version", "@webstudio-is/sdk-components-react-radix": "0.0.0-webstudio-version", "@webstudio-is/sdk-components-react-remix": "0.0.0-webstudio-version", "@webstudio-is/sdk-components-react-router": "0.0.0-webstudio-version", "@webstudio-is/tsconfig": "1.0.7", "h3": "^1.15.1", "ipx": "^3.0.3", "isbot": "^5.1.25", "prettier": "3.5.3", "react": "18.3.0-canary-14898b6a9-20240318", "react-dom": "18.3.0-canary-14898b6a9-20240318", "react-router": "^7.5.3", "ts-expect": "^1.3.0", "vike": "^0.4.229", "vite": "^6.3.4", "vitest": "^3.1.2", "wrangler": "^3.63.2" };
const packageJson = {
  name,
  version,
  description,
  author,
  homepage,
  type,
  bin,
  imports,
  files,
  scripts,
  license,
  engines,
  dependencies,
  devDependencies
};
const main = async () => {
  try {
    await createFileIfNotExists(GLOBAL_CONFIG_FILE, "{}");
    const cmd = makeCLI(hideBin(argv)).strict().fail(function(msg, err, yargs) {
      if (err) {
        throw err;
      }
      console.error(msg);
      console.error(yargs.help());
      process.exit(1);
    }).wrap(null).option("v", {
      describe: "Show version number",
      type: "boolean"
    }).option("h", {
      describe: "Show all commands",
      alias: "help",
      type: "boolean"
    }).scriptName("webstudio").usage(
      `Webstudio CLI (${packageJson.version}) allows you to setup, sync, build and preview your project.`
    );
    cmd.version(packageJson.version).alias("v", "version");
    cmd.command(
      ["build"],
      "Build the project",
      (yargs) => {
        return buildOptions(yargs).demandOption(
          "template",
          "Please specify a template to use for the build"
        );
      },
      build
    );
    cmd.command(["link"], "Link the project with the cloud", linkOptions, link);
    cmd.command(["sync"], "Sync your project", syncOptions, sync);
    cmd.command(["$0", "init"], "Setup the project", buildOptions, initFlow);
    await cmd.parse();
  } catch (error) {
    console.error(error);
    exit(1);
  }
};
export {
  main
};
