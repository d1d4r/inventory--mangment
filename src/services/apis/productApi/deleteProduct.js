import axios from "axios";

const deleteProduct = async (id) => {
  const { data } = await axios.delete(`http://localhost:3001/products/${id}`);
  return data;
};

export default deleteProduct;
