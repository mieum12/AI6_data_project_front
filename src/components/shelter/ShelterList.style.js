import styled from "styled-components";
import {
  PRIMARY_COLOR_GREEN,
  PRIMARY_COLOR_WHITE,
} from "../../config/constants";

export const ListTable = styled.div`
  display: flex;
  align-self: center;
  width: 450px;
  height: 400px;
  background: ${PRIMARY_COLOR_WHITE};
  margin: 10px;
  padding: 20px;
  border-radius: 20px;
  border-style: solid;
  border-color: ${PRIMARY_COLOR_GREEN};
  border-width: 10px;
`;
