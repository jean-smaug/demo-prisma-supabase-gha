import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

(async () => {
  prisma.post.create({
    data: {
      id: 1,
      title: "Salut smaug",
    },
  });
})();
