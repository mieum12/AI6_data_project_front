// components > safety> index.js 만들어 구조분해할당으로 컴포넌트 불러옴
import { ChartWrapper, SafetyCard, LandingChart } from "../../components";
import * as S from "./Safety.style";

const Safety = () => {
  return (
    <>
      <S.Background></S.Background>
      <ChartWrapper />
      <SafetyCard />
      <LandingChart />
    </>
  );
};

export default Safety;
