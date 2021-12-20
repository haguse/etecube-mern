import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Wrapper } from "./ScSignIn";
import SignLogo from "../../images/sign-in-up.png";
import { Sign } from "./ScSignIn";
import { Form, Input, Button, Divider } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { signIn } from "../../actions/userActions";

const SignIn = () => {
  const [currentUserName, setCurrentUserName] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");

  return (
    <Wrapper className="container">
      <div>
        <img src={SignLogo} alt="Sign" />
      </div>
      <Sign>
        <Divider orientation="center" style={{ color: "#347768" }}>
          Sign In
        </Divider>
        <Form>
          <Form.Item
            rules={[{ required: true, message: "Please input your Username!" }]}
          >
            <Input
              name="username"
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="User name"
              onChange={(e) => setCurrentUserName(e.target.value)}
            ></Input>
          </Form.Item>
          <Form.Item
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input.Password
              name="password"
              prefix={<LockOutlined className="site-form-item-icon" />}
              placeholder="Password"
              onChange={(e) => setCurrentPassword(e.target.value)}
            ></Input.Password>
          </Form.Item>
          <Form.Item>
            <Button
              block
              onClick={() => signIn(currentUserName, currentPassword)}
            >
              Sign In
            </Button>
          </Form.Item>
          <Form.Item>
            <Link to="/sign-up">Register Now!</Link>
          </Form.Item>
        </Form>
      </Sign>
    </Wrapper>
  );
};

export default SignIn;
