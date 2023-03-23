import styled from "styled-components";
import {
  COLOR_WHITE,
  PRIMARY_COLOR,
  COLOR_LIGHT_GREEN,
} from "../../styles/color";

export const Chart = styled.div`
  background-color: ${COLOR_WHITE};
  display: block;
  text-align: center;
  margin: auto;
  width: 100%;
  color: ${PRIMARY_COLOR};

  .wrapper {
    padding: 30px;
  }

  .chartTitle {
    font-size: 35px;
    font-weight: bold;
  }

  .chartDes {
    color: ${COLOR_LIGHT_GREEN};
    padding: 20px 200px 20px 10px;
    text-align: end;
  }
`;
