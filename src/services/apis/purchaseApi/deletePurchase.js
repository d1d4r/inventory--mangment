import axios from "axios";

const deletePurchases = async (id) => {
  const { data } = await axios.delete(`http://localhost:3001/orderItems/${id}`);
  return data;
};

export default deletePurchases;
