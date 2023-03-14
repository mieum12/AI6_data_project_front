import styled from "styled-components";
import {
  PRIMARY_COLOR_GREEN,
  PRIMARY_COLOR_WHITE,
} from "../../config/constants";

export const ChartSection = styled.div`
  margin: 20px 0 80px 0;
  width: 100%;
  height: 550px;

  .chartTitle {
    margin: auto;

    text-align: center;
    font-size: 32px;
    color: ${PRIMARY_COLOR_WHITE};
    padding-top: 10px;

    width: 238px;
    height: 50px;

    background: ${PRIMARY_COLOR_GREEN};
    border-radius: 2010px;
  }

  .chartBack {
    text-align: center;
    color: ${PRIMARY_COLOR_WHITE};

    margin: auto;
    margin-top: 50px;
    display: block;
    padding-top: 30px;

    width: 655px;
    height: 408.5px;
    background: ${PRIMARY_COLOR_GREEN};
    border-radius: 10px;
  }
`;
