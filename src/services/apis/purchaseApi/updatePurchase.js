import axios from "axios";

const updatePurchases = async (record) => {
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
    `http://localhost:3001/purchases/${record.ProductID}`,
    updatedValue
  );
  return data;
};

export default updatePurchases;

// CategoryID: 3;
// Description: "sweet and cool";
// Price: 5.5;
// ProductID: 4;
// ProductName: "ice-cream";
// QuantityInStock: 100;
// SupplierID: 1;
