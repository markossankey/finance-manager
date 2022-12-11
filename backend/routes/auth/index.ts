import { Router } from "express";
import { default as loginRoutes } from "./login";
import { default as registerRoutes } from "./register";

const router = Router();

router.use("/login", loginRoutes);
router.use("/register", registerRoutes);

export default router;
