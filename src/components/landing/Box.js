import React from "react";
import * as S from "./Box.style";
import { Link } from "react-router-dom";

export const Box = ({ boxImage, boxLink, LinkName, boxNumber, boxText1,boxText2,boxText3,boxText4}) => {
  return (
    <S.BoxSection>
      <div className="BoxList">
        <div className="Box">
          <img src={boxImage} alt="사진이 올 장소" />
          <h3>
            <Link to={boxLink}>{LinkName}</Link>
          </h3>
          <div>{boxNumber}</div>
          <div>{boxText1}</div>
          <div>{boxText2}</div>
          <div>{boxText3}</div>
          <div>{boxText4}</div>
        </div>
      </div>
    </S.BoxSection>
  );
};
