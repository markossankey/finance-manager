import { Router } from "express";
import { CountryCode, LinkTokenCreateRequest, Products } from "plaid";
import plaid from "../../lib/plaid";
import prisma from "../../lib/prisma";

const router = Router();

router.get("/", async (req, res, next) => {
  const { user } = req;

  const plaidConfig: LinkTokenCreateRequest = {
    client_name: "Finance Manager",
    country_codes: [CountryCode.Us],
    language: "en",
    user: { client_user_id: "" + user?.id },
    products: [Products.Transactions],
    webhook: "http://localhost:8000/api/finances/token/public/exchange",
  };

  const plaidResponse = await plaid.linkTokenCreate(plaidConfig);

  return res.status(200).json({ token: plaidResponse.data?.link_token });
});

router.get("/token/public/exchange", async (req, res, next) => {
  console.log("in /token/public/exchange");
  const { public_token } = req.query;
  const {
    data: { access_token, item_id },
  } = await plaid.itemPublicTokenExchange({
    public_token: public_token as string,
  });
  console.log({ access_token });
  const item = await prisma.plaid_Item.create({
    data: { access_token, plaid_item_id: item_id, userId: req.user.id },
  });
  return res.status(201).json(item);
});

export default router;
