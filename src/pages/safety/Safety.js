// components > safety> index.js 만들어 구조분해할당으로 컴포넌트 불러옴
import { Header, ChartCard, SafetyCard } from "../../components";
import * as S from "./Safety.style";

const Safety = () => {
  return (
    <>
      <Header />
      <S.Background></S.Background>
      <S.ChartSection>
        {/* 기존 코드에서 Chart 부분을 component로 분류하여 작성 */}
        <ChartCard chartTitle="화재 발생 현황" chartGraph="화재 그래프" />
        <ChartCard chartTitle="강우 발생 현황" chartGraph="강우 그래프" />
      </S.ChartSection>
      <ChartCard
        chartTitle="수용 시설 현황"
        chartGraph="통합 자치구 수용시설 그래프"
      />
      <S.CardSection>
        <SafetyCard cardTitle="a동" safetyEmoji="이모지" description="설명" />
        <SafetyCard cardTitle="b동" safetyEmoji="이모지" description="설명" />
        <SafetyCard cardTitle="c동" safetyEmoji="이모지" description="설명" />
      </S.CardSection>
    </>
  );
};

export default Safety;
