import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Resumen_his() {
  const { date, id_storm } = useParams();
  const [tormenta, setTormenta] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const info_tormenta = await fetch(
          `http://localhost:8000/data_date/${date}/${id_storm}`
        );
        const info = await info_tormenta.json();
        setTormenta(info);

        const imageResponse = await fetch(
          `http://localhost:8000/image_date/${date}/${id_storm}`
        );
        const blob = await imageResponse.blob();
        setImageUrl(URL.createObjectURL(blob));
      } catch (error) {
        console.error("Error al cargar datos de la tormenta:", error);
      }
    };

    fetchData();
  }, [date, id_storm]);

  return (
    <section className="min-h-screen px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 pt-8 sm:pt-8 md:pt-12">
      <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8">
        <div className="text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-[#00FF66] mb-2">
            Resumen de tormenta {id_storm}
          </h2>
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
                ) : (
                  <div className="aspect-4/3 flex items-center justify-center">
                    <p className="text-white/40 text-sm sm:text-base">
                      Cargando mapa...
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resumen_his;
