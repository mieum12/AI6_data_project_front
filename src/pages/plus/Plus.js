import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";

function Plus() {
  return (
    <>
      <Header />
      <PlusList>
        <div className="Box">1</div>
        <div className="Box">2</div>
        <div className="Box">3</div>
      </PlusList>
    </>
  );
}

const PlusList = styled.div`
display: flex;
justify-content: center;
height: 700px; //임시로 지정
background-color: #f8f5f1;
.Box{
  display: flex;
  align-self: center;
  width: 200px;
  height: 300px;
  background: #f8f5f1;
  margin: 20px;
  padding: 20px;
  border-radius: 30px;
  border-style: solid;
  border-color: #425f57;
  border-width:10px;
}
`;
export default Plus;
