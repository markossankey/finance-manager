import { PrismaClient } from "@prisma/client";
import express from "express";
import { default as authRoutes } from "./auth";

const router = express.Router();

const prisma = new PrismaClient();

router.use("/login", authRoutes);

router.get("/router", (req, res) => {
  res.send("test backend");
});

router.get("/test-prisma", async (req, res) => {
  const allUsers = await prisma.user.findMany({
    include: {
      posts: true,
      profile: true,
    },
  });
  res.send({ data: allUsers });
});
export default router;
