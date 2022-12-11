import { Router } from "express";
import { OAuth2Client } from "google-auth-library";
import jwt from "jsonwebtoken";
import prisma from "../../lib/prisma";
const router = Router();

const { VITE_GOOGLE_CLIENT_ID } = process.env;
// ? Maybe move to lib folder
const googleClient = new OAuth2Client(VITE_GOOGLE_CLIENT_ID);

router.post("/", async (req, res) => {
  const loginTicket = await googleClient.verifyIdToken({
    idToken: req.body.response.credential,
    audience: VITE_GOOGLE_CLIENT_ID,
  });

  const userInfo = loginTicket.getPayload();

  if (!userInfo) {
    return res
      .status(502)
      .send({ message: "Could not authenticate with Google" });
  }

  const authenticatedUser = await prisma.user.findUnique({
    where: { google_id: userInfo.sub },
  });
  console.log({ authenticatedUser });
  if (!authenticatedUser) {
    console.log("notAuthenticated");
    const {
      email,
      sub,
      given_name: firstName,
      family_name: lastName,
    } = userInfo;
    return res.status(302).json({ firstName, lastName, email, sub });
  }

  return res.status(200).json({
    token: jwt.sign({ sub: authenticatedUser?.id }, process.env.JWT_SECRET!, {
      algorithm: "HS256",
    }),
  });
});

export default router;
