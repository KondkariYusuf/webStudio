-- DropForeignKey
ALTER TABLE "domainsVirtual" DROP CONSTRAINT "domainsVirtual_domainId_fkey";

-- DropForeignKey
ALTER TABLE "domainsVirtual" DROP CONSTRAINT "domainsVirtual_projectId_fkey";

-- DropForeignKey
ALTER TABLE "latestBuildVirtual" DROP CONSTRAINT "latestBuildVirtual_buildId_fkey";

-- DropForeignKey
ALTER TABLE "latestBuildVirtual" DROP CONSTRAINT "latestBuildVirtual_domainsVirtualId_fkey";

-- DropForeignKey
ALTER TABLE "latestBuildVirtual" DROP CONSTRAINT "latestBuildVirtual_projectId_fkey";

-- AlterTable
ALTER TABLE "AuthorizationToken" DROP COLUMN "canPublish";

-- AlterTable
ALTER TABLE "Build" DROP COLUMN "isCleaned";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" TEXT NOT NULL DEFAULT 'viewer';

-- DropTable
DROP TABLE "domainsVirtual";

-- DropTable
DROP TABLE "latestBuildVirtual";

-- CreateTable
CREATE TABLE "UserProjectAccess" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,
    "accessLevel" TEXT NOT NULL DEFAULT 'view',
    "grantedBy" TEXT,
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserProjectAccess_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserProjectAccess_userId_projectId_key" ON "UserProjectAccess"("userId", "projectId");

-- AddForeignKey
ALTER TABLE "UserProjectAccess" ADD CONSTRAINT "UserProjectAccess_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserProjectAccess" ADD CONSTRAINT "UserProjectAccess_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserProjectAccess" ADD CONSTRAINT "UserProjectAccess_grantedBy_fkey" FOREIGN KEY ("grantedBy") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

