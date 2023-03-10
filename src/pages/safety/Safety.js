import React from "react";
import Header from "../../components/Header";
import styled from "styled-components";
import { Chart } from "../../components/Chart";

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
      <SafetySection>
        <div className="BoxList">
          <div className="Box">
            a동 <br />
          </div>
          <div className="Box">
            b동 <br />
          </div>
          <div className="Box">
            c동 <br />
          </div>
        </div>
      </SafetySection>
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

const SafetySection = styled.div`
  display: grid;
  align-items: center;
  gap: -10px;
  height: 500px;
  background-color: #425f57;
  .nameList {
    display: flex;
    justify-content: center;
  }
  .name {
    width: 300px;
    height: 50px;
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
`;

export default Safety;
