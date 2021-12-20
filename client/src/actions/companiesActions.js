import COMPANIES from "../constants/companiesTypes";

export const addCompany = (newCompany) => {
  parseInt(newCompany.companyLegalNumber);
  return {
    type: COMPANIES.ADD_COMPANY_SUCCESS,
    payload: newCompany,
  };
};

export const deleteCompany = (companyKey) => {
  return {
    type: COMPANIES.DELETE_COMPANY_SUCCESS,
    payload: companyKey,
  };
};

export const editCompany = (key, newCompany) => {
  return {
    type: COMPANIES.EDIT_COMPANY_SUCCESS,
    payload: { key, newCompany },
  };
};

export const addExistingCompany = (company) => {
  parseInt(company.companyLegalNumber);
  return {
    type: COMPANIES.ADD_EXISTING_COMPANY_SUCCESS,
    payload: company.companyName,
  };
};

export const deleteExistingCompany = (companyName) => {
  return {
    type: COMPANIES.DELETE_EXISTING_COMPANY_SUCCESS,
    payload: companyName,
  };
};
