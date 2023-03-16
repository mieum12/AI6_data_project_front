import React from "react";
import { ReactComponent as Seoul } from "../../../src/asset/Seoul_districts.svg";
import styled from "styled-components";

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
  width: 400px;
  height: 400px;
  padding: 10px;

  .svg {
    fill: lightgrey;
    stroke: white;
  }

  path:hover {
    fill: orange;
  }
`;

export default SeoulMap;
