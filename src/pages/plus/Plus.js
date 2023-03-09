import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";

function Plus() {
  return (
    <>
      <Header />
      <PlusList>
        <div className="Box">
          국민 재난 안전 포털 <br/>
          링크: https://www.safekorea.go.kr/ <br/>
          재난 발생 정보 조회, 비상 연락망, 재난 안전 상황 정보 등 확인 가능
        </div>
        <div className="Box">
          행정 안전부 <br/>
          링크: https://www.mois.go.kr/ <br/>
          (더 찾아보고 작성하기) 이재민 관련 지원 사업 신속 보도자료 등 확인
        </div>
        <div className="Box">3</div>
      </PlusList>
    </>
  );
}

const PlusList = styled.div`
display: flex;
justify-content: center;
height: 540px;
background-color: #f8f5f1;
.Box{
  display: flex;
  align-self: center;
  width: 200px;
  height: 300px;
  color: #f8f5f1;
  background: #425f57;
  margin: 20px;
  padding: 20px;
  border-radius: 30px;
  
}
`;
export default Plus;
