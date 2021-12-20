import { combineReducers } from "redux";

import productsReducer from "./productsReducer";
import companiesReducer from "./companiesReducer";
import userReducer from "./userReducer";

export default combineReducers({
  products: productsReducer,
  companies: companiesReducer,
  users: userReducer,
});
