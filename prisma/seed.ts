import { PrismaClient } from "@prisma/client";
import * as crypto from "node:crypto";

const prisma = new PrismaClient();

(async () => {
  prisma.post.create({
    data: {
      id: crypto.randomUUID(),
    },
  });
})();
