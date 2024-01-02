import { Button, Form, InputNumber, Select, Space } from "antd";
import React from "react";

const PurchaseForm = () => {
  const [form] = Form.useForm();
  return (
    <Form form={form} labelCol={{ span: 7 }} wrapperCol={{ span: 16 }}>
      <Form.Item
        name="orderID"
        label="order ID"
        rules={[{ required: true, message: "Please select order ID" }]}
      >
        <Select>
          <Select.Option>one</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="ProductID"
        label="Product ID"
        rules={[{ required: true, message: "Please select Product ID" }]}
      >
        <Select>
          <Select.Option>one</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="Quantity"
        label="Quantity"
        rules={[{ required: true, message: "Please enter Quantity" }]}
      >
        <InputNumber min={0} />
      </Form.Item>

      <Form.Item
        name="UnitPrice"
        label="Unit Price"
        rules={[{ required: true, message: "Please enter Unit Price" }]}
      >
        <InputNumber min={0} />
      </Form.Item>

      <Form.Item
        name="UnitPriceSale"
        label="Unit Price Sale"
        rules={[{ required: true, message: "Please enter Unit Price Sale" }]}
      >
        <InputNumber min={0} />
      </Form.Item>

      <Space
        style={{
          width: 500,
          display: "flex",
          justifyContent: "center",
          marginTop: 50,
        }}
      >
        <Form.Item>
          <Button type="primary" htmlType="submit">
            submit
          </Button>
        </Form.Item>
        <Form.Item>
          <Button danger onClick={() => form.resetFields()}>
            reset
          </Button>
        </Form.Item>
      </Space>
    </Form>
  );
};

export default PurchaseForm;
