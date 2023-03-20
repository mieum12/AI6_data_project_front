import * as S from "./ShelterList.style";
import ModalButton from "./ModalButton"
import { useShelter } from "../../hooks";
import { useState } from "react";

export const ShelterList = () => {
  const {shelter} =useShelter();
  console.log({shelter})

  return (<>
    <S.ListTable>
      
      <S.Table>
        <table >
          <thead className="table-head">
            <tr>
              <td>서울시 00구</td>
              <td>시설 이름</td>
              <td>시설 종류</td>
              <td>시설 주소</td>
              <td>수용 인원</td>
            </tr>
          </thead>
          <tbody className="table-body" >
              {shelter.map((shelter)=> (
                <tr key={shelter.id}>
                  <td className="gu-name">{shelter.guNm}</td>
                  <td className="shelter-name"><ModalButton shelter={shelter.shelterNm}></ModalButton></td>
                  {/* shelter이름을 클릭하면 모달 창이 뜨는데 클릭한 이름의 id에 해당하는 값들을 모달 창에 전달하고싶어요 */}
                  <td className="shelter-type">{shelter.shelterType}</td>
                  <td className="shelter-address">{shelter.address}</td>
                  <td className="shelter-qty">{shelter.qty}명</td>
                </tr>
              ))}
          </tbody>
        </table>
      </S.Table>
      
    </S.ListTable>
    </>
  );
};
