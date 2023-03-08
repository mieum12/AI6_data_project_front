import React from "react";
import styled from "styled-components";

function ShelterMap() {
  return (
    <Map> 지도 가져올 곳
    </Map>
  );
}

const Map = styled.div`
display: flex;
align-self: center;
width: 400px;
height: 400px;
background: #f8f5f1;
margin: 10px;
padding: 20px;
border-radius: 30px;
border-style: solid;
border-color: #425f57;
border-width:10px;
`

export default ShelterMap;