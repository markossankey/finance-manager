import { Router } from "express";
import { default as authRoutes } from "./auth";
import { default as financeRoutes } from "./finance";

const router = Router();

router.use("/finance", financeRoutes);
router.use("/auth", authRoutes);

// just for testing, can be removed but needs to be removed on FE as well
router.get("/test", (req, res) => {
  res.send("authenticated");
});

export default router;
