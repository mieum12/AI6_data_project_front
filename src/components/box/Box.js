import React from "react";
import * as S from "./Box.style";

const Box = ({ boxImage, boxLink, boxNumber, boxText }) => {
  return (
    <S.BoxSection>
      <div className="BoxList">
        <div className="Box">
          <h3>{boxImage}</h3>
          <div>{boxLink}</div>
          <div>{boxNumber}</div>
          <div>{boxText}</div>
        </div>
      </div>
    </S.BoxSection>
  );
};

export default Box;
