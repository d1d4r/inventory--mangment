import React from "react";
import PurchaseTabel from "../components/purchaseComponent/PurchaseTabel";
import { Button, Layout } from "antd";
import { useDispatch } from "react-redux";
import { close, open } from "../store/modalSlice";
import { isUpdate } from "../store/formSlice";
import PurchaseModal from "../components/purchaseComponent/PurchaseModal";
const { Header, Content, Footer, Sider } = Layout;
const styels = {
  padding: 24,
  minHeight: 360,
};

const PurchasePage = () => {
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
          Add purchase
        </Button>
      </div>
      <div style={styels}>
        <PurchaseModal />
        <PurchaseTabel />
      </div>
    </Content>
  );
};

export default PurchasePage;

{
  /* <div style={{ paddingLeft: 40, paddingTop: 40 }}>
<Button type="primary" onClick={showModal}>
  Add product
</Button>
</div>
<div style={styels}>
<ProductModal />
<ProductTabel />
</div> */
}
