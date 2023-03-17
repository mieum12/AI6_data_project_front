import * as S from "./ShelterList.style";
import Form from "../Form";
// import MapChart from "./SeoulMap";

//데이터 가져오기
import React, { useState, useEffect } from "react";
import axios from "axios";
import { SERVER_BASE_URL } from "../../config/constants";

export const ShelterList = () => {
  const [shelter, setShelter] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${SERVER_BASE_URL}/shelter`);
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

      {/* 데이터받아오기 */}
      {shelter.map((shelter) => (
        <div key={shelter.shortId}>
          <div>{shelter.guNm}</div>
          <div>{shelter.shelter}</div>
          <div>{shelter.address}</div>
        </div>
      ))}
    </S.ListTable>
  );
};
