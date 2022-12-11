import { Configuration, PlaidApi, PlaidEnvironments } from "plaid";

interface CustomNodeJsGlobal {
  plaid: PlaidApi;
}

declare const global: CustomNodeJsGlobal;

const configuration = new Configuration({
  basePath: PlaidEnvironments.sandbox,
  baseOptions: {
    headers: {
      "PLAID-CLIENT-ID": process.env.PLAID_CLIENT_ID,
      "PLAID-SECRET": process.env.PLAID_CLIENT_SECRET,
    },
  },
});

const plaid = global.plaid || new PlaidApi(configuration);

export default plaid;
