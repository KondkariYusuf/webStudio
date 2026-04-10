import { PrismaClient } from '../Backend/packages/prisma-client/src/__generated__/index.js';

process.env.DATABASE_URL = 'postgresql://postgres:yusuf@localhost:5432/webstudio';
process.env.DIRECT_URL = process.env.DATABASE_URL;

const prisma = new PrismaClient();

async function main() {
  try {
    const tables = await prisma.$queryRaw`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public'
      ORDER BY table_name ASC
    `;
    console.log('--- ALL TABLES ---');
    tables.forEach((t, i) => console.log(`${i}: ${t.table_name}`));

    const columns = await prisma.$queryRaw`
      SELECT column_name 
      FROM information_schema.columns 
      WHERE table_name = 'User' AND table_schema = 'public'
    `;
    console.log('\n--- USER COLUMNS ---');
    columns.forEach(c => console.log(c.column_name));

  } catch (e) {
    console.error(e);
  } finally {
    await prisma.$disconnect();
  }
}

main();
