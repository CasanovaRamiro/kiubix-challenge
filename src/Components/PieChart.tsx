import "../App.css";
import {
  PieChart as _PieChart,
  Pie,
  ResponsiveContainer,
  LabelList,
} from "recharts";

function PieChart({ data }: any) {
  return (
    <div className="App">
      <ResponsiveContainer
        width="100%"
        height="100%"
        minWidth="500px"
        minHeight="300px"
      >
        <_PieChart width={400} height={400}>
          <Pie
            dataKey="valor"
            data={data}
            nameKey="Branch"
            outerRadius={80}
            fill="#8884d8"
          />
          <LabelList dataKey="Branch" position="inside" />
        </_PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PieChart;
