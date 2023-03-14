// components > safety> index.js 만들어 구조분해할당으로 컴포넌트 불러옴
import { Header, Chart, ChartCard } from "../../components";
import * as S from "./Safety.style";

const Safety = () => {
  return (
    <>
      <Header />
      <S.Background></S.Background>
      {/* 기존 코드에서 Chart 부분을 component로 분류하여 작성 */}
      <Chart chartTitle="재난 발생 현황" chartGraph="재난 누적 그래프" />
      <Chart
        chartTitle="수용 시설 현황"
        chartGraph="통합 자치구 수용시설 그래프"
      />
      <ChartCard />
    </>
  );
};

export default Safety;
