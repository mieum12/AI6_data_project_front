import styled from "styled-components";
import {
  PRIMARY_COLOR_GREEN,
  PRIMARY_COLOR_WHITE,
} from "../../config/constants";

export const SafetySection = styled.div`
  display: grid;
  align-items: center;
  gap: -10px;
  height: 500px;
  background-color: ${PRIMARY_COLOR_GREEN};

  .Box {
    width: 200px;
    height: 300px;
    background-color: ${PRIMARY_COLOR_WHITE};
    margin: 20px;
    padding: 20px;
    border-radius: 30px;
    border-style: solid;
    border-color: ${PRIMARY_COLOR_GREEN};
    border-width: 10px;
  }
`;
