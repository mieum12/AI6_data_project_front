import styled from "styled-components";
import {
  PRIMARY_COLOR_GREEN,
  PRIMARY_COLOR_WHITE,
} from "../../config/constants";

export const ListTable = styled.div`
  // display: flex;
  align-self: center;
  width: 700px;
  height: 440px;
  background: ${PRIMARY_COLOR_WHITE};
  margin: 10px;
  // padding: 20px;
  border-radius: 20px;
  border-style: solid;
  border-color: ${PRIMARY_COLOR_GREEN};
  border-width: 10px;
  
`;

export const Table = styled.div`
  text-align: center;
  color: ${PRIMARY_COLOR_GREEN};
  background-color: ${PRIMARY_COLOR_WHITE}
  width : 500px;
  border-color: ${PRIMARY_COLOR_GREEN};
  
  table {
    border-collapse: collapse;
    // border-left: none;
    // border-right: none;
    font-size: 13px
    // overflow: scroll;
    
  }
  .table-head {
    background-color: ${PRIMARY_COLOR_GREEN};
    color: ${PRIMARY_COLOR_WHITE}
  }
  .table-body {
    height: 500px;
    overflow: scroll;
  }

`
