import styled from "styled-components";
import { PRIMARY_COLOR_WHITE, PRIMARY_COLOR_GREEN } from "../../config/constants";

export const PictureSection = styled.div`
  height: 900px;

  .picture {
    width: 100%;
  }
`;

export const BodySection1 = styled.div`
  height: 800px;
  background-color: ${PRIMARY_COLOR_WHITE};
  .textList {
    text-align: center;
    padding: 400px 0 0 0;
    color: ${PRIMARY_COLOR_GREEN};
  }
`;
export const BodySection2 = styled.div`
  display: grid;
  align-items: center;
  gap: -10px;
  height: 800px;
  background-color: ${PRIMARY_COLOR_GREEN};
  .nameList {
    display: flex;
    justify-content: center;
  }
  .name {
    width: 300px;
    height: 50px;
    padding: 25px 0 0 0;
    background-color: ${PRIMARY_COLOR_WHITE};
    border-radius: 20px;
    display: flex;
    justify-content: center;
  }
  .BoxList {
    display: flex;
    justify-content: center;
  }
`;
export const BodySection3 = styled.div`
  height: 800px;
  background-color: ${PRIMARY_COLOR_WHITE};
  .center3 {
    text-align: center;
    padding: 50px 0 0 0;
  }
`;
// height 원래 650px;
