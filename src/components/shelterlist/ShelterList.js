import * as S from "./ShelterList.style";
import ModalButton from "./ModalButton";
import { useShelter, useShelterDistrict } from "../../hooks";
import { useParams } from "react-router-dom";

export const ShelterList = () => {
  const { guNm } = useParams();
  const { shelter } = useShelter(guNm);

  console.log("guNm", guNm);

  //중복없이 구 이름 하나씩 모으기
  const filter = shelter.map((shelter) => {
    return shelter.guNm;
  });
  // Set으로 중복 구 없애기, 가나다순
  const totalGu = [...new Set(filter)].sort();

  function guHandler() {}

  return (
    <>
      <S.ListTable>
        <S.Table>
          <table>
            <thead className="table-head">
              <tr>
                <td>
                  <select
                    name="gu"
                    className="select"
                    // 만약 여기서 옵션에서 강남구를 선택했을 때
                  >
                    <option>서울시 00구</option>
                    {totalGu.map((totalGu, index) => (
                      <option key={index} value={totalGu} onChange={guHandler}>
                        {totalGu}
                      </option>
                    ))}
                  </select>
                </td>
                <td>시설 이름</td>
                <td>시설 종류</td>
                <td>시설 주소</td>
                <td>수용 인원</td>
              </tr>
            </thead>
            <tbody className="table-body">
              {shelter
                //TODO : shelter의 guNm과 shelterDistrict/guNm의 guNm이 같을 경우 아래 리스트업하기
                // .filter(shelter => shelter.guNm === shelterDistrict.${guNm})
                .map((shelter) => (
                  <tr key={shelter.id}>
                    <td className="gu-name">{shelter.guNm}</td>
                    <td className="shelter-name">
                      <ModalButton
                        name={shelter}
                        shelter={shelter.shelterNm}
                      ></ModalButton>
                    </td>
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