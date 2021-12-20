import React from "react";
import { Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";

import { deleteProduct } from "../../../actions/productsActions";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const DeleteProductModal = ({ isOpen, closeModal, product }) => {
  const dispatch = useDispatch();

  const deleteSelectedProduct = () => {
    dispatch(deleteProduct(product.key));
    toast.success("Company successfully deleted");
    closeModal();
  };

  return (
    <Modal
      visible={isOpen}
      onCancel={closeModal}
      icon={<ExclamationCircleOutlined />}
      onOk={deleteSelectedProduct}
      okType="danger"
      title="Delete Product"
    >
      <p>Do you want to delete this product ?</p>
      <p>Product Name : {product.productName}</p>
      <p>Product Company : {product.productCompany}</p>
    </Modal>
  );
};

export default DeleteProductModal;
