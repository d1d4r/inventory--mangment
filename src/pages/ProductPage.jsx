import React, { useState } from "react";
import ProductTabel from "../components/productComponent/ProductTabel";
import { Button, Layout } from "antd";
import ProductModal from "../components/productComponent/ProductModal";
import { useDispatch } from "react-redux";
import { close, open } from "../store/modalSlice";
import { isUpdate } from "../store/formSlice";
const { Content } = Layout;
const styels = {
  padding: 24,
  minHeight: 360,
};

const ProductPage = () => {
  const dispatch = useDispatch();
  //const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    dispatch(open("products"));
    dispatch(isUpdate());
  };

  dispatch(close());

  return (
    <Content>
      <div style={{ paddingLeft: 40, paddingTop: 40 }}>
        <Button type="primary" onClick={showModal}>
          Add product
        </Button>
      </div>
      <div style={styels}>
        <ProductModal />
        <ProductTabel />
      </div>
    </Content>
  );
};

export default ProductPage;
