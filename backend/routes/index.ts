import express from "express";

const router = express.Router();

router.get("/router", (req, res) => {
  console.log("in /router");
  res.send("worked");
});

export default router;
