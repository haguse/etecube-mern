import PRODUCTS from "../constants/productsTypes";

export const addProduct = (newProduct) => {
  parseInt(newProduct.companyLegalNumber);
  return {
    type: PRODUCTS.ADD_PRODUCT_SUCCESS,
    payload: newProduct,
  };
};

export const deleteProduct = (productKey) => {
  return {
    type: PRODUCTS.DELETE_PRODUCT_SUCCESS,
    payload: productKey,
  };
};

export const editProduct = (key, newProduct) => {
  return {
    type: PRODUCTS.EDIT_PRODUCT_SUCCESS,
    payload: { key, newProduct },
  };
};
