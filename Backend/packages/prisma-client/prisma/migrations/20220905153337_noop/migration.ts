import { PrismaClient } from "./client/index.js";

export default () => {
  const client = new PrismaClient();
  return client.$transaction(async (prisma) => {
    const usersCount = await prisma.user.count();

    console.info("Example noop migration test", { usersCount });
  });
};

