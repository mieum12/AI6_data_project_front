import * as S from "./SafetyCard.style";

export const SafetyCard = ({ cardTitle, safetyEmoji, description }) => {
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
