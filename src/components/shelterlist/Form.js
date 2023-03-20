import { useState } from "react";

import { Modal } from "./Modal";
import styled from "styled-components";
import {
  PRIMARY_COLOR_GREEN, PRIMARY_COLOR_WHITE
} from "../../config/constants";

export default function Form({shelter}) {
  const [modalOpen, setModalOpen] = useState(false);

  const modalOpenHandler = () => {
    setModalOpen(true);
  };
  
  //클릭한 시설의 id값을 전달해서 해당 설명이 뜨도록???



  return (
    <FormSection>
      <button className="modalButton" onClick={modalOpenHandler}>
        {shelter}
      </button>
      {modalOpen && 
        <Modal 
          setModalOpen={setModalOpen}
          // shelterNm={shelter.shelterNm} 
          />}
    </FormSection>
  );
}

const FormSection = styled.div`
.modalButton {
    border: none;
    padding: 5px 10px;
    color: ${PRIMARY_COLOR_GREEN};
    background-color: ${PRIMARY_COLOR_WHITE};
  }
  .modalButton:hover{
    color: orange;
  }
`;
