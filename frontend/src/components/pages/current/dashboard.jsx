import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Table from "../../shared/table";
import { FiDownload } from "react-icons/fi";
import { formatForecastToRows } from "../../../utils/formatForecast";

function Dashboard() {
  const { id_storm } = useParams();

  const [tormenta, setTormenta] = useState(null);

  const [predUrl, setPredUrl] = useState("");
  const [predStatus, setPredStatus] = useState("loading");

  const [mapHtml, setMapHtml] = useState(null);
  const [ip] = useState("localhost");

  const [forecastData, setForecastData] = useState([]);

  const handleDownloadForecastJson = () => {
    if (!forecastData || forecastData.length === 0) return;
    const blob = new Blob([JSON.stringify(forecastData, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `forecast_${id_storm}_active.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  /* Limpieza de URLs temporales */
  useEffect(() => {
    return () => {
      if (predUrl) URL.revokeObjectURL(predUrl);
    };
  }, [predUrl]);

  /* Cargar información */
  useEffect(() => {
    const fetchData = async () => {
      try {
        /* 1 — Info general */
        const infoResp = await fetch(`http://${ip}:8000/data/${id_storm}`);

        if (!infoResp.ok) {
          console.error("Error al cargar información de tormenta");
          setTormenta(null);
        } else {
          const info = await infoResp.json();
          setTormenta(info);
        }

        /* 2 — Imagen predicción */
        try {
          const predResp = await fetch(`http://${ip}:8000/images/${id_storm}`);

          if (!predResp.ok) {
            setPredStatus("notfound");
          } else {
            const blob = await predResp.blob();
            const url = URL.createObjectURL(blob);
            setPredUrl(url);
            setPredStatus("ok");
          }
        } catch {
          setPredStatus("notfound");
        }

        /* 3 — Mapa Folium */
        try {
          const mapResp = await fetch(`http://${ip}:8000/dynamic/${id_storm}`);

          if (mapResp.ok) {
            const html = await mapResp.text();
            setMapHtml(html);
          } else {
            setMapHtml(null);
          }
        } catch {
          setMapHtml(null);
        }
      } catch (err) {
        console.error("Error cargando data:", err);
      }

      try {
        const tableRes = await fetch(
          `http://${ip}:8000/data_forecast/${date}/${id_storm}/${hour}`
        );
        if (!tableRes.ok) {
          setForecastData([]);
          console.error("No se pudo cargar la data de la tabla.");
        } else {
          const data = await tableRes.json();

          // Convertir JSON a filas para la tabla
          const rows = formatForecastToRows(data);
          setForecastData(rows);
        }
      } catch (err) {
        console.error("Error en fetch data_forecast:", err);
        setForecastData([]);
      }
    };

    fetchData();
  }, [id_storm, ip]);

  return (
    <section className="min-h-screen px-4 sm:px-6 md:px-8 py-10 pt-16">
      {/* TÍTULO */}
      <div className="max-w-7xl mx-auto mb-10">
        <h2 className="text-3xl sm:text-5xl font-medium text-[#00FF66]">
          {tormenta?.name || "Tormenta"}
        </h2>
      </div>

      <div className="max-w-7xl mx-auto space-y-10">
        {/* SECCIÓN 1 — Predicción y Terminología */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Predicción */}
          <div className="lg:col-span-2 bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-[#00FF66]/30 transition-colors">
            <h3 className="text-xl sm:text-2xl font-medium text-[#00FF66] mb-4">
              Mapa
            </h3>

            <div
              className="bg-slate-900/80 rounded-md flex justify-center items-center overflow-hidden 
                            min-h-[350px] sm:min-h-[450px] md:min-h-[550px] lg:min-h-[620px]"
            >
              {predStatus === "loading" && (
                <p className="text-white/40">Cargando predicción...</p>
              )}

              {predStatus === "notfound" && (
                <p className="text-white/40">
                  No existe imagen de predicción para <b>{id_storm}</b>
                </p>
              )}

              {predStatus === "ok" && predUrl && (
                <img
                  src={predUrl}
                  className="max-w-full max-h-full object-contain"
                  alt="prediccion"
                />
              )}
            </div>
          </div>

          {/* Terminología */}
          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-[#00FF66]/30 transition-colors">
            <h3 className="text-xl font-medium text-[#00FF66] mb-4">
              Terminología
            </h3>

            <div className="space-y-3 text-white/80 text-sm pt-4">
              {/* Símbolos */}
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-12 border-b-white"></div>
                <span>No Tropical (△)</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-4 h-4 border border-white" />
                <span>Subtropical (□)</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full border border-white bg-white/90" />
                <span>Desconocido (○)</span>
              </div>

              <hr className="border-slate-600 my-2" />

              {/* Colores */}
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-sky-300" />
                <span>Depresión Tropical</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-sky-600" />
                <span>Tormenta Tropical</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-yellow-400" />
                <span>Categoría 1</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-orange-500" />
                <span>Categoría 2</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-red-600" />
                <span>Categoría 3</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-fuchsia-500" />
                <span>Categoría 4</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-purple-700" />
                <span>Categoría 5</span>
              </div>

              <hr className="border-slate-600 my-2" />

              <div className="flex items-center gap-3">
                <div className="w-8 h-0.5 bg-black" />
                <span>Línea de trayectoria</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-gray-400/60 rounded-sm" />
                <span>Cono de incertidumbre</span>
              </div>
            </div>
          </div>
        </div>

        {/* SECCIÓN 2 — Resumen */}
        <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-[#00FF66]/30 transition-colors">
          <h3 className="text-2xl sm:text-3xl font-medium text-[#00FF66] mb-5">
            Resumen de tormenta {tormenta?.name}
          </h3>

          {tormenta ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white/80 text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose">
              {(() => {
                const lat = tormenta.lat;
                const lon = tormenta.lon;

                const latDir = lat >= 0 ? "N" : "S";
                const lonDir = lon >= 0 ? "E" : "O";

                return (
                  <>
                    {/* Columna izquierda */}
                    <div className="space-y-3">
                      <p>
                        <b>Nombre:</b> {tormenta.name}
                      </p>
                      <p>
                        <b>Latitud actual:</b> {Math.abs(lat)}° {latDir}
                      </p>
                      <p>
                        <b>Longitud actual:</b> {Math.abs(lon)}° {lonDir}
                      </p>
                    </div>

                    {/* Columna derecha */}
                    <div className="space-y-3">
                      <p>
                        <b>Id:</b> {tormenta.id}
                      </p>
                      <p>
                        <b>Viento máximo actual:</b> {tormenta.max_wind} kt
                      </p>
                      <p>
                        <b>Presión mínima actual:</b> {tormenta.min_mslp} hPa
                      </p>
                    </div>
                  </>
                );
              })()}
            </div>
          ) : (
            <p className="text-white/40 text-lg">Cargando información...</p>
          )}
        </div>

        {/* Tabla de datos */}
        <div className="w-full space-y-3">
          <Table data={forecastData} />
          {/* Descargar JSON tabla */}
          <div className="flex items-center justify-end">
            <button
              onClick={handleDownloadForecastJson}
              disabled={!forecastData || forecastData.length === 0}
              className={`
                inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm
                border transition
                ${
                  forecastData && forecastData.length > 0
                    ? "border-green-500 text-green-400 hover:bg-green-600/20"
                    : "border-gray-600 text-gray-400 opacity-50 cursor-not-allowed"
                }
              `}
            >
              <FiDownload className="text-current" />
              <span>Descargar JSON tabla</span>
            </button>
          </div>
        </div>

        {/* SECCIÓN 4 — Mapa dinámico */}
        {mapHtml && (
          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
            <h3 className="text-xl sm:text-2xl font-medium text-[#00FF66] mb-4">
              Mapa dinámico
            </h3>

            <div className="rounded-md overflow-hidden min-h-[400px] sm:min-h-[500px]">
              <iframe
                className="w-full h-[400px] sm:h-[500px] md:h-[600px] rounded-md"
                srcDoc={mapHtml}
                title="Mapa Folium"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Dashboard;
