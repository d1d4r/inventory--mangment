import React, { useEffect, useState } from "react";
import { Button, Popconfirm, Table, Tag, message } from "antd";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import deletePurchase from "../../services/apis/purchaseApi/deletePurchase";
import fetchPurchases from "../../services/apis/purchaseApi/getPurchase";
import { useDispatch } from "react-redux";
import { open } from "../../store/modalSlice";

import { isAdd, updateFields } from "../../store/formSlice";

const style = {
  width: "97%",
};

const PurchaseTabel = () => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();

  const {
    data: purchases,
    isError,
    isLoading,
  } = useQuery({ queryKey: ["purchases"], queryFn: fetchPurchases });

  const mutation = useMutation({
    mutationFn: deletePurchase,
    onSuccess: () => {
      //message.success("product deleted");
      queryClient.invalidateQueries({ queryKey: ["purchases"] });
    },
  });

  const HandleUpdate = (record) => {
    dispatch(updateFields(record));
    dispatch(isAdd());
    dispatch(open("purchases"));
  };

  const [data, setData] = useState([]);

  const columns = [
    {
      title: "ID",
      dataIndex: "OrderItemID",
      sorter: true,
      fixed: "left",
    },
    {
      title: "OrderID",
      dataIndex: "OrderID",
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
      title: "ProductID",
      dataIndex: "ProductID",
    },
    {
      title: "Quantity",
      dataIndex: "Quantity",
    },
    {
      title: "UnitPrice",
      dataIndex: "UnitPrice",
    },
    {
      title: "UnitPriceSale",
      dataIndex: "UnitPriceSale",
    },
    {
      title: "operation",
      dataIndex: "operation",
      width: 200,
      fixed: "right",
      render: (_, record) =>
        purchases.length >= 1 ? (
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
      pageSize: 1,
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
      columns={columns}
      rowKey={(record) => record.OrderItemID}
      dataSource={purchases}
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
export default PurchaseTabel;
