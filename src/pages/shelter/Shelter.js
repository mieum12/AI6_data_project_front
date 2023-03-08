import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import ShelterMap from "../../components/ShelterMap";
import ShelterList from "../../components/shelterList";

function Shelter() {
  return (
    <div>
      <Header />
      <FlexContainer>
        <ShelterMap/>
        <ShelterList/>
      </FlexContainer>
    </div>
  );
}
const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 700px; //임시로 지정
  background-color: #f8f5f1;
`

export default Shelter;
