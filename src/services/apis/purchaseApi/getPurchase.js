import axios from "axios";

const fetchPurchases = async () => {
  const { data } = await axios.get("http://localhost:3001/orderItems"); // Replace with your API endpoint
  return data;
};

export default fetchPurchases;
