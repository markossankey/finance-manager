import { Router } from "express";
import plaid from "../../lib/plaid";
import prisma from "../../lib/prisma";

const router = Router();

router.get("/accounts", async (req, res, next) => {
  const item = await prisma.plaid_Item.findFirst({
    where: { user: req.user },
  });

  if (!item) {
    return res.status(404).json({ error: "No items found for this user" });
  }

  const plaidResponse = await plaid.accountsGet({
    access_token: item?.access_token,
  });

  return res.status(200).json({ data: plaidResponse });
});
export default router;
