import { Col, Layout, Row, Typography } from "antd";
import { Outlet } from "react-router-dom";

const { Content } = Layout;
const { Title, Text } = Typography;

export const Login = () => {
  return (
    <Row style={{ height: "100vh" }} align="middle">
      <Col span={12} style={{ textAlign: "right" }}>
        <Title>Finance Manager</Title>
        <Text>An easy way to get a look at all of your finances</Text>
      </Col>
      <Col span={12}>
        <div style={{ padding: "0 7.5rem" }}>
          <Outlet />
        </div>
      </Col>
    </Row>
  );
};
