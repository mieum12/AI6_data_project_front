import React from "react";
import styled from "styled-components";

const Picture = () => {
  return (
    <PictureSection>
      <div>
        <img className="picture" src="../asset/background.jpg" alt="family" />
      </div>
    </PictureSection>
  );
};

const PictureSection = styled.div`
  height: 900px;

  .picture {
    width: 100%;
  }
`;
export default Picture;
