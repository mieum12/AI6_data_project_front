import axios from "axios";
import { useEffect } from "react";
import { SERVER_BASE_URL } from "../../config/constants";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export const Chart = () => {
  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(`${SERVER_BASE_URL}/rain`);
      console.log(data);
    }
    fetchData();
  }, []);
  return (
    <BarChart
      width={500}
      height={300}
      // data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="union_district" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="July" fill="#8884d8" />
      <Bar dataKey="August" fill="#82ca9d" />
    </BarChart>
  );
};
