import React from "react";
import styled from "styled-components";

export default function Body() {
  return (
    <>
      <PictureSection>
        <div>사진</div>
      </PictureSection>
      <BodySection1>
        <div class="center1">
          <div>이재민을 위한 서비스 어플</div>
          <div>재난 대비 수용시설 현황에 대한 글 작성</div>
        </div>
      </BodySection1>
      <BodySection2>
        <div class="name">
          <div>000 이용법</div>
        </div>
        <div className="Box">
          이미지 <br />
          링크
          <br />
          번호
          <br />
          소개글
          <br />
        </div>
        <div className="Box">
          이미지 <br />
          링크
          <br />
          번호
          <br />
          소개글
          <br />
        </div>
        <div className="Box">
          이미지 <br />
          링크
          <br />
          번호
          <br />
          소개글
          <br />
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
  width: 1470px;
  height: 480px;
`;
const BodySection1 = styled.div`
  width: 1470px;
  height: 480px;
  background-color: #f8f5f1;
  .center1 {
    text-align: center;
    padding: 240px 0 0 0;
  }
`;
const BodySection2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1470px;
  height: 700px;
  background-color: #425f57;

  .name {
    text-align: center;
    padding: 0;
    width: 300px;
    height: 50px;
    background-color: #f8f5f1;
  }

  .Box {
    display: flex;
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
`;
const BodySection3 = styled.div`
  width: 1470px;
  height: 480px;
  background-color: #f8f5f1;
  .center3 {
    text-align: center;
    padding: 240px 0 0 0;
  }
`;
