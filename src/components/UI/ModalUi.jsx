import React, { useState } from "react";
import { Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { close } from "../../store/modalSlice";

const ModalUI = ({ children, title }) => {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal.value);
  const formStatus = useSelector((state) => state.formStatus.value);

  const handleCancel = () => {
    dispatch(close());
  };

  return (
    <>
      <Modal
        centered
        title={!formStatus ? `Add ${title}` : `Update ${title}`}
        footer={null}
        open={modal}
        onCancel={handleCancel}
      >
        {children}
      </Modal>
    </>
  );
};

export default ModalUI;
