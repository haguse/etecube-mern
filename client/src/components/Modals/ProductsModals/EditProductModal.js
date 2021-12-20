import React, { useState } from "react";
import { Modal, Input, Form, Select } from "antd";

import { useDispatch, useSelector } from "react-redux";
import { editProduct } from "../../../actions/productsActions";
import { toast } from "react-toastify";

const EditProductModal = ({ closeModal, isOpen, product }) => {
  const dispatch = useDispatch();
  const { Option } = Select;

  const existingCompanies = useSelector(
    (state) => state.companies.existingCompanies
  );

  const [newProduct, setNewProduct] = useState({
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

  const handleEditProduct = () => {
    if (newProduct.productName !== "" && newProduct.productCompany !== "") {
      dispatch(editProduct(product.key, newProduct));
      toast.success("Product successfully edited");

      closeModal();
    } else {
      toast.warn("Please fill in the required fields");
    }
  };

  return (
    <>
      <Modal
        title="Edit Product"
        visible={isOpen}
        onOk={handleEditProduct}
        onCancel={closeModal}
      >
        <Form>
          <Form.Item
            rules={[{ required: true, message: "Please input product name!" }]}
          >
            <p>*Input New Product Name</p>
            <Input
              name="productName"
              onChange={handleProductName}
              placeholder={product.productName}
            ></Input>
          </Form.Item>

          <Form.Item
            rules={[
              { required: true, message: "Please input product category!" },
            ]}
          >
            <p>Input New Product Name</p>
            <Input
              name="productCategory"
              onChange={handleProductCategory}
              placeholder={product.productCategory}
            ></Input>
          </Form.Item>

          <Form.Item
            rules={[
              { required: true, message: "Please input product amount!" },
            ]}
          >
            <p>Input New Product Amount</p>
            <Input
              name="productAmount"
              onChange={handleProductAmount}
              placeholder={product.productAmount}
            ></Input>
          </Form.Item>

          <Form.Item
            rules={[
              { required: true, message: "Please input product amount unit!" },
            ]}
          >
            <p>Input New Product Amount Unit</p>
            <Input
              name="productAmountUnit"
              onChange={handleProductAmountUnit}
              placeholder={product.productAmountUnit}
            ></Input>
          </Form.Item>

          <Form.Item>
            <p>*Input New Product Company</p>

            <Select
              onChange={(value) => handleProductCompany(value)}
              placeholder={product.productCompany}
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

export default EditProductModal;
