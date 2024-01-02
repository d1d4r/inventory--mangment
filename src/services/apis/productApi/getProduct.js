import axios from "axios";

const fetchProducts = async () => {
  const { data } = await axios.get("http://localhost:3001/products"); 
  return data;
};

export default fetchProducts;
