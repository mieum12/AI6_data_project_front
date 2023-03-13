import styled from "styled-components";

export const BoxSection = styled.div`
  .BoxList {
    display: flex;
    justify-content: center;
  }
  .Box {
    width: 200px;
    height: 400px;
    // background-color: #f8f5f1;
    color: #425f57;
    margin: 20px;
    padding: 20px;
    border-radius: 30px;
    border-style: solid;
    border-color: #425f57;
    border-width: 10px;
    background-color: ${(props) => props.backColor || "#f8f5f1" }
  }
  img {
      width: 200px;
      height: 200px;
      border-radius: 20px;
    }
  // h3 { 링크 이름 보라색,밑줄 없애기
  //   text-decoration: none;
  // }
`;
