import React from "react";
import Header from "../../components/Header";
import styled from "styled-components";
// components > safety> index.js 만들어 구조분해할당으로 컴포넌트 불러옴
import { ChartCard, Chart } from "../../components/safety";

const Safety = () => {
  return (
    <>
      <Header />
      <Background></Background>
      {/* 기존 코드에서 Chart 부분을 component로 분류하여 작성 */}
      <Chart chartTitle="재난 발생 현황" chartGraph="재난 누적 그래프" />
      <Chart
        chartTitle="수용 시설 현황"
        chartGraph="통합 자치구 수용시설 그래프"
      />
      <ChartCard />
    </>
  );
};

const Background = styled.div`
  background-color: #f8f5f1;
  width: 100%;
  height: 1976px;

  position: absolute;
  top: 10px;
  left: 0;
  z-index: -2;
`;

export default Safety;
