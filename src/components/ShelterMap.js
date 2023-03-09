import React, { useEffect } from "react";
import styled from "styled-components";

const{kakao}=window;

function ShelterMap() {
  useEffect(()=>{
    const mapContainer = document.getElementById('map'); // 지도를 표시할 div 
    const mapOption = { 
      center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
      level: 3 // 지도의 확대 레벨
    };
    // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
    const map = new kakao.maps.Map(mapContainer, mapOption); 
  },[])

  return (
    <Map id="map" style={{width:'340',height:'390'}}/>
  );
}

const Map = styled.div`
display: flex;
align-self: center;
width: 360px;
height: 400px;
background: #f8f5f1;
margin: 10px;
padding: 20px;
border-radius: 20px;
border-style: solid;
border-color: #425f57;
border-width:10px;
`

export default ShelterMap;