import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Tormentas_Actuales() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [activeStorms, setActiveStorms] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [pastStorms, setPastStorms] = useState([]);

  useEffect(() => {
    const fetchActiveStorms = async () => {
      try {
        const response = await fetch("http://localhost:8000/data");
        const data = await response.json();
        setActiveStorms(data);
      } catch (error) {
        console.error("Error al cargar tormentas activas:", error);
      }
    };
    fetchActiveStorms();
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % activeStorms.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + activeStorms.length) % activeStorms.length
    );
  };

  const currentStorm = activeStorms[currentSlide];

  return (
    <div className="px-6 py-12 min-h-screen">
      <section className="space-y-6">
        <h2 className="text-3xl font-medium text-[#00FF66] text-center">
          Tormentas activas
        </h2>

        {activeStorms.length > 0 ? (
          <div className="relative max-w-3xl mx-auto">
            <div className="bg-slate-800/40 border border-slate-700 backdrop-blur-3xl rounded-xl p-6">
              {/* Imagen del mapa */}
              <div className="bg-slate-900/80 rounded-md overflow-hidden mb-6 h-114 flex items-center justify-center m-6">
                {currentStorm ? (
                  <img
                    src={`http://localhost:8000/images/${currentStorm.name}`}
                    alt={currentStorm.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <h1 className="text-white/40">Cargando mapa...</h1>
                )}
              </div>

              <div className="flex gap-3 items-center">
                <input
                  type="text"
                  value={currentStorm?.name || ""}
                  readOnly
                  className="flex-1 px-2 py-2 rounded-lg text-white text-center cursor-pointer hover:text-green-200"
                  placeholder="Nombre de la tormenta"
                />
              </div>
            </div>

            {activeStorms.length > 1 && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 bg-slate-700/20 backdrop-blur-xl hover:bg-slate-700/60 text-slate-400 rounded-full p-3 shadow-lg transition-all"
                  aria-label="Tormenta anterior"
                >
                  <ChevronLeft size={24} />
                </button>

                <button
                  onClick={nextSlide}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 bg-slate-700/20 backdrop-blur-xl hover:bg-slate-700/60 text-slate-400 rounded-full p-3 shadow-lg transition-all"
                  aria-label="Siguiente tormenta"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}
          </div>
        ) : (
          <p className="text-white/50 text-center">
            No hay tormentas activas en este momento.
          </p>
        )}
      </section>
    </div>
  );
}
export default Tormentas_Actuales;
