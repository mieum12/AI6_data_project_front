import styled from "styled-components";
import {
  PRIMARY_COLOR_GREEN,
  PRIMARY_COLOR_WHITE,
} from "../../config/constants";

export const ListTable = styled.div`
  // display: flex;
  align-self: center;
  width: 500px;
  height: 400px;
  background: ${PRIMARY_COLOR_WHITE};
  margin: 10px;
  padding: 20px;
  border-radius: 20px;
  border-style: solid;
  border-color: ${PRIMARY_COLOR_GREEN};
  border-width: 10px;
`;

export const Table = styled.div`
  background-color: lightgreen;
  text-align: center;
  width : 500px;
  
  table {
    width: 100%;
    // border-top: 1px solid grey;
    border-collapse: collapse;
    border-left: none;
    border-right: none;
    font-size: 10px
  }

  th, td {
      border-bottom: 1px solid grey;
      border-left: none;
      border-right: none;
    }

`
