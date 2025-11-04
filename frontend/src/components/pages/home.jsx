import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Home() {
  // SAMPLE DATA FOR ACTIVE STORMS, WILL DELETE WHEN INTEGRATED WITH BACKEND
  const [activeStorms, setActiveStorms] = useState([
    {
      id: 1,
      name: "Storm A",
    },
    {
      id: 2,
      name: "Storm B",
    },
    {
      id: 3,
      name: "Storm C",
    },
  ]);

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % activeStorms.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + activeStorms.length) % activeStorms.length
    );
  };

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto space-y-12">
        <section className="space-y-6">
          <h2 className="text-3xl font-medium text-white text-center">
            Tormentas activas
          </h2>

          {activeStorms.length > 0 ? (
            <div className="relative max-w-3xl mx-auto">
              <div className="bg-slate-800/40 border border-slate-700 backdrop-blur-3xl rounded-xl p-6">
                <div className="bg-slate-900/80 rounded-md overflow-hidden mb-6 h-114 flex items-center justify-center m-6">
                  <h1 className="text-white/40">Mapa con folium</h1>
                </div>

                <div className="flex gap-3 items-center">
                  <input
                    type="text"
                    value={activeStorms[currentSlide].name}
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

              <div className="flex justify-center gap-2 mt-6">
                {activeStorms.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentSlide
                        ? "w-8 bg-blue-900"
                        : "w-2 bg-slate-600 hover:bg-slate-500"
                    }`}
                    aria-label={`Ir a tormenta ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          ) : (
            <p className="text-white/60 text-center">
              No hay tormentas activas
            </p>
          )}
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-medium text-white text-center">
            Tormentas pasadas
          </h2>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 h-120 ">
            <div className=" rounded-2xl p-6  bg-slate-800/40 backdrop-blur-3xl border border-slate-700">
              <h3 className="text-xl font-medium text-white mb-6 ">
                Calendario
              </h3>
            </div>

            <div className="rounded-2xl p-6  flex flex-col bg-slate-800/40 backdrop-blur-3xl border border-slate-700">
              <h3 className="text-xl font-medium text-white mb-6">
                Tormenta del día seleccionado
              </h3>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
