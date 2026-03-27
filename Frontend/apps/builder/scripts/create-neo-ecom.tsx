import { randomUUID } from "node:crypto";
import { existsSync, readFileSync } from "node:fs";
import util from "node:util";
import path from "node:path";
import { fileURLToPath } from "node:url";
import React from "react";
import {
  ROOT_FOLDER_ID,
  initialBreakpoints,
  type Breakpoint,
  type DataSource,
  type Folder,
  type Instance,
  type Pages,
  type Prop,
  type Resource,
  type StyleDecl,
  type StyleSource,
  type StyleSourceSelection,
} from "@webstudio-is/sdk";
import { css, renderData, ws } from "@webstudio-is/template";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "..", "..", "..");

const parseDotEnv = (source: string) => {
  const values = new Map<string, string>();
  for (const line of source.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (trimmed === "" || trimmed.startsWith("#")) continue;
    const separator = trimmed.indexOf("=");
    if (separator === -1) continue;
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
  return values;
};

const loadEnv = () => {
  const candidates = [
    path.join(repoRoot, "apps", "builder", ".env.development"),
    path.join(repoRoot, "apps", "builder", ".env"),
  ];

  const merged = new Map<string, string>();
  for (const candidate of candidates) {
    if (existsSync(candidate) === false) continue;
    for (const [key, value] of parseDotEnv(readFileSync(candidate, "utf8"))) {
      merged.set(key, value);
    }
  }
  return merged;
};

const env = loadEnv();
const databaseUrl = env.get("DIRECT_URL") ?? env.get("DATABASE_URL");

if (databaseUrl === undefined) {
  throw new Error("DIRECT_URL or DATABASE_URL is missing in apps/builder/.env.development or .env");
}

const normalizedDatabaseUrl = databaseUrl.replace("?pgbouncer=true", "");
process.env.DATABASE_URL = normalizedDatabaseUrl;
process.env.DIRECT_URL = normalizedDatabaseUrl;

const { PrismaClient } = await import(
  "../../../../Backend/packages/prisma-client/src/__generated__/index.js"
);
const prisma = new PrismaClient();
const makeId = () => randomUUID().replaceAll("-", "").slice(0, 21);

const createRootFolder = (children: Folder["children"] = []): Folder => ({
  id: ROOT_FOLDER_ID,
  name: "Root",
  slug: "",
  children,
});

const serializeData = <Type extends { id: string }>(data: Map<Type["id"], Type>) =>
  JSON.stringify(Array.from(data.values()));
const serializePages = (pages: Pages) => JSON.stringify(pages);
const serializeStyleSourceSelections = (
  value: Map<string, StyleSourceSelection>
) => JSON.stringify(Array.from(value.values()));
const serializeStyles = (value: Map<string, StyleDecl>) =>
  JSON.stringify(Array.from(value.values()));

const nav = () => (
  <ws.element
    ws:tag="nav"
    ws:style={css`
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      padding: 12px;
      border: 4px solid #111;
      background: #fff;
      box-shadow: 6px 6px 0 #111;
      margin-bottom: 16px;
    `}
  >
    <ws.element
      ws:tag="strong"
      ws:style={css`
        text-transform: uppercase;
        letter-spacing: 0.05em;
      `}
    >
      neo-ecom
    </ws.element>
    <ws.element ws:tag="div" ws:style={css`display:flex;gap:8px;flex-wrap:wrap;`}>
      <ws.element ws:tag="a" href="/">Home</ws.element>
      <ws.element ws:tag="a" href="/shop">Shop</ws.element>
      <ws.element ws:tag="a" href="/product">Product</ws.element>
      <ws.element ws:tag="a" href="/cart">Cart</ws.element>
      <ws.element ws:tag="a" href="/about">About</ws.element>
      <ws.element ws:tag="a" href="/contact">Contact</ws.element>
    </ws.element>
  </ws.element>
);

const bodyBase = (bg: string) => css`
  margin: 0;
  min-height: 100vh;
  padding: 18px;
  box-sizing: border-box;
  font-family: "Arial Black", Impact, sans-serif;
  color: #111;
  background: ${bg};
`;

const buildData = () => {
  const breakpoints = initialBreakpoints.map((breakpoint) => ({
    ...breakpoint,
    id: makeId(),
  }));

  const homePageId = makeId();
  const shopPageId = makeId();
  const productPageId = makeId();
  const cartPageId = makeId();
  const aboutPageId = makeId();
  const contactPageId = makeId();
  const notFoundPageId = makeId();

  const homeBodyId = makeId();
  const shopBodyId = makeId();
  const productBodyId = makeId();
  const cartBodyId = makeId();
  const aboutBodyId = makeId();
  const contactBodyId = makeId();
  const notFoundBodyId = makeId();

  const data = renderData(
    <>
      <ws.element ws:tag="body" ws:id={homeBodyId} ws:style={bodyBase("#f5f503")}>
        {nav()}
        <ws.element ws:tag="section" ws:style={css`border:4px solid #111;background:#00d9ff;padding:18px;box-shadow:8px 8px 0 #111;`}>
          <ws.element ws:tag="h1">Bold Drops. Brutal Deals.</ws.element>
          <ws.element ws:tag="p">A neo-brutalist ecommerce storefront built with multi-page navigation.</ws.element>
          <ws.element ws:tag="a" href="/shop">Shop now</ws.element>
        </ws.element>
        <ws.element ws:tag="section" ws:style={css`display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-top:14px;`}>
          <ws.element ws:tag="article" ws:style={css`border:4px solid #111;background:#ff6b6b;padding:12px;`}>
            <ws.element ws:tag="h3">Neo Jacket</ws.element>
            <ws.element ws:tag="p">$149</ws.element>
          </ws.element>
          <ws.element ws:tag="article" ws:style={css`border:4px solid #111;background:#7cff6b;padding:12px;`}>
            <ws.element ws:tag="h3">Chunk Runner</ws.element>
            <ws.element ws:tag="p">$129</ws.element>
          </ws.element>
          <ws.element ws:tag="article" ws:style={css`border:4px solid #111;background:#ffb84d;padding:12px;`}>
            <ws.element ws:tag="h3">Box Tote</ws.element>
            <ws.element ws:tag="p">$69</ws.element>
          </ws.element>
        </ws.element>
      </ws.element>

      <ws.element ws:tag="body" ws:id={shopBodyId} ws:style={bodyBase("#f8f8f8")}>
        {nav()}
        <ws.element ws:tag="h1">Shop All</ws.element>
        <ws.element ws:tag="div" ws:style={css`display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:12px;`}>
          {[
            ["Neo Jacket", "$149"],
            ["Chunk Runner", "$129"],
            ["Brutalist Tee", "$49"],
            ["Box Tote", "$69"],
            ["Signal Cap", "$39"],
            ["Concrete Hoodie", "$109"],
          ].map(([name, price], i) => (
            <ws.element key={name} ws:tag="article" ws:style={css`border:4px solid #111;background:${i % 2 ? "#ffe600" : "#00d9ff"};padding:12px;box-shadow:6px 6px 0 #111;`}>
              <ws.element ws:tag="h3">{name}</ws.element>
              <ws.element ws:tag="p">{price}</ws.element>
              <ws.element ws:tag="a" href="/product">View Product</ws.element>
            </ws.element>
          ))}
        </ws.element>
      </ws.element>

      <ws.element ws:tag="body" ws:id={productBodyId} ws:style={bodyBase("#d5ffef")}>
        {nav()}
        <ws.element ws:tag="section" ws:style={css`border:4px solid #111;background:#fff;padding:16px;box-shadow:8px 8px 0 #111;max-width:680px;`}>
          <ws.element ws:tag="h1">Neo Jacket / Black</ws.element>
          <ws.element ws:tag="p">$149</ws.element>
          <ws.element ws:tag="p">Oversized shell. Loud seams. Weather resistant. Limited run.</ws.element>
          <ws.element ws:tag="label">Size</ws.element>
          <ws.element ws:tag="select">
            <ws.element ws:tag="option">S</ws.element>
            <ws.element ws:tag="option">M</ws.element>
            <ws.element ws:tag="option">L</ws.element>
            <ws.element ws:tag="option">XL</ws.element>
          </ws.element>
          <ws.element ws:tag="div" ws:style={css`margin-top:12px;`}>
            <ws.element ws:tag="a" href="/cart">Add to Cart</ws.element>
          </ws.element>
        </ws.element>
      </ws.element>

      <ws.element ws:tag="body" ws:id={cartBodyId} ws:style={bodyBase("#fff1d6")}>
        {nav()}
        <ws.element ws:tag="h1">Your Cart</ws.element>
        <ws.element ws:tag="table" ws:style={css`width:100%;border-collapse:collapse;border:4px solid #111;background:#fff;`}>
          <ws.element ws:tag="tr">
            <ws.element ws:tag="th">Item</ws.element>
            <ws.element ws:tag="th">Qty</ws.element>
            <ws.element ws:tag="th">Price</ws.element>
          </ws.element>
          <ws.element ws:tag="tr">
            <ws.element ws:tag="td">Neo Jacket</ws.element>
            <ws.element ws:tag="td">1</ws.element>
            <ws.element ws:tag="td">$149</ws.element>
          </ws.element>
          <ws.element ws:tag="tr">
            <ws.element ws:tag="td">Chunk Runner</ws.element>
            <ws.element ws:tag="td">1</ws.element>
            <ws.element ws:tag="td">$129</ws.element>
          </ws.element>
        </ws.element>
        <ws.element ws:tag="h3">Total: $278</ws.element>
        <ws.element ws:tag="a" href="/contact">Checkout</ws.element>
      </ws.element>

      <ws.element ws:tag="body" ws:id={aboutBodyId} ws:style={bodyBase("#e6ddff")}>
        {nav()}
        <ws.element ws:tag="h1">About Neo Ecom</ws.element>
        <ws.element ws:tag="p" ws:style={css`border:4px solid #111;background:#fff;padding:12px;max-width:760px;`}>
          We build culture-forward drops with brutalist direction: heavy outlines, loud colors, and unapologetic product stories.
        </ws.element>
      </ws.element>

      <ws.element ws:tag="body" ws:id={contactBodyId} ws:style={bodyBase("#dcf4ff")}>
        {nav()}
        <ws.element ws:tag="h1">Checkout Contact</ws.element>
        <ws.element ws:tag="form" ws:style={css`border:4px solid #111;background:#fff;padding:14px;display:grid;gap:8px;max-width:560px;`}>
          <ws.element ws:tag="label">Full Name</ws.element>
          <ws.element ws:tag="input" type="text" placeholder="Alex Brutal" />
          <ws.element ws:tag="label">Email</ws.element>
          <ws.element ws:tag="input" type="email" placeholder="alex@neo.dev" />
          <ws.element ws:tag="label">Address</ws.element>
          <ws.element ws:tag="textarea" placeholder="Street, City, Zip" />
          <ws.element ws:tag="button" type="submit">Place Order</ws.element>
        </ws.element>
      </ws.element>

      <ws.element ws:tag="body" ws:id={notFoundBodyId} ws:style={bodyBase("#ffffff")}>
        <ws.element ws:tag="section" ws:style={css`border:4px solid #111;background:#ff9ec6;padding:20px;box-shadow:8px 8px 0 #111;max-width:420px;`}>
          <ws.element ws:tag="h1">404</ws.element>
          <ws.element ws:tag="p">Page not found.</ws.element>
          <ws.element ws:tag="a" href="/">Return Home</ws.element>
        </ws.element>
      </ws.element>
    </>,
    makeId,
    breakpoints
  );

  const pages: Pages = {
    meta: {
      siteName: "neo-ecom",
      description:'"Neo-brutalist multi-page ecommerce project generated through Webstudio data model."',
    },
    homePage: {
      id: homePageId,
      name: "Home",
      path: "",
      title: '"neo-ecom"',
      meta: {},
      rootInstanceId: homeBodyId,
    },
    pages: [
      { id: shopPageId, name: "Shop", path: "/shop", title: '"Shop"', meta: {}, rootInstanceId: shopBodyId },
      { id: productPageId, name: "Product", path: "/product", title: '"Product"', meta: {}, rootInstanceId: productBodyId },
      { id: cartPageId, name: "Cart", path: "/cart", title: '"Cart"', meta: {}, rootInstanceId: cartBodyId },
      { id: aboutPageId, name: "About", path: "/about", title: '"About"', meta: {}, rootInstanceId: aboutBodyId },
      { id: contactPageId, name: "Contact", path: "/contact", title: '"Contact"', meta: {}, rootInstanceId: contactBodyId },
      {
        id: notFoundPageId,
        name: "404",
        path: "/*",
        title: '"404"',
        meta: { status: "404", excludePageFromSearch: "false" },
        rootInstanceId: notFoundBodyId,
      },
    ],
    folders: [
      createRootFolder([
        homePageId,
        shopPageId,
        productPageId,
        cartPageId,
        aboutPageId,
        contactPageId,
        notFoundPageId,
      ]),
    ],
  };

  return { ...data, pages };
};

const createUniqueDomain = async (base: string, excludeId?: string) => {
  const normalize = base.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
  const candidate = `${normalize}-${makeId().slice(0, 6).toLowerCase()}`;
  const existing = await prisma.project.findFirst({
    where: {
      domain: candidate,
      ...(excludeId === undefined ? {} : { id: { not: excludeId } }),
    },
    select: { id: true },
  });
  if (existing === null) return candidate;
  return `${normalize}-${makeId().slice(0, 8).toLowerCase()}`;
};

const ensureUser = async () => {
  const user = await prisma.user.findFirst({
    where: { email: "hello@webstudio.is" },
    select: { id: true, email: true },
  });

  if (user !== null) {
    return user;
  }

  return prisma.user.create({
    data: {
      email: "hello@webstudio.is",
      username: "admin",
      image: "",
      provider: "dev",
    },
    select: { id: true, email: true },
  });
};

const ensureProject = async (userId: string) => {
  const existing = await prisma.project.findFirst({
    where: {
      title: "neo-ecom",
      userId,
      isDeleted: false,
    },
    select: { id: true, title: true, domain: true },
  });

  if (existing !== null) {
    return existing;
  }

  return prisma.project.create({
    data: {
      id: randomUUID(),
      userId,
      title: "neo-ecom",
      tags: [],
      domain: await createUniqueDomain("neo-ecom"),
    },
    select: { id: true, title: true, domain: true },
  });
};

const saveBuild = async (projectId: string) => {
  const latest = await prisma.build.findFirst({
    where: {
      projectId,
      deployment: null,
    },
    orderBy: { createdAt: "desc" },
    select: { id: true },
  });

  const data = buildData();

  const payload = {
    projectId,
    pages: serializePages(data.pages),
    breakpoints: serializeData<Breakpoint>(data.breakpoints),
    styles: serializeStyles(data.styles),
    styleSources: serializeData<StyleSource>(data.styleSources),
    styleSourceSelections: serializeStyleSourceSelections(data.styleSourceSelections),
    props: serializeData<Prop>(data.props),
    dataSources: serializeData<DataSource>(data.dataSources),
    resources: serializeData<Resource>(data.resources),
    instances: serializeData<Instance>(data.instances),
    version: 1,
    marketplaceProduct: JSON.stringify({}),
  };

  if (latest !== null) {
    const updated = await prisma.build.update({
      where: { id: latest.id },
      data: payload,
      select: { id: true },
    });
    return updated.id;
  }

  const inserted = await prisma.build.create({
    data: {
      id: randomUUID(),
      createdAt: new Date(),
      ...payload,
    },
    select: { id: true },
  });

  return inserted.id;
};

const main = async () => {
  const user = await ensureUser();
  const project = await ensureProject(user.id);
  const buildId = await saveBuild(project.id);

  console.log(
    JSON.stringify(
      {
        status: "ok",
        projectId: project.id,
        buildId,
        title: "neo-ecom",
        builderUrl: `https://p-${project.id}.wstd.dev:5173/`,
      },
      null,
      2
    )
  );
};

main().catch((error) => {
  console.error("neo-ecom generation failed");
  if (error instanceof Error) {
    console.error(error.message);
    console.error(error.stack);
  }
  try {
    console.error(JSON.stringify(error, null, 2));
  } catch {
    console.error(error);
  }
  console.error(util.inspect(error, { depth: 5 }));
  process.exit(1);
}).finally(async () => {
  await prisma.$disconnect();
});
