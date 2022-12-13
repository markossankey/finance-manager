import { Router } from "express";
import plaid from "../../lib/plaid";
import prisma from "../../lib/prisma";

const router = Router();

router.get("/", async (req, res, next) => {
  const item = await prisma.plaid_Item.findFirst({
    where: { user: req.user },
  });

  if (!item) {
    return res.status(404).json({ error: "No items found for this user" });
  }

  const plaidResponse = await plaid.transactionsGet({
    access_token: item?.access_token,
    start_date: "2019-01-01",
    end_date: "2022-12-10",
  });

  return res.status(200).json({ ...plaidResponse.data });
});
export default router;
