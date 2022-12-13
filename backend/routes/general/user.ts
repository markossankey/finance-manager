import { Router } from "express";

const router = Router();

router.get("/who-am-i", async (req, res, next) => {
  return res.status(200).json({ ...req.user, google_id: null });
});

export default router;
