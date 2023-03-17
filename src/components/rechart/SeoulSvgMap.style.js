import { ReactComponent as Seoul } from "../../../src/asset/Seoul_districts.svg";
import styled from "styled-components";
import { PRIMARY_COLOR_GREEN } from "../../config/constants";

export const StyledSeoul = styled(Seoul)`
  width: 700px;
  height: 700px;
  path:hover {
    fill: ${PRIMARY_COLOR_GREEN};
  }
`;
