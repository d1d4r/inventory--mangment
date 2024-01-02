import React from "react";
import ProductForm from "./ProductForm";
import ModalUI from "../UI/ModalUi";

const ProductModal = () => {
  return (
    <>
      <ModalUI title={"product"}>
        <ProductForm />
      </ModalUI>
    </>
  );
};

export default ProductModal;
