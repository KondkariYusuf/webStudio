# Webstudio Monorepo Setup Guide

This guide walks through cloning and running the project from scratch with the existing frontend/backend folder structure.

## Repository Structure

- `Frontend/`: UI apps and fixtures.
- `Backend/`: shared backend/domain packages (Prisma client, PostgREST client/types, dashboard logic, etc.).
- Root workspace: npm workspaces that connect frontend and backend packages.

## Prerequisites

Install these before setup:

- Node.js `22.x` (required by `package.json` engines).
- npm (comes with Node.js).
- PostgreSQL 14+ (local instance).
- Git.

Optional but useful:

- pgAdmin or another PostgreSQL client.

## 1. Clone and Install

```bash
git clone <your-fork-or-repo-url>
cd webstudio
npm install
```

## 2. Create and Prepare the Database

Create a PostgreSQL database named `webstudio`.

Example SQL:

```sql
CREATE DATABASE webstudio;
```

Default local credentials used by the builder env files in this repo:

- User: `postgres`
- Password: `yusuf`
- Host: `localhost`
- Port: `5432`

If your local PostgreSQL uses different credentials/port, update env values in the next step.

## 3. Configure Environment Variables

The builder app reads environment values from:

- `Frontend/apps/builder/.env`
- `Frontend/apps/builder/.env.development`

Key variables to verify:

- `DATABASE_URL`
- `DIRECT_URL`
- `AUTH_SECRET`
- `POSTGREST_URL`
- `POSTGREST_API_KEY`
- `DEV_LOGIN`

Typical local values already present in this repo:

```env
DATABASE_URL=postgresql://postgres:yusuf@localhost:5432/webstudio?pgbouncer=true
DIRECT_URL=postgresql://postgres:yusuf@localhost:5432/webstudio
POSTGREST_URL=http://127.0.0.1:3000
AUTH_SECRET=devsecret123
DEV_LOGIN=true
```

## 4. Run Database Migrations

From repository root:

```bash
npm run migrations
```

This does two things:

1. Generates Prisma client.
2. Applies pending migrations to the database in `Frontend/apps/builder` context.

If your shell cannot resolve `tsx` from PATH on Windows, use this fallback:

```bash
npx --yes tsx Backend/packages/prisma-client/migrations-cli/cli.ts migrate --dev --cwd Frontend/apps/builder
```

To check migration status:

```bash
npx --yes tsx Backend/packages/prisma-client/migrations-cli/cli.ts status --dev --cwd Frontend/apps/builder
```

## 5. Start PostgREST

The builder expects PostgREST on port `3000` (configured in `POSTGREST_URL`).

### Windows (binary already in repo)

From `Frontend/apps/builder`:

```powershell
.\postgrest.exe .\postgrest.conf
```

### macOS/Linux

Install PostgREST separately, then run:

```bash
postgrest Frontend/apps/builder/postgrest.conf
```

PostgREST config currently points at:

- DB URL: `postgresql://postgres:yusuf@localhost:5432/webstudio`
- Port: `3000`

Keep PostgREST running while using the builder.

## 6. Seed Demo Data (Optional but recommended)

From root:

```bash
npm run demo:seed -w @webstudio-is/builder
```

## 7. Start the Development App

### One command (seed + run)

```bash
npm run dev
```

This runs:

1. Builder demo seed script.
2. Builder Remix/Vite dev server.

### Run only the builder dev server

```bash
npm run dev -w @webstudio-is/builder
```

## 8. Verify Authentication and Dashboard Isolation

After app starts:

1. Open the login page in browser.
2. Use Register to create a new user (email/password).
3. Login with that user.
4. Create a project in dashboard.
5. Register/login with a second user and confirm projects are isolated per account.

Notes:

- OAuth and dev secret login can still be present if enabled by env.
- `DEV_LOGIN=true` keeps secret login available for local development.

## 9. Common Commands

From root:

```bash
npm run build
npm run lint
npm run test -w @webstudio-is/builder
```

Builder typecheck:

```bash
npm run typecheck -w @webstudio-is/builder
```

If `tsgo` is not found on Windows, install it or run your normal TypeScript checks through your editor/CI pipeline.

## Troubleshooting

### Error: `column User.passwordHash does not exist`

Your DB schema is behind code changes. Re-run migrations:

```bash
npm run migrations
```

Then restart PostgREST.

### PostgREST returns schema-related errors after migration

Restart PostgREST so it reloads schema and config.

### Cannot connect to database

Check:

- PostgreSQL service is running.
- `DATABASE_URL` and `DIRECT_URL` match your local credentials.
- DB `webstudio` exists.

### Auth works but data writes fail

Check:

- PostgREST is running on the same URL as `POSTGREST_URL`.
- `POSTGREST_API_KEY` matches your PostgREST/JWT setup.
- Migrations are fully applied.

## Notes for Contributors

- Keep `Frontend/` and `Backend/` separation intact when adding features.
- For schema changes, always:
  1. Update Prisma schema.
  2. Create/apply migrations.
  3. Regenerate dependent types/clients if needed.
  4. Restart PostgREST locally.
