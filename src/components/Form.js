import { useState } from "react";
import { Modal } from "./Modal";
import styled from "styled-components";
import {
  PRIMARY_COLOR_GREEN
} from "../config/constants";

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
        클릭시 상세 Modal이 뜨는 버튼 테스트
      </button>
      {modalOpen && <Modal setModalOpen={setModalOpen} />}
    </FormSection>
  );
}

const FormSection = styled.div`
  // 전체 중앙 배치
  // position: absolute;
  // top: 40%;
  // left: 45%;

  // 모달 창 디자인
  .modalButton {
    // font-size: 30px;
    padding: 5px 10px;

    border-color: transparent;
    border-radius: 5px;
    color: white;
    background-color: ${PRIMARY_COLOR_GREEN};
  }
`;
