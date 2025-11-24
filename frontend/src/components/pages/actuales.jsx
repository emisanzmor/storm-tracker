import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Tormentas_Actuales() {
  const [activeStorms, setActiveStorms] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [ip, setIp] = useState("localhost");

  // ESTADOS NUEVOS
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchActiveStorms = async () => {
      try {
        const response = await fetch(`http://${ip}:8000/data`);
        const json = await response.json();
        const ListStorms = json["Info Tormentas"] || [];

        setActiveStorms(ListStorms);
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

  // RESET de loading/error cada vez que cambia la tormenta
  useEffect(() => {
    setLoading(true);
    setError(false);
  }, [currentStorm]);

  return (
    <div className="px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 pt-20 sm:pt-24 md:pt-28 min-h-screen">
      <section className="space-y-6 sm:space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-[#00FF66] px-4">
            Tormentas activas
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-white/60 px-4">
            Visualiza en tiempo real las tormentas tropicales activas
          </p>
        </div>

        {activeStorms.length > 0 ? (
          <div className="relative max-w-5xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-lg sm:rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6 hover:border-[#00FF66]/30 transition-colors">
              <div className="bg-slate-900/80 rounded-md overflow-hidden mb-4 sm:mb-6 h-48 sm:h-64 md:h-80 lg:h-96 flex items-center justify-center">

                {/* Mostrar loading */}
                {loading && !error && (
                  <h3 className="text-white/40 text-sm sm:text-base">
                    Cargando mapa...
                  </h3>
                )}

                {/* Mostrar error si no existe la imagen */}
                {error && (
                  <h3 className="text-red-400 text-sm sm:text-base text-center px-4">
                    No hay tormenta de {currentStorm}
                  </h3>
                )}

                {/* Imagen real (se oculta si loading o error) */}
                {!loading && !error && currentStorm && (
                  <img
                    key={currentStorm} // fuerza renderizado nuevo
                    src={`http://${ip}:8000/images/${currentStorm}`}
                    alt={currentStorm}
                    className="w-full h-full object-cover"
                    onLoad={() => setLoading(false)}
                    onError={() => {
                      setError(true);
                      setLoading(false);
                    }}
                  />
                )}

                {/* Carga la imagen de forma oculta para saber si carga o falla */}
                {currentStorm && (
                  <img
                    src={`http://${ip}:8000/images/${currentStorm}`}
                    alt=""
                    style={{ display: "none" }}
                    onLoad={() => setLoading(false)}
                    onError={() => {
                      setError(true);
                      setLoading(false);
                    }}
                  />
                )}
              </div>

              <div className="flex gap-3 items-center">
                <a
                  href={`/dashboard/${currentStorm}`}
                  className="flex-1 px-4 py-3 rounded-lg bg-slate-700/50 text-white text-center font-medium text-sm sm:text-base hover:bg-[#00FF66] hover:text-black transition-all"
                >
                  Ver detalles de {currentStorm}
                </a>
              </div>

              {activeStorms.length > 1 && (
                <div className="flex justify-center gap-2 mt-4 sm:mt-6">
                  {activeStorms.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentSlide
                          ? "bg-[#00FF66] w-6"
                          : "bg-slate-600 hover:bg-slate-500"
                      }`}
                      aria-label={`Ir a tormenta ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Botones de slide */}
            {activeStorms.length > 1 && (
              <>
                <button
                  onClick={prevSlide}
                  className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-slate-700/80 backdrop-blur-xl hover:bg-[#00FF66] hover:text-black text-white rounded-full p-3 shadow-lg transition-all"
                  aria-label="Tormenta anterior"
                >
                  <ChevronLeft size={24} />
                </button>

                <button
                  onClick={nextSlide}
                  className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-slate-700/80 backdrop-blur-xl hover:bg-[#00FF66] hover:text-black text-white rounded-full p-3 shadow-lg transition-all"
                  aria-label="Siguiente tormenta"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}

            {activeStorms.length > 1 && (
              <div className="flex lg:hidden justify-center gap-4 mt-6">
                <button
                  onClick={prevSlide}
                  className="bg-slate-700/80 hover:bg-[#00FF66] hover:text-black text-white rounded-full p-3 shadow-lg transition-all"
                  aria-label="Tormenta anterior"
                >
                  <ChevronLeft size={20} />
                </button>

                <button
                  onClick={nextSlide}
                  className="bg-slate-700/80 hover:bg-[#00FF66] hover:text-black text-white rounded-full p-3 shadow-lg transition-all"
                  aria-label="Siguiente tormenta"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="max-w-3xl mx-auto">
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-lg sm:rounded-xl md:rounded-2xl p-6 sm:p-8 md:p-10 text-center">
              <p className="text-white/50 text-sm sm:text-base md:text-lg">
                No hay tormentas activas en este momento.
              </p>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

export default Tormentas_Actuales;
