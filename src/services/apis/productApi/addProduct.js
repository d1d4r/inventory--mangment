import axios from "axios";
import React from "react";

const addProduct = async (value) => {
  try {
    await axios.post("http://localhost:3001/products", value);
  } catch (error) {
    console.log("🚀 ~ file: addProduct.js:8 ~ addProduct ~ error:", error);
  }
};

export default addProduct;
