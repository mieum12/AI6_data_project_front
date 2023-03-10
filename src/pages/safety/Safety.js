import React from "react";
import Header from "../../components/Header";
import Chart from "../../components/Chart";
import styled from "styled-components";

const Safety = () => {
  return (
    <>
      <Header />
      <Background></Background>
      <ChartSection>
        <div className="chartTitle">재난 발생 현황</div>
        <div className="chartBack">재난 누적 그래프</div>
      </ChartSection>
      <ChartSection>
        <div className="chartTitle">수용 시설 현황</div>
        <div className="chartBack">통합 자치구 수용시설 그래프</div>
      </ChartSection>
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

const ChartSection = styled.div`
  margin: 20px 0 80px 0;
  width: 100%;
  height: 550px;

  .chartTitle {
    margin: auto;

    text-align: center;
    font-size: 32px;
    color: #f8f5f1;
    padding-top: 10px;

    width: 238px;
    height: 50px;

    background: #425f57;
    border-radius: 2010px;
  }

  .chartBack {
    text-align: center;
    color: #f8f5f1;

    margin: auto;
    margin-top: 50px;
    display: block;
    padding-top: 30px;

    width: 655px;
    height: 408.5px;
    background: #425f57;
    border-radius: 10px;
  }
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
