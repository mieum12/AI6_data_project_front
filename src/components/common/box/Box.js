import * as S from "./Box.style";
import { Link } from "react-router-dom";

// TODO: Box 컴포넌트 landing 폴더 밖으로 변경
export const Box = ({ boxImage, boxLink, LinkName, boxTitle, boxText }) => {
  return (
    <S.BoxSection>
      <div className="BoxList">
        <div className="Box">
          <img src={boxImage} alt="사진이 올 장소" />
          <h3>
            <Link to={boxLink} className="text-link" target="_blank">
              {LinkName}
            </Link>
          </h3>
          <h3 className="title">{boxTitle}</h3>
          <div>
            {boxText.split("\n").map((text) => (
              <pre>{text}</pre>
            ))}
          </div>
          {/* <div>{boxText}</div> */}
        </div>
      </div>
    </S.BoxSection>
  );
};
