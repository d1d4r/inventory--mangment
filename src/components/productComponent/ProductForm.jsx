import { Form, Input, InputNumber, Button, Select, message } from "antd";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { close } from "../../store/modalSlice";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import addProduct from "../../services/apis/productApi/addProduct";
import updateProduct from "../../services/apis/productApi/updateProduct";
import { useEffect } from "react";
import { updateFields } from "../../store/formSlice";

const { Option } = Select;

const fetchCategorys = async () => {
  try {
    const { data } = await axios.get("http://localhost:3001/categorys");
    return data;
  } catch (error) {
    console.log(
      "🚀 ~ file: ProductForm.jsx:16 ~ fetchCategory ~ error:",
      error
    );
  }
};

const fetchSuppliers = async () => {
  try {
    const { data } = await axios.get("http://localhost:3001/suppliers");
    return data;
  } catch (error) {
    console.log(
      "🚀 ~ file: ProductForm.jsx:28 ~ fetchSuppliers ~ error:",
      error
    );
  }
};

const ProductForm = () => {
  const [form] = Form.useForm();
  const queryClient = useQueryClient();
  const formStatus = useSelector((state) => state.formStatus.value);
  const fields = useSelector((state) => state.formStatus.fields);
  const dispatch = useDispatch();

  useEffect(() => {
    formStatus
      ? form.setFieldsValue(fields)
      : form.setFieldsValue({
          CategoryID: null,
          Description: null,
          Price: null,
          ProductID: null,
          ProductName: null,
          QuantityInStock: null,
          SupplierID: null,
        });
  }, [fields, formStatus, dispatch]);

  const {
    data: categories,
    error,
    isLoading,
  } = useQuery({ queryKey: ["categories"], queryFn: fetchCategorys });
  const {
    data: suppliers,
    error: errorSuppliers,
    isLoading: loadingSuppliers,
  } = useQuery({ queryKey: ["suppliers"], queryFn: fetchSuppliers });

  const mutation = useMutation({
    mutationFn: addProduct,
    onSuccess: () => {
      form.resetFields();
      dispatch(close());

      message.success("Form submitted successfully!");
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });

  const mutationUpdate = useMutation({
    mutationFn: updateProduct,
    onSuccess: () => {
      form.resetFields();
      dispatch(close());

      message.success("Form updated successfully!");
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });

  const onFinish = (values) => {
    if (!formStatus) {
      mutation.mutate(values);
    } else {
      mutationUpdate.mutate(values);
    }
  };

  return (
    <Form
      form={form}
      labelCol={{ span: 7 }}
      wrapperCol={{ span: 16 }}
      onFinish={onFinish}
    >
      {formStatus ? (
        <Form.Item name="ProductID" label="Product ID">
          <Input disabled />
        </Form.Item>
      ) : null}
      <Form.Item
        name="ProductName"
        label="Product Name"
        rules={[{ required: true, message: "Please enter Product Name" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item name="Description" label="Description">
        <Input.TextArea />
      </Form.Item>

      <Form.Item
        name="Price"
        label="Price"
        rules={[{ required: true, message: "Please enter Price" }]}
      >
        <InputNumber />
      </Form.Item>

      <Form.Item
        name="QuantityInStock"
        label="Quantity In Stock"
        rules={[{ required: true, message: "Please enter Quantity In Stock" }]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item
        name="SupplierID"
        label="Supplier ID"
        rules={[{ required: true, message: "Please select Supplier ID" }]}
      >
        <Select>
          {suppliers?.map((supplier) => (
            <Option key={supplier.SupplierID} value={supplier.SupplierID}>
              {supplier.SupplierName}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        name="CategoryID"
        label="Category ID"
        rules={[{ required: true, message: "Please select Category ID" }]}
      >
        <Select>
          {categories?.map((category) => (
            <Option key={category.CategoryID} value={category.CategoryID}>
              {category.CategoryName}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item fieldId="buttons" wrapperCol={{ offset: 6, span: 16 }}>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <Button type="primary" htmlType="submit">
            {!formStatus ? "submit" : "update"}
          </Button>
          <Button
            type="primary"
            danger
            onClick={() =>
              !formStatus ? form.resetFields() : form.setFieldsValue(fields)
            }
          >
            RESET
          </Button>
        </div>
      </Form.Item>
    </Form>
  );
};

export default ProductForm;

// const onFinish = async (values) => {
//   console.log("Received values:", values);
//   try {
//     await axios.post("http://localhost:3001/product", values);

//     message.success("Form submitted successfully!");
//     dispatch(close());
//     form.resetFields();
//   } catch (error) {
//     message.error(error.message);
//   }
// };
