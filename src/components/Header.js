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
            <a href="/shelterListPage">시설 보기</a>
          </li>
          <li>
            <a href="/plusPage">다른 시설 소개</a>
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
  color: #425f57;
  padding: 30px;
  background-color: #f8f5f1;
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
    color: #425f57;
  }
`;

export default Header;
