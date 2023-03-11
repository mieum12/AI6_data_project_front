import styled from "styled-components";

export const ChartCard = () => {
  return (
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
  );
};

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
