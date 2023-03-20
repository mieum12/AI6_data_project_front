// components > safety> index.js 만들어 구조분해할당으로 컴포넌트 불러옴
import { Header, ChartWrapper, SafetyBox } from "../../components";
import * as S from "./Safety.style";

const Safety = () => {
  return (
    <>
      <Header />
      <S.Background></S.Background>
      <S.ChartSection>
        <ChartWrapper />
      </S.ChartSection>
      <SafetyBox />
    </>
  );
};

export default Safety;
