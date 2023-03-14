import React from "react";
import * as S from "./ScatterRechart.style";
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const data01 = [
  { x: 10, y: 200, z: 200 },
  { x: 20, y: 100, z: 260 },
  { x: 10, y: 300, z: 400 },
  { x: 18, y: 250, z: 280 },
  { x: 14, y: 400, z: 500 },
  { x: 13, y: 280, z: 200 },
];
const data02 = [
  { x: 10, y: 30, z: 200 },
  { x: 20, y: 50, z: 260 },
  { x: 10, y: 70, z: 400 },
  { x: 18, y: 35, z: 280 },
  { x: 14, y: 50, z: 500 },
  { x: 13, y: 78, z: 200 },
];

export default function ScatterGraph({ graphTitle }) {
  return (
    <S.ScattersContainer>
      <S.ScattersTitle>{graphTitle} 안전도</S.ScattersTitle>
      {/* graph제목 지정가능 */}
      <S.ScattersWrapper>
        {/* 여기서 부터 진짜 핵심들 */}
        <ScatterChart
          width={700}
          height={400}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid />
          <XAxis type="number" dataKey="x" name="stature" unit="개" />
          <YAxis yAxisId="left" type="number" dataKey="y" name="rain" unit="ml" stroke="#8884d8" />
          <YAxis yAxisId="right" type="number" dataKey="y" name="fire" unit="건" orientation="right" stroke="#82ca9d" />
          <Tooltip cursor={{ strokeDasharray: "3 3" }} />
          <Scatter yAxisId="left" name="A school" data={data01} fill="#8884d8" />
          <Scatter yAxisId="right" name="A school" data={data02} fill="#82ca9d" />
        </ScatterChart>
      </S.ScattersWrapper>
    </S.ScattersContainer>
  );
}
