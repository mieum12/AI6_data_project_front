import { useFire, useRain, useShelter } from "../../hooks";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data01 = [
  { x: 100, y: 200, z: 200 },
  { x: 120, y: 100, z: 260 },
  { x: 170, y: 300, z: 400 },
  { x: 140, y: 250, z: 280 },
  { x: 150, y: 400, z: 500 },
  { x: 110, y: 280, z: 200 },
];
const data02 = [
  { x: 300, y: 300, z: 200 },
  { x: 400, y: 500, z: 260 },
  { x: 200, y: 700, z: 400 },
  { x: 340, y: 350, z: 280 },
  { x: 560, y: 500, z: 500 },
  { x: 230, y: 780, z: 200 },
  { x: 500, y: 400, z: 200 },
  { x: 300, y: 500, z: 260 },
  { x: 240, y: 300, z: 400 },
  { x: 320, y: 550, z: 280 },
  { x: 500, y: 400, z: 500 },
  { x: 420, y: 280, z: 200 },
];

export const ShelterChart = () => {
  const { rain } = useRain();
  const { fire } = useFire();
  const { shelter } = useShelter();

  const haengjeong = {
    도심권: [],
    동남1생활권: [],
    동남2생활권: [],
    동북1생활권: [],
    동북2생활권: [],
    서남1생활권: [],
    서남2생활권: [],
    서남3생활권: [],
    서북생활권: [],
  };

  //구 => 행정구역으로 구분하는 함수
  function selectDistrict(shelter) {
    switch (shelter.guNm) {
      case "종로구":
      case "중구":
      case "용산구":
        haengjeong.도심권.push(shelter);
        break;
      case "서초구":
      case "강남구":
        haengjeong.동남1생활권.push(shelter);
        break;
      case "강동구":
      case "송파구":
        haengjeong.동남2생활권.push(shelter);
        break;
      case "동대문구":
      case "성동구":
      case "중랑구":
      case "광진구":
        haengjeong.동북1생활권.push(shelter);
        break;
      case "강북구":
      case "도봉구":
      case "노원구":
      case "성북구":
        haengjeong.동북2생활권.push(shelter);
        break;
      case "강서구":
      case "양천구":
        haengjeong.서남1생활권.push(shelter);
        break;
      case "영등포구":
      case "구로구":
      case "금천구":
        haengjeong.서남2생활권.push(shelter);
        break;
      case "동작구":
      case "관악구":
        haengjeong.서남3생활권.push(shelter);
        break;
      case "은평구":
      case "서대문구":
      case "마포구":
        haengjeong.서북생활권.push(shelter);
        break;
      default:
        console.log("err");
    }
  }

  //실제 data를 함수를 사용해 행정구역으로 분리
  shelter.map((data) => selectDistrict(data));
  console.log(haengjeong); //TODO: 지우기

  // haengjeong.map((data) => console.log(haengjeong));

  return (
    <>
      <div className="chartTitle">수용시설 현황</div>
      <div className="chartBack">
        <ResponsiveContainer width="100%" height={400}>
          <ScatterChart
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid />
            <XAxis type="number" dataKey="x" name="stature" unit="cm" />
            <YAxis
              yAxisId="left"
              type="number"
              dataKey="y"
              name="weight"
              unit="kg"
              stroke="#8884d8"
            />
            <YAxis
              yAxisId="right"
              type="number"
              dataKey="y"
              name="weight"
              unit="kg"
              orientation="right"
              stroke="#82ca9d"
            />
            <Tooltip cursor={{ strokeDasharray: "3 3" }} />
            <Scatter yAxisId="left" name="강우량" data={rain} fill="#8884d8" />
            <Scatter yAxisId="right" name="화재량" data={fire} fill="#82ca9d" />
          </ScatterChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};
