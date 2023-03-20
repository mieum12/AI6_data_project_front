import * as S from "./SeoulSvgMap.style";
import { useEffect } from "react";

// 1. path#id를 객체 배열로 생성
// 구를 한글로 변환하고 싶은데 svg파일 한글로 변환하면 먹히지가 않음..
// 유니코드를 이용하라는 거 같기도 한데 변경해서 넣어봐도 안되서 잘 모르겠습니다ㅠ
const GU_LIST = [
  { id: "Dobong-gu" },
  { id: "Dongdaemun-gu" },
  { id: "Eunpyeong-gu" },
  { id: "Gangbuk-gu" },
  { id: "Gangdong-gu" },
  { id: "Gangseo-gu" },
  { id: "Geumcheon-gu" },
  { id: "Guro-gu" },
  { id: "Gwanak-gu" },
  { id: "Gwangjin-gu" },
  { id: "Gangnam-gu" },
  { id: "Jongno-gu" },
  { id: "Jung-gu" },
  { id: "Jungnang-gu" },
  { id: "Mapo-gu" },
  { id: "Nowon-gu" },
  { id: "Seocho-gu" },
  { id: "Seodaemun-gu" },
  { id: "Seongbuk-gu" },
  { id: "Seongdong-gu" },
  { id: "Songpa-gu" },
  { id: "Yangcheon-gu" },
  { id: "Yeongdeungpo-gu_1_" },
  { id: "Yongsan-gu" },
];

export const SeoulMap = () => {
  // useEffect(() => {
  //   for (const el of GU_LIST) {
  //     const element = document.getElementById(el.id);

  //     console.log("element", element);
  //     element.addEventListener("click", (e) => {
  //       e.preventDefault();
  //       alert("완료!");
  //       console.log("e", e);
  //       console.log(e.target.id + "  clicked !");
  //     });
  //   }
  // }, []);  코치님이 짜주신 로직.

  useEffect(() => {
    for (const el of GU_LIST) {
      const element = document.getElementById(el.id);

      element.addEventListener("click", click);
    }
    function click(e) {
      e.preventDefault();
      window.alert(e.target.id + "입니다!\n관련 시설을 찾고 싶은 신가요?");
      window.location = "../ShelterPage";
      // window.location = <Link to={ROUTE.SHELTER_PAGE.link} /> 링크 to 설정 시
      // 화면이 이동은 하는데 http://localhost:3000/[object%20Object] 여기로 이동됩니다.
    }
  }, []);
  //클릭시 alert창에 해당 문구 뜨면서 ShelterPage로 이동.
  return <S.StyledSeoul />;
};
