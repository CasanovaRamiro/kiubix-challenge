export type chartData = {
  Branch: number;
  Ano: number;
  Mes: number;
  valor: string;
};

export type chartType = {
  year: number;
  month: number;
  chartType: string;
  data: chartData[];
};
