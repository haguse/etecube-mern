import COMPANIES from "../constants/companiesTypes";
import { v4 as uuidv4 } from "uuid";

const INITIAL_STATE = {
  companiesData: [
    {
      key: uuidv4(),
      Id: uuidv4(),
      companyName: "ETECube",
      companyLegalNumber: 234,
      companyIncorporationCountry: "Turkey",
      companyWebsite: "etecube.com/",
    },
    {
      key: uuidv4(),
      Id: uuidv4(),
      companyName: "Perfect Company",
      companyLegalNumber: 95458932,
      companyIncorporationCountry: "Belgium",
      companyWebsite: "perfectcompcompss.com/",
    },
    {
      key: uuidv4(),
      Id: uuidv4(),
      companyName: "Serin",
      companyLegalNumber: 2323,
      companyIncorporationCountry: "Turkey",
      companyWebsite: "halitguvenserin.com/",
    },
    {
      key: uuidv4(),
      Id: uuidv4(),
      companyName: "Microsoft",
      companyLegalNumber: 132,
      companyIncorporationCountry: "USA",
      companyWebsite: "microsoft.com/",
    },
    {
      key: uuidv4(),
      Id: uuidv4(),
      companyName: "Apple",
      companyLegalNumber: 654,
      companyIncorporationCountry: "USA",
      companyWebsite: "apple.com/",
    },
  ],
  existingCompanies: [
    "ETECube",
    "Perfect Company",
    "Serin",
    "Microsoft",
    "Apple",
  ],
  errorMessage: "",
};

const companiesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case COMPANIES.GET_COMPANIES_SUCCESS:
      return { ...state, companiesData: action.payload };
    case COMPANIES.GET_COMPANIES_ERROR:
      return { ...state, errorMessage: "Get Companies Failed" };
    case COMPANIES.ADD_COMPANY_SUCCESS:
      return {
        ...state,
        companiesData: [...state.companiesData, action.payload],
      };
    case COMPANIES.ADD_COMPANY_ERROR:
      return { ...state, errorMessage: "Add Company Failed" };
    case COMPANIES.DELETE_COMPANY_SUCCESS:
      return {
        ...state,
        companiesData: state.companiesData.filter(
          (company) => company.key !== action.payload
        ),
      };
    case COMPANIES.DELETE_COMPANY_ERROR:
      return { ...state, errorMessage: "Delete Company Failed" };
    case COMPANIES.EDIT_COMPANY_SUCCESS:
      const { key, newCompany } = action.payload;
      return {
        ...state,
        companiesData: state.companiesData.map((company) =>
          company.key === key ? newCompany : company
        ),
      };
    case COMPANIES.EDIT_COMPANY_ERROR:
      return { ...state, errorMessage: "Edit Company Failed" };
    case COMPANIES.ADD_EXISTING_COMPANY_SUCCESS:
      return {
        ...state,
        existingCompanies: [...state.existingCompanies, action.payload],
      };
    case COMPANIES.ADD_EXISTING_COMPANY_ERROR:
      return { ...state, errorMessage: "Add Existing Company Failed" };
    case COMPANIES.DELETE_EXISTING_COMPANY_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        existingCompanies: state.existingCompanies.filter(
          (company) => company !== action.payload
        ),
      };
    case COMPANIES.DELETE_EXISTING_COMPANY_ERROR:
      return { ...state, errorMessage: "Delete Existing Company Failed" };
    default:
      return state;
  }
};

export default companiesReducer;
