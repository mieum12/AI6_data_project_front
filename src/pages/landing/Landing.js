import Header from "../../components/Header";
import * as S from "./Landing.style";
import { Box } from "../../components/landing";
import RainBarGraph from "../../components/rechart/RainRechart";
import FireBarGraph from "../../components/rechart/FireRechart";
import ScatterGraph from "../../components/rechart/ScatterRechart";
// import MapChart from "../../components/rechart/SimpleMap";
import background from "../../asset/background.jpg";
import SeoulMap from "../../components/rechart/SeoulSvgMap";

const LandingPage = () => {
  return (
    <>
      <Header />
      <S.PictureSection>
        <div>
          <img className="picture" src={background} alt="family" />
        </div>
      </S.PictureSection>
      <S.BodySection1>
        <div className="textList">
          <div>이재민을 위한 서비스 어플</div>
          <div>재난 대비 수용시설 현황에 대한 글 작성</div>
        </div>
      </S.BodySection1>
      <S.BodySection2>
        <div className="nameList">
          <div className="name">000 이용법</div>
        </div>
        <div className="BoxList">
          <Box
            boxImage="이미지1"
            boxLink="링크1"
            boxNumber="번호1"
            boxText="소개글1"
          />
          <Box
            boxImage="이미지2"
            boxLink="링크2"
            boxNumber="번호2"
            boxText="소개글2"
          />
          <Box
            boxImage="이미지3"
            boxLink="링크3"
            boxNumber="번호3"
            boxText="소개글3"
          />
        </div>
      </S.BodySection2>
      <S.BodySection3>
        <div className="center3">
          <div>
            <RainBarGraph />
            <FireBarGraph />
            <ScatterGraph />
            <SeoulMap />
          </div>
        </div>
      </S.BodySection3>
    </>
  );
};

export default LandingPage;
