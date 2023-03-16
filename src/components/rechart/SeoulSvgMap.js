import React from "react";
import { ReactComponent as Seoul } from "../../../src/asset/Seoul_map.svg";
import styled from "styled-components";

const SeoulMap = () => {
  return (
    <>
      <Card>
        <div className="svg">
          <Seoul />
        </div>
      </Card>
    </>
  );
};

const Card = styled.div`
  padding: 10px;
  .svg {
    fill: lightgrey;
    stroke: white;
  }
`;

export default SeoulMap;
