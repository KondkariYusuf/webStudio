ALTER TABLE "User"
ADD COLUMN IF NOT EXISTS "phone" TEXT,
ADD COLUMN IF NOT EXISTS "fullName" TEXT,
ADD COLUMN IF NOT EXISTS "companyName" TEXT,
ADD COLUMN IF NOT EXISTS "approved" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN IF NOT EXISTS "role" TEXT NOT NULL DEFAULT 'viewer';

CREATE TABLE IF NOT EXISTS "UserProjectAccess" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,
    "accessLevel" TEXT NOT NULL DEFAULT 'view',
    "grantedBy" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserProjectAccess_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX IF NOT EXISTS "UserProjectAccess_userId_projectId_key" ON "UserProjectAccess"("userId", "projectId");
CREATE INDEX IF NOT EXISTS "UserProjectAccess_projectId_idx" ON "UserProjectAccess"("projectId");

DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1
        FROM pg_constraint
        WHERE conname = 'UserProjectAccess_userId_fkey'
    ) THEN
        ALTER TABLE "UserProjectAccess"
        ADD CONSTRAINT "UserProjectAccess_userId_fkey"
        FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
    END IF;
END $$;

DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1
        FROM pg_constraint
        WHERE conname = 'UserProjectAccess_projectId_fkey'
    ) THEN
        ALTER TABLE "UserProjectAccess"
        ADD CONSTRAINT "UserProjectAccess_projectId_fkey"
        FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;
    END IF;
END $$;

DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1
        FROM pg_constraint
        WHERE conname = 'UserProjectAccess_grantedBy_fkey'
    ) THEN
        ALTER TABLE "UserProjectAccess"
        ADD CONSTRAINT "UserProjectAccess_grantedBy_fkey"
        FOREIGN KEY ("grantedBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
    END IF;
END $$;
