import styled from "styled-components";
import {
  PRIMARY_COLOR_GREEN,
  PRIMARY_COLOR_WHITE,
} from "../../config/constants";

export const BoxSection = styled.div`
  .BoxList {
    display: flex;
    justify-content: center;
  }
  .Box {
    width: 200px;
    height: 400px;
    // background-color: ${PRIMARY_COLOR_WHITE};
    color: ${PRIMARY_COLOR_GREEN};
    margin: 20px;
    padding: 20px;
    border-radius: 30px;
    border-style: solid;
    border-color: ${PRIMARY_COLOR_GREEN};
    border-width: 10px;
    background-color: ${(props) => props.backColor || PRIMARY_COLOR_WHITE }
  }
  img {
      width: 200px;
      height: 200px;
      border-radius: 20px;
    }
  .text-link {
    color: inherit;
    text-decoration: inherit;
    display: flex;
    justify-content: center;
  }
`;
