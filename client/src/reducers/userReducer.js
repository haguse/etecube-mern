import USER from "../constants/userTypes";
// import { toast } from "react-toastify";

const INITIAL_STATE = {
  userData: [
    {
      key: "0",
      userName: "admin",
      userPassword: "password",
    },
  ],
  errorMessage: "",
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER.USER_SIGNUP_SUCCESS:
      return { ...state, userData: [...state.userData, action.payload] };
    case USER.USER_SIGNUP_ERROR:
      return { ...state, errorMessage: "Such a username already exists" };
    case USER.USER_SIGIN_SUCCESS:
      return { ...state };
    case USER.USER_SIGNIN_ERROR:
      return { ...state, errorMessage: "Wrong username or password" };
    default:
      return state;
  }
};

export default userReducer;
