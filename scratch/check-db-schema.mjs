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
    `;
    console.log('Tables in public schema:');
    console.table(tables);

    const userColumns = await prisma.$queryRaw`
      SELECT column_name, data_type 
      FROM information_schema.columns 
      WHERE table_name = 'User' AND table_schema = 'public'
    `;
    console.log('Columns in User table:');
    console.table(userColumns);

  } catch (e) {
    console.error(e);
  } finally {
    await prisma.$disconnect();
  }
}

main();
