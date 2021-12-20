import React from "react";
import { Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { toast } from "react-toastify";
import {
  deleteCompany,
  deleteExistingCompany,
} from "../../../actions/companiesActions";
import { useDispatch } from "react-redux";

const DeleteCompanyModal = ({ isOpen, closeModal, company }) => {
  const dispatch = useDispatch();

  const deleteSelectedCompany = () => {
    dispatch(deleteCompany(company.key));
    dispatch(deleteExistingCompany(company.companyName));
    toast.success("Company successfully deleted");
    closeModal();
  };

  return (
    <Modal
      visible={isOpen}
      onCancel={closeModal}
      icon={<ExclamationCircleOutlined />}
      onOk={deleteSelectedCompany}
      okType="danger"
      title="Delete Company"
    >
      <p>Do you want to delete this company ?</p>
      <p>Company Name : {company.companyName}</p>
      <p>Legal Number : {company.companyLegalNumber}</p>
    </Modal>
  );
};

export default DeleteCompanyModal;
