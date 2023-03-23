import styled from "styled-components";
import { PRIMARY_COLOR, COLOR_WHITE } from "../../styles/color";

export const PostSection = styled.div`
  display: block;
  text-align: center;
  color: ${PRIMARY_COLOR};
  background-color: ${COLOR_WHITE};
  width: 100%;

  table {
    border-collapse: collapse;
    margin: auto;
  }

  thead {
    background-color: ${PRIMARY_COLOR};
    color: ${COLOR_WHITE};
  }

  tr {
    border: 20px;
    border-radius: 20px;
  }

  th,
  td {
    border-bottom: 1px solid ${PRIMARY_COLOR};

    padding: 10px;
    padding: 20px 30px;
  }

  .postTitle {
    width: 450px;
  }

  tbody {
  }
`;
