import { Router } from "express";
import { verifyToken } from "../middleware/auth";
import { default as authRoutes } from "./auth";
import { default as financeRoutes } from "./finance";

const router = Router();

router.use("/auth", authRoutes);
router.use("/finance", verifyToken, financeRoutes);

export default router;
