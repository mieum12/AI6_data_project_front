import styled from "styled-components";
import { PRIMARY_COLOR, COLOR_WHITE } from "../../styles/color";

export const PostSection = styled.div`
  color: ${PRIMARY_COLOR};
  background-color: ${COLOR_WHITE};
  padding-top: 70px;
  padding-bottom: 20px;
  font-size: 15px;

  button {
    background-color: ${PRIMARY_COLOR};
    color: ${COLOR_WHITE};
    border:none;
    border-radius:10px;
    font-size: 20px;
    padding: 10px;
    margin-left: 1100px;
    margin-bottom: 10px;
  }
  
  table {
    text-align: center;
    border-spacing: 0;
    width: 1000px;
    margin: 0 auto;
    border-top: solid ${PRIMARY_COLOR} 20px;
    border-bottom: solid white 20px;
    border-radius: 20px;
  
  }

  .table-head {
    background-color: ${PRIMARY_COLOR};
    color: ${COLOR_WHITE};
  }
  .table-body {
    background-color: white;
  }
  th {
    padding-bottom: 20px
  }
  td {
    border-top: 1px solid ${PRIMARY_COLOR};
    padding: 20px;
  }

`;
