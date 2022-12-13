import { Router } from "express";
import { verifyToken } from "../middleware/auth";
import { default as authRoutes } from "./authentication";
import { default as financeRoutes } from "./finance";
import { default as generalRoutes } from "./general";

const router = Router();

router.use("/auth", authRoutes);
router.use("/finance", verifyToken, financeRoutes);
router.use("/general", verifyToken, generalRoutes);

export default router;
