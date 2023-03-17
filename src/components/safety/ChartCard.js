import * as S from "./ChartCard.style";
import { Chart } from "./Chart";

export const ChartCard = ({ chartTitle, chartGraph }) => {
  return (
    <S.ChartSection>
      <div className="chartTitle">{chartTitle}</div>
      <div className="chartBack">
        <Chart />
      </div>
    </S.ChartSection>
  );
};
