import { Button } from "antd";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../../context/User";
import { btnStyleProps } from "../styles";
import { LinkAccountsBtn } from "./LinkAccounts";

export const Footer = () => {
  const navigate = useNavigate();
  const { logout } = useContext(UserContext);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div
      style={{
        display: "flex",
        gap: ".5rem",
        flexDirection: "column",
      }}
    >
      <LinkAccountsBtn />
      <Button {...btnStyleProps} onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
};
