import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";

function PlusPage() {
  return (
    <>
      <Header />
      <PlusList>PlusList 페이지입니다</PlusList>
    </>
  );
}

const PlusList = styled.div``;

export default PlusPage;
