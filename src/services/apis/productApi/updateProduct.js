import axios from "axios";

const updateProduct = async (record) => {
  console.log(
    "🚀 ~ file: updateProduct.js:4 ~ updateProduct ~ record:",
    record
  );

  const updatedValue = {
    CategoryID: record.CategoryID,
    Description: record.Description,
    Price: record.Price,
    ProductName: record.ProductName,
    QuantityInStock: record.QuantityInStock,
    SupplierID: record.SupplierID,
  };
  const { data } = axios.patch(
    `http://localhost:3001/products/${record.ProductID}`,
    updatedValue
  );
  return data;
};

export default updateProduct;

