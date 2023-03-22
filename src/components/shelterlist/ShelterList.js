import * as S from "./ShelterList.style";
import ModalButton from "./ModalButton";
import { useShelter, useShelterDistrict } from "../../hooks";
import { useParams } from "react-router-dom";

//구
// import axios from "axios";
// import { SERVER_BASE_URL } from "../../config/constants";

export const ShelterList = () => {

  const {shelter} =useShelter();
  const {guNm} = useParams();
  const {shelterDistrict} =useShelterDistrict({guNm});
  console.log(guNm);

  //중복없이 구 이름 하나씩 모으기
  const filter = shelter.map((shelter) => {
    return shelter.guNm;
  });
  // Set으로 중복 구 없애기, 가나다순
  const totalGu = [...new Set(filter)].sort();

  return (
    <>
      <S.ListTable>
        <S.Table>
          <table>
            <thead className="table-head">
              <tr>
                <td>
                  {/* 구별 카테고리: select menu 만들기 */}
                  <select
                    name="gu"
                    className="select"
                    // 만약 여기서 옵션에서 강남구를 선택했을 때
                    // onchange={handleOnChange()}
                  >
                    <option>서울시 00구</option>
                    {totalGu.map((totalGu) => (
                      <option value={totalGu}>{totalGu}</option>
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
                //TODO : shelter의 guNm과 shelterDistrict의 고유값(guNm)이 같을 경우 아래 리스트업하기ㅠㅠ
                // .filter(shelter => shelter.guNm === shelterDistrict.${guNm})
                .map((shelter) => (
                  <tr key={shelter.id}>
                    <td className="gu-name">{shelter.guNm}</td>
                    <td className="shelter-name">
                      <ModalButton name={shelter} shelter={shelter.shelterNm}></ModalButton>
                    </td>
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
