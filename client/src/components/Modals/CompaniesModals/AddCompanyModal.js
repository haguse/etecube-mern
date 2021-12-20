import React, { useState } from "react";
import { Modal, Input, Form } from "antd";

import { useDispatch, useSelector } from "react-redux";
import {
  addCompany,
  addExistingCompany,
} from "../../../actions/companiesActions";

import { v4 as uuidv4 } from "uuid";

import { toast } from "react-toastify";

const AddCompanyModal = ({ closeModal, isOpen }) => {
  const dispatch = useDispatch();

  const existingCompanies = useSelector(
    (state) => state.companies.existingCompanies
  );

  const [newCompany, setNewCompany] = useState({
    key: uuidv4(),
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

  const addNewCompany = () => {
    const isAlreadyHave = existingCompanies.find(
      (company) =>
        company.toLowerCase() === newCompany?.companyName?.toLowerCase()
    );
    if (newCompany.companyName !== "" && newCompany.companyLegalNumber !== "") {
      if (isAlreadyHave) {
        toast.warn("There is already such a company");
        closeModal();
      } else {
        dispatch(addCompany(newCompany));
        dispatch(addExistingCompany(newCompany));
        toast.success("Company added");
        closeModal();
      }
    } else {
      toast.warn("Please fill in the required fields");
    }
  };

  return (
    <>
      <Modal
        title="Add Company"
        visible={isOpen}
        onOk={() => addNewCompany()}
        onCancel={closeModal}
      >
        <Form>
          <Form.Item
            rules={[{ required: true, message: "Please input company name!" }]}
          >
            <Input
              onChange={handleCompanyName}
              placeholder="* Company Name"
              name="companyName"
            ></Input>
          </Form.Item>

          <Form.Item
            rules={[
              { required: true, message: "Please input company legal number!" },
            ]}
          >
            <Input
              name="companyLegalNumber"
              onChange={handleCompanyLegalNumber}
              placeholder="* Company Legal Number"
            ></Input>
          </Form.Item>

          <Form.Item>
            <Input
              name="companyIncorporationCountry"
              onChange={handleCompanyIncorporationCountry}
              placeholder="Company Incorporation Country"
            ></Input>
          </Form.Item>

          <Form.Item>
            <Input
              name="companyWebsite"
              onChange={handleCompanyWebsite}
              placeholder="Company Website"
            ></Input>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default AddCompanyModal;
