import { RouteObject } from "react-router-dom";
import { Accounts } from "../../components/Dashboard/Accounts";
import { Overview } from "../../components/Dashboard/Overview";
import { Transactions } from "../../components/Dashboard/Transactions";

export const dashboardRoutes: RouteObject[] = [
  { path: "/dashboard", element: <Overview /> },
  { path: "/dashboard/accounts", element: <Accounts /> },
  { path: "/dashboard/transactions", element: <Transactions /> },
];
