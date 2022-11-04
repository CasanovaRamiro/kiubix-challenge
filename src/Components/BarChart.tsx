import "../App.css";
import {
  BarChart as _BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { chartData } from "../Types/Types";
import { useEffect } from "react";

function BarChart({ data }: any) {
  function round(n: number, precision: number) {
    let prec = Math.pow(10, precision);
    return Math.round(n * prec) / prec;
  }
  const pow = Math.pow,
    floor = Math.floor,
    abs = Math.abs,
    log = Math.log;
  const abbrev = "kmb"; // could be an array of strings: [' m', ' Mo', ' Md']
  function format(n: number) {
    let base = floor(log(abs(n)) / log(1000));
    let suffix = abbrev[Math.min(2, base - 1)];
    base = abbrev.indexOf(suffix) + 1;
    return suffix ? round(n / pow(1000, base), 2) + suffix : "" + n;
  }
  useEffect(() => {
    return () => {
      data.forEach((e: any) => (e.valor = Math.round(e.valor)));
    };
  }, []);

  return (
    <div className="App">
      <ResponsiveContainer
        width="100%"
        height="100%"
        minWidth="500px"
        minHeight="300px"
      >
        <_BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Branch" />
          <YAxis hide />
          <Tooltip />
          <Legend />
          <Bar dataKey="valor" fill="#8884d8" />
        </_BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default BarChart;
