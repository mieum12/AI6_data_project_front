import { useFire } from "../../hooks";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { PRIMARY_COLOR_WHITE } from "../../config/constants";

export const FireChart = () => {
  const { fire } = useFire();

  return (
    <>
      <div className="chartTitle">화재발생 현황</div>
      <div className="chartBack">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            height={500}
            data={fire}
            margin={{
              top: 20,
              right: 40,
              left: 20,
              bottom: 30,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis stroke={PRIMARY_COLOR_WHITE} dataKey="union_district" />
            <YAxis stroke={PRIMARY_COLOR_WHITE} domain={[0, 450]} />
            <Tooltip />
            <Legend />
            <Bar name="연평균" dataKey="year_avg" barSize={65} fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};
