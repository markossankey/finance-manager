import { AccountsGetResponse, TransactionsGetResponse } from "plaid";
import { get } from "./config";

const Finances = {
  getAccounts: () => get<AccountsGetResponse>("finance/account"),
  getTransactions: () => get<TransactionsGetResponse>("finance/transaction"),
};

export default Finances;
