import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Header() {
  return (
    <HeaderSection>
      <div className="wrapper">
        <Link to="/" className="title">
          <img src="/asset/반딧불이_logo.png" alt="f사이트로고" />
        </Link>
        <ul className="menu">
          <Link to="/ShelterPage">
            <li>시설 보기</li>
          </Link>
          <Link to="/PlusPage">
            <li>다른 시설 소개</li>
          </Link>
          <Link to="/SafetyPage">
            <li>지역별 안전도 정보</li>
          </Link>
        </ul>
      </div>
    </HeaderSection>
  );
}

const HeaderSection = styled.div`
  font-weight: bold;
  font-size: 20px;
  color: #425f57;
  padding: 5px 30px;
  background-color: #f8f5f1;
  .wrapper {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .title {
  }

  img {
    width: 100px;
  }

  .menu {
    list-style: none;
    display: flex;
  }
  .menu li {
    margin-right: 30px;
  }
  a {
    text-decoration: none;
    color: #425f57;
  }
`;

export default Header;
