import React, { useState } from "react";
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import { Button, Col, Layout, Menu, Slider } from "antd";
import { Link } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;
const styel = {
  height: "100%",
};
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
  getItem(<Link to={"dashbord"}>Dashbord</Link>, "0", <PieChartOutlined />),
  getItem("Products", "1", <PieChartOutlined />, [
    getItem(<Link to={"category"}>category</Link>, "10"),
    getItem(<Link to={"products"}>Product List</Link>, "11"),
  ]),
  getItem("Purchase", "2", <DesktopOutlined />, [
    getItem(<Link to={"purchases"}>Purchase List </Link>, "21"),
  ]),
  getItem("Sales", "3", <ContainerOutlined />, [
    getItem("category list", "30"),
    getItem("Product list", "31"),
  ]),
];
const Sidemenu = () => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <Menu defaultSelectedKeys={["0"]} mode="inline" items={items} />
    </Sider>
  );
};
export default Sidemenu;
