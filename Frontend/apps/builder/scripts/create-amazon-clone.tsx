import { randomUUID } from "node:crypto";
import { existsSync, readFileSync } from "node:fs";
import util from "node:util";
import path from "node:path";
import { fileURLToPath } from "node:url";
import React from "react";
import {
  ROOT_FOLDER_ID, initialBreakpoints,
  type Breakpoint, type DataSource, type Folder, type Instance,
  type Pages, type Prop, type Resource, type StyleDecl,
  type StyleSource, type StyleSourceSelection,
} from "@webstudio-is/sdk";
import { css, renderData, ws } from "@webstudio-is/template";
import { hashPassword } from "../app/services/password.server";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "..", "..", "..");
const parseDotEnv = (source: string) => {
  const values = new Map<string, string>();
  for (const line of source.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (trimmed === "" || trimmed.startsWith("#")) continue;
    const sep = trimmed.indexOf("=");
    if (sep === -1) continue;
    const key = trimmed.slice(0, sep).trim();
    let value = trimmed.slice(sep + 1).trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'")))
      value = value.slice(1, -1);
    values.set(key, value);
  }
  return values;
};
const loadEnv = () => {
  const candidates = [path.join(repoRoot, "apps", "builder", ".env.development"), path.join(repoRoot, "apps", "builder", ".env")];
  const merged = new Map<string, string>();
  for (const c of candidates) { if (!existsSync(c)) continue; for (const [k,v] of parseDotEnv(readFileSync(c,"utf8"))) merged.set(k,v); }
  return merged;
};
const env = loadEnv();
const databaseUrl = env.get("DIRECT_URL") ?? env.get("DATABASE_URL");
if (!databaseUrl) throw new Error("DIRECT_URL or DATABASE_URL missing");
const ndb = databaseUrl.replace("?pgbouncer=true","");
process.env.DATABASE_URL = ndb; process.env.DIRECT_URL = ndb;
const { PrismaClient } = await import("../../../../Backend/packages/prisma-client/src/__generated__/index.js");
const prisma = new PrismaClient();
const makeId = () => randomUUID().replaceAll("-","").slice(0,21);
const adminEmail = "admin@gmail.com";
const adminPassword = "admin123";
const LOGO = "https://static.dezeen.com/uploads/2025/05/amazon-rebrand-2025_dezeen_2364_col_1-1-2048x1152.jpg";
const PIMG = "https://images.pexels.com/photos/7797440/pexels-photo-7797440.jpeg";
const createRootFolder = (children: Folder["children"]=[]): Folder => ({ id: ROOT_FOLDER_ID, name:"Root", slug:"", children });
const sd = <Type extends {id:string}>(data: Map<Type["id"],Type>) => JSON.stringify(Array.from(data.values()));
const sp = (pages: Pages) => JSON.stringify(pages);
const sss = (v: Map<string,StyleSourceSelection>) => JSON.stringify(Array.from(v.values()));
const ss = (v: Map<string,StyleDecl>) => JSON.stringify(Array.from(v.values()));

const topNav = () => (
  <ws.element ws:tag="header" ws:style={css`display:flex;flex-direction:column;background:#131921;color:#fff;font-family:Arial,Helvetica,sans-serif;`}>
    <ws.element ws:tag="nav" ws:style={css`display:flex;align-items:center;justify-content:space-between;padding:8px 16px;gap:12px;flex-wrap:wrap;`}>
      <ws.element ws:tag="a" href="/" ws:style={css`display:flex;align-items:center;text-decoration:none;`}>
        <ws.element ws:tag="img" src={LOGO} alt="Amazon" ws:style={css`height:36px;object-fit:contain;`} />
      </ws.element>
      <ws.element ws:tag="div" ws:style={css`flex:1;max-width:640px;display:flex;`}>
        <ws.element ws:tag="input" type="search" placeholder="Search Amazon" ws:style={css`flex:1;padding:8px 12px;border:none;border-radius:4px 0 0 4px;font-size:14px;`} />
        <ws.element ws:tag="button" ws:style={css`padding:6px 12px;background:#febd69;border:none;border-radius:0 4px 4px 0;cursor:pointer;font-weight:bold;`}>Search</ws.element>
      </ws.element>
      <ws.element ws:tag="div" ws:style={css`display:flex;gap:16px;align-items:center;`}>
        <ws.element ws:tag="a" href="/account" ws:style={css`color:#fff;text-decoration:none;font-size:13px;`}>Account</ws.element>
        <ws.element ws:tag="a" href="/deals" ws:style={css`color:#fff;text-decoration:none;font-size:13px;`}>Deals</ws.element>
        <ws.element ws:tag="a" href="/cart" ws:style={css`color:#fff;text-decoration:none;font-size:13px;`}>Cart (2)</ws.element>
      </ws.element>
    </ws.element>
    <ws.element ws:tag="nav" ws:style={css`display:flex;gap:14px;padding:6px 16px;background:#232f3e;font-size:13px;flex-wrap:wrap;`}>
      <ws.element ws:tag="a" href="/" ws:style={css`color:#ddd;text-decoration:none;`}>Home</ws.element>
      <ws.element ws:tag="a" href="/shop" ws:style={css`color:#ddd;text-decoration:none;`}>Shop All</ws.element>
      <ws.element ws:tag="a" href="/categories" ws:style={css`color:#ddd;text-decoration:none;`}>Categories</ws.element>
      <ws.element ws:tag="a" href="/deals" ws:style={css`color:#ddd;text-decoration:none;`}>Today\'s Deals</ws.element>
      <ws.element ws:tag="a" href="/about" ws:style={css`color:#ddd;text-decoration:none;`}>About</ws.element>
      <ws.element ws:tag="a" href="/checkout" ws:style={css`color:#ddd;text-decoration:none;`}>Checkout</ws.element>
    </ws.element>
  </ws.element>
);

const footer = () => (
  <ws.element ws:tag="footer" ws:style={css`background:#232f3e;color:#ddd;padding:32px 16px;font-family:Arial,sans-serif;font-size:13px;margin-top:32px;`}>
    <ws.element ws:tag="div" ws:style={css`display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:24px;max-width:1200px;margin:0 auto;`}>
      <ws.element ws:tag="div">
        <ws.element ws:tag="h4" ws:style={css`color:#fff;margin-bottom:8px;`}>Get to Know Us</ws.element>
        <ws.element ws:tag="ul" ws:style={css`list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:4px;`}>
          <ws.element ws:tag="li"><ws.element ws:tag="a" href="/about" ws:style={css`color:#ddd;text-decoration:none;`}>About Us</ws.element></ws.element>
          <ws.element ws:tag="li"><ws.element ws:tag="a" href="/about" ws:style={css`color:#ddd;text-decoration:none;`}>Careers</ws.element></ws.element>
        </ws.element>
      </ws.element>
      <ws.element ws:tag="div">
        <ws.element ws:tag="h4" ws:style={css`color:#fff;margin-bottom:8px;`}>Shop With Us</ws.element>
        <ws.element ws:tag="ul" ws:style={css`list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:4px;`}>
          <ws.element ws:tag="li"><ws.element ws:tag="a" href="/shop" ws:style={css`color:#ddd;text-decoration:none;`}>Your Account</ws.element></ws.element>
          <ws.element ws:tag="li"><ws.element ws:tag="a" href="/cart" ws:style={css`color:#ddd;text-decoration:none;`}>Your Cart</ws.element></ws.element>
        </ws.element>
      </ws.element>
      <ws.element ws:tag="div">
        <ws.element ws:tag="h4" ws:style={css`color:#fff;margin-bottom:8px;`}>Help</ws.element>
        <ws.element ws:tag="ul" ws:style={css`list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:4px;`}>
          <ws.element ws:tag="li"><ws.element ws:tag="a" href="/checkout" ws:style={css`color:#ddd;text-decoration:none;`}>Shipping</ws.element></ws.element>
          <ws.element ws:tag="li"><ws.element ws:tag="a" href="/checkout" ws:style={css`color:#ddd;text-decoration:none;`}>Returns</ws.element></ws.element>
        </ws.element>
      </ws.element>
    </ws.element>
    <ws.element ws:tag="hr" ws:style={css`border:none;border-top:1px solid #3b4553;margin:24px 0;`} />
    <ws.element ws:tag="p" ws:style={css`text-align:center;color:#999;`}>© 2025 Amazon Clone. All rights reserved.</ws.element>
  </ws.element>
);

const productCard = (name: string, price: string, rating: string, badge: string = "") => (
  <ws.element ws:tag="article" ws:style={css`background:#fff;border-radius:4px;padding:12px;box-shadow:0 1px 3px rgba(0,0,0,0.12);display:flex;flex-direction:column;gap:8px;`}>
    <ws.element ws:tag="span" ws:style={css`background:#cc0c39;color:#fff;padding:2px 8px;border-radius:3px;font-size:12px;align-self:flex-start;`}>{badge || "New"}</ws.element>
    <ws.element ws:tag="figure" ws:style={css`margin:0;`}>
      <ws.element ws:tag="img" src={PIMG} alt={name} ws:style={css`width:100%;height:200px;object-fit:cover;border-radius:3px;`} />
    </ws.element>
    <ws.element ws:tag="h3" ws:style={css`margin:0;font-size:14px;color:#0f1111;`}>{name}</ws.element>
    <ws.element ws:tag="div" ws:style={css`display:flex;align-items:center;gap:4px;`}>
      <ws.element ws:tag="span" ws:style={css`color:#de7921;font-size:13px;`}>{rating}</ws.element>
      <ws.element ws:tag="span" ws:style={css`font-size:12px;color:#565959;`}>(1,284)</ws.element>
    </ws.element>
    <ws.element ws:tag="p" ws:style={css`margin:0;font-size:18px;color:#0f1111;`}>
      <ws.element ws:tag="span" ws:style={css`font-size:13px;vertical-align:top;`}>$</ws.element>{price}
    </ws.element>
    <ws.element ws:tag="a" href="/product" ws:style={css`background:#ffd814;color:#0f1111;text-decoration:none;padding:6px 12px;border-radius:8px;text-align:center;font-size:13px;`}>View Details</ws.element>
  </ws.element>
);

const categoryCard = (name: string, bg: string) => (
  <ws.element ws:tag="article" ws:style={css`background:${bg};border-radius:4px;padding:20px;min-height:180px;display:flex;flex-direction:column;justify-content:space-between;`}>
    <ws.element ws:tag="h3" ws:style={css`margin:0;font-size:18px;color:#0f1111;`}>{name}</ws.element>
    <ws.element ws:tag="img" src={PIMG} alt={name} ws:style={css`width:100%;height:120px;object-fit:cover;border-radius:3px;margin-top:8px;`} />
    <ws.element ws:tag="a" href="/shop" ws:style={css`color:#007185;font-size:13px;margin-top:8px;`}>Shop now</ws.element>
  </ws.element>
);

const bodyBase = css`margin:0;min-height:100vh;font-family:Arial,Helvetica,sans-serif;color:#0f1111;background:#eaeded;box-sizing:border-box;`;
const products = [
  ["Echo Dot Smart Speaker","29.99","★★★★☆","Best Seller"],
  ["Wireless Earbuds Pro","49.99","★★★★★","Choice"],
  ["4K Ultra HD Monitor","329.99","★★★★☆",null],
  ["Mechanical Keyboard","89.99","★★★★★","Limited Deal"],
  ["USB-C Hub Adapter","24.99","★★★☆☆",null],
  ["Laptop Stand Aluminum","39.99","★★★★☆",null],
  ["Smart Watch Series 5","199.99","★★★★★","Best Seller"],
  ["Noise Cancelling Headphones","149.99","★★★★☆","Choice"],
] as const;
const categories = [
  ["Electronics","#fef3e2"],["Fashion","#fce4ec"],["Home & Kitchen","#e8f5e9"],
  ["Books","#e3f2fd"],["Sports","#fff3e0"],["Beauty","#f3e5f5"],
  ["Toys & Games","#e0f7fa"],["Automotive","#efebe9"],
] as const;

const buildData = () => {
  const breakpoints = initialBreakpoints.map(b => ({...b,id:makeId()}));
  const homeId=makeId(),shopId=makeId(),productId=makeId(),cartId=makeId(),
    checkoutId=makeId(),categoriesId=makeId(),dealsId=makeId(),
    accountId=makeId(),aboutId=makeId(),notFoundId=makeId();
  const hB=makeId(),sB=makeId(),pB=makeId(),cB=makeId(),chB=makeId(),
    catB=makeId(),dB=makeId(),aB=makeId(),abB=makeId(),nfB=makeId();

  const data = renderData(
    <>
      {/* HOME PAGE */}
      <ws.element ws:tag="body" ws:id={hB} ws:style={bodyBase}>
        {topNav()}
        <ws.element ws:tag="main" ws:style={css`max-width:1280px;margin:0 auto;padding:16px;`}>
          <ws.element ws:tag="section" ws:style={css`position:relative;border-radius:8px;overflow:hidden;margin-bottom:24px;min-height:420px;display:flex;align-items:center;`}>
            <ws.element ws:tag="img" src="https://images.unsplash.com/photo-1565891741441-64926e441838?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0" alt="Hero background" ws:style={css`position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;`} />
            <ws.element ws:tag="div" ws:style={css`position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient(135deg,rgba(19,25,33,0.85) 0%,rgba(35,47,62,0.65) 50%,rgba(19,25,33,0.80) 100%);`} />
            <ws.element ws:tag="div" ws:style={css`position:relative;padding:48px 40px;max-width:680px;color:#fff;`}>
              <ws.element ws:tag="span" ws:style={css`display:inline-block;background:#ffd814;color:#0f1111;padding:4px 12px;border-radius:4px;font-size:12px;font-weight:bold;letter-spacing:1px;text-transform:uppercase;margin-bottom:16px;`}>Limited Time Offer</ws.element>
              <ws.element ws:tag="h1" ws:style={css`font-size:44px;margin:0 0 12px;line-height:1.15;font-weight:900;text-shadow:0 2px 12px rgba(0,0,0,0.4);`}>Welcome to the Everything Store</ws.element>
              <ws.element ws:tag="p" ws:style={css`font-size:18px;margin:0 0 24px;color:#e0e0e0;line-height:1.6;max-width:520px;`}>Discover deals on millions of items. Free shipping on eligible orders. Shop top brands at unbeatable prices.</ws.element>
              <ws.element ws:tag="div" ws:style={css`display:flex;gap:12px;flex-wrap:wrap;align-items:center;`}>
                <ws.element ws:tag="a" href="/shop" ws:style={css`display:inline-block;background:#ffd814;color:#0f1111;padding:14px 36px;border-radius:24px;text-decoration:none;font-weight:bold;font-size:16px;box-shadow:0 4px 16px rgba(255,216,20,0.35);`}>Shop Now</ws.element>
                <ws.element ws:tag="a" href="/deals" ws:style={css`display:inline-block;background:transparent;color:#ffd814;padding:14px 28px;border-radius:24px;text-decoration:none;font-weight:bold;font-size:16px;border:2px solid #ffd814;`}>View Deals</ws.element>
              </ws.element>
              <ws.element ws:tag="div" ws:style={css`display:flex;gap:24px;margin-top:28px;flex-wrap:wrap;`}>
                <ws.element ws:tag="span" ws:style={css`font-size:13px;color:#ccc;`}>✓ Free Shipping</ws.element>
                <ws.element ws:tag="span" ws:style={css`font-size:13px;color:#ccc;`}>✓ 30-Day Returns</ws.element>
                <ws.element ws:tag="span" ws:style={css`font-size:13px;color:#ccc;`}>✓ Secure Checkout</ws.element>
              </ws.element>
            </ws.element>
          </ws.element>
          <ws.element ws:tag="h2" ws:style={css`font-size:20px;margin:0 0 12px;`}>Shop by Category</ws.element>
          <ws.element ws:tag="div" ws:style={css`display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:16px;margin-bottom:24px;`}>
            {categories.slice(0,4).map(([n,bg])=>categoryCard(n,bg))}
          </ws.element>
          <ws.element ws:tag="h2" ws:style={css`font-size:20px;margin:0 0 12px;`}>Trending Products</ws.element>
          <ws.element ws:tag="div" ws:style={css`display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:16px;margin-bottom:24px;`}>
            {products.slice(0,4).map(([n,p,r,b])=>productCard(n,p,r,b??undefined))}
          </ws.element>
          <ws.element ws:tag="section" ws:style={css`background:#fff;border-radius:4px;padding:20px;margin-bottom:20px;`}>
            <ws.element ws:tag="h2" ws:style={css`font-size:20px;margin:0 0 12px;`}>Today\'s Deals</ws.element>
            <ws.element ws:tag="div" ws:style={css`display:flex;gap:16px;overflow-x:auto;`}>
              {products.slice(4).map(([n,p,r])=>productCard(n,p,r))}
            </ws.element>
          </ws.element>
        </ws.element>
        {footer()}
      </ws.element>

      {/* SHOP PAGE */}
      <ws.element ws:tag="body" ws:id={sB} ws:style={bodyBase}>
        {topNav()}
        <ws.element ws:tag="main" ws:style={css`max-width:1280px;margin:0 auto;padding:16px;display:grid;grid-template-columns:220px 1fr;gap:16px;`}>
          <ws.element ws:tag="aside" ws:style={css`background:#fff;border-radius:4px;padding:16px;`}>
            <ws.element ws:tag="h3" ws:style={css`margin:0 0 12px;font-size:16px;`}>Filters</ws.element>
            <ws.element ws:tag="details" open={true}>
              <ws.element ws:tag="summary" ws:style={css`cursor:pointer;font-weight:bold;margin-bottom:6px;`}>Price</ws.element>
              <ws.element ws:tag="ul" ws:style={css`list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:4px;font-size:13px;`}>
                <ws.element ws:tag="li"><ws.element ws:tag="input" type="checkbox" /> Under $25</ws.element>
                <ws.element ws:tag="li"><ws.element ws:tag="input" type="checkbox" /> $25 - $50</ws.element>
                <ws.element ws:tag="li"><ws.element ws:tag="input" type="checkbox" /> $50 - $100</ws.element>
                <ws.element ws:tag="li"><ws.element ws:tag="input" type="checkbox" /> $100+</ws.element>
              </ws.element>
            </ws.element>
            <ws.element ws:tag="details" open={true}>
              <ws.element ws:tag="summary" ws:style={css`cursor:pointer;font-weight:bold;margin:12px 0 6px;`}>Rating</ws.element>
              <ws.element ws:tag="ul" ws:style={css`list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:4px;font-size:13px;`}>
                <ws.element ws:tag="li"><ws.element ws:tag="input" type="checkbox" /> ★★★★☆ & Up</ws.element>
                <ws.element ws:tag="li"><ws.element ws:tag="input" type="checkbox" /> ★★★☆☆ & Up</ws.element>
              </ws.element>
            </ws.element>
            <ws.element ws:tag="details" open={true}>
              <ws.element ws:tag="summary" ws:style={css`cursor:pointer;font-weight:bold;margin:12px 0 6px;`}>Brand</ws.element>
              <ws.element ws:tag="ul" ws:style={css`list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:4px;font-size:13px;`}>
                <ws.element ws:tag="li"><ws.element ws:tag="input" type="checkbox" /> TechPro</ws.element>
                <ws.element ws:tag="li"><ws.element ws:tag="input" type="checkbox" /> SoundMax</ws.element>
                <ws.element ws:tag="li"><ws.element ws:tag="input" type="checkbox" /> ViewPoint</ws.element>
              </ws.element>
            </ws.element>
          </ws.element>
          <ws.element ws:tag="div">
            <ws.element ws:tag="div" ws:style={css`display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;`}>
              <ws.element ws:tag="h1" ws:style={css`margin:0;font-size:22px;`}>All Products</ws.element>
              <ws.element ws:tag="select" ws:style={css`padding:6px 10px;border:1px solid #ccc;border-radius:4px;font-size:13px;`}>
                <ws.element ws:tag="option">Sort by: Featured</ws.element>
                <ws.element ws:tag="option">Price: Low to High</ws.element>
                <ws.element ws:tag="option">Price: High to Low</ws.element>
                <ws.element ws:tag="option">Avg. Customer Review</ws.element>
              </ws.element>
            </ws.element>
            <ws.element ws:tag="div" ws:style={css`display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:14px;`}>
              {products.map(([n,p,r,b])=>productCard(n,p,r,b??undefined))}
            </ws.element>
          </ws.element>
        </ws.element>
        {footer()}
      </ws.element>

      {/* PRODUCT DETAIL PAGE */}
      <ws.element ws:tag="body" ws:id={pB} ws:style={bodyBase}>
        {topNav()}
        <ws.element ws:tag="main" ws:style={css`max-width:1100px;margin:0 auto;padding:16px;display:grid;grid-template-columns:1fr 1fr;gap:24px;background:#fff;border-radius:4px;`}>
          <ws.element ws:tag="figure" ws:style={css`margin:0;`}>
            <ws.element ws:tag="img" src={PIMG} alt="Product" ws:style={css`width:100%;border-radius:4px;`} />
            <ws.element ws:tag="figcaption" ws:style={css`font-size:12px;color:#565959;margin-top:4px;`}>Roll over image to zoom in</ws.element>
          </ws.element>
          <ws.element ws:tag="div" ws:style={css`display:flex;flex-direction:column;gap:8px;`}>
            <ws.element ws:tag="h1" ws:style={css`margin:0;font-size:22px;`}>Echo Dot Smart Speaker (5th Gen)</ws.element>
            <ws.element ws:tag="div" ws:style={css`color:#de7921;font-size:14px;`}>★★★★☆ <ws.element ws:tag="span" ws:style={css`color:#007185;`}>4,823 ratings</ws.element></ws.element>
            <ws.element ws:tag="hr" ws:style={css`border:none;border-top:1px solid #ddd;margin:4px 0;`} />
            <ws.element ws:tag="p" ws:style={css`margin:0;font-size:28px;`}><ws.element ws:tag="span" ws:style={css`font-size:14px;vertical-align:top;`}>$</ws.element>29<ws.element ws:tag="span" ws:style={css`font-size:14px;vertical-align:top;`}>.99</ws.element></ws.element>
            <ws.element ws:tag="p" ws:style={css`margin:0;font-size:13px;color:#007600;`}>In Stock</ws.element>
            <ws.element ws:tag="blockquote" ws:style={css`margin:8px 0;padding:12px;background:#f7f7f7;border-left:3px solid #ddd;font-size:14px;color:#333;`}>
              Our most popular smart speaker — now with improved audio and a sleek design.
            </ws.element>
            <ws.element ws:tag="label" ws:style={css`font-size:13px;font-weight:bold;`}>Color</ws.element>
            <ws.element ws:tag="select" ws:style={css`padding:6px;border:1px solid #ccc;border-radius:4px;`}>
              <ws.element ws:tag="option">Charcoal</ws.element>
              <ws.element ws:tag="option">Glacier White</ws.element>
              <ws.element ws:tag="option">Deep Sea Blue</ws.element>
            </ws.element>
            <ws.element ws:tag="label" ws:style={css`font-size:13px;font-weight:bold;margin-top:6px;`}>Quantity</ws.element>
            <ws.element ws:tag="select" ws:style={css`padding:6px;border:1px solid #ccc;border-radius:4px;width:80px;`}>
              <ws.element ws:tag="option">1</ws.element>
              <ws.element ws:tag="option">2</ws.element>
              <ws.element ws:tag="option">3</ws.element>
              <ws.element ws:tag="option">4</ws.element>
              <ws.element ws:tag="option">5</ws.element>
            </ws.element>
            <ws.element ws:tag="a" href="/cart" ws:style={css`display:block;background:#ffd814;color:#0f1111;text-decoration:none;padding:10px;border-radius:20px;text-align:center;font-size:14px;margin-top:12px;`}>Add to Cart</ws.element>
            <ws.element ws:tag="a" href="/checkout" ws:style={css`display:block;background:#ffa41c;color:#0f1111;text-decoration:none;padding:10px;border-radius:20px;text-align:center;font-size:14px;`}>Buy Now</ws.element>
          </ws.element>
        </ws.element>
        {footer()}
      </ws.element>

      {/* CART PAGE */}
      <ws.element ws:tag="body" ws:id={cB} ws:style={bodyBase}>
        {topNav()}
        <ws.element ws:tag="main" ws:style={css`max-width:1100px;margin:0 auto;padding:16px;display:grid;grid-template-columns:1fr 280px;gap:16px;`}>
          <ws.element ws:tag="section" ws:style={css`background:#fff;border-radius:4px;padding:20px;`}>
            <ws.element ws:tag="h1" ws:style={css`margin:0 0 4px;font-size:26px;`}>Shopping Cart</ws.element>
            <ws.element ws:tag="hr" ws:style={css`border:none;border-top:1px solid #ddd;margin:8px 0 16px;`} />
            <ws.element ws:tag="article" ws:style={css`display:grid;grid-template-columns:120px 1fr;gap:16px;padding-bottom:16px;border-bottom:1px solid #ddd;`}>
              <ws.element ws:tag="img" src={PIMG} alt="item" ws:style={css`width:100%;border-radius:4px;`} />
              <ws.element ws:tag="div">
                <ws.element ws:tag="h3" ws:style={css`margin:0;font-size:16px;`}>Echo Dot Smart Speaker</ws.element>
                <ws.element ws:tag="p" ws:style={css`color:#007600;font-size:12px;margin:4px 0;`}>In Stock</ws.element>
                <ws.element ws:tag="div" ws:style={css`display:flex;align-items:center;gap:8px;margin-top:6px;`}>
                  <ws.element ws:tag="label" ws:style={css`font-size:13px;`}>Qty:</ws.element>
                  <ws.element ws:tag="input" type="number" value="1" ws:style={css`width:50px;padding:4px;border:1px solid #ccc;border-radius:4px;`} />
                  <ws.element ws:tag="button" ws:style={css`background:none;border:none;color:#007185;cursor:pointer;font-size:13px;`}>Delete</ws.element>
                </ws.element>
                <ws.element ws:tag="p" ws:style={css`font-size:18px;font-weight:bold;margin:8px 0 0;`}>$29.99</ws.element>
              </ws.element>
            </ws.element>
            <ws.element ws:tag="article" ws:style={css`display:grid;grid-template-columns:120px 1fr;gap:16px;padding:16px 0;border-bottom:1px solid #ddd;`}>
              <ws.element ws:tag="img" src={PIMG} alt="item" ws:style={css`width:100%;border-radius:4px;`} />
              <ws.element ws:tag="div">
                <ws.element ws:tag="h3" ws:style={css`margin:0;font-size:16px;`}>Wireless Earbuds Pro</ws.element>
                <ws.element ws:tag="p" ws:style={css`color:#007600;font-size:12px;margin:4px 0;`}>In Stock</ws.element>
                <ws.element ws:tag="div" ws:style={css`display:flex;align-items:center;gap:8px;margin-top:6px;`}>
                  <ws.element ws:tag="label" ws:style={css`font-size:13px;`}>Qty:</ws.element>
                  <ws.element ws:tag="input" type="number" value="1" ws:style={css`width:50px;padding:4px;border:1px solid #ccc;border-radius:4px;`} />
                  <ws.element ws:tag="button" ws:style={css`background:none;border:none;color:#007185;cursor:pointer;font-size:13px;`}>Delete</ws.element>
                </ws.element>
                <ws.element ws:tag="p" ws:style={css`font-size:18px;font-weight:bold;margin:8px 0 0;`}>$49.99</ws.element>
              </ws.element>
            </ws.element>
          </ws.element>
          <ws.element ws:tag="aside" ws:style={css`background:#fff;border-radius:4px;padding:20px;align-self:start;`}>
            <ws.element ws:tag="h3" ws:style={css`margin:0 0 8px;font-size:18px;`}>Subtotal (2 items): <ws.element ws:tag="strong">$79.98</ws.element></ws.element>
            <ws.element ws:tag="div" ws:style={css`display:flex;align-items:center;gap:6px;margin-bottom:12px;`}>
              <ws.element ws:tag="input" type="checkbox" />
              <ws.element ws:tag="span" ws:style={css`font-size:13px;`}>This is a gift</ws.element>
            </ws.element>
            <ws.element ws:tag="a" href="/checkout" ws:style={css`display:block;background:#ffd814;color:#0f1111;text-decoration:none;padding:10px;border-radius:20px;text-align:center;font-size:14px;`}>Proceed to Checkout</ws.element>
          </ws.element>
        </ws.element>
        {footer()}
      </ws.element>

      {/* CHECKOUT PAGE */}
      <ws.element ws:tag="body" ws:id={chB} ws:style={bodyBase}>
        {topNav()}
        <ws.element ws:tag="main" ws:style={css`max-width:900px;margin:0 auto;padding:16px;`}>
          <ws.element ws:tag="h1" ws:style={css`font-size:26px;margin:0 0 16px;`}>Checkout</ws.element>
          <ws.element ws:tag="div" ws:style={css`display:grid;grid-template-columns:1fr 300px;gap:16px;`}>
            <ws.element ws:tag="div">
              <ws.element ws:tag="section" ws:style={css`background:#fff;border-radius:4px;padding:20px;margin-bottom:16px;`}>
                <ws.element ws:tag="h2" ws:style={css`margin:0 0 12px;font-size:18px;`}>Shipping Address</ws.element>
                <ws.element ws:tag="form" ws:style={css`display:grid;gap:10px;`}>
                  <ws.element ws:tag="input" type="text" placeholder="Full Name" ws:style={css`padding:8px;border:1px solid #ccc;border-radius:4px;`} />
                  <ws.element ws:tag="input" type="text" placeholder="Street Address" ws:style={css`padding:8px;border:1px solid #ccc;border-radius:4px;`} />
                  <ws.element ws:tag="div" ws:style={css`display:grid;grid-template-columns:2fr 1fr 1fr;gap:8px;`}>
                    <ws.element ws:tag="input" type="text" placeholder="City" ws:style={css`padding:8px;border:1px solid #ccc;border-radius:4px;`} />
                    <ws.element ws:tag="input" type="text" placeholder="State" ws:style={css`padding:8px;border:1px solid #ccc;border-radius:4px;`} />
                    <ws.element ws:tag="input" type="text" placeholder="ZIP" ws:style={css`padding:8px;border:1px solid #ccc;border-radius:4px;`} />
                  </ws.element>
                  <ws.element ws:tag="input" type="tel" placeholder="Phone Number" ws:style={css`padding:8px;border:1px solid #ccc;border-radius:4px;`} />
                </ws.element>
              </ws.element>
              <ws.element ws:tag="section" ws:style={css`background:#fff;border-radius:4px;padding:20px;`}>
                <ws.element ws:tag="h2" ws:style={css`margin:0 0 12px;font-size:18px;`}>Payment Method</ws.element>
                <ws.element ws:tag="form" ws:style={css`display:grid;gap:10px;`}>
                  <ws.element ws:tag="input" type="text" placeholder="Card Number" ws:style={css`padding:8px;border:1px solid #ccc;border-radius:4px;`} />
                  <ws.element ws:tag="div" ws:style={css`display:grid;grid-template-columns:1fr 1fr;gap:8px;`}>
                    <ws.element ws:tag="input" type="text" placeholder="MM/YY" ws:style={css`padding:8px;border:1px solid #ccc;border-radius:4px;`} />
                    <ws.element ws:tag="input" type="text" placeholder="CVV" ws:style={css`padding:8px;border:1px solid #ccc;border-radius:4px;`} />
                  </ws.element>
                  <ws.element ws:tag="input" type="email" placeholder="Email for receipt" ws:style={css`padding:8px;border:1px solid #ccc;border-radius:4px;`} />
                </ws.element>
              </ws.element>
            </ws.element>
            <ws.element ws:tag="aside" ws:style={css`background:#fff;border-radius:4px;padding:20px;align-self:start;`}>
              <ws.element ws:tag="h3" ws:style={css`margin:0 0 12px;font-size:18px;`}>Order Summary</ws.element>
              <ws.element ws:tag="dl" ws:style={css`margin:0;font-size:14px;display:grid;grid-template-columns:1fr auto;gap:6px 8px;`}>
                <ws.element ws:tag="dt">Items (2):</ws.element><ws.element ws:tag="dd" ws:style={css`text-align:right;margin:0;`}>$79.98</ws.element>
                <ws.element ws:tag="dt">Shipping:</ws.element><ws.element ws:tag="dd" ws:style={css`text-align:right;margin:0;`}>$0.00</ws.element>
                <ws.element ws:tag="dt">Tax:</ws.element><ws.element ws:tag="dd" ws:style={css`text-align:right;margin:0;`}>$6.40</ws.element>
              </ws.element>
              <ws.element ws:tag="hr" ws:style={css`border:none;border-top:1px solid #ddd;margin:10px 0;`} />
              <ws.element ws:tag="p" ws:style={css`font-size:18px;font-weight:bold;color:#b12704;margin:0 0 12px;`}>Order Total: $86.38</ws.element>
              <ws.element ws:tag="button" type="submit" ws:style={css`width:100%;background:#ffd814;border:none;padding:10px;border-radius:20px;cursor:pointer;font-size:14px;`}>Place Order</ws.element>
            </ws.element>
          </ws.element>
        </ws.element>
        {footer()}
      </ws.element>

      {/* CATEGORIES PAGE */}
      <ws.element ws:tag="body" ws:id={catB} ws:style={bodyBase}>
        {topNav()}
        <ws.element ws:tag="main" ws:style={css`max-width:1280px;margin:0 auto;padding:16px;`}>
          <ws.element ws:tag="h1" ws:style={css`font-size:24px;margin:0 0 16px;`}>Shop by Category</ws.element>
          <ws.element ws:tag="div" ws:style={css`display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:16px;`}>
            {categories.map(([n,bg])=>categoryCard(n,bg))}
          </ws.element>
        </ws.element>
        {footer()}
      </ws.element>

      {/* DEALS PAGE */}
      <ws.element ws:tag="body" ws:id={dB} ws:style={bodyBase}>
        {topNav()}
        <ws.element ws:tag="main" ws:style={css`max-width:1280px;margin:0 auto;padding:16px;`}>
          <ws.element ws:tag="section" ws:style={css`background:linear-gradient(90deg,#cc0c39,#e25822);border-radius:4px;padding:20px;color:#fff;margin-bottom:20px;`}>
            <ws.element ws:tag="h1" ws:style={css`margin:0;font-size:28px;`}>Today\'s Deals</ws.element>
            <ws.element ws:tag="p" ws:style={css`margin:4px 0 0;font-size:14px;`}>Limited time lightning deals — save up to 60%</ws.element>
          </ws.element>
          <ws.element ws:tag="div" ws:style={css`display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:16px;`}>
            {products.map(([n,p,r,b])=>productCard(n,p,r,b??"Deal"))}
          </ws.element>
        </ws.element>
        {footer()}
      </ws.element>

      {/* ACCOUNT PAGE */}
      <ws.element ws:tag="body" ws:id={aB} ws:style={bodyBase}>
        {topNav()}
        <ws.element ws:tag="main" ws:style={css`max-width:900px;margin:0 auto;padding:16px;`}>
          <ws.element ws:tag="h1" ws:style={css`font-size:26px;margin:0 0 16px;`}>Your Account</ws.element>
          <ws.element ws:tag="div" ws:style={css`display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:16px;`}>
            <ws.element ws:tag="article" ws:style={css`background:#fff;border-radius:8px;padding:20px;display:flex;gap:14px;align-items:center;`}>
              <ws.element ws:tag="div" ws:style={css`width:48px;height:48px;background:#eaeded;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:22px;`}>📦</ws.element>
              <ws.element ws:tag="div">
                <ws.element ws:tag="h3" ws:style={css`margin:0;font-size:16px;`}>Your Orders</ws.element>
                <ws.element ws:tag="p" ws:style={css`margin:2px 0 0;font-size:13px;color:#565959;`}>Track, return, or buy again</ws.element>
              </ws.element>
            </ws.element>
            <ws.element ws:tag="article" ws:style={css`background:#fff;border-radius:8px;padding:20px;display:flex;gap:14px;align-items:center;`}>
              <ws.element ws:tag="div" ws:style={css`width:48px;height:48px;background:#eaeded;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:22px;`}>🔒</ws.element>
              <ws.element ws:tag="div">
                <ws.element ws:tag="h3" ws:style={css`margin:0;font-size:16px;`}>Login & Security</ws.element>
                <ws.element ws:tag="p" ws:style={css`margin:2px 0 0;font-size:13px;color:#565959;`}>Edit name, email, password</ws.element>
              </ws.element>
            </ws.element>
            <ws.element ws:tag="article" ws:style={css`background:#fff;border-radius:8px;padding:20px;display:flex;gap:14px;align-items:center;`}>
              <ws.element ws:tag="div" ws:style={css`width:48px;height:48px;background:#eaeded;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:22px;`}>📍</ws.element>
              <ws.element ws:tag="div">
                <ws.element ws:tag="h3" ws:style={css`margin:0;font-size:16px;`}>Your Addresses</ws.element>
                <ws.element ws:tag="p" ws:style={css`margin:2px 0 0;font-size:13px;color:#565959;`}>Edit or add addresses</ws.element>
              </ws.element>
            </ws.element>
            <ws.element ws:tag="article" ws:style={css`background:#fff;border-radius:8px;padding:20px;display:flex;gap:14px;align-items:center;`}>
              <ws.element ws:tag="div" ws:style={css`width:48px;height:48px;background:#eaeded;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:22px;`}>💳</ws.element>
              <ws.element ws:tag="div">
                <ws.element ws:tag="h3" ws:style={css`margin:0;font-size:16px;`}>Payment Options</ws.element>
                <ws.element ws:tag="p" ws:style={css`margin:2px 0 0;font-size:13px;color:#565959;`}>Manage payment methods</ws.element>
              </ws.element>
            </ws.element>
          </ws.element>
          <ws.element ws:tag="section" ws:style={css`background:#fff;border-radius:4px;padding:20px;margin-top:20px;`}>
            <ws.element ws:tag="h2" ws:style={css`margin:0 0 12px;font-size:20px;`}>Recent Orders</ws.element>
            <ws.element ws:tag="table" ws:style={css`width:100%;border-collapse:collapse;font-size:14px;`}>
              <ws.element ws:tag="tr" ws:style={css`background:#f3f3f3;`}>
                <ws.element ws:tag="th" ws:style={css`text-align:left;padding:8px;`}>Order #</ws.element>
                <ws.element ws:tag="th" ws:style={css`text-align:left;padding:8px;`}>Date</ws.element>
                <ws.element ws:tag="th" ws:style={css`text-align:left;padding:8px;`}>Total</ws.element>
                <ws.element ws:tag="th" ws:style={css`text-align:left;padding:8px;`}>Status</ws.element>
              </ws.element>
              <ws.element ws:tag="tr">
                <ws.element ws:tag="td" ws:style={css`padding:8px;border-bottom:1px solid #eee;`}>#112-4839201</ws.element>
                <ws.element ws:tag="td" ws:style={css`padding:8px;border-bottom:1px solid #eee;`}><ws.element ws:tag="time">Mar 20, 2025</ws.element></ws.element>
                <ws.element ws:tag="td" ws:style={css`padding:8px;border-bottom:1px solid #eee;`}>$149.99</ws.element>
                <ws.element ws:tag="td" ws:style={css`padding:8px;border-bottom:1px solid #eee;color:#007600;`}>Delivered</ws.element>
              </ws.element>
              <ws.element ws:tag="tr">
                <ws.element ws:tag="td" ws:style={css`padding:8px;border-bottom:1px solid #eee;`}>#112-7723804</ws.element>
                <ws.element ws:tag="td" ws:style={css`padding:8px;border-bottom:1px solid #eee;`}><ws.element ws:tag="time">Mar 15, 2025</ws.element></ws.element>
                <ws.element ws:tag="td" ws:style={css`padding:8px;border-bottom:1px solid #eee;`}>$49.99</ws.element>
                <ws.element ws:tag="td" ws:style={css`padding:8px;border-bottom:1px solid #eee;color:#c45500;`}>Shipped</ws.element>
              </ws.element>
            </ws.element>
          </ws.element>
        </ws.element>
        {footer()}
      </ws.element>

      {/* ABOUT PAGE */}
      <ws.element ws:tag="body" ws:id={abB} ws:style={bodyBase}>
        {topNav()}
        <ws.element ws:tag="main" ws:style={css`max-width:900px;margin:0 auto;padding:16px;`}>
          <ws.element ws:tag="section" ws:style={css`background:#fff;border-radius:4px;padding:32px;`}>
            <ws.element ws:tag="h1" ws:style={css`font-size:28px;margin:0 0 16px;`}>About Amazon Clone</ws.element>
            <ws.element ws:tag="p" ws:style={css`font-size:15px;line-height:1.6;color:#333;`}>
              This is a frontend clone of the Amazon e-commerce platform built entirely with Webstudio. It demonstrates multi-page navigation, responsive layouts, product catalogs, shopping cart, checkout flow, and account management — all crafted using Webstudio\'s visual builder elements.
            </ws.element>
            <ws.element ws:tag="h2" ws:style={css`font-size:20px;margin:24px 0 12px;`}>Our Mission</ws.element>
            <ws.element ws:tag="p" ws:style={css`font-size:15px;line-height:1.6;color:#333;`}>
              To be Earth\'s most customer-centric company, where customers can find and discover anything they might want to buy online.
            </ws.element>
            <ws.element ws:tag="blockquote" ws:style={css`margin:20px 0;padding:16px;background:#f7f7f7;border-left:4px solid #ffd814;font-size:15px;font-style:italic;color:#333;`}>
              "Work hard. Have fun. Make history."
            </ws.element>
            <ws.element ws:tag="h2" ws:style={css`font-size:20px;margin:24px 0 12px;`}>Features Demonstrated</ws.element>
            <ws.element ws:tag="ol" ws:style={css`padding-left:20px;font-size:14px;line-height:1.8;`}>
              <ws.element ws:tag="li">Multi-page navigation with <ws.element ws:tag="strong">10 distinct pages</ws.element></ws.element>
              <ws.element ws:tag="li">Responsive product grid layouts</ws.element>
              <ws.element ws:tag="li">Filter sidebar with <ws.element ws:tag="em">details/summary</ws.element> elements</ws.element>
              <ws.element ws:tag="li">Shopping cart with quantity inputs</ws.element>
              <ws.element ws:tag="li">Checkout form with shipping & payment</ws.element>
              <ws.element ws:tag="li">Account dashboard with order history table</ws.element>
              <ws.element ws:tag="li">Category browsing cards</ws.element>
              <ws.element ws:tag="li">Deal badges and promotional banners</ws.element>
            </ws.element>
          </ws.element>
        </ws.element>
        {footer()}
      </ws.element>

      {/* 404 PAGE */}
      <ws.element ws:tag="body" ws:id={nfB} ws:style={bodyBase}>
        {topNav()}
        <ws.element ws:tag="main" ws:style={css`max-width:600px;margin:60px auto;padding:16px;text-align:center;`}>
          <ws.element ws:tag="section" ws:style={css`background:#fff;border-radius:4px;padding:40px;`}>
            <ws.element ws:tag="h1" ws:style={css`font-size:72px;margin:0;color:#232f3e;`}>404</ws.element>
            <ws.element ws:tag="h2" ws:style={css`margin:8px 0 16px;font-size:20px;color:#565959;`}>Page Not Found</ws.element>
            <ws.element ws:tag="p" ws:style={css`font-size:14px;color:#565959;margin-bottom:20px;`}>Sorry, the page you are looking for does not exist.</ws.element>
            <ws.element ws:tag="a" href="/" ws:style={css`display:inline-block;background:#ffd814;color:#0f1111;text-decoration:none;padding:10px 24px;border-radius:20px;font-size:14px;`}>Go to Homepage</ws.element>
          </ws.element>
        </ws.element>
        {footer()}
      </ws.element>
    </>,
    makeId,
    breakpoints
  );

  const pages: Pages = {
    meta: { siteName: "amazon clone", description: '"Amazon clone - multipage ecommerce frontend built with Webstudio."' },
    homePage: { id: homeId, name: "Home", path: "", title: '"amazon clone"', meta: {}, rootInstanceId: hB },
    pages: [
      { id: shopId, name: "Shop", path: "/shop", title: '"Shop All"', meta: {}, rootInstanceId: sB },
      { id: productId, name: "Product", path: "/product", title: '"Product Detail"', meta: {}, rootInstanceId: pB },
      { id: cartId, name: "Cart", path: "/cart", title: '"Cart"', meta: {}, rootInstanceId: cB },
      { id: checkoutId, name: "Checkout", path: "/checkout", title: '"Checkout"', meta: {}, rootInstanceId: chB },
      { id: categoriesId, name: "Categories", path: "/categories", title: '"Categories"', meta: {}, rootInstanceId: catB },
      { id: dealsId, name: "Deals", path: "/deals", title: '"Deals"', meta: {}, rootInstanceId: dB },
      { id: accountId, name: "Account", path: "/account", title: '"Account"', meta: {}, rootInstanceId: aB },
      { id: aboutId, name: "About", path: "/about", title: '"About"', meta: {}, rootInstanceId: abB },
      { id: notFoundId, name: "404", path: "/*", title: '"404"', meta: { status: "404", excludePageFromSearch: "false" }, rootInstanceId: nfB },
    ],
    folders: [createRootFolder([homeId,shopId,productId,cartId,checkoutId,categoriesId,dealsId,accountId,aboutId,notFoundId])],
  };
  return { ...data, pages };
};

const createUniqueDomain = async (base: string, excludeId?: string) => {
  const normalize = base.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
  const candidate = `${normalize}-${makeId().slice(0,6).toLowerCase()}`;
  const existing = await prisma.project.findFirst({
    where: { domain: candidate, ...(excludeId === undefined ? {} : { id: { not: excludeId } }) },
    select: { id: true },
  });
  if (existing === null) return candidate;
  return `${normalize}-${makeId().slice(0,8).toLowerCase()}`;
};

const ensureUser = async () => {
  const passwordHash = hashPassword(adminPassword);
  const user = await prisma.user.findFirst({ where: { email: adminEmail }, select: { id: true, email: true } });
  if (user !== null) {
    await prisma.user.update({ where: { id: user.id }, data: { provider: "password", passwordHash, username: adminEmail, image: "" } });
    return user;
  }
  return prisma.user.create({ data: { email: adminEmail, username: adminEmail, image: "", provider: "password", passwordHash }, select: { id: true, email: true } });
};

const ensureProject = async (userId: string) => {
  const existing = await prisma.project.findFirst({ where: { title: "amazon clone", userId, isDeleted: false }, select: { id: true, title: true, domain: true } });
  if (existing !== null) return existing;
  return prisma.project.create({ data: { id: randomUUID(), userId, title: "amazon clone", tags: [], domain: await createUniqueDomain("amazon-clone") }, select: { id: true, title: true, domain: true } });
};

const saveBuild = async (projectId: string) => {
  const latest = await prisma.build.findFirst({ where: { projectId, deployment: null }, orderBy: { createdAt: "desc" }, select: { id: true } });
  const data = buildData();
  const payload = {
    projectId,
    pages: sp(data.pages),
    breakpoints: sd<Breakpoint>(data.breakpoints),
    styles: ss(data.styles),
    styleSources: sd<StyleSource>(data.styleSources),
    styleSourceSelections: sss(data.styleSourceSelections),
    props: sd<Prop>(data.props),
    dataSources: sd<DataSource>(data.dataSources),
    resources: sd<Resource>(data.resources),
    instances: sd<Instance>(data.instances),
    version: 1,
    marketplaceProduct: JSON.stringify({}),
  };
  if (latest !== null) {
    const updated = await prisma.build.update({ where: { id: latest.id }, data: payload, select: { id: true } });
    return updated.id;
  }
  const inserted = await prisma.build.create({ data: { id: randomUUID(), createdAt: new Date(), ...payload }, select: { id: true } });
  return inserted.id;
};

const main = async () => {
  const user = await ensureUser();
  const project = await ensureProject(user.id);
  const buildId = await saveBuild(project.id);
  console.log(JSON.stringify({ status: "ok", user: { email: adminEmail, password: adminPassword }, projectId: project.id, buildId, title: "amazon clone", builderUrl: `https://p-${project.id}.wstd.dev:5173/` }, null, 2));
};

main().catch((error) => {
  console.error("amazon-clone generation failed");
  if (error instanceof Error) { console.error(error.message); console.error(error.stack); }
  try { console.error(JSON.stringify(error, null, 2)); } catch { console.error(error); }
  console.error(util.inspect(error, { depth: 5 }));
  process.exit(1);
}).finally(async () => { await prisma.$disconnect(); });
