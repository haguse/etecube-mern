import PRODUCTS from "../constants/productsTypes";
import { v4 as uuidv4 } from "uuid";

const INITIAL_STATE = {
  productsData: [
    {
      key: uuidv4(),
      Id: uuidv4(),
      productName: "hymots®",
      productCategory: "Application",
      productAmount: 1,
      productAmountUnit: "Application",
      productCompany: "ETECube",
    },
    {
      key: uuidv4(),
      Id: uuidv4(),
      productName: "Solana",
      productCategory: "Crypto",
      productAmount: 5,
      productAmountUnit: "Item",
      productCompany: "Serin",
    },
    {
      key: uuidv4(),
      Id: uuidv4(),
      productName: "nginr®m",
      productCategory: "Application",
      productAmount: 1,
      productAmountUnit: "Application",
      productCompany: "ETECube",
    },
    {
      key: uuidv4(),
      Id: uuidv4(),
      productName: "Buaskr",
      productCategory: "-",
      productAmount: 7,
      productAmountUnit: "Item",
      productCompany: "Perfect Company",
    },
  ],
  errorMessage: "",
};

const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PRODUCTS.GET_PRODUCTS_SUCCESS:
      return { ...state, productsData: action.payload };
    case PRODUCTS.GET_PRODUCTS_ERROR:
      return { ...state, errorMessage: "Get Products Fail" };
    case PRODUCTS.ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        productsData: [...state.productsData, action.payload],
      };
    case PRODUCTS.ADD_PRODUCT_ERROR:
      return { ...state, errorMessage: "Add Product Fail" };
    case PRODUCTS.DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        productsData: state.productsData.filter(
          (product) => product.key !== action.payload
        ),
      };
    case PRODUCTS.DELETE_PRODUCT_ERROR:
      return { ...state, errorMessage: "Delete Product Fail" };
    case PRODUCTS.EDIT_PRODUCT_SUCCESS:
      const { key, newProduct } = action.payload;
      return {
        ...state,
        productsData: state.productsData.map((product) =>
          product.key === key ? newProduct : product
        ),
      };
    case PRODUCTS.EDIT_PRODUCT_ERROR:
      return { ...state, errorMessage: "Edit Product Fail" };
    default:
      return state;
  }
};

export default productsReducer;
