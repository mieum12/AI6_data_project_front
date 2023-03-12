import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function PlusBody() {
  return (
    <>
      <PlusList>
        <div className="Box">
          <img src='/asset/국민재난안전포털.jpeg' alt="플러스페이지사진"/> 
          <h3><Link to="https://www.safekorea.go.kr/" target="_blank">국민 재난 안전 포털</Link></h3>
          <div>▫️ 재난 현황 확인 </div>
          <div>: 재난 정보 조회 및 상황 정보 등</div><br/>
          <div>▫️ 타 안전시설 확인</div>
          <div>: 지진 대피소, 민방위 대피소 등</div>
        </div>

        <div className="Box">
        <img src='/asset/행정안전부.jpeg' alt="플러스페이지사진"/>
          <h3><Link to="https://www.mois.go.kr/" target="_blank">행정 안전부</Link></h3>
          <div>▫️ 국가 안전 시스템 정책 소개</div><br/>
          <div>▫️ 온라인 민원 신청 안내</div><br/>
          <div>▫️ 이재민 관련 지원 사업, 신속 보도자료 등 확인</div>
        </div>

        <div className="Box">
        <img src='/asset/서울종합방재센터.jpeg' alt="플러스페이지사진"/>
          <h3><Link to="https://119.seoul.go.kr/" target="_blank">서울 종합 방재 센터(119)</Link></h3>
          <div>▫️ 재난 정보 서비스 소개</div>
          <div>: 재난 발생 통계, 재난 보고 등</div><br/>
          <div>▫️ 사고별 대응 요령 소개</div><br/>
          <div>▫️ 시민 참여 활동: 자원봉사</div>
        </div>


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
export default PlusBody;
