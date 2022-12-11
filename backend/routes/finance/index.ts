import { Router } from "express";
import { default as accountRoutes } from "./accounts";
import { default as financeAuthRoutes } from "./auth";

const router = Router();

router.use("/auth", financeAuthRoutes);
router.use("/account", accountRoutes);

export default router;
