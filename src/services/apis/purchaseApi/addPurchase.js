import axios from "axios";
import React from "react";

const addPurchase = async (value) => {
  try {
    await axios.post("http://localhost:3001/purchases", value);
  } catch (error) {
    console.log("🚀 ~ file: addProduct.js:8 ~ addProduct ~ error:", error);
  }
};

export default addPurchase;
