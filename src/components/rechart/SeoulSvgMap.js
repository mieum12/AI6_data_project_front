import React from "react";
import { ReactComponent as Seoul } from "../../../src/asset/Seoul_districts.svg";
import styled from "styled-components";
import { PRIMARY_COLOR_GREEN } from "../../config/constants";

const SeoulMap = () => {
  return (
    <>
      <Card>
        <div>
          <Seoul />
        </div>
      </Card>
    </>
  );
};

const Card = styled.div`
  .svg {
    fill: lightgrey;
    stroke: white;
  }

  path:hover {
    fill: ${PRIMARY_COLOR_GREEN};
  }
`;

export default SeoulMap;
