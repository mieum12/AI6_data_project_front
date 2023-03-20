import * as S from "./SafetyBox.style";
import { Box } from "../landing";

export function SafetyBox() {
  return (
    <>
      <S.PlusList>
        <div className="BoxList">
          <Box
            // boxImage={}
            boxNumber="a동"
            boxText={
              "해당 지역은 재난 피해 대비 \n수용시설이 80% 존재하여\n  안전도는 좋음 입니다."
            }
          />
          <Box
            // boxImage={}
            boxNumber="b동"
            boxText={
              "해당 지역은 재난 피해 대비 \n수용시설이 80% 존재하여\n  안전도는 좋음 입니다."
            }
          />
          <Box
            // boxImage={}
            boxNumber="c동"
            boxText={
              "해당 지역은 재난 피해 대비 \n수용시설이 80% 존재하여\n  안전도는 좋음 입니다."
            }
          />
        </div>
      </S.PlusList>
    </>
  );
}
