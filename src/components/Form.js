import { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";

export default function Form() {
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
        ShowModal
      </button>
      {modalOpen && <Modal setModalOpen={setModalOpen} />}
    </FormSection>
  );
}

const FormSection = styled.div`
  // 전체 중앙 배치
  position: absolute;
  top: 40%;
  left: 45%;

  // 모달 창 디자인
  .modalButton {
    font-size: 30px;
    padding: 5px 10px;

    border-color: transparent;
    border-radius: 5px;
    color: white;
    background-color: #425f57;
  }
`;
