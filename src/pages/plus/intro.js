import * as S from "./intro.style"

export function Intro() {
  return(<>
    <S.Part1>
      <div className="title">"이재민"</div>
      <div className="text">
        <div className="t1">罹災民</div>
        <div className="t2">재해를 입은 사람</div>
        <div className="t3">자연재해나 인재로 발생한 사건 사고로 인해 발생</div>
      </div>
    </S.Part1>
    <S.Part2>
      <div className="title1">재난 뒤 찾아오는 막막함,</div>
      <div className="title2">안전한 머물 곳을 찾으신다면</div>
      <div className="text">반딧불이가 잠시동안 따듯한 쉼터로 안내드립니다. <br/><br/> 어두운 밤에 빛을 비추는 반딧불이처럼 이재민 분들의 일상 회복을 위한 길을 저희 반딧불이가 함께 걷겠습니다.</div>
    </S.Part2>
    </>
  )
}