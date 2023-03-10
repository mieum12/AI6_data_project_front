import React from "react";
import Header from "../components/Header";
import styled from "styled-components";
import Box from "../components/Box";

const LandingPage = () => {
  return (
    <>
      <Header />
      <PictureSection>
        <div>
          <img className="picture" src="../asset/background.jpg" alt="family" />
        </div>
      </PictureSection>
      <BodySection1>
        <div class="textList">
          <div>이재민을 위한 서비스 어플</div>
          <div>재난 대비 수용시설 현황에 대한 글 작성</div>
        </div>
      </BodySection1>
      <BodySection2>
        <div className="nameList">
          <div className="name">000 이용법</div>
        </div>
        <div className="BoxList">
          <Box boxImage="이미지1" boxLink="링크1" boxNumber="번호1" boxText="소개글1" />
          <Box boxImage="이미지2" boxLink="링크2" boxNumber="번호2" boxText="소개글2" />
          <Box boxImage="이미지3" boxLink="링크3" boxNumber="번호3" boxText="소개글3" />
        </div>
      </BodySection2>
      <BodySection3>
        <div class="center3">
          <div>map</div>
        </div>
      </BodySection3>
    </>
  );
};

const PictureSection = styled.div`
  height: 900px;

  .picture {
    width: 100%;
  }
`;

const BodySection1 = styled.div`
  height: 650px;
  background-color: #f8f5f1;
  .textList {
    text-align: center;
    padding: 240px 0 0 0;
  }
`;
const BodySection2 = styled.div`
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
`;
const BodySection3 = styled.div`
  height: 650px;
  background-color: #f8f5f1;
  .center3 {
    text-align: center;
    padding: 240px 0 0 0;
  }
`;
export default LandingPage;
