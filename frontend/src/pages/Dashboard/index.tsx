import { Layout, Typography } from "antd";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../../components/Dashboard/Sidebar";

const { Content } = Layout;
const { Title, Text } = Typography;

export const Dashboard = () => {
  return (
    <Layout hasSider style={{ height: "100vh" }}>
      <Sidebar />
      <Content>
        <Outlet />
      </Content>
    </Layout>
  );
};
