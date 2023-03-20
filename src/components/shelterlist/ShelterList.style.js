import styled from "styled-components";
import {
  PRIMARY_COLOR_GREEN,
  PRIMARY_COLOR_WHITE,
} from "../../styles/primaryColor";

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
  height: 100%;
  display: block;
  overflow: scroll;
  
  table {
    border-collapse: collapse;
    font-size: 13px
    
  }
  .table-head {
    background-color: ${PRIMARY_COLOR_GREEN};
    color: ${PRIMARY_COLOR_WHITE}
  }
  .table-body {
    height: 500px;
  }
  .gu-name {
    width: 70px;
  }
  .shelter-name {
    width: 200px
  }
  .shelter-type {
    width: 100px
  }
  .shelter-qty {
    width: 50px
  }

`
