import { Router } from "express";
import jwt from "jsonwebtoken";
import prisma from "../../lib/prisma";

const router = Router();

router.post("/", async (req, res) => {
  const { body } = req;
  const { firstName: first_name, lastName: last_name, email, sub } = body;
  // TODO: need to add some validation here and on the frontend

  const user = await prisma.user.create({
    data: { google_id: sub, last_name, email, first_name },
  });

  const userJwt = jwt.sign({ sub: user?.id }, process.env.JWT_SECRET!, {
    algorithm: "HS256",
  });

  res.redirect(`http://localhost:3000/login/?token=${userJwt}`);
});

export default router;
