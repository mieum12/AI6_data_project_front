import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
// import styled from "styled-components";
import Shelter from "../../components/Shelter";

function ShelterPage() {
  return (
    <div>
      
      <Header/>
      <h1>shelter page입니다</h1>
      <Shelter/>
      <Footer/>
    </div>
  );
}

export default ShelterPage;