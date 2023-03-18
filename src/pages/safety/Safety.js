// components > safety> index.js 만들어 구조분해할당으로 컴포넌트 불러옴
import { Header, ChartWrapper, SafetyCard } from "../../components";
import * as S from "./Safety.style";

const Safety = () => {
  return (
    <>
      <Header />
      <S.Background></S.Background>
      <S.ChartSection>
        <ChartWrapper />
      </S.ChartSection>
      <S.CardSection>
        <SafetyCard cardTitle="a동" safetyEmoji="이모지" description="설명" />
        <SafetyCard cardTitle="b동" safetyEmoji="이모지" description="설명" />
        <SafetyCard cardTitle="c동" safetyEmoji="이모지" description="설명" />
      </S.CardSection>
    </>
  );
};

export default Safety;
