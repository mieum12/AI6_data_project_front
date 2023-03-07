import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <HeaderSection>
      <div className="wrapper">
        <div className="title">
          <a href="/"> 🏕️ 시설이름 </a>
        </div>
        <ul className="menu">
          <li>
            <a href="/">시설 보기</a>
          </li>
          <li>
            <a href="/">다른 시설 소개</a>
          </li>
          <li>
            <a href="/">지역별 안전도 정보</a>
          </li>
        </ul>
      </div>
    </HeaderSection>
  );
}

const HeaderSection = styled.div`
  font-weight: bold;
  font-size: 20px;
  color: green;
  margin: 30px;

  .wrapper {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .title {
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
    color: #6a8663;
  }
`;

export default Header;
