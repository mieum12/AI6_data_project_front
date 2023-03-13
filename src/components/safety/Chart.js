import * as S from "./Chart.style";

export const Chart = ({ chartTitle, chartGraph }) => {
  return (
    <S.ChartSection>
      <div className="chartTitle">{chartTitle}</div>
      <div className="chartBack">{chartGraph}</div>
    </S.ChartSection>
  );
};
