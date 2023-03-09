import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../../components/Header";

function Plus() {
  return (
    <>
      <Header />
      <PlusList>
        <div className="Box">
          <img src='/국민재난안전포털.jpeg' alt="플러스페이지사진"/> 
          <h3><Link to="https://www.safekorea.go.kr/" target="_blank">국민 재난 안전 포털</Link></h3>
          <div>재난 발생 정보 조회 및 재난 안전 상황 정보 등의 재난 현황을 확인할 수 있으며 또 다른 안전시설 등의 확인이 가능합니다.</div>
        </div>

        <div className="Box">
        <img src='/행정안전부.jpeg' alt="플러스페이지사진"/>
          <h3><Link to="https://www.mois.go.kr/" target="_blank">행정 안전부</Link></h3>
          <div>국가 안전 시스템 정책 소개 및 온라인 민원 신청 안내를 받을 수 있습니다.</div><br/>
          <div>이재민 관련 지원 사업 신속 보도자료 등 확인이 가능합니다.</div>
        </div>

        <div className="Box">3</div>
      </PlusList>
    </>
  );
}

const PlusList = styled.div`
display: flex;
justify-content: center;
height: 650px;
background-color: #f8f5f1;
.Box{
  display: flex;
  align-self: center;
  flex-direction: column;
  width: 200px;
  height: 400px;
  
  color: #f8f5f1;
  background: #425f57;
  margin: 20px;
  padding: 20px;
  border-radius: 20px;
  
}
img {
  width: 200px;
  height: 200px;
  border-radius: 20px;
}
`;
export default Plus;
