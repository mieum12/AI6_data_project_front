import styled from "styled-components";
import { PRIMARY_COLOR_GREEN, PRIMARY_COLOR_WHITE } from "../../styles/primaryColor";

export const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 500px;
  padding-bottom: 120px;
  background-color: ${PRIMARY_COLOR_WHITE};
`;

export const Category1 = styled.div`
background-color: ${PRIMARY_COLOR_WHITE};
// background-color: red;

display: flex;
justify-content: flex-end;
padding: 0 140px 5px 140px;
button {
  color: ${PRIMARY_COLOR_WHITE};
  background-color: ${PRIMARY_COLOR_GREEN};
  width: 60px;
  height: 30px;
  margin-top: auto;
  margin-right: 3px;
  font-size: 13px;
  border: none;
  border-radius: 10px;
}
button:hover {
  background-color: ${PRIMARY_COLOR_WHITE};
  color: ${PRIMARY_COLOR_GREEN};
  border: solid;
  border-color: ${PRIMARY_COLOR_GREEN};

}
`
// export const Category2 = styled.div`
// background-color: ${PRIMARY_COLOR_WHITE};
// // background-color: red;

// display: flex;
// justify-content: flex-end;
// padding-right: 140px;
// padding-left: 140px;
// button {
//   color: ${PRIMARY_COLOR_WHITE};
//   background-color: ${PRIMARY_COLOR_GREEN};
//   width: 60px;
//   height: 30px;
//   margin-top: auto;
//   margin-right: 3px;
//   font-size: 13px;
//   border: none;
//   border-radius: 10px;
// }
// `