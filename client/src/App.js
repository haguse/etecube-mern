import React from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import Homepage from "./pages/Home";
import Companies from "./pages/Companies";
import Products from "./pages/Products";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import NotFound404 from "./pages/NotFound404";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      {/* Toastfiy */}
      <ToastContainer autoClose={2000} />
      <Navbar />

      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/products" element={<Products />} />
        </Route>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </>
  );
};

export default App;
