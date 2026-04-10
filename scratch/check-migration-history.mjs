import { PrismaClient } from '../Backend/packages/prisma-client/src/__generated__/index.js';

process.env.DATABASE_URL = 'postgresql://postgres:yusuf@localhost:5432/webstudio';
process.env.DIRECT_URL = process.env.DATABASE_URL;

const prisma = new PrismaClient();

async function main() {
  try {
    const migrations = await prisma.$queryRaw`
      SELECT migration_name, finished_at, started_at 
      FROM _prisma_migrations 
      ORDER BY started_at DESC 
      LIMIT 10
    `;
    console.log('Migration History:');
    console.table(migrations);
  } catch (e) {
    console.error(e);
  } finally {
    await prisma.$disconnect();
  }
}

main();
