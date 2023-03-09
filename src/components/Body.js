import React from "react";
import styled from "styled-components";

export default function Body() {
  return (
    <>
      <PictureSection>
        <div>
          <img
            className="picture"
            src="https://img.freepik.com/free-photo/back-view-family-hugging-admiring-their-home_259150-59357.jpg?w=1800&t=st=1678331701~exp=1678332301~hmac=81282b164f83c78efd55d4678a5bfeca022bbdc8f2012a582d464a91149df87f"
            alt="family"
          />
        </div>
      </PictureSection>
      <BodySection1>
        <div class="center1">
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
  .center1 {
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
    background-color: #f8f5f1;
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
`;
const BodySection3 = styled.div`
  height: 650px;
  background-color: #f8f5f1;
  .center3 {
    text-align: center;
    padding: 240px 0 0 0;
  }
`;
