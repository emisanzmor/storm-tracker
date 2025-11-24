import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { FiDownload } from "react-icons/fi";
import { MdOutlineDownloadDone } from "react-icons/md";

function Resumen_his() {
  const { date, id_storm } = useParams();
  const [tormenta, setTormenta] = useState(null);
  const [opcionesMenu, setOpcionesMenu] = useState([]);
  const [selectedHour, setSelectedHour] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [ip, setIp] = useState("localhost");
  const [isDownloadedjson, setIsDownloadedjson] = useState(false);
  const [isDownloadedpng, setIsDownloadedpng] = useState(false);
  const [isZipDownloaded, setIsZipDownloaded] = useState(false);
  const [imageError, setImageError] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      try {
        // Timeout de 5 segundos
        const timeoutPromise = new Promise((_, reject) =>
          setTimeout(() => reject(new Error("Timeout")), 5000)
        );

        const opcionesPromise = fetch(`http://${ip}:8000/hour_date/${date}/${id_storm}`)
          .then((res) => res.json());

        // Utilizamos Promise.race para controlar el timeout
        const opcionesJson = await Promise.race([opcionesPromise, timeoutPromise]);

        // Si la lista viene vacía → marcar no hay datos
        if (!opcionesJson || opcionesJson.length === 0) {
          console.warn("⚠ Lista de horas vacía o no disponible.");
          
          setOpcionesMenu([]);      
          setSelectedHour(null);
          setImageUrl(null);
          setImageError(true);       // ← marca "no hay mapa"

          return; // detener aquí
        }

        // Si sí hay opciones
        setOpcionesMenu(opcionesJson);

        // seleccionar la primera hora automáticamente
        loadHourData(opcionesJson[0]);
        setSelectedHour(opcionesJson[0]);
      }
      catch (error) {
        console.error("Error al cargar opciones (timeout o fallo):", error);

        // fallback defensivo por si hubo error al consultar el endpoint
        setOpcionesMenu([]);
        setSelectedHour(null);
        setImageUrl(null);
        setImageError(true);

      }
    };

    fetchData();
  }, [date, id_storm, ip]);


  // 2️⃣ Función que carga la información usando la hora seleccionada
  const loadHourData = async (hour) => {
    try {
      const infoRes = await fetch(`http://${ip}:8000/data_date/${date}/${id_storm}/${hour}`);
      setTormenta(await infoRes.json());

      const imageRes = await fetch(`http://${ip}:8000/image_date/${date}/${id_storm}/${hour}`);

      if (!imageRes.ok) {
        setImageUrl(null);
        setImageError(true);   // ❌ No hay imagen
        return;
      }

      const contentType = imageRes.headers.get("Content-Type");

      if (!contentType || !contentType.startsWith("image/")) {
        setImageUrl(null);
        setImageError(true);   // ❌ No es imagen válida
        return;
      }

      const blob = await imageRes.blob();
      if (blob.size === 0) {
        setImageUrl(null);
        setImageError(true);   // ❌ Imagen vacía
        return;
      }

      setImageUrl(URL.createObjectURL(blob));
      setImageError(false);    // ✅ Hay imagen

    } catch (error) {
      console.error("Error cargando datos:", error);
      setImageUrl(null);
      setImageError(true);     // ❌ Error → no hay imagen
    }
  };



  const handleHourChange = (e) => {
    const hour = e.target.value;
    setSelectedHour(hour);
    loadHourData(hour);
  };

  const handleDownloadImage = () => {
    if (!imageUrl) return;

    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = `mapa_${id_storm}_${selectedHour}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setIsDownloadedpng(true);
    setTimeout(() => setIsDownloadedpng(false), 2000);
  };


  // Descargar JSON
  const handleDownloadJson = async () => {
    try {

      if (!date || !id_storm || !selectedHour) return;

      // Llamada a tu API FastAPI
      const response = await fetch(
        `http://localhost:8000/TraducirJson/${date}/${id_storm}/${selectedHour}`
      );

      if (!response.ok) {
        console.error("Error al obtener el JSON desde el servidor");
        return;
      }

      // La API regresa un diccionario → convertirlo a objeto JS
      const data = await response.json();

      // Crear el archivo JSON
      const blob = new Blob([JSON.stringify(data, null, 2)], {type: "application/json",});

      const url = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = `${id_storm}_${date}_${selectedHour}.json`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error descargando JSON:", error);
    }

    setIsDownloadedjson(true);
    setTimeout(() => setIsDownloadedjson(false), 2000); // vuelve al icono original después de 2s

  };

  const handleDownloadZip = async () => {
    try {
      const response = await fetch(`http://${ip}:8000/zipTormenta/${date}/${id_storm}`);

      if (!response.ok) {
        console.error("Error descargando ZIP");
        return;
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = `tormenta_${id_storm}.zip`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      URL.revokeObjectURL(url);

      // Cambiar icono temporalmente
      setIsZipDownloaded(true);
      setTimeout(() => setIsZipDownloaded(false), 2000);

    } catch (e) {
      console.error("Error en descarga ZIP:", e);
    }
  };


  return (
    <section className="min-h-screen px-4 sm:px-6 md:px-8 py-8">
      <div className="max-w-6xl mx-auto space-y-6">

        <div className="w-full sm:w-64 mx-auto sm:mx-0">
          <label className="block text-white/70 text-sm mb-2">
            Seleccionar hora:
          </label>

          <div className="flex items-center gap-3">
            {/* Select */}
            <select
              className="flex-1 bg-slate-800/50 border border-slate-700/50 text-white p-2 rounded-lg 
                        focus:outline-none focus:ring-2 focus:ring-[#00FF66]"
              value={selectedHour || ""}
              onChange={handleHourChange}
            >
              {opcionesMenu.length === 0 ? (
                <option>Cargando horas...</option>
              ) : (
                opcionesMenu.map((op) => (
                  <option key={op} value={op}>
                    {op}
                  </option>
                ))
              )}
            </select>

            {/* Botón ZIP */}
            <div className="relative group">
              <button
                onClick={handleDownloadZip}
                className="flex items-center justify-center w-10 h-10 
                          border border-blue-500 rounded-lg
                          bg-transparent transition hover:bg-blue-600/20"
              >
                {isZipDownloaded ? (
                  <MdOutlineDownloadDone className="text-green-500 text-xl" />
                ) : (
                  <FiDownload className="text-blue-500 text-xl" />
                )}
              </button>

              {/* Tooltip a la izquierda */}
              <span
                className="
                  absolute left-full top-1/2 -translate-y-1/2
                  mr-3
                  px-3 py-1 bg-black text-white text-xs rounded-md 
                  opacity-0 group-hover:opacity-100
                  -translate-x-4 group-hover:translate-x-0
                  transition-all duration-300
                  pointer-events-none
                  whitespace-nowrap
                "
              >
                Descargar data completa
              </span>
            </div>
          </div>
        </div>


        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          <div className="lg:col-span-1 bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-lg sm:rounded-xl hover:border-[#00FF66]/30 transition-colors">
            <div className="p-4 sm:p-5 md:p-6">
              <h3 className="text-lg sm:text-xl font-medium text-[#00FF66] mb-4 sm:mb-6">
                Datos de la tormenta
              </h3>

              {tormenta ? (
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex justify-between py-2 sm:py-3">
                    <span className="text-sm sm:text-base text-white/60">
                      Nombre:
                    </span>
                    <span className="text-sm sm:text-base text-white font-medium">
                      {tormenta.name}
                    </span>
                  </div>
                  <div className="flex justify-between py-2 sm:py-3">
                    <span className="text-sm sm:text-base text-white/60">
                      Id:
                    </span>
                    <span className="text-sm sm:text-base text-white font-medium">
                      {tormenta.id}
                    </span>
                  </div>
                  <div className="flex justify-between py-2 sm:py-3 ">
                    <span className="text-sm sm:text-base text-white/60">
                      Inicio:
                    </span>
                    <span className="text-sm sm:text-base text-white font-medium">
                      {tormenta.start_date}
                    </span>
                  </div>
                  <div className="flex justify-between py-2 sm:py-3 ">
                    <span className="text-sm sm:text-base text-white/60">
                      Fin:
                    </span>
                    <span className="text-sm sm:text-base text-white font-medium">
                      {tormenta.end_date}
                    </span>
                  </div>
                  <div className="flex justify-between py-2 sm:py-3 ">
                    <span className="text-sm sm:text-base text-white/60">
                      Viento máximo:
                    </span>
                    <span className="text-sm sm:text-base text-white font-medium">
                      {tormenta.max_wind}
                    </span>
                  </div>
                  <div className="flex justify-between py-2 sm:py-3">
                    <span className="text-sm sm:text-base text-white/60">
                      Presión mínima:
                    </span>
                    <span className="text-sm sm:text-base text-white font-medium">
                      {tormenta.min_mslp}
                    </span>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center py-12">
                  <p className="text-white/40 text-sm sm:text-base">
                    Cargando información...
                  </p>
                </div>
              )}
            </div>

            <div className="relative group place-items-end pr-4 pb-4">
              <button
                onClick={handleDownloadJson}
                className="flex items-center justify-center w-10 h-10 
                          border border-green-500 rounded-lg
                          bg-transparent transition hover:bg-green-600/20"
              >
                {isDownloadedjson ? (
                  <MdOutlineDownloadDone className="text-green-500 text-xl" />
                ) : (
                  <FiDownload className="text-green-500 text-xl" />
                )}
              </button>

              <span
                className="
                  absolute right-full top-1/2 -translate-y-1/2
                  mr-3
                  px-3 py-1 bg-black text-white text-xs rounded-md 
                  opacity-0 group-hover:opacity-100
                  -translate-x-4 group-hover:translate-x-0
                  transition-all duration-300
                  pointer-events-none
                  whitespace-nowrap"
              >
                Descargar datos en JSON
              </span>
            </div>


          </div>

          <div className="lg:col-span-2 bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-lg sm:rounded-xl hover:border-[#00FF66]/30 transition-colors">
            <div className="p-4 sm:p-5 md:p-6">
              <h3 className="text-lg sm:text-xl font-medium text-[#00FF66] mb-4 sm:mb-6">
                Mapa de trayectoria
              </h3>

              <div className="bg-slate-900/80 rounded-md overflow-hidden">
                {imageUrl ? (
                  <img
                    src={imageUrl}
                    alt="Mapa de tormenta"
                    className="w-full h-auto object-cover"
                  />
                ) : imageError ? (
                  <div className="aspect-4/3 flex items-center justify-center">
                    <p className="text-white/40 text-sm sm:text-base">
                      No hay mapa de tormenta {id_storm}
                    </p>
                  </div>
                ) : (
                  <div className="aspect-4/3 flex items-center justify-center">
                    <p className="text-white/40 text-sm sm:text-base">
                      Cargando mapa...
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="relative group place-items-end pr-4 pb-4">
              <button
                onClick={imageUrl ? handleDownloadImage : undefined}
                disabled={!imageUrl}
                className={`
                  flex items-center justify-center w-10 h-10 rounded-lg border
                  transition 
                  ${imageUrl 
                    ? "border-green-500 hover:bg-green-600/20 cursor-pointer bg-transparent" 
                    : "border-gray-600 opacity-40 cursor-not-allowed bg-slate-700/30"
                  }
                `}
              >
                {isDownloadedpng ? (
                  <MdOutlineDownloadDone className="text-green-500 text-xl" />
                ) : (
                  <FiDownload className="text-green-500 text-xl" />
                )}
              </button>

              {/* Tooltip solo visible si hay imagen */}
              {imageUrl && (
                <span
                  className="
                    absolute right-full top-1/2 -translate-y-1/2
                    mr-3
                    px-3 py-1 bg-black text-white text-xs rounded-md 
                    opacity-0 group-hover:opacity-100
                    -translate-x-4 group-hover:translate-x-0
                    transition-all duration-300
                    pointer-events-none
                    whitespace-nowrap
                  "
                >
                  Descargar imagen
                </span>
              )}
            </div>


          </div>
        </div>

      </div>
    </section>
  );
}

export default Resumen_his;
