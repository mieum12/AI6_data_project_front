import React from "react";
import * as S from "./Rechart.style";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
//npm install recharts 필요
//npm install styled-componets 필요

LineGraph.defaultProps = {
  //여기에 axios로 json형식으로 data받는거겠지요..? 아마도
  SafetyData: [
    {
      name: "강남구",
      fire: 4000,
      rain: 2400,
      amt: 2400,
    },
    {
      name: "강북구",
      fire: 3000,
      rain: 1398,
      amt: 2210,
    },
    {
      name: "강동구",
      fire: 2000,
      rain: 9800,
      amt: 2290,
    },
    {
      name: "동대문구",
      fire: 2780,
      rain: 3908,
      amt: 2000,
    },
    {
      name: "서대문구",
      fire: 1890,
      rain: 4800,
      amt: 2181,
    },
    {
      name: "송파구",
      fire: 2390,
      rain: 3800,
      amt: 2500,
    },
    {
      name: "강서구",
      fire: 3490,
      rain: 4300,
      amt: 2100,
    },
  ],
};

export default function LineGraph({ graphTitle, SafetyData }) {
  //매개변수로 Data랑 Title넣음
  return (
    <S.LineGraphsContainer>
      <S.LineGraphsTitle>{graphTitle} 안전도</S.LineGraphsTitle>
      {/* graph제목 지정가능 */}
      <S.LineGraphsWrapper>
        {/* 여기서 부터 진짜 핵심들 */}
        <LineChart
          width={700} //css적요소
          height={280} //css적요소
          data={SafetyData} //위에서 정의한 json 목록들을 저장해둔 변수명
          margin={{
            //css적요소
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          {/* 격자점? 인듯 */}
          <XAxis dataKey="name" />
          {/* data지정해둔 목록들의 name키의 value값들을 x축으로 지정한다. */}
          <YAxis />
          <Tooltip />
          {/* 마우스 가져다 됐을 시 각 점에 비교현황식으로 흰색박스에 툴이 보임. */}
          <Line type="monotone" dataKey="fire" stroke="#6ABD8C" activeDot={{ r: 8 }} isAnimationActive={true} />
          <Line type="monotone" dataKey="rain" stroke="#6ABD8C" isAnimationActive={true} />
          {/* 각각의 line으로 하나씩 선을 만들 수 있고 type은 잘 모르겠음
            datakey  fire => 마찬가지로 위에 정의한 json중 fire키의 value값 가져오란 뜻
            stroke => 색상
            activeDot => 점끼리 크기비교해서 더 큰쪽에 도트가 더 커보이는 효과.. 자세히는 잘 ㅜ
            isAnimationActive => 애니메이션 효과!! false 하면 꺼짐! */}
        </LineChart>
      </S.LineGraphsWrapper>
    </S.LineGraphsContainer>
  );
}
