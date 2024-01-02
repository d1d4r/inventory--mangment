import axios from "axios";

const fetchProducts = async () => {
  const { data } = await axios.get("http://localhost:3001/products"); // Replace with your API endpoint
  return data;
};

export default fetchProducts;
