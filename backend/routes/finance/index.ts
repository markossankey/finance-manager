import { Router } from "express";
import { default as accountRoutes } from "./accounts";
import { default as financeAuthRoutes } from "./authorization";
import { default as transactionRoutes } from "./transactions";

const router = Router();

router.use("/auth", financeAuthRoutes);
router.use("/account", accountRoutes);
router.use("/transaction", transactionRoutes);

export default router;
