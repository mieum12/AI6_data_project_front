import React from "react";
import * as S from "./PlusBody.style";
import Box from "../box/Box";

function PlusBody() {
  return (
    <>
      <S.PlusList>
        <div className="BoxList">
          <Box 
            boxImage="/asset/국민재난안전포털.jpeg" 
            boxLink = "https://www.safekorea.go.kr/"
            LinkName = "국민재난안전포털"
            boxText='▫️ 재난 현황 확인
                    : 재난 정보 조회 및 상황 정보 등
                    ▫️ 타 안전시설 확인
                    : 지진 대피소, 민방위 대피소 등' />
          <Box 
            boxImage="/asset/행정안전부.jpeg" 
            boxLink="https://www.mois.go.kr/"
            LinkName="행정안전부"
            boxText="▫️ 국가 안전 시스템 정책 소개
                    ▫️ 온라인 민원 신청 안내
                    ▫️ 이재민 관련 지원 사업, 신속 보도자료 등 확인" />
          <Box 
            boxImage="/asset/서울종합방재센터.jpeg" 
            boxLink="https://119.seoul.go.kr/" 
            LinkName="서울종합방재센터(119)"
            boxText="▫️ 재난 정보 서비스 소개
                    : 재난 발생 통계, 재난 보고 등
                    ▫️ 사고별 대응 요령 소개
                    ▫️ 시민 참여 활동: 자원봉사" />
          </div>

      </S.PlusList>
    </>
  );
}

export default PlusBody;