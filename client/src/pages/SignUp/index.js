import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Wrapper } from "./ScSignUp";
import SignLogo from "../../images/sign-in-up.png";
import { Sign } from "./ScSignUp";
import { Form, Input, Button, Divider } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { signUp } from "../../actions/userActions";
import { toast } from "react-toastify";

const SignUp = () => {
  const handleSignUp = () => {
    if (currentPassword.length > 3 && currentUserName.length > 3) {
      signUp(currentUserName, currentPassword);
    } else {
      toast.warn("Username and password must be at least 4 characters");
    }
  };

  const [currentUserName, setCurrentUserName] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");

  return (
    <Wrapper className="container">
      <div>
        <img src={SignLogo} alt="Sign" />
      </div>
      <Sign>
        <Divider orientation="center" style={{ color: "#347768" }}>
          Sign Up
        </Divider>
        <Form>
          <Form.Item
            rules={[{ required: true, message: "Please input your Username!" }]}
          >
            <Input
              name="username"
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="User name (Min 4 char.)"
              onChange={(e) => setCurrentUserName(e.target.value)}
            ></Input>
          </Form.Item>
          <Form.Item
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input.Password
              name="password"
              prefix={<LockOutlined className="site-form-item-icon" />}
              placeholder="Password (Min 4 char.)"
              onChange={(e) => setCurrentPassword(e.target.value)}
            ></Input.Password>
          </Form.Item>
          <Form.Item>
            <Button block onClick={handleSignUp}>
              Sign Up
            </Button>
          </Form.Item>
          <Form.Item>
            <Link to="/sign-in">I already have an account</Link>
          </Form.Item>
        </Form>
      </Sign>
    </Wrapper>
  );
};

export default SignUp;
