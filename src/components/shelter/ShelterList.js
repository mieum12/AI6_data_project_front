import * as S from "./ShelterList.style";
import Form from "../Form";
import MapChart from "./SeoulMap";

export const ShelterList = () => {
  return (
    <S.ListTable>
      <Form />
      <MapChart/>
    </S.ListTable>
  );
};

