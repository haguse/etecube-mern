import React, { useState } from "react";
import { Modal, Input, Form, Select } from "antd";

import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../../actions/productsActions";

import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";

const AddProductModal = ({ closeModal, isOpen }) => {
  const { Option } = Select;
  const dispatch = useDispatch();

  const existingCompanies = useSelector(
    (state) => state.companies.existingCompanies
  );

  const [newProduct, setNewProduct] = useState({
    key: uuidv4(),
    productName: "",
    productCategory: "",
    productAmount: "",
    productAmountUnit: "",
    productCompany: "",
  });

  const handleProductName = (e) => {
    setNewProduct({
      ...newProduct,
      productName: e.target.value,
    });
  };

  const handleProductCategory = (e) => {
    setNewProduct({
      ...newProduct,
      productCategory: e.target.value,
    });
  };

  const handleProductAmount = (e) => {
    setNewProduct({
      ...newProduct,
      productAmount: e.target.value,
    });
  };

  const handleProductAmountUnit = (e) => {
    setNewProduct({
      ...newProduct,
      productAmountUnit: e.target.value,
    });
  };

  const handleProductCompany = (value) => {
    setNewProduct({
      ...newProduct,
      productCompany: value,
    });
  };

  const addNewProduct = () => {
    if (newProduct.productName !== "" && newProduct.productCompany !== "") {
      dispatch(addProduct(newProduct));
      toast.success("Product added");
      closeModal();
    } else {
      toast.warn("Please fill in the required fields");
    }
  };

  return (
    <>
      <Modal
        title="Add Product"
        visible={isOpen}
        onOk={() => addNewProduct()}
        onCancel={closeModal}
      >
        <Form>
          <Form.Item
            rules={[{ required: true, message: "Please input product name!" }]}
          >
            <Input
              name="productName"
              onChange={handleProductName}
              placeholder="*Product Name"
            ></Input>
          </Form.Item>

          <Form.Item
            rules={[
              { required: true, message: "Please input product category!" },
            ]}
          >
            <Input
              name="productCategory"
              onChange={handleProductCategory}
              placeholder="Product Category"
            ></Input>
          </Form.Item>

          <Form.Item
            rules={[
              { required: true, message: "Please input product amount!" },
            ]}
          >
            <Input
              name="productAmount"
              onChange={handleProductAmount}
              placeholder="Product Amount"
            ></Input>
          </Form.Item>

          <Form.Item
            rules={[
              { required: true, message: "Please input product amount unit!" },
            ]}
          >
            <Input
              name="productAmountUnit"
              onChange={handleProductAmountUnit}
              placeholder="Product Amount Unit"
            ></Input>
          </Form.Item>
          <Form.Item
            name="productCompany"
            rules={[
              { required: true, message: "Please input product company!" },
            ]}
          >
            <Select
              onChange={(value) => handleProductCompany(value)}
              placeholder="*ProductCompany"
            >
              {existingCompanies?.map((company, i) => (
                <Option key={i} value={company}>
                  {company}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default AddProductModal;
