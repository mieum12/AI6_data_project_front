import * as S from "./ShelterList.style";
import Form from "./Form";
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

  // React.useEffect(() => {
  //   for (const el of shelter) {
  //     const element = document.getElementById(el.id);

  //     console.log("element", element);
  //     element.addEventListener("click", (e) => {
  //       console.log("e", e);
  //       console.log(e.id +  "clicked !" );
  //     });
  //   }
  // }, []);


  return (
    <S.ListTable>
      {/* <Form /> */}
      {/* <MapChart/> */}

      <S.Table>
        <table >
          <thead className="table-head">
            <tr>
              <td>서울시 00구</td>
              <td>시설 이름</td>
              <td>시설 종류</td>
              <td>시설 주소</td>
              <td>수용 가능 인원</td>
            </tr>
          </thead>
          <tbody className="table-body" >
              {shelter.map((shelter)=> (
                <tr key={shelter.id}>
                  <td className="gu-name">{shelter.guNm}</td>
                  <td className="shelter-name"><Form shelter={shelter.shelterNm}></Form></td>
                  <td className="shelter-type">{shelter.shelterType}</td>
                  <td className="shelter-address">{shelter.address}</td>
                  <td className="shelter-qty">{shelter.qty}명</td>
                </tr>
              ))}
          </tbody>
        </table>
      </S.Table>
      
    </S.ListTable>
  );
};
