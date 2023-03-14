import styled from "styled-components";
import {
  PRIMARY_COLOR_GREEN,
  PRIMARY_COLOR_WHITE,
} from "../config/constants";

export const Modal = ({ setModalOpen }) => {
  const modalCloseHandler = () => {
    // const setModalOpen = props;
    setModalOpen(false);
  };

  return (
    <ModalSection>
      <button className="close" onClick={modalCloseHandler}>
        X
      </button>
      <ModalTitle>선택한 시설의 이름</ModalTitle>
      <ModalBody>
        <img src="/asset/반딧불이_logo.png" alt="시설사진??"/>
        <div>
          시설 이름: <br/>
          주소: <br/>
          수용 가능 인원: <br/>
          시설 면적: <br/>
        </div>
      </ModalBody>

    </ModalSection>
  );
};

const ModalSection = styled.div`
  // 모달 창 크기
  width: 400px;
  height: 550px;
  z-index: 999; // 모달 창 최상단으로 보이게 하는 코드

  // 모달 창 중앙 배치
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  // 모달 창 디자인
  // text-align: center;
  border-radius: 5px;
  background-color: ${PRIMARY_COLOR_GREEN};
  color: ${PRIMARY_COLOR_WHITE};
  padding: 20px;

  .close {
    // 닫기 버튼 우상단 배치
    position: absolute;
    top: 4%;
    right: 3%;

    // 닫기 버튼 디자인
    border-color: transparent;
    background-color: transparent;
    color: ${PRIMARY_COLOR_WHITE};
  }
`;

const ModalTitle = styled.div`
text-align: center;
justify-content: top;
font-size: 25px
`

const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  .img {
    margin: 10px
  }
`