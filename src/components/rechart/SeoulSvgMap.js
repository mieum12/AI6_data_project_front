import * as S from "./SeoulSvgMap.style";
import { useEffect } from "react";

// 1. path#id를 객체 배열로 생성

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
  useEffect(() => {
    for (const el of GU_LIST) {
      const element = document.getElementById(el.id);

      // console.log("element", element);
      element.addEventListener("click", (e) => {
        e.preventDefault();
        alert("완료!");
        console.log("e", e);
        console.log(e.target.id + "  clicked !");
      });
    }
  }, []);

  return <S.StyledSeoul />;
};
