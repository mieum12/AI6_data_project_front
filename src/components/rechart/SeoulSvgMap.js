import * as S from "./SeoulSvgMap.style";
import { useEffect } from "react";

// 1. path#id를 객체 배열로 생성

const GU_LIST = [{ id: "Dobong-gu" }, { id: "Dongdaemun-gu" }];

export const SeoulMap = () => {
  useEffect(() => {
    for (const el of GU_LIST) {
      const element = document.getElementById(el.id);

      console.log("element", element);
      element.addEventListener("click", (e) => {
        console.log("e", e);
        console.log(e.target.id + "clicked !");
      });
    }
  }, []);

  return <S.StyledSeoul />;
};
