import React from "react";
import styled from "styled-components";
import Modal from "./Modal";

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
        <div class="center2">
          <div>000 이용법</div>
          <div class="modal">
            <Modal />
            <Modal />
            <Modal />
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
  width: 1470px;
  height: 480px;
  background-color: #425f57;
  color: #f8f5f1;

  .center2 {
    text-align: center;
    padding: 100px 0 0 0;
  }
  .modal {
    display: flex;
    justify-content: space-evenly;
    padding: 30px 0 0 0;
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
