import { toast } from "react-toastify";
import { history } from "../_helpers/history";
import axios from "axios";

export const signUp = (username, password) => {
  axios
    .post("http://localhost:1337/api/sign-up", {
      username: username,
      password: password,
    })
    .then((res) => {
      if (res.data.status === "error") {
        toast.warn("Username already registered");
      } else {
        toast.success("Registered successful");
        toast.success("You can login now");
        history.push("/sign-in");
      }
    });
};

export const signIn = (username, password) => {
  axios
    .post("http://localhost:1337/api/sign-in", {
      username: username,
      password: password,
    })
    .then((res) => {
      if (res.data.user) {
        toast.success("Login succesfully");
        localStorage.setItem("token", res.data.user);
        localStorage.setItem("username", username);
        history.push("/");
      } else toast.warning("Check your username and password");
    });
};

export const signOut = () => {
  history.push("sign-in");
  localStorage.removeItem("token");
};
