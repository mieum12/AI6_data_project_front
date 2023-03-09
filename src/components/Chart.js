import styled from "styled-components";

export default function Chart() {
  return (
    <>
      <ChartSection>
        <div className="chartTitle">재난 발생 현황</div>
        <div className="chartBack"></div>
      </ChartSection>
      <ChartSection>
        <div className="chartTitle">수용 시설 현황</div>
        <div className="chartBack"></div>
      </ChartSection>
      <SafetySection>
        <div className="back"></div>
        <ul className="cardWrapper">
          <li className="card">a</li>
          <li className="card">b</li>
          <li className="card">c</li>
        </ul>
      </SafetySection>
    </>
  );
}

const ChartSection = styled.div`
  margin: 40px 0 80px 0;

  .chartTitle {
    /* position: absolute;
    top: 170px;
    left: 45%; */

    margin: auto;
    margin-top: 40px;

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
    /* position: absolute; */
    /* top: 270px; */

    margin: auto;
    margin-top: 50px;
    display: block;

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
    text-align: center;
  }

  .card {
    display: inline-block;
    margin: 50px 20px 60px 20px;

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
    height: 439px;

    background: #425f57;
  }
`;
