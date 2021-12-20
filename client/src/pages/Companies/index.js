import React, { useState } from "react";
import { Wrapper } from "./ScCompanies";
// Antd
import { Button, Table } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

import { useSelector } from "react-redux";

// Modals
import AddCompanyModal from "../../components/Modals/CompaniesModals/AddCompanyModal";
import DeleteCompanyModal from "../../components/Modals/CompaniesModals/DeleteCompanyModal";
import EditCompanyModal from "../../components/Modals/CompaniesModals/EditCompanyModal";

const Companies = () => {
  const companiesData = useSelector((state) => state.companies.companiesData);

  const [isAddCompanyModal, setIsAddCompanyModal] = useState(false);
  const [isDeleteCompanyModal, setIsDeleteCompanyModal] = useState(false);
  const [isEditCompanyModal, setIsEditCompanyModal] = useState(false);

  // Edit or Delete Action Clicked Company
  const [actionCompany, setActionCompany] = useState({
    key: "",
    companyName: "",
    companyLegalNumber: "",
    companyIncorporationCountry: "",
    companyWebsite: "",
  });

  const showAddCompanyModal = () => {
    setIsAddCompanyModal(true);
  };

  const showDeleteCompanyModal = (company) => {
    setIsDeleteCompanyModal(true);
    setActionCompany({
      key: company.key,
      companyName: company.companyName,
      companyLegalNumber: company.companyLegalNumber,
      companyIncorporationCountry: company.companyIncorporationCountry,
      companyWebsite: company.companyWebsite,
    });
  };

  const showEditCompanyModal = (company) => {
    setIsEditCompanyModal(true);
    setActionCompany({
      key: company.key,
      companyName: company.companyName,
      companyLegalNumber: company.companyLegalNumber,
      companyIncorporationCountry: company.companyIncorporationCountry,
      companyWebsite: company.companyWebsite,
    });
  };

  const columns = [
    {
      title: "Company Name",
      dataIndex: "companyName",
      width: 200,
    },
    {
      title: "Legal Number",
      dataIndex: "companyLegalNumber",
      width: 150,
      defaultSortOrder: "descend",
      sorter: (a, b) => a.companyLegalNumber - b.companyLegalNumber,
    },
    {
      title: "Incorporation Country",
      dataIndex: "companyIncorporationCountry",
      width: 150,
    },
    {
      title: "Website",
      dataIndex: "companyWebsite",
      width: 250,
    },
    {
      title: "Action",
      dataIndex: "",
      width: 100,
      key: "x",
      render: (text, record) => (
        <div className="edit-delete-buttons">
          <span>
            <EditOutlined onClick={() => showEditCompanyModal(record)} />
          </span>
          <span style={{ marginLeft: "10px" }}>
            <DeleteOutlined onClick={() => showDeleteCompanyModal(record)} />
          </span>
        </div>
      ),
    },
  ];

  return (
    <Wrapper className="container">
      {isAddCompanyModal && (
        <AddCompanyModal
          isOpen={isAddCompanyModal}
          closeModal={() => setIsAddCompanyModal(false)}
        />
      )}

      {isDeleteCompanyModal && (
        <DeleteCompanyModal
          isOpen={isDeleteCompanyModal}
          closeModal={() => setIsDeleteCompanyModal(false)}
          company={actionCompany}
        />
      )}

      {isEditCompanyModal && (
        <EditCompanyModal
          isOpen={isEditCompanyModal}
          closeModal={() => setIsEditCompanyModal(false)}
          company={actionCompany}
        />
      )}

      <div className="button-area">
        <Button onClick={showAddCompanyModal}>Add New Company</Button>
      </div>
      <Table
        pagination={{ pageSize: 8 }}
        columns={columns}
        dataSource={companiesData}
        scroll={{ x: 200 }}
      ></Table>
    </Wrapper>
  );
};

export default Companies;
