import styled from "styled-components";
import {
  PRIMARY_COLOR_GREEN,
  PRIMARY_COLOR_WHITE,
} from "../../config/constants";

export const Background = styled.div`
  background-color: ${PRIMARY_COLOR_WHITE};
  width: 100%;
  height: 1976px;

  position: absolute;
  top: 10px;
  left: 0;
  z-index: -2;
`;

export const ChartSection = styled.div`
  /* 차트 2개 한 columns에 두기 */
  /* display: grid; */
  grid-template-columns: 1fr 1fr;
  justify-content: center;
`;

export const CardSection = styled.div`
  width: 100%;
  background-color: ${PRIMARY_COLOR_GREEN};
  display: flex;
  justify-content: center;
`;
