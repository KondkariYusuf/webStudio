import { randomUUID } from "node:crypto";
import { existsSync, readFileSync } from "node:fs";
import util from "node:util";
import path from "node:path";
import { fileURLToPath } from "node:url";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
import { hashPassword } from "../app/services/password.server";

/* ═══════════════════  Env / DB bootstrap  ═══════════════════ */
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
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    )
      value = value.slice(1, -1);
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
  for (const c of candidates) {
    if (!existsSync(c)) continue;
    for (const [k, v] of parseDotEnv(readFileSync(c, "utf8"))) merged.set(k, v);
  }
  return merged;
};
const env = loadEnv();
const databaseUrl = env.get("DIRECT_URL") ?? env.get("DATABASE_URL");
if (!databaseUrl) throw new Error("DIRECT_URL or DATABASE_URL missing");
const ndb = databaseUrl.replace("?pgbouncer=true", "");
process.env.DATABASE_URL = ndb;
process.env.DIRECT_URL = ndb;
const { PrismaClient } = await import(
  "../../../../Backend/packages/prisma-client/src/__generated__/index.js"
);
const prisma = new PrismaClient();
const makeId = () => randomUUID().replaceAll("-", "").slice(0, 21);
const adminEmail = "admin@gmail.com";
const adminPassword = "admin123";

/* ═══════════════════  Design tokens  ═══════════════════ */
const NETFLIX_RED = "#e50914";
const BG_BLACK = "#000000";
const BG_DARK = "#141414";
const TEXT_WHITE = "#ffffff";
const TEXT_GRAY = "#b3b3b3";
const FONT = "Helvetica Neue, Helvetica, Arial, sans-serif";

const LOGO =
  "https://images.ctfassets.net/y2ske730sjqp/1aONibCke6niZhgPxuiilC/2c401b05a07288746ddf3bd3943fbc76/BrandAssets_Logos_01-Wordmark.jpg?w=940";
const POSTERS = [
  "https://m.media-amazon.com/images/I/71eHZFw+GlL._AC_UF894,1000_QL80_.jpg",
  "https://m.media-amazon.com/images/I/81vRg6RVaFL.jpg",
  "https://images-cdn.ubuy.co.in/63ef0a397f1d781bea0a2464-star-wars-rogue-one-movie-poster.jpg",
  "https://www.tallengestore.com/cdn/shop/products/Pathan-ShahRukhKhan-BollywoodHindiMoviePoster_296b3b5c-b590-4a19-a1db-77e4638531ca.jpg?v=1675251720",
];

/* ═══════════════════  Mock data  ═══════════════════ */
const movies = [
  { title: "Stranger Things", year: "2016", rating: "TV-14", duration: "4 Seasons", poster: POSTERS[0], desc: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl." },
  { title: "The Witcher", year: "2019", rating: "TV-MA", duration: "3 Seasons", poster: POSTERS[1], desc: "Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world where people often prove more wicked than beasts." },
  { title: "Rogue One", year: "2016", rating: "PG-13", duration: "2h 13m", poster: POSTERS[2], desc: "In a time of conflict, a group of unlikely heroes band together on a mission to steal the plans to the Death Star, the Empire\\'s ultimate weapon of destruction." },
  { title: "Pathan", year: "2023", rating: "UA", duration: "2h 26m", poster: POSTERS[3], desc: "An Indian spy takes on the leader of a group of mercenaries who have seized control of a deadly new weapon." },
  { title: "Dark", year: "2017", rating: "TV-MA", duration: "3 Seasons", poster: POSTERS[1], desc: "A family saga with a supernatural twist, set in a German town where the disappearance of two young children exposes relationships among four families." },
  { title: "Money Heist", year: "2017", rating: "TV-MA", duration: "5 Parts", poster: POSTERS[0], desc: "An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history — stealing 2.4 billion euros from the Royal Mint of Spain." },
  { title: "The Crown", year: "2016", rating: "TV-MA", duration: "6 Seasons", poster: POSTERS[2], desc: "Follows the political rivalries and romance of Queen Elizabeth II\\'s reign and the events that shaped the second half of the twentieth century." },
  { title: "Extraction", year: "2020", rating: "R", duration: "1h 56m", poster: POSTERS[3], desc: "Tyler Rake, a fearless mercenary who offers his services on the black market, embarks on the most deadly mission of his career." },
];

const trendingMovies = movies.slice(0, 4);
const popularMovies = movies.slice(4, 8);
const actionMovies = [movies[2], movies[3], movies[7], movies[0]];
const newReleases = [movies[3], movies[1], movies[5], movies[6]];

/* ═══════════════════  Helpers  ═══════════════════ */
const createRootFolder = (children: Folder["children"] = []): Folder => ({
  id: ROOT_FOLDER_ID,
  name: "Root",
  slug: "",
  children,
});
const sd = <Type extends { id: string }>(data: Map<Type["id"], Type>) =>
  JSON.stringify(Array.from(data.values()));
const sp = (pages: Pages) => JSON.stringify(pages);
const sss = (v: Map<string, StyleSourceSelection>) =>
  JSON.stringify(Array.from(v.values()));
const ss = (v: Map<string, StyleDecl>) =>
  JSON.stringify(Array.from(v.values()));

const bodyBase = css`
  margin: 0;
  min-height: 100vh;
  font-family: ${FONT};
  color: ${TEXT_WHITE};
  background: ${BG_BLACK};
  box-sizing: border-box;
  overflow-x: hidden;
`;

/* ═══════════════════  Shared components  ═══════════════════ */

const navbar = () => (
  <ws.element
    ws:tag="header"
    ws:style={css`
      position: sticky;
      top: 0;
      z-index: 100;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px clamp(12px, 4vw, 48px);
      flex-wrap: wrap;
      gap: 8px;
      background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.9) 0%,
        rgba(0, 0, 0, 0.7) 60%,
        rgba(0, 0, 0, 0) 100%
      );
      font-family: ${FONT};
    `}
  >
    <ws.element
      ws:tag="div"
      ws:style={css`
        display: flex;
        align-items: center;
        gap: clamp(12px, 2vw, 28px);
        flex-wrap: wrap;
      `}
    >
      <ws.element ws:tag="a" href="/" ws:style={css`display:flex;align-items:center;text-decoration:none;`}>
        <ws.element
          ws:tag="img"
          src={LOGO}
          alt="Netflix"
          ws:style={css`
            height: clamp(20px, 4vw, 32px);
            object-fit: contain;
          `}
        />
      </ws.element>
      <ws.element ws:tag="nav" ws:style={css`display:flex;gap:clamp(10px, 2vw, 20px);flex-wrap:wrap;`}>
        <ws.element ws:tag="a" href="/" ws:style={css`color:#e5e5e5;text-decoration:none;font-size:14px;font-weight:500;`}>Home</ws.element>
        <ws.element ws:tag="a" href="/search" ws:style={css`color:#e5e5e5;text-decoration:none;font-size:14px;font-weight:500;`}>Search</ws.element>
        <ws.element ws:tag="a" href="/movie" ws:style={css`color:#e5e5e5;text-decoration:none;font-size:14px;font-weight:500;`}>Movies</ws.element>
        <ws.element ws:tag="a" href="/watch" ws:style={css`color:#e5e5e5;text-decoration:none;font-size:14px;font-weight:500;`}>My List</ws.element>
      </ws.element>
    </ws.element>
    <ws.element ws:tag="div" ws:style={css`display:flex;align-items:center;gap:16px;`}>
      <ws.element ws:tag="a" href="/search" ws:style={css`color:#fff;text-decoration:none;font-size:18px;`}>🔍</ws.element>
      <ws.element ws:tag="a" href="/login" ws:style={css`color:#fff;text-decoration:none;font-size:14px;`}>Sign In</ws.element>
      <ws.element
        ws:tag="div"
        ws:style={css`
          width: 32px;
          height: 32px;
          border-radius: 4px;
          background: linear-gradient(135deg, ${NETFLIX_RED}, #b20710);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-weight: bold;
          color: #fff;
        `}
      >
        U
      </ws.element>
    </ws.element>
  </ws.element>
);

const footer = () => (
  <ws.element
    ws:tag="footer"
    ws:style={css`
      padding: clamp(24px, 4vw, 48px) clamp(16px, 4vw, 48px) 32px;
      color: #737373;
      font-size: 13px;
      font-family: ${FONT};
      margin-top: 48px;
    `}
  >
    <ws.element ws:tag="div" ws:style={css`max-width:1000px;margin:0 auto;`}>
      <ws.element ws:tag="p" ws:style={css`margin-bottom:24px;font-size:14px;`}>
        Questions? Call 1-844-505-2993
      </ws.element>
      <ws.element
        ws:tag="div"
        ws:style={css`
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
          gap: 12px;
          margin-bottom: 24px;
        `}
      >
        <ws.element ws:tag="div" ws:style={css`display:flex;flex-direction:column;gap:8px;`}>
          <ws.element ws:tag="a" href="/" ws:style={css`color:#737373;text-decoration:underline;font-size:13px;`}>FAQ</ws.element>
          <ws.element ws:tag="a" href="/" ws:style={css`color:#737373;text-decoration:underline;font-size:13px;`}>Investor Relations</ws.element>
          <ws.element ws:tag="a" href="/" ws:style={css`color:#737373;text-decoration:underline;font-size:13px;`}>Privacy</ws.element>
          <ws.element ws:tag="a" href="/" ws:style={css`color:#737373;text-decoration:underline;font-size:13px;`}>Speed Test</ws.element>
        </ws.element>
        <ws.element ws:tag="div" ws:style={css`display:flex;flex-direction:column;gap:8px;`}>
          <ws.element ws:tag="a" href="/" ws:style={css`color:#737373;text-decoration:underline;font-size:13px;`}>Help Center</ws.element>
          <ws.element ws:tag="a" href="/" ws:style={css`color:#737373;text-decoration:underline;font-size:13px;`}>Jobs</ws.element>
          <ws.element ws:tag="a" href="/" ws:style={css`color:#737373;text-decoration:underline;font-size:13px;`}>Cookie Preferences</ws.element>
          <ws.element ws:tag="a" href="/" ws:style={css`color:#737373;text-decoration:underline;font-size:13px;`}>Legal Notices</ws.element>
        </ws.element>
        <ws.element ws:tag="div" ws:style={css`display:flex;flex-direction:column;gap:8px;`}>
          <ws.element ws:tag="a" href="/" ws:style={css`color:#737373;text-decoration:underline;font-size:13px;`}>Account</ws.element>
          <ws.element ws:tag="a" href="/" ws:style={css`color:#737373;text-decoration:underline;font-size:13px;`}>Ways to Watch</ws.element>
          <ws.element ws:tag="a" href="/" ws:style={css`color:#737373;text-decoration:underline;font-size:13px;`}>Corporate Info</ws.element>
          <ws.element ws:tag="a" href="/" ws:style={css`color:#737373;text-decoration:underline;font-size:13px;`}>Only on Netflix</ws.element>
        </ws.element>
        <ws.element ws:tag="div" ws:style={css`display:flex;flex-direction:column;gap:8px;`}>
          <ws.element ws:tag="a" href="/" ws:style={css`color:#737373;text-decoration:underline;font-size:13px;`}>Media Center</ws.element>
          <ws.element ws:tag="a" href="/" ws:style={css`color:#737373;text-decoration:underline;font-size:13px;`}>Terms of Use</ws.element>
          <ws.element ws:tag="a" href="/" ws:style={css`color:#737373;text-decoration:underline;font-size:13px;`}>Contact Us</ws.element>
        </ws.element>
      </ws.element>
      <ws.element ws:tag="p" ws:style={css`color:#737373;font-size:12px;`}>© 2025 Netflix Clone. All rights reserved.</ws.element>
    </ws.element>
  </ws.element>
);

const movieCard = (movie: (typeof movies)[number]) => (
  <ws.element
    ws:tag="a"
    href="/movie"
    ws:style={css`
      display: block;
      min-width: clamp(130px, 30vw, 200px);
      max-width: 240px;
      border-radius: 4px;
      overflow: hidden;
      flex-shrink: 0;
      text-decoration: none;
      color: inherit;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    `}
  >
    <ws.element
      ws:tag="img"
      src={movie.poster}
      alt={movie.title}
      ws:style={css`
        width: 100%;
        height: clamp(180px, 40vw, 300px);
        object-fit: cover;
        border-radius: 4px;
      `}
    />
    <ws.element
      ws:tag="div"
      ws:style={css`
        padding: 8px 4px;
        font-size: 13px;
        color: #bcbcbc;
      `}
    >
      {movie.title}
    </ws.element>
  </ws.element>
);

const contentRow = (title: string, movieList: (typeof movies)[number][]) => (
  <ws.element ws:tag="section" ws:style={css`margin-bottom:clamp(16px, 3vw, 32px);padding:0 clamp(12px, 4vw, 48px);`}>
    <ws.element
      ws:tag="h2"
      ws:style={css`
        font-size: clamp(16px, 2.5vw, 20px);
        font-weight: 700;
        color: #e5e5e5;
        margin: 0 0 12px;
      `}
    >
      {title}
    </ws.element>
    <ws.element
      ws:tag="div"
      ws:style={css`
        display: flex;
        gap: 8px;
        overflow-x: auto;
        padding-bottom: 8px;
      `}
    >
      {movieList.map((m) => movieCard(m))}
    </ws.element>
  </ws.element>
);

const heroBanner = (movie: (typeof movies)[number]) => (
  <ws.element
    ws:tag="section"
    ws:style={css`
      position: relative;
      width: 100%;
      min-height: clamp(320px, 60vw, 560px);
      display: flex;
      align-items: flex-end;
      margin-bottom: 24px;
    `}
  >
    <ws.element
      ws:tag="img"
      src={movie.poster}
      alt={movie.title}
      ws:style={css`
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: 0;
      `}
    />
    {/* Gradient overlays */}
    <ws.element
      ws:tag="div"
      ws:style={css`
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(
          90deg,
          rgba(0, 0, 0, 0.85) 0%,
          rgba(0, 0, 0, 0.55) 40%,
          rgba(0, 0, 0, 0.1) 70%,
          rgba(0, 0, 0, 0) 100%
        );
        z-index: 1;
      `}
    />
    <ws.element
      ws:tag="div"
      ws:style={css`
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 200px;
        background: linear-gradient(
          0deg,
          ${BG_BLACK} 0%,
          rgba(0, 0, 0, 0.6) 50%,
          transparent 100%
        );
        z-index: 1;
      `}
    />
    {/* Content */}
    <ws.element
      ws:tag="div"
      ws:style={css`
        position: relative;
        z-index: 2;
        padding: 0 clamp(16px, 4vw, 48px) clamp(32px, 6vw, 80px);
        max-width: 600px;
      `}
    >
      <ws.element
        ws:tag="h1"
        ws:style={css`
          font-size: clamp(24px, 5vw, 52px);
          font-weight: 800;
          margin: 0 0 16px;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.7);
          line-height: 1.1;
        `}
      >
        {movie.title}
      </ws.element>
      <ws.element
        ws:tag="p"
        ws:style={css`
          font-size: clamp(13px, 1.8vw, 16px);
          line-height: 1.5;
          color: #ddd;
          margin: 0 0 24px;
          max-width: 480px;
          text-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);
        `}
      >
        {movie.desc}
      </ws.element>
      <ws.element ws:tag="div" ws:style={css`display:flex;gap:12px;flex-wrap:wrap;`}>
        <ws.element
          ws:tag="a"
          href="/watch"
          ws:style={css`
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: #fff;
            color: #000;
            padding: clamp(8px, 1.5vw, 10px) clamp(16px, 3vw, 28px);
            border-radius: 4px;
            text-decoration: none;
            font-size: clamp(13px, 1.8vw, 16px);
            font-weight: 700;
          `}
        >
          ▶ Play
        </ws.element>
        <ws.element
          ws:tag="a"
          href="/movie"
          ws:style={css`
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: rgba(109, 109, 110, 0.7);
            color: #fff;
            padding: clamp(8px, 1.5vw, 10px) clamp(16px, 3vw, 28px);
            border-radius: 4px;
            text-decoration: none;
            font-size: clamp(13px, 1.8vw, 16px);
            font-weight: 700;
          `}
        >
          ℹ More Info
        </ws.element>
      </ws.element>
    </ws.element>
  </ws.element>
);

/* ═══════════════════  Build all pages  ═══════════════════ */

const buildData = () => {
  const breakpoints = initialBreakpoints.map((b) => ({ ...b, id: makeId() }));

  // Page IDs
  const homeId = makeId();
  const movieId = makeId();
  const watchId = makeId();
  const searchId = makeId();
  const loginId = makeId();
  const notFoundId = makeId();

  // Body instance IDs
  const homeB = makeId();
  const movieB = makeId();
  const watchB = makeId();
  const searchB = makeId();
  const loginB = makeId();
  const nfB = makeId();

  const data = renderData(
    <>
      {/* ═══════════════════  HOME PAGE  ═══════════════════ */}
      <ws.element ws:tag="body" ws:id={homeB} ws:style={bodyBase}>
        {navbar()}
        {heroBanner(movies[0])}
        {contentRow("Trending Now", trendingMovies)}
        {contentRow("Popular on Netflix", popularMovies)}
        {contentRow("Action & Adventure", actionMovies)}
        {contentRow("New Releases", newReleases)}
        {footer()}
      </ws.element>

      {/* ═══════════════════  MOVIE DETAIL PAGE  ═══════════════════ */}
      <ws.element ws:tag="body" ws:id={movieB} ws:style={bodyBase}>
        {navbar()}
        {/* Banner image */}
        <ws.element
          ws:tag="section"
          ws:style={css`
            position: relative;
            width: 100%;
            min-height: clamp(240px, 50vw, 480px);
          `}
        >
          <ws.element
            ws:tag="img"
            src={movies[0].poster}
            alt={movies[0].title}
            ws:style={css`
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              object-fit: cover;
            `}
          />
          <ws.element
            ws:tag="div"
            ws:style={css`
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background: linear-gradient(
                0deg,
                ${BG_DARK} 0%,
                rgba(20, 20, 20, 0.6) 50%,
                transparent 100%
              );
            `}
          />
        </ws.element>

        {/* Movie info */}
        <ws.element
          ws:tag="main"
          ws:style={css`
            max-width: 900px;
            margin: clamp(-60px, -8vw, -120px) auto 0;
            position: relative;
            z-index: 2;
            padding: 0 clamp(16px, 4vw, 48px) clamp(24px, 4vw, 48px);
          `}
        >
          <ws.element
            ws:tag="h1"
            ws:style={css`
              font-size: clamp(24px, 5vw, 44px);
              font-weight: 800;
              margin: 0 0 12px;
            `}
          >
            {movies[0].title}
          </ws.element>

          {/* Metadata row */}
          <ws.element
            ws:tag="div"
            ws:style={css`
              display: flex;
              align-items: center;
              gap: clamp(8px, 1.5vw, 16px);
              margin-bottom: 20px;
              font-size: clamp(12px, 1.5vw, 14px);
              flex-wrap: wrap;
            `}
          >
            <ws.element
              ws:tag="span"
              ws:style={css`
                color: #46d369;
                font-weight: 700;
              `}
            >
              98% Match
            </ws.element>
            <ws.element ws:tag="span" ws:style={css`color:${TEXT_GRAY};`}>
              {movies[0].year}
            </ws.element>
            <ws.element
              ws:tag="span"
              ws:style={css`
                border: 1px solid #808080;
                padding: 1px 6px;
                font-size: 12px;
                color: ${TEXT_GRAY};
              `}
            >
              {movies[0].rating}
            </ws.element>
            <ws.element ws:tag="span" ws:style={css`color:${TEXT_GRAY};`}>
              {movies[0].duration}
            </ws.element>
            <ws.element
              ws:tag="span"
              ws:style={css`
                border: 1px solid #808080;
                padding: 1px 6px;
                font-size: 11px;
                color: ${TEXT_GRAY};
              `}
            >
              HD
            </ws.element>
          </ws.element>

          {/* Play button */}
          <ws.element ws:tag="div" ws:style={css`display:flex;gap:12px;margin-bottom:24px;flex-wrap:wrap;`}>
            <ws.element
              ws:tag="a"
              href="/watch"
              ws:style={css`
                display: inline-flex;
                align-items: center;
                gap: 8px;
                background: #fff;
                color: #000;
                padding: 10px 32px;
                border-radius: 4px;
                text-decoration: none;
                font-size: 16px;
                font-weight: 700;
              `}
            >
              ▶ Play
            </ws.element>
            <ws.element
              ws:tag="a"
              href="/"
              ws:style={css`
                display: inline-flex;
                align-items: center;
                justify-content: center;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                border: 2px solid #808080;
                color: #fff;
                text-decoration: none;
                font-size: 18px;
                background: transparent;
              `}
            >
              +
            </ws.element>
            <ws.element
              ws:tag="a"
              href="/"
              ws:style={css`
                display: inline-flex;
                align-items: center;
                justify-content: center;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                border: 2px solid #808080;
                color: #fff;
                text-decoration: none;
                font-size: 16px;
                background: transparent;
              `}
            >
              👍
            </ws.element>
          </ws.element>

          {/* Description */}
          <ws.element
            ws:tag="div"
            ws:style={css`
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr));
              gap: clamp(16px, 3vw, 32px);
            `}
          >
            <ws.element ws:tag="div">
              <ws.element
                ws:tag="p"
                ws:style={css`
                  font-size: 15px;
                  line-height: 1.6;
                  color: #ddd;
                  margin: 0;
                `}
              >
                {movies[0].desc}
              </ws.element>
            </ws.element>
            <ws.element ws:tag="div" ws:style={css`font-size:13px;color:#777;display:flex;flex-direction:column;gap:8px;`}>
              <ws.element ws:tag="p" ws:style={css`margin:0;`}>
                <ws.element ws:tag="span" ws:style={css`color:#777;`}>Cast: </ws.element>
                <ws.element ws:tag="span" ws:style={css`color:#fff;`}>Millie Bobby Brown, Finn Wolfhard, Winona Ryder</ws.element>
              </ws.element>
              <ws.element ws:tag="p" ws:style={css`margin:0;`}>
                <ws.element ws:tag="span" ws:style={css`color:#777;`}>Genres: </ws.element>
                <ws.element ws:tag="span" ws:style={css`color:#fff;`}>Sci-Fi, Horror, Drama</ws.element>
              </ws.element>
              <ws.element ws:tag="p" ws:style={css`margin:0;`}>
                <ws.element ws:tag="span" ws:style={css`color:#777;`}>This show is: </ws.element>
                <ws.element ws:tag="span" ws:style={css`color:#fff;`}>Suspenseful, Exciting</ws.element>
              </ws.element>
            </ws.element>
          </ws.element>
        </ws.element>

        {/* More Like This */}
        <ws.element ws:tag="section" ws:style={css`padding:0 clamp(12px, 4vw, 48px) 24px;`}>
          <ws.element
            ws:tag="h2"
            ws:style={css`
              font-size: 22px;
              font-weight: 700;
              color: #fff;
              margin: 0 0 16px;
            `}
          >
            More Like This
          </ws.element>
          <ws.element
            ws:tag="div"
            ws:style={css`
              display: grid;
              grid-template-columns: repeat(auto-fill, minmax(min(100%, 180px), 1fr));
              gap: 8px;
            `}
          >
            {popularMovies.map((m) => (
              <ws.element ws:tag="a" href="/movie" ws:style={css`display:block;border-radius:4px;overflow:hidden;text-decoration:none;`}>
                <ws.element
                  ws:tag="img"
                  src={m.poster}
                  alt={m.title}
                  ws:style={css`
                    width: 100%;
                    height: 280px;
                    object-fit: cover;
                  `}
                />
                <ws.element
                  ws:tag="div"
                  ws:style={css`
                    background: #2f2f2f;
                    padding: 12px;
                  `}
                >
                  <ws.element ws:tag="p" ws:style={css`margin:0 0 4px;font-size:14px;font-weight:600;color:#fff;`}>
                    {m.title}
                  </ws.element>
                  <ws.element ws:tag="p" ws:style={css`margin:0;font-size:12px;color:#999;`}>
                    {m.year} · {m.rating}
                  </ws.element>
                </ws.element>
              </ws.element>
            ))}
          </ws.element>
        </ws.element>
        {footer()}
      </ws.element>

      {/* ═══════════════════  VIDEO PLAYER PAGE  ═══════════════════ */}
      <ws.element ws:tag="body" ws:id={watchB} ws:style={css`margin:0;min-height:100vh;background:#000;font-family:${FONT};color:#fff;display:flex;flex-direction:column;box-sizing:border-box;`}>
        {/* Top bar */}
        <ws.element
          ws:tag="div"
          ws:style={css`
            display: flex;
            align-items: center;
            gap: 16px;
            padding: 16px 24px;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 10;
          `}
        >
          <ws.element
            ws:tag="a"
            href="/"
            ws:style={css`
              color: #fff;
              text-decoration: none;
              font-size: 28px;
              font-weight: bold;
            `}
          >
            ←
          </ws.element>
          <ws.element ws:tag="span" ws:style={css`font-size:16px;font-weight:600;color:#fff;`}>
            Now Playing: {movies[0].title}
          </ws.element>
        </ws.element>

        {/* Player area */}
        <ws.element
          ws:tag="div"
          ws:style={css`
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
          `}
        >
          <ws.element
            ws:tag="div"
            ws:style={css`
              width: 100%;
              max-width: 1200px;
              aspect-ratio: 16/9;
              position: relative;
              background: #111;
              border-radius: 4px;
              overflow: hidden;
            `}
          >
            <ws.element
              ws:tag="img"
              src={movies[0].poster}
              alt="Video placeholder"
              ws:style={css`
                width: 100%;
                height: 100%;
                object-fit: cover;
                opacity: 0.5;
              `}
            />
            {/* Play overlay */}
            <ws.element
              ws:tag="div"
              ws:style={css`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                background: rgba(0, 0, 0, 0.4);
              `}
            >
              <ws.element
                ws:tag="div"
                ws:style={css`
                  width: 80px;
                  height: 80px;
                  border-radius: 50%;
                  background: rgba(0, 0, 0, 0.7);
                  border: 3px solid #fff;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  font-size: 32px;
                  color: #fff;
                `}
              >
                ▶
              </ws.element>
            </ws.element>
          </ws.element>
        </ws.element>

        {/* Simulated player controls */}
        <ws.element
          ws:tag="div"
          ws:style={css`
            padding: 16px 24px;
            display: flex;
            flex-direction: column;
            gap: 8px;
          `}
        >
          {/* Progress bar */}
          <ws.element
            ws:tag="div"
            ws:style={css`
              width: 100%;
              height: 4px;
              background: #333;
              border-radius: 2px;
              overflow: hidden;
            `}
          >
            <ws.element
              ws:tag="div"
              ws:style={css`
                width: 35%;
                height: 100%;
                background: ${NETFLIX_RED};
                border-radius: 2px;
              `}
            />
          </ws.element>
          <ws.element
            ws:tag="div"
            ws:style={css`
              display: flex;
              justify-content: space-between;
              align-items: center;
              font-size: 13px;
              color: #999;
            `}
          >
            <ws.element ws:tag="div" ws:style={css`display:flex;gap:16px;align-items:center;`}>
              <ws.element ws:tag="span" ws:style={css`font-size:20px;color:#fff;cursor:pointer;`}>⏸</ws.element>
              <ws.element ws:tag="span" ws:style={css`font-size:16px;color:#fff;cursor:pointer;`}>⏪</ws.element>
              <ws.element ws:tag="span" ws:style={css`font-size:16px;color:#fff;cursor:pointer;`}>⏩</ws.element>
              <ws.element ws:tag="span" ws:style={css`font-size:14px;color:#fff;cursor:pointer;`}>🔊</ws.element>
              <ws.element ws:tag="span">0:42:15 / 2:01:33</ws.element>
            </ws.element>
            <ws.element ws:tag="div" ws:style={css`display:flex;gap:12px;align-items:center;`}>
              <ws.element ws:tag="span" ws:style={css`font-size:14px;color:#fff;cursor:pointer;`}>⛶</ws.element>
            </ws.element>
          </ws.element>
        </ws.element>
      </ws.element>

      {/* ═══════════════════  SEARCH PAGE  ═══════════════════ */}
      <ws.element ws:tag="body" ws:id={searchB} ws:style={bodyBase}>
        {navbar()}
        <ws.element ws:tag="main" ws:style={css`padding:clamp(12px, 3vw, 24px) clamp(12px, 4vw, 48px);`}>
          {/* Search input */}
          <ws.element
            ws:tag="div"
            ws:style={css`
              margin-bottom: 32px;
              display: flex;
              align-items: center;
              gap: 12px;
              background: #333;
              border-radius: 4px;
              padding: 8px 16px;
              max-width: 600px;
            `}
          >
            <ws.element ws:tag="span" ws:style={css`font-size:18px;color:#999;`}>🔍</ws.element>
            <ws.element
              ws:tag="input"
              type="search"
              placeholder="Titles, people, genres"
              ws:style={css`
                flex: 1;
                background: transparent;
                border: none;
                color: #fff;
                font-size: 16px;
                font-family: ${FONT};
                outline: none;
                padding: 8px 0;
              `}
            />
          </ws.element>

          <ws.element
            ws:tag="h2"
            ws:style={css`
              font-size: 20px;
              font-weight: 600;
              color: #e5e5e5;
              margin: 0 0 20px;
            `}
          >
            Explore Titles
          </ws.element>

          {/* Grid of results */}
          <ws.element
            ws:tag="div"
            ws:style={css`
              display: grid;
              grid-template-columns: repeat(auto-fill, minmax(min(100%, 200px), 1fr));
              gap: 12px;
            `}
          >
            {movies.map((m) => (
              <ws.element
                ws:tag="a"
                href="/movie"
                ws:style={css`
                  display: block;
                  border-radius: 4px;
                  overflow: hidden;
                  text-decoration: none;
                  color: inherit;
                  background: #181818;
                `}
              >
                <ws.element
                  ws:tag="img"
                  src={m.poster}
                  alt={m.title}
                  ws:style={css`
                    width: 100%;
                    height: 320px;
                    object-fit: cover;
                  `}
                />
                <ws.element ws:tag="div" ws:style={css`padding:12px;`}>
                  <ws.element
                    ws:tag="h3"
                    ws:style={css`
                      margin: 0 0 4px;
                      font-size: 14px;
                      font-weight: 600;
                      color: #fff;
                    `}
                  >
                    {m.title}
                  </ws.element>
                  <ws.element ws:tag="div" ws:style={css`display:flex;align-items:center;gap:8px;font-size:12px;`}>
                    <ws.element ws:tag="span" ws:style={css`color:#46d369;font-weight:600;`}>98% Match</ws.element>
                    <ws.element ws:tag="span" ws:style={css`color:#999;`}>{m.year}</ws.element>
                    <ws.element
                      ws:tag="span"
                      ws:style={css`
                        border: 1px solid #808080;
                        padding: 0 4px;
                        font-size: 11px;
                        color: #999;
                      `}
                    >
                      {m.rating}
                    </ws.element>
                  </ws.element>
                </ws.element>
              </ws.element>
            ))}
          </ws.element>
        </ws.element>
        {footer()}
      </ws.element>

      {/* ═══════════════════  LOGIN PAGE  ═══════════════════ */}
      <ws.element
        ws:tag="body"
        ws:id={loginB}
        ws:style={css`
          margin: 0;
          min-height: 100vh;
          font-family: ${FONT};
          color: ${TEXT_WHITE};
          background: ${BG_BLACK};
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          position: relative;
        `}
      >
        {/* Background image */}
        <ws.element
          ws:tag="img"
          src={POSTERS[2]}
          alt="Background"
          ws:style={css`
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            opacity: 0.35;
            z-index: 0;
          `}
        />
        <ws.element
          ws:tag="div"
          ws:style={css`
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.6);
            z-index: 1;
          `}
        />

        {/* Top bar with logo */}
        <ws.element
          ws:tag="header"
          ws:style={css`
            position: relative;
            z-index: 2;
            padding: clamp(16px, 3vw, 24px) clamp(16px, 4vw, 48px);
          `}
        >
          <ws.element ws:tag="a" href="/" ws:style={css`display:inline-block;`}>
            <ws.element
              ws:tag="img"
              src={LOGO}
              alt="Netflix"
              ws:style={css`
                height: 40px;
                object-fit: contain;
              `}
            />
          </ws.element>
        </ws.element>

        {/* Login form card */}
        <ws.element
          ws:tag="main"
          ws:style={css`
            position: relative;
            z-index: 2;
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 24px;
          `}
        >
          <ws.element
            ws:tag="div"
            ws:style={css`
              background: rgba(0, 0, 0, 0.8);
              border-radius: 4px;
              padding: clamp(32px, 5vw, 60px) clamp(24px, 5vw, 68px);
              width: 100%;
              max-width: 450px;
            `}
          >
            <ws.element
              ws:tag="h1"
              ws:style={css`
                font-size: 32px;
                font-weight: 700;
                margin: 0 0 28px;
              `}
            >
              Sign In
            </ws.element>

            <ws.element ws:tag="form" ws:style={css`display:flex;flex-direction:column;gap:16px;`}>
              <ws.element
                ws:tag="input"
                type="email"
                placeholder="Email or phone number"
                ws:style={css`
                  padding: 16px;
                  border-radius: 4px;
                  border: none;
                  background: #333;
                  color: #fff;
                  font-size: 16px;
                  font-family: ${FONT};
                `}
              />
              <ws.element
                ws:tag="input"
                type="password"
                placeholder="Password"
                ws:style={css`
                  padding: 16px;
                  border-radius: 4px;
                  border: none;
                  background: #333;
                  color: #fff;
                  font-size: 16px;
                  font-family: ${FONT};
                `}
              />
              <ws.element
                ws:tag="button"
                type="submit"
                ws:style={css`
                  padding: 14px;
                  border-radius: 4px;
                  border: none;
                  background: ${NETFLIX_RED};
                  color: #fff;
                  font-size: 16px;
                  font-weight: 700;
                  cursor: pointer;
                  margin-top: 8px;
                  font-family: ${FONT};
                `}
              >
                Sign In
              </ws.element>
            </ws.element>

            <ws.element
              ws:tag="div"
              ws:style={css`
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-top: 12px;
                font-size: 13px;
                color: #b3b3b3;
              `}
            >
              <ws.element ws:tag="div" ws:style={css`display:flex;align-items:center;gap:4px;`}>
                <ws.element ws:tag="input" type="checkbox" />
                <ws.element ws:tag="span">Remember me</ws.element>
              </ws.element>
              <ws.element ws:tag="a" href="/" ws:style={css`color:#b3b3b3;text-decoration:none;`}>Need help?</ws.element>
            </ws.element>

            <ws.element
              ws:tag="div"
              ws:style={css`
                margin-top: 48px;
                font-size: 16px;
                color: #737373;
              `}
            >
              <ws.element ws:tag="span">New to Netflix? </ws.element>
              <ws.element ws:tag="a" href="/" ws:style={css`color:#fff;text-decoration:none;font-weight:500;`}>Sign up now.</ws.element>
            </ws.element>

            <ws.element
              ws:tag="p"
              ws:style={css`
                margin-top: 16px;
                font-size: 13px;
                color: #8c8c8c;
                line-height: 1.5;
              `}
            >
              This page is protected by Google reCAPTCHA to ensure you\\'re not a bot.
            </ws.element>
          </ws.element>
        </ws.element>
      </ws.element>

      {/* ═══════════════════  404 PAGE  ═══════════════════ */}
      <ws.element ws:tag="body" ws:id={nfB} ws:style={bodyBase}>
        {navbar()}
        <ws.element
          ws:tag="main"
          ws:style={css`
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 60vh;
            text-align: center;
            padding: 48px;
          `}
        >
          <ws.element
            ws:tag="h1"
            ws:style={css`
              font-size: clamp(32px, 8vw, 80px);
              font-weight: 800;
              margin: 0 0 8px;
              color: ${TEXT_GRAY};
            `}
          >
            Lost your way?
          </ws.element>
          <ws.element
            ws:tag="p"
            ws:style={css`
              font-size: 20px;
              color: #808080;
              margin: 0 0 32px;
              max-width: 600px;
              line-height: 1.5;
            `}
          >
            Sorry, we can\\'t find that page. You\\'ll find lots to explore on the home page.
          </ws.element>
          <ws.element
            ws:tag="a"
            href="/"
            ws:style={css`
              display: inline-block;
              background: ${TEXT_WHITE};
              color: ${BG_BLACK};
              padding: 12px 28px;
              border-radius: 4px;
              text-decoration: none;
              font-size: 16px;
              font-weight: 700;
            `}
          >
            Netflix Home
          </ws.element>
          <ws.element
            ws:tag="p"
            ws:style={css`
              margin-top: 24px;
              font-size: clamp(16px, 3vw, 28px);
              color: #808080;
              font-weight: 500;
            `}
          >
            Error Code: <ws.element ws:tag="strong" ws:style={css`color:#fff;`}>NSES-404</ws.element>
          </ws.element>
        </ws.element>
        {footer()}
      </ws.element>
    </>,
    makeId,
    breakpoints
  );

  const pages: Pages = {
    meta: {
      siteName: "netflix clone",
    },
    homePage: {
      id: homeId,
      name: "Home",
      path: "",
      title: '"Netflix Clone"',
      meta: {},
      rootInstanceId: homeB,
    },
    pages: [
      {
        id: movieId,
        name: "Movie",
        path: "/movie",
        title: '"Movie Detail"',
        meta: {},
        rootInstanceId: movieB,
      },
      {
        id: watchId,
        name: "Watch",
        path: "/watch",
        title: '"Watch"',
        meta: {},
        rootInstanceId: watchB,
      },
      {
        id: searchId,
        name: "Search",
        path: "/search",
        title: '"Search"',
        meta: {},
        rootInstanceId: searchB,
      },
      {
        id: loginId,
        name: "Login",
        path: "/login",
        title: '"Sign In - Netflix"',
        meta: {},
        rootInstanceId: loginB,
      },
      {
        id: notFoundId,
        name: "404",
        path: "/*",
        title: '"404"',
        meta: { status: "404", excludePageFromSearch: "false" },
        rootInstanceId: nfB,
      },
    ],
    folders: [
      createRootFolder([homeId, movieId, watchId, searchId, loginId, notFoundId]),
    ],
  };

  return { ...data, pages };
};

/* ═══════════════════  Database persistence  ═══════════════════ */

const createUniqueDomain = async (base: string, excludeId?: string) => {
  const normalize = base
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
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
  const passwordHash = hashPassword(adminPassword);
  const user = await prisma.user.findFirst({
    where: { email: adminEmail },
    select: { id: true, email: true },
  });
  if (user !== null) {
    await prisma.user.update({
      where: { id: user.id },
      data: {
        provider: "password",
        passwordHash,
        username: adminEmail,
        image: "",
      },
    });
    return user;
  }
  return prisma.user.create({
    data: {
      email: adminEmail,
      username: adminEmail,
      image: "",
      provider: "password",
      passwordHash,
    },
    select: { id: true, email: true },
  });
};

const ensureProject = async (userId: string) => {
  const existing = await prisma.project.findFirst({
    where: { title: "netflix clone", userId, isDeleted: false },
    select: { id: true, title: true, domain: true },
  });
  if (existing !== null) return existing;
  return prisma.project.create({
    data: {
      id: randomUUID(),
      userId,
      title: "netflix clone",
      tags: [],
      domain: await createUniqueDomain("netflix-clone"),
    },
    select: { id: true, title: true, domain: true },
  });
};

const saveBuild = async (projectId: string) => {
  const latest = await prisma.build.findFirst({
    where: { projectId, deployment: null },
    orderBy: { createdAt: "desc" },
    select: { id: true },
  });
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
        user: { email: adminEmail, password: adminPassword },
        projectId: project.id,
        buildId,
        title: "netflix clone",
        builderUrl: `https://p-${project.id}.wstd.dev:5173/`,
      },
      null,
      2
    )
  );
};

main()
  .catch((error) => {
    console.error("netflix-clone generation failed");
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
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
