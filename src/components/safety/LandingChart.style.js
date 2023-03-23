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
    padding: 50px;
  }

  .chartDesTitle {
    font-size: 35px;
    font-weight: bold;
  }

  .chartDes {
    color: ${COLOR_LIGHT_GREEN};
    padding: 30px 270px 20px 10px;
    text-align: end;
  }

  /* chart style */
  .chartFlex {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .chartTitle {
    opacity: 0;
    /* margin: auto;
    margin-top: 20px;

    text-align: center;
    font-size: 20px;
    color: ${COLOR_WHITE};
    padding-top: 10px;

    width: 170px;
    height: 40px;

    background: ${PRIMARY_COLOR};
    border-radius: 2010px; */
  }

  .chartBack {
    text-align: center;
    color: ${PRIMARY_COLOR};

    margin: auto;
    margin-top: 15px;
    display: block;
    padding-top: 30px;

    width: 500px;
    height: 300px;
    background: ${PRIMARY_COLOR};
    border-radius: 10px;
  }
`;
