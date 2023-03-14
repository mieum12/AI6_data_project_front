import * as S from "./ChartCard.style";

export const ChartCard = ({ cardTitle, safetyEmoji, description }) => {
  return (
    <S.SafetySection>
      <div>
        <div className="Box">
          {cardTitle} <br />
          {safetyEmoji} <br />
          {description}
        </div>
      </div>
    </S.SafetySection>
  );
};
