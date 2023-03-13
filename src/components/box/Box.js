import * as S from "./Box.style";
import { Link } from "react-router-dom";

export const Box = ({ boxImage, boxLink, LinkName, boxNumber, boxText }) => {
  return (
    <S.BoxSection>
      <div className="BoxList">
        <div className="Box">
          <img src={boxImage} alt="사진이 올 장소" />
          <h3>
            <Link to={boxLink}>{LinkName}</Link>
          </h3>
          <div>{boxNumber}</div>
          <div>{boxText}</div>
        </div>
      </div>
    </S.BoxSection>
  );
};
