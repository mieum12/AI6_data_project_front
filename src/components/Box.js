import React from "react";
import styled from "styled-components";

const Box = ({ boxImage, boxLink, boxNumber, boxText }) => {
  return (
    <BoxSection>
      <div className="BoxList">
        <div className="Box">
          <h3>{boxImage}</h3>
          <div>{boxLink}</div>
          <div>{boxNumber}</div>
          <div>{boxText}</div>
        </div>
      </div>
    </BoxSection>
  );
};

const BoxSection = styled.div`
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
  h3 {
    width: 200px;
    height: 150px;
  }
`;

export default Box;
