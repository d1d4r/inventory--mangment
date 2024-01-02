import React from "react";
import ModalUI from "../UI/ModalUi";
import PurchaseForm from "./PurchaseForm";

const PurchaseModal = () => {
  return (
    <ModalUI title="purchase">
      <PurchaseForm />
    </ModalUI>
  );
};

export default PurchaseModal;
