import { PrismaClient } from './Backend/packages/prisma-client/src/__generated__/index.js';

// Use the postgres superuser
process.env.DATABASE_URL = 'postgresql://postgres:yusuf@localhost:5432/webstudio';
process.env.DIRECT_URL = process.env.DATABASE_URL;

const prisma = new PrismaClient();

const statements = [
  `DO $$ BEGIN IF NOT EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'anon') THEN CREATE ROLE anon NOLOGIN; END IF; END $$`,
  `DO $$ BEGIN IF NOT EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'authenticated') THEN CREATE ROLE authenticated NOLOGIN; END IF; END $$`,
  `DO $$ BEGIN IF NOT EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'service_role') THEN CREATE ROLE service_role NOLOGIN; END IF; END $$`,
  `DO $$ BEGIN IF NOT EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'authenticator') THEN CREATE ROLE authenticator NOINHERIT LOGIN PASSWORD 'postgrest_password'; END IF; END $$`,
  `GRANT anon TO authenticator`,
  `GRANT authenticated TO authenticator`,
  `GRANT service_role TO authenticator`,
  `GRANT USAGE ON SCHEMA public TO anon`,
  `GRANT USAGE ON SCHEMA public TO authenticated`,
  `GRANT USAGE ON SCHEMA public TO service_role`,
  `GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO anon`,
  `GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO authenticated`,
  `GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO service_role`,
  `GRANT USAGE ON ALL SEQUENCES IN SCHEMA public TO anon`,
  `GRANT USAGE ON ALL SEQUENCES IN SCHEMA public TO authenticated`,
  `GRANT USAGE ON ALL SEQUENCES IN SCHEMA public TO service_role`,
  `GRANT EXECUTE ON ALL FUNCTIONS IN SCHEMA public TO anon`,
  `GRANT EXECUTE ON ALL FUNCTIONS IN SCHEMA public TO authenticated`,
  `GRANT EXECUTE ON ALL FUNCTIONS IN SCHEMA public TO service_role`,
  `ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT SELECT, INSERT, UPDATE, DELETE ON TABLES TO anon`,
  `ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT SELECT, INSERT, UPDATE, DELETE ON TABLES TO authenticated`,
  `ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT SELECT, INSERT, UPDATE, DELETE ON TABLES TO service_role`,
];

try {
  for (const sql of statements) {
    const label = sql.length > 70 ? sql.slice(0, 70) + '...' : sql;
    console.log('ok:', label);
    await prisma.$executeRawUnsafe(sql);
  }
  console.log('\n✅ All PostgREST roles created and permissions granted!');
  
  const roles = await prisma.$queryRawUnsafe(`SELECT rolname FROM pg_roles WHERE rolname IN ('anon','authenticated','service_role','authenticator')`);
  console.log('Verified roles:', roles);
} catch (error) {
  console.error('❌ Error:', error.message);
} finally {
  await prisma.$disconnect();
}
