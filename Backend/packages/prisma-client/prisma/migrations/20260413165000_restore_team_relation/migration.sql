CREATE TABLE IF NOT EXISTS "Team" (
  "id" TEXT NOT NULL,
  CONSTRAINT "Team_pkey" PRIMARY KEY ("id")
);

ALTER TABLE "User"
  ADD COLUMN IF NOT EXISTS "teamId" TEXT;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1
    FROM information_schema.table_constraints
    WHERE table_schema = 'public'
      AND table_name = 'User'
      AND constraint_name = 'User_teamId_fkey'
  ) THEN
    ALTER TABLE "User"
      ADD CONSTRAINT "User_teamId_fkey"
      FOREIGN KEY ("teamId") REFERENCES "Team"("id")
      ON DELETE SET NULL ON UPDATE CASCADE;
  END IF;
END
$$;
