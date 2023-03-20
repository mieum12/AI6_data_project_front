import { ShelterMap, ShelterList } from "../../components/index.js";
import * as S from "./Shelter.style";

function Shelter() {
  return (
    <div>
      <S.FlexContainer>
        <ShelterMap />
        <ShelterList />
      </S.FlexContainer>
    </div>
  );
}

export default Shelter;
