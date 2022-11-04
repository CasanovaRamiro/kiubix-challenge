import { useState } from "react";
import Charts from "../Components/Charts";
import Filters from "../Components/Filters";
import useData from "../Hooks/useData";
import { chartData } from "../Types/Types";

function Home() {
  const data: chartData[] = useData();

  const [chartTypes, setChartTypes] = useState({
    year: 2022,
    month: 8,
    chartType: "Bars",
  });
  const months = [...new Set(data.map((e) => e.Mes))];
  const years = [...new Set(data.map((e) => e.Ano))];
  console.log(chartTypes);
  return (
    <div>
      <Filters
        setChartTypes={setChartTypes}
        chartTypes={chartTypes}
        years={years}
        months={months}
      />

      <Charts
        year={chartTypes.year}
        month={chartTypes.month}
        chartType={chartTypes.chartType}
        data={data}
      />
    </div>
  );
}

export default Home;
