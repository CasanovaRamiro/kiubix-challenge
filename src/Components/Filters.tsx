function Filters({ setChartTypes, chartTypes, months, years }: any) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        paddingBottom: "50px",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", width: "150px" }}>
        <label htmlFor="Seleccione tipo de Gráfico">Tipo de Gráfico</label>
        <select
          onChange={(e) => {
            setChartTypes({ ...chartTypes, chartType: e.target.value });
          }}
        >
          <option disabled>Seleccione tipo de Grafico</option>
          <option value="Bars">Bars</option>
          <option value="Area">Area</option>
          <option value="Pie">Pie</option>
        </select>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "150px",
          margin: "auto",
        }}
      >
        <label>Mes</label>
        <select
          onChange={(e) => {
            setChartTypes({ ...chartTypes, month: Number(e.target.value) });
          }}
        >
          <option disabled>Seleccione Mes</option>
          {months.map((e: any) => (
            <option value={e}>{e}</option>
          ))}
        </select>
      </div>

      <div style={{ display: "flex", flexDirection: "column", width: "150px" }}>
        <label>Año</label>
        <select
          onChange={(e) => {
            setChartTypes({ ...chartTypes, year: Number(e.target.value) });
          }}
        >
          <option disabled>Seleccione Año</option>
          {years.map((e: any) => (
            <option value={e}>{e}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Filters;
