import React from "react";
import { Wrapper } from "./ScHome";
// import { CountUp } from "use-count-up";

import { useSelector } from "react-redux";
import Bg from "../../images/cube-right-bottom.png";

import { Statistic, Row, Col } from "antd";

const Home = () => {
  const companies = useSelector((state) => state.companies.companiesData);
  const existingCompanies = useSelector(
    (state) => state.companies.existingCompanies
  );
  const lastCompanies = existingCompanies.slice(-3);
  const products = useSelector((state) => state.products.productsData);
  const username = localStorage.getItem("username");

  return (
    <Wrapper className="container">
      <div className="overview">
        <p className="overview__username">
          Welcome <span>{username}</span>
        </p>
        <p className="overview__system">System Overview</p>
        <Row gutter={16} style={{ marginTop: "2rem" }}>
          <Col span={12}>
            <Statistic title="Number of companies" value={companies.length} />
          </Col>
          <Col span={12}>
            <Statistic title="Number of products" value={products.length} />
          </Col>
        </Row>
        <Row gutter={16} style={{ marginTop: "2rem" }}>
          <Col span={12}>
            <Statistic
              title="Last three companies added"
              value={lastCompanies.join(", ")}
            />
          </Col>
        </Row>
      </div>
      <img className="bg" src={Bg} alt="ETECube" />
    </Wrapper>
  );
};

export default Home;
