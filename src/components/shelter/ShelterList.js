import * as S from "./ShelterList.style";
import Form from "../Form";
// import MapChart from "./SeoulMap";

//데이터 가져오기
import React, { useState, useEffect } from "react";
import axios from "axios";
// import { SERVER_BASE_URL } from "../../config/constants";

export const ShelterList = () => {
  const [shelter, setShelter] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/shelter`);
        setShelter(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  return (
    <S.ListTable>
      <Form />
      {/* <MapChart/> */}

      <S.Table>
        <table border="">
          <thead>
            <tr>
              <td>구</td>
              <td>시설 이름</td>
              <td>시설 종류</td>
              <td>시설 주소</td>
              <td>수용 가능 인원</td>
            </tr>
          </thead>
          <tbody>
            {/* 데이터받아오기 */}
            {shelter.map((shelter)=> (
              <tr key={shelter.id}>
                <td>{shelter.guNm}</td>
                <td>{shelter.shelterNm}</td>
                <td>{shelter.shelterType}</td>
                <td>{shelter.address}</td>
                <td>00명</td>
              </tr>
            ))}
          </tbody>
        </table>
      </S.Table>
      
    </S.ListTable>
  );
};
