// import { useState } from "react";
import styled from "styled-components";
import { PRIMARY_COLOR, COLOR_WHITE } from "../../styles/color";

export const PostModal = ({ setModalOpen, name }) => {
  const onClose = () => {
    setModalOpen((prev) => !prev);
  };
  console.log(name);
  return (
    <ModalSection>
      <button className="close" onClick={onClose}>
        <h2>X</h2>
      </button>
      <ModalTitle>{name.shelterNm}</ModalTitle>

      <ModalBody>
        <div>제목 : {name.title} </div>
        <div>사용자명 : {name.userNm}</div>
        <div>내용 :{name.content} </div>
        <div className="buttonWrapper">
          <button className="Pbutton">수정하기</button>
          <button className="Pbutton">삭제하기</button>
        </div>
      </ModalBody>
    </ModalSection>
  );
};

const ModalSection = styled.div`
  // 모달 창 크기
  width: 700px;
  height: 500px;
  z-index: 999; // 모달 창 최상단으로 보이게 하는 코드

  // 모달 창 중앙 배치
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  // 모달 창 디자인
  border-radius: 5px;
  background-color: ${PRIMARY_COLOR};
  color: ${COLOR_WHITE};
  padding: 20px;

  .close {
    // 닫기 버튼 우상단 배치
    position: absolute;
    top: 1.5%;
    right: 3%;

    // 닫기 버튼 디자인
    border-color: transparent;
    background-color: transparent;
    color: ${COLOR_WHITE};
  }

  .buttonWrapper {
    position: absolute;
    right: 20px;
    bottom: 20px;
  }

  .Pbutton {
    width: 80px;
    padding: 7px 5px;
    margin: 5px 10px 5px 5px;
    font-weight: bold;
    background-color: ${COLOR_WHITE};
    color: ${PRIMARY_COLOR};
    border-radius: 20px;
    border: none;
  }

  .Pbutton:hover {
    color: orange;
  }
`;

const ModalTitle = styled.div`
  text-align: center;
  justify-content: top;
  font-size: 30px;
`;

const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 20px;
`;
