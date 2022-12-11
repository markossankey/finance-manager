import { Menu } from "antd";
import { Link } from "react-router-dom";
export const MainNavigation = () => {
  return (
    <div style={{ display: "flex", gap: ".5rem", flexDirection: "column" }}>
      <Menu
        theme="dark"
        mode="inline"
        items={[
          { key: "overview", label: <Link to="">Overview</Link> },
          { key: "accounts", label: <Link to="accounts">Accounts</Link> },
          {
            key: "transactions",
            label: <Link to="transactions">Transactions</Link>,
          },
        ]}
      />
    </div>
  );
};
