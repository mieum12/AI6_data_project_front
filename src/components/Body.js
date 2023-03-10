import React from "react";
import styled from "styled-components";

export default function Body() {
  return (
    <>
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
      </BodySection2>
      <BodySection3>
        <div class="center3">
          <div>map</div>
        </div>
      </BodySection3>
    </>
  );
}
const PictureSection = styled.div`
  height: 750px;

  .picture {
    height: 750px;
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
const BodySection3 = styled.div`
  height: 650px;
  background-color: #f8f5f1;
  .center3 {
    text-align: center;
    padding: 240px 0 0 0;
  }
`;
