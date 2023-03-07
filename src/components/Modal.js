import styled from "styled-components";

export default function Modal({ setModalOpen }) {
  const modalCloseHandler = () => {
    // const setModalOpen = props;
    setModalOpen(false);
  };

  return (
    <ModalSection>
      <button className="close" onClick={modalCloseHandler}>
        X
      </button>
      <p>모달 창 입니다.</p>
    </ModalSection>
  );
}

const ModalSection = styled.div`
  // 모달 창 크기
  width: 300px;
  height: 200px;

  // 모달 창 중앙 배치
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);

  // 모달 창 디자인
  text-align: center;
  border-radius: 5px;
  color: white;
  background-color: #6a8663;

  .close {
    // 닫기 버튼 우상단 배치
    position: absolute;
    top: 4%;
    right: 3%;

    // 닫기 버튼 디자인
    border-color: transparent;
    background-color: transparent;
  }
`;
