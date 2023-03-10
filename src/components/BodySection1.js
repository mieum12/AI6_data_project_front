import React from "react";
import styled from "styled-components";

const BodySection1 = () => {
  return (
    <BodySection>
      <div class="textList">
        <div>이재민을 위한 서비스 어플</div>
        <div>재난 대비 수용시설 현황에 대한 글 작성</div>
      </div>
    </BodySection>
  );
};

const BodySection = styled.div`
  height: 650px;
  background-color: #f8f5f1;
  .textList {
    text-align: center;
    padding: 240px 0 0 0;
  }
`;
export default BodySection1;
