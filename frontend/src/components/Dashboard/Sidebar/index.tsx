import { Col, Layout, Row } from "antd";
import { Footer } from "./Footer";
import { MainNavigation } from "./MainNavigation";

const { Sider } = Layout;
export const Sidebar = () => {
  return (
    <Sider style={{ padding: "1rem" }}>
      <Row gutter={[0, 8]} style={{ height: "100%" }}>
        <Col span={24}>
          <MainNavigation />
        </Col>
        <Col span={24}>
          <Footer />
        </Col>
      </Row>
    </Sider>
  );
};
