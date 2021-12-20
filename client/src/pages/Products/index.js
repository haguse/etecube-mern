import React, { useState } from "react";
import { Wrapper } from "./ScProducts";
import { Button, Table } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

import { useSelector } from "react-redux";

import AddProductModal from "../../components/Modals/ProductsModals/AddProductModal";
import DeleteProductModal from "../../components/Modals/ProductsModals/DeleteProductModal";
import EditProductModal from "../../components/Modals/ProductsModals/EditProductModal";

const Products = () => {
  const productsData = useSelector((state) => state.products.productsData);

  const [isAddProductModal, setIsAddProductModal] = useState(false);
  const [isDeleteProductModal, setIsDeleteProductModal] = useState(false);
  const [isEditProductModal, setIsEditProductModal] = useState(false);

  const [actionProduct, setActionProduct] = useState({
    key: "",
    productName: "",
    productCategory: "",
    productAmount: "",
    productAmountUnit: "",
    productCompany: "",
  });

  const showAddProductModal = () => {
    setIsAddProductModal(true);
  };

  const showDeleteProductModal = (product) => {
    setIsDeleteProductModal(true);
    setActionProduct({
      key: product.key,
      productName: product.productName,
      productCategory: product.productCategory,
      productAmount: product.productAmount,
      productAmountUnit: product.productAmountUnit,
      productCompany: product.productCompany,
    });
  };

  const showEditProductModal = (product) => {
    setIsEditProductModal(true);
    setActionProduct({
      key: product.key,
      productName: product.productName,
      productCategory: product.productCategory,
      productAmount: product.productAmount,
      productAmountUnit: product.productAmountUnit,
      productCompany: product.productCompany,
    });
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "productName",
      width: 200,
    },
    {
      title: "Category",
      dataIndex: "productCategory",
      width: 150,
    },
    {
      title: "Amount",
      dataIndex: "productAmount",
      width: 120,
      defaultSortOrder: "descend",
      sorter: (a, b) => a.productAmount - b.productAmount,
    },
    {
      title: "Amount Unit",
      dataIndex: "productAmountUnit",
      width: 120,
    },
    {
      title: "Company",
      dataIndex: "productCompany",
      width: 250,
    },
    {
      title: "Action",
      dataIndex: "",
      width: 100,
      key: "x",
      render: (text, record) => (
        <>
          <span>
            <EditOutlined onClick={() => showEditProductModal(record)} />
          </span>
          <span style={{ marginLeft: "10px" }}>
            <DeleteOutlined onClick={() => showDeleteProductModal(record)} />
          </span>
        </>
      ),
    },
  ];

  return (
    <Wrapper className="container">
      {isAddProductModal && (
        <AddProductModal
          isOpen={isAddProductModal}
          closeModal={() => setIsAddProductModal(false)}
        />
      )}

      {isDeleteProductModal && (
        <DeleteProductModal
          isOpen={isDeleteProductModal}
          closeModal={() => setIsDeleteProductModal(false)}
          product={actionProduct}
        />
      )}

      {isEditProductModal && (
        <EditProductModal
          isOpen={isEditProductModal}
          closeModal={() => setIsEditProductModal(false)}
          product={actionProduct}
        />
      )}

      <div className="button-area">
        <Button onClick={showAddProductModal}>Add New Product</Button>
      </div>
      <Table
        pagination={{ pageSize: 8 }}
        columns={columns}
        dataSource={productsData}
        scroll={{ x: 200 }}
      ></Table>
    </Wrapper>
  );
};

export default Products;
