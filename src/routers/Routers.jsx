import React from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import ProductPage from "../pages/ProductPage";
import Sidemenu from "../components/Sidemenu";
import { Col, Layout, Row } from "antd";
import Topmenu from "../components/Topmenu";
import PurchasePage from "../pages/PurchasePage";
import DashbordPage from "../pages/DashbordPage";
const { Header, Content, Footer, Sider } = Layout;

function Routers() {
  return (
    <BrowserRouter>
      <Sidemenu />

      <Layout>
        
        <Routes>
          <Route path="/" element={<Outlet />}></Route>
          <Route path="/products" element={<ProductPage />}></Route>
          <Route path="/purchases" element={<PurchasePage />}></Route>
          <Route path="/dashbord" element={<DashbordPage />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default Routers;
