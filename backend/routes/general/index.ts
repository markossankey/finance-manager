import { Router } from "express";
import { verifyToken } from "../../middleware/auth";
import { default as userRoutes } from "./user";

const router = Router();

router.use("/user", userRoutes);

export default router;
