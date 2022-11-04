import PieChart from "./PieChart";
import BarChart from "./BarChart";
import AreaChart from "./AreaChart";
import { chartData, chartType } from "../Types/Types";

function Charts({ year, month, chartType, data }: chartType) {
  const filteredData = data?.filter(
    (e: chartData) => e.Ano === year && e.Mes === month
  );
  return (
    <div className="App">
      {filteredData.length ? (
        chartType === "Bars" ? (
          <BarChart data={filteredData} />
        ) : chartType === "Area" ? (
          <AreaChart data={filteredData} />
        ) : (
          chartType === "Pie" && <PieChart data={filteredData} />
        )
      ) : (
        <p>No se han encontrado Datos</p>
      )}
    </div>
  );
}

export default Charts;
