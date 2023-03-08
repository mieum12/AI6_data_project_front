import React from "react";
import styled from "styled-components";

function ShelterList() {
  return (
    <ListTable> 수용시설 리스트 표 가져올 곳
    </ListTable>
  );
}

const ListTable = styled.div`
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

export default ShelterList;