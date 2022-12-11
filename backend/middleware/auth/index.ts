import { RequestHandler } from "express";
import jwt from "jsonwebtoken";
import prisma from "../../lib/prisma";

// verify token middleware
export const verifyToken: RequestHandler = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    res.status(400);
    return next();
  }
  try {
    const token = jwt.verify(authorization!, process.env.JWT_SECRET!);
    const user = await prisma.user.findUnique({
      where: { id: parseInt(token.sub as string) },
    });
    if (!user) {
      res.status(401);
      return next();
    }
    req.user = user!;
    return next();
  } catch (e) {
    res.status(500);
    return next();
  }
};

// add convert token to user middleware
