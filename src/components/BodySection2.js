import React from "react";
import styled from "styled-components";

const BodySection2 = () => {
  return (
    <BodySection>
      <div className="nameList">
        <div className="name">000 이용법</div>
      </div>
      <div className="BoxList">
        <div className="Box">
          <h3>이미지</h3>
          <div>링크</div>
          <div>번호</div>
          <div>소개글</div>
        </div>
        <div className="Box">
          <h3>이미지</h3>
          <div>링크</div>
          <div>번호</div>
          <div>소개글</div>
        </div>
        <div className="Box">
          <h3>이미지</h3>
          <div>링크</div>
          <div>번호</div>
          <div>소개글</div>
        </div>
      </div>
    </BodySection>
  );
};

const BodySection = styled.div`
  display: grid;
  align-items: center;
  gap: -10px;
  height: 650px;
  background-color: #425f57;
  .nameList {
    display: flex;
    justify-content: center;
  }
  .name {
    width: 300px;
    height: 50px;
    padding: 25px 0 0 0;
    background-color: #f8f5f1;
    border-radius: 20px;
    display: flex;
    justify-content: center;
  }
  .BoxList {
    display: flex;
    justify-content: center;
  }
  .Box {
    width: 200px;
    height: 300px;
    background-color: #f8f5f1;
    margin: 20px;
    padding: 20px;
    border-radius: 30px;
    border-style: solid;
    border-color: #425f57;
    border-width: 10px;
  }
  h3 {
    width: 200px;
    height: 150px;
  }
`;

export default BodySection2;
