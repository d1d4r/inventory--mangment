import React from "react";
import RevenuChart from "../components/charts/RevenuChart";
import TopSelling from "../components/charts/TopSelling";
import { Col, Row } from "antd";

const DashbordPage = () => {
  return (
    <Row style={{ padding: 20 }} justify="space-around" align="middle">
      <Col span={14}>
        <RevenuChart />
      </Col>
      <Col span={9}>
        <TopSelling />
      </Col>
    </Row>
  );
};

export default DashbordPage;
