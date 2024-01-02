import React, { useEffect, useState } from "react";
import { Button, Popconfirm, Table, Tag, message } from "antd";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import deleteProduct from "../../services/apis/productApi/deleteProduct";
import fetchProducts from "../../services/apis/productApi/getProduct";
import { useDispatch } from "react-redux";
import { open } from "../../store/modalSlice";

import { isAdd, updateFields } from "../../store/formSlice";

const style = {
  width: "97%",
};

const ProductTabel = () => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();

  const {
    data: products,
    isError,
    isLoading,
  } = useQuery({ queryKey: ["products"], queryFn: fetchProducts });

  const mutation = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      //message.success("product deleted");
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });

  const HandleUpdate = (record) => {
    console.log(
      "🚀 ~ file: ProductTabel.jsx:34 ~ HandleUpdate ~ record:",
      record
    );
    dispatch(updateFields(record));

    dispatch(isAdd());
    dispatch(open());
  };

  const [data, setData] = useState([]);

  const columns = [
    {
      title: "ID",
      dataIndex: "ProductID",
      sorter: true,
      fixed: "left",
    },
    {
      title: "Name",
      dataIndex: "ProductName",
      filters: [
        {
          text: "Male",
          value: "male",
        },
        {
          text: "Female",
          value: "female",
        },
      ],
    },
    {
      title: "Price",
      dataIndex: "Price",
      render: (text) => <>{text} $</>,
    },
    {
      title: "Quantity In Stock",
      key: "QuantityInStock",
      dataIndex: "QuantityInStock",
      render: (text) => (
        <>
          <Tag color={"blue"} key={text}>
            {text}
          </Tag>
        </>
      ),
    },
    {
      title: "Category ID",
      dataIndex: "CategoryID",
    },
    {
      title: "Description",
      dataIndex: "Description",
    },

    {
      title: "Supplier ID",
      dataIndex: "SupplierID",
    },
    {
      title: "operation",
      dataIndex: "operation",
      width: 200,
      fixed: "right",
      render: (_, record) =>
        products.length >= 1 ? (
          <div style={{ display: "flex", gap: 20 }}>
            <Popconfirm
              title="Sure to delete?"
              onConfirm={() => mutation.mutate(record.ProductID)}
            >
              <Button danger type="primary">
                Delete
              </Button>
            </Popconfirm>
            <Button onClick={() => HandleUpdate(record)}>update</Button>
          </div>
        ) : null,
    },
  ];

  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });

  const handleTableChange = (pagination, filters, sorter) => {
    setTableParams({
      pagination,
      filters,
      ...sorter,
    });

    // `dataSource` is useless since `pageSize` changed
    if (pagination.pageSize !== tableParams.pagination?.pageSize) {
      setData([]);
    }
  };
  return (
    <Table
      bordered={false}
      style={style}
      columns={columns}
      rowKey={(record) => record.ProductID}
      dataSource={products}
      pagination={tableParams.pagination}
      loading={isLoading}
      error={isError}
      onChange={handleTableChange}
      scroll={{
        x: 1200,
      }}
    />
  );
};
export default ProductTabel;

// const fetchData = () => { 110
//   setLoading(true);
//   fetch("http://localhost:3001/products")
//     .then((res) => res.json())
//     .then((data) => {
//       console.log("🚀 ~ file: ProductTabel.jsx:79 ~ .then ~ data:", data);
//       setData(data);
//       setLoading(false);
//       setTableParams({
//         ...tableParams,
//         pagination: {
//           ...tableParams.pagination,
//           total: 20,
//           // 200 is mock data, you should read it from server
//           // total: data.totalCount,
//         },
//       });
//     });
// };

// useEffect(() => {
//   fetchData();
// }, []);
