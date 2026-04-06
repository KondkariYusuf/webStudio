-- RBAC Migration: Add role to User table and create UserProjectAccess table

-- Step 1: Add role column
ALTER TABLE "User" ADD COLUMN "role" TEXT NOT NULL DEFAULT 'viewer';

-- Step 2: Set the first user as admin
UPDATE "User" SET "role" = 'admin' WHERE "id" = (
  SELECT "id" FROM "User" ORDER BY "createdAt" ASC LIMIT 1
);

-- Step 3: Create UserProjectAccess junction table
CREATE TABLE IF NOT EXISTS "UserProjectAccess" (
  "id" TEXT NOT NULL DEFAULT gen_random_uuid()::text,
  "userId" TEXT NOT NULL,
  "projectId" TEXT NOT NULL,
  "accessLevel" TEXT NOT NULL DEFAULT 'view',
  "grantedBy" TEXT NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY ("id"),
  UNIQUE ("userId", "projectId"),
  FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE,
  FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE,
  FOREIGN KEY ("grantedBy") REFERENCES "User"("id") ON DELETE SET NULL
);

-- Step 4: Grant PostgREST roles access
GRANT SELECT, INSERT, UPDATE, DELETE ON "UserProjectAccess" TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON "UserProjectAccess" TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON "UserProjectAccess" TO service_role;
