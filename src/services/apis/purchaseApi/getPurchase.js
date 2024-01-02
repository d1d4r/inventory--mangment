import axios from "axios";

const fetchPurchases = async () => {
  const { data } = await axios.get("http://localhost:3001/orderItems"); 
};

export default fetchPurchases;
