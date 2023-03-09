import styled from "styled-components";

export default function Chart() {
  return (
    <>
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
        <div className="back"></div>
        <ul className="cardWrapper">
          <li className="card">a동</li>
          <li className="card">b동</li>
          <li className="card">c동</li>
        </ul>
      </SafetySection>
    </>
  );
}

const Background = styled.div`
  background-color: #f8f5f1;
  width: 100%;
  height: 1800px;

  position: absolute;
  top: 10px;
  left: 10px;
  z-index: -2;
`;

const ChartSection = styled.div`
  margin: 20px 0 80px 0;

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
  position: relative;

  .cardWrapper {
    margin: 40px;
    margin-bottom: 0;
    text-align: center;
  }

  .card {
    display: inline-block;
    margin: 50px 70px 60px 70px;

    width: 199px;
    height: 255.5px;

    text-align: center;
    padding-top: 20px;

    background: #f8f5f1;
    border-radius: 7.5px;
  }

  .back {
    position: absolute;
    z-index: -1;

    width: 100%;
    height: 600px;

    background: #425f57;
  }
`;
