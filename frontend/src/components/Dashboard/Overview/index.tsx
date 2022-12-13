import { Typography } from "antd";
import { useContext } from "react";
import { UserContext } from "../../../context/User";

const { Title } = Typography;
export const Overview = ({}) => {
  const { user } = useContext(UserContext);
  return <Title level={2}>Welcome back, {user?.first_name}</Title>;
};
