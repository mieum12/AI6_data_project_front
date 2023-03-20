import styled from "styled-components";
import {
  PRIMARY_COLOR_WHITE,
} from "../../config/constants";

export const PlusList = styled.div`
  display: grid;
  align-items: center;
  gap: -10px;
  height: 650px;
  background-color: ${PRIMARY_COLOR_WHITE};
  .nameList {
    display: flex;
    justify-content: center;
  }
  .BoxList {
    display: flex;
    justify-content: center;
  }
`;
