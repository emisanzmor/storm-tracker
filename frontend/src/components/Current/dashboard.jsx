import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Dashboard() {
  const { id_storm } = useParams();
  const [tormenta, setTormenta] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const info_tormenta = await fetch(
          `http://localhost:8000/data/${id_storm}`
        );
        const info = await info_tormenta.json();
        setTormenta(info);

        const imageResponse = await fetch(
          `http://localhost:8000/images/${id_storm}`
        );
        const blob = await imageResponse.blob();
        setImageUrl(URL.createObjectURL(blob));
      } catch (error) {
        console.error("Error al cargar datos de la tormenta:", error);
      }
    };

    fetchData();
  }, [id_storm]);

  return (
    <section className="min-h-screen px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 pt-8 sm:pt-8 md:pt-12">
      <div className="max-w-7xl mx-auto mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-[#00FF66]">
          {tormenta?.name || "Nombre de tormenta"}
        </h2>
      </div>

      <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          <div className="lg:col-span-1 bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-lg sm:rounded-xl hover:border-[#00FF66]/30 transition-colors">
            <div className="p-4 sm:p-5 md:p-6">
              <h3 className="text-lg sm:text-xl font-medium text-[#00FF66] mb-3 sm:mb-4">
                Trayectoria actual
              </h3>
              <div className="aspect-4/3 bg-slate-900/80 rounded-md flex justify-center items-center">
                <p className="text-white/40 text-sm sm:text-base">
                  PNG trayectoria
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1 bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-lg sm:rounded-xl hover:border-[#00FF66]/30 transition-colors">
            <div className="p-4 sm:p-5 md:p-6">
              <h3 className="text-lg sm:text-xl font-medium text-[#00FF66] mb-3 sm:mb-4">
                Predicción
              </h3>
              <div className="aspect-4/3 bg-slate-900/80 rounded-md flex justify-center items-center">
                <p className="text-white/40 text-sm sm:text-base">
                  PNG predicción
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1 bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-lg sm:rounded-xl hover:border-[#00FF66]/30 transition-colors">
            <div className="p-4 sm:p-5 md:p-6">
              <h3 className="text-lg sm:text-xl font-medium text-[#00FF66] mb-3 sm:mb-4">
                Información
              </h3>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          <div className="lg:col-span-2 bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-lg sm:rounded-xl hover:border-[#00FF66]/30 transition-colors">
            <div className="p-4 sm:p-5 md:p-6">
              <h3 className="text-lg sm:text-xl font-medium text-[#00FF66] mb-3 sm:mb-4">
                Mapa con Folium
              </h3>
              <div className="aspect-video bg-slate-900/80 rounded-md flex justify-center items-center min-h-[300px] sm:min-h-[400px]">
                <p className="text-white/40 text-sm sm:text-base">
                  Mapa con Folium
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1 bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-lg sm:rounded-xl hover:border-[#00FF66]/30 transition-colors">
            <div className="p-4 sm:p-5 md:p-6">
              <h3 className="text-lg sm:text-xl font-medium text-[#00FF66] mb-3 sm:mb-4">
                Terminología
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
