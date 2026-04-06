import { PrismaClient } from './Backend/packages/prisma-client/src/__generated__/index.js';

process.env.DATABASE_URL = 'postgresql://DeepVaviya:Riddhinv@1@localhost:5432/webstudio';
process.env.DIRECT_URL = process.env.DATABASE_URL;

const prisma = new PrismaClient();

try {
  const result = await prisma.$queryRawUnsafe(`SELECT current_user, usesuper, usecreatedb FROM pg_user WHERE usename = current_user`);
  console.log('Current user info:', result);
  
  const allUsers = await prisma.$queryRawUnsafe(`SELECT usename, usesuper, usecreatedb FROM pg_user`);
  console.log('All users:', allUsers);
} catch (error) {
  console.error('Error:', error.message);
} finally {
  await prisma.$disconnect();
}
