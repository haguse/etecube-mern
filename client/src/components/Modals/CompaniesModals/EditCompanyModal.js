import React, { useState } from "react";
import { Modal, Input, Form } from "antd";

import { useDispatch } from "react-redux";
import { editCompany } from "../../../actions/companiesActions";
import { toast } from "react-toastify";

const EditCompanyModal = ({ closeModal, isOpen, company }) => {
  const dispatch = useDispatch();

  const [newCompany, setNewCompany] = useState({
    companyName: "",
    companyLegalNumber: "",
    companyIncorporationCountry: "",
    companyWebsite: "",
  });

  const handleCompanyName = (e) => {
    setNewCompany({
      ...newCompany,
      companyName: e.target.value,
    });
  };

  const handleCompanyLegalNumber = (e) => {
    setNewCompany({
      ...newCompany,
      companyLegalNumber: e.target.value,
    });
  };

  const handleCompanyWebsite = (e) => {
    setNewCompany({
      ...newCompany,
      companyWebsite: e.target.value,
    });
  };

  const handleCompanyIncorporationCountry = (e) => {
    setNewCompany({
      ...newCompany,
      companyIncorporationCountry: e.target.value,
    });
  };

  const handleEditCompany = () => {
    if (newCompany.companyLegalNumber !== "" && newCompany.companyName !== "") {
      dispatch(editCompany(company.key, newCompany));
      toast.success("Company successfully edited");
      closeModal();
    } else {
      toast.warn("Please fill in the required fields");
    }
  };

  return (
    <>
      <Modal
        title="Edit Company"
        visible={isOpen}
        onOk={handleEditCompany}
        onCancel={closeModal}
      >
        <Form>
          <Form.Item
            rules={[{ required: true, message: "Please input company name!" }]}
          >
            <p>*Input New Company Name</p>

            <Input
              name="companyName"
              onChange={handleCompanyName}
              placeholder={company.companyName}
            ></Input>
          </Form.Item>

          <Form.Item
            rules={[
              {
                required: true,
                message: "*Please input company legal number!",
              },
            ]}
          >
            <p>*Input New Legal Number</p>

            <Input
              name="companyLegalNumber"
              onChange={handleCompanyLegalNumber}
              placeholder={company.companyLegalNumber}
            ></Input>
          </Form.Item>

          <Form.Item
            rules={[
              {
                required: true,
                message: "Please input company incorporation number!",
              },
            ]}
          >
            <p>Input New Incorporation Country</p>
            <Input
              name="companyIncorporationCountry"
              onChange={handleCompanyIncorporationCountry}
              placeholder={company.companyIncorporationCountry}
            ></Input>
          </Form.Item>

          <Form.Item
            rules={[
              { required: true, message: "Please input company website!" },
            ]}
          >
            <p>Input New Website</p>
            <Input
              name="companyWebsite"
              onChange={handleCompanyWebsite}
              placeholder={company.companyWebsite}
            ></Input>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default EditCompanyModal;
