import { Router } from "express";
import plaid from "../../lib/plaid";
import prisma from "../../lib/prisma";

const router = Router();

router.get("/", async (req, res, next) => {
  const items = await prisma.plaid_Item.findMany({
    where: { user: req.user },
  });

  if (items.length < 1) {
    return res.status(404).json({ error: "No items found for this user" });
  }

  const promises = items.map(({ access_token }) =>
    plaid.accountsGet({
      access_token,
    })
  );

  const accounts: any[] = await Promise.all(promises).then((responses) =>
    responses.reduce(
      (acc, response) => [...acc, ...response.data.accounts],
      [] as any[]
    )
  );

  return res.status(200).json({ accounts });
});
export default router;
