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

  // const showModal = () => {
  //   if (modalOpen) {
  //     <Modal setModalOpen={setModalOpen} />;
  //   }
  // };

  return (
    <FormSection>
      <button className="modalButton" onClick={modalOpenHandler}>
        {shelter}
      </button>
      {modalOpen && <Modal setModalOpen={setModalOpen} />}
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
