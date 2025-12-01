export function formatForecastToRows(data) {
  if (!data || !data.time || !data.lat || !data.lon || !data.uncertainty_km) {
    return [];
  }

  return data.time.map((time, index) => ({
    horas: `+ ${index + 1} h`,
    latitud: `${data.lat[index]}°`,
    longitud: `${data.lon[index]}°`,
    incertidumbre: `${data.uncertainty_km[index]} km`,
  }));
}
