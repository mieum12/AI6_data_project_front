import React from "react";
import * as S from "./shelterList.style"
import Form from "../Form";
// import ShelterRoadview from "./ShelterRoadview";


function ShelterList() {

  return (
    <S.ListTable>
      {/* <div className={styles.listTable}> 수용시설 리스트 표 가져올 곳 */}
        <Form/>
        {/* <ShelterRoadview/> */}
      {/* </div> */}
    </S.ListTable>
  );
}

export default ShelterList;