import { Layout, Menu } from "antd";
import React from "react";
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
const { Header } = Layout;
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem("dashbord", "0", <PieChartOutlined />),
  getItem("Products", "1", <PieChartOutlined />, [
    getItem(<Link to={"category"}>category</Link>, "10"),
    getItem(<Link to={"products"}>Product List</Link>, "11"),
  ]),
  getItem("Purchase", "2", <DesktopOutlined />, [
    getItem("category list", "20"),
    getItem("Product list", "21"),
  ]),
  getItem("Sales", "3", <ContainerOutlined />, [
    getItem("category list", "30"),
    getItem("Product list", "31"),
  ]),
];

const Topmenu = () => {
  return (
    <Layout>
      <Header style={{ padding: 0 }}>
        <Menu
          style={{ justifyContent: "flex-end" }}
          defaultSelectedKeys={["0"]}
          mode="horizontal"
          theme="light"
          items={items}
        ></Menu>
      </Header>
    </Layout>
  );
};

export default Topmenu;
