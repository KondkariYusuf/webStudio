import { PrismaClient } from '../Backend/packages/prisma-client/src/__generated__/index.js';

const DB_URL = 'postgresql://postgres:yusuf@localhost:5432/webstudio';
process.env.DATABASE_URL = DB_URL;
process.env.DIRECT_URL = DB_URL;

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: DB_URL,
    },
  },
});

async function main() {
  try {
    console.log('--- Applying PostgREST Grants ---');
    const grants = [
      'GRANT SELECT, INSERT, UPDATE, DELETE ON "UserProjectAccess" TO anon',
      'GRANT SELECT, INSERT, UPDATE, DELETE ON "UserProjectAccess" TO authenticated',
      'GRANT SELECT, INSERT, UPDATE, DELETE ON "UserProjectAccess" TO service_role'
    ];
    for (const grant of grants) {
       console.log('Executing:', grant);
       await prisma.$executeRawUnsafe(grant);
    }
    console.log('✅ PostgREST grants applied.');

    console.log('--- Setting first user as admin ---');
    const firstUser = await prisma.user.findFirst({
      orderBy: { createdAt: 'asc' }
    });

    if (firstUser) {
      await prisma.user.update({
        where: { id: firstUser.id },
        data: { role: 'admin' }
      });
      console.log(`✅ User ${firstUser.email || firstUser.id} set as admin.`);
    }

  } catch (e) {
    console.error('❌ Error:', e.message);
  } finally {
    await prisma.$disconnect();
  }
}

main();
