import * as S from "./ChartCard.style";

export const ChartCard = ({ chartTitle, chartGraph }) => {
  return (
    <S.ChartSection>
      <div className="chartTitle">{chartTitle}</div>
      <div className="chartBack">{chartGraph}</div>
    </S.ChartSection>
  );
};
