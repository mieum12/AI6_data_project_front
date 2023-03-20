import { ShelterMap, ShelterList, CategoryList } from "../../components/index.js";
import * as S from "./Shelter.style";


function Shelter() {

  //임시 데이터
  const gu_category = [
    {id: 1,
      guNm: "강남구"
    },
    {id: 2,
      guNm: "강동구"
    },
    {id: 3,
      guNm: "강북구"
    },
    {id: 4,
      guNm: "강서구"
    },
    {id: 5,
      guNm: "관악구"
    },
  ]

  return (
    <div>
        {/* 카테고리 어떻게 만들까 test1: 버튼 전부 구현 */}
        {/* <S.Category1>
          <button>강남구</button>
          <button>강동구</button>
          <button>강북구</button>
          <button>강서구</button>
          <button>관악구</button>
          <button>광진구</button>
          <button>구로구</button>
          <button>금천구</button>
          <button>노원구</button>
          <button>도봉구</button>
          <button>동대문구</button>
          <button>동작구</button>
        </S.Category1>
        <S.Category2>
          <button>마포구</button>
          <button>서대문구</button>
          <button>서초구</button>
          <button>성동구</button>
          <button>성북구</button>
          <button>송파구</button>
          <button>양천구</button>
          <button>영등포구</button>
          <button>용산구</button>
          <button>은평구</button>
          <button>종로구</button>
          <button>중구</button>
          <button>중랑구</button>
        </S.Category2> */}
        
        {/* 카테고리 어떻게 만들까 test2: 구별로 묶은 데이터 가져오기(지금은 임시로 그냥 gu_category 가져옴) */}
        <S.Category1>
        {gu_category.map((gu_category)=> (
                <div key={gu_category.id}>
                  <button className="gu-name">{gu_category.guNm}</button>
                </div>
                  ))}
        </S.Category1>

        <CategoryList Category={gu_category}></CategoryList>

      <S.FlexContainer>
        <ShelterMap />
        <ShelterList />
      </S.FlexContainer>
    </div>
  );
}

export default Shelter;
