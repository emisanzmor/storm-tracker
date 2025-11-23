import { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen text-white">
      <div className="pt-20 sm:pt-24 md:pt-28 px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <section className="space-y-6 sm:space-y-8 text-center py-16 sm:py-24 md:py-32">
          <h1
            className="
              relative z-10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl 
              font-semibold text-[#03e55d] mb-4 px-4
              after:content-[''] after:absolute after:inset-0 
              after:bg-[#00FF66]/10 after:origin-center 
              after:scale-x-0 hover:after:scale-x-80
              after:transition-transform after:duration-700 
              after:z-0 overflow-hidden
            "
          >
            Placeholder Placeholder
          </h1>
          <p className="text-white/60 text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-4">
            Explora mapas en vivo y análisis sobre sistemas tropicales en todo
            el mundo.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 pt-4 px-4">
            <Link
              to="/tormentas_actuales"
              className="w-full sm:w-auto px-6 py-3 bg-[#03e55d] text-black font-medium rounded-lg hover:bg-[#00ff88] transition-all text-center"
            >
              Tormentas actuales
            </Link>
            <Link
              to="/historico"
              className="w-full sm:w-auto px-6 py-3 bg-slate-800/60 text-white font-medium rounded-lg hover:bg-[#00FF66] hover:text-black transition-all text-center"
            >
              Histórico
            </Link>
          </div>
        </section>

        <section className="py-16 sm:py-20 md:py-24 text-center px-4">
          <div className="max-w-4xl mx-auto bg-slate-800/40 backdrop-blur-3xl border border-slate-700 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 hover:border-[#00FF66]/30 transition-colors">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#03e55d] mb-4 sm:mb-6">
              Storm Tracker
            </h3>
            <p className="text-white/60 text-sm sm:text-base md:text-lg leading-relaxed">
              Storm Tracker es un proyecto dedicado a monitorear y rastrear
              tormentas tropicales en tiempo real. Usando datos de la{" "}
              <a
                href="https://www.nhc.noaa.gov/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 underline hover:text-green-300"
              >
                NHC
              </a>
              , ofrece información precisa sobre la trayectoria, intensidad y
              pronósticos de cada tormenta.
              <br />
              <br />
              Los usuarios pueden visualizar mapas interactivos y análisis
              actualizados, diseñados para una experiencia clara e informativa.
            </p>
          </div>
        </section>

        <section className="py-16 sm:py-20 md:py-24 px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            <div className="rounded-xl sm:rounded-2xl p-5 sm:p-6 flex flex-col bg-slate-800/40 backdrop-blur-3xl border border-slate-700 hover:border-[#00FF66]/30 transition-colors">
              <h3 className="text-xl sm:text-2xl font-medium text-[#03e55d] mb-3 sm:mb-4">
                Tropycal API
              </h3>
              <p className="text-white/60 text-sm sm:text-base">
                Tropycal obtiene información actual de las tormentas tropicales
                a través de una API pública desarrollada por nosotros, que
                recopila datos en tiempo real de fuentes confiables como la NHC
                (National Hurricane Center).
              </p>
              <p className="text-white/60 text-sm sm:text-base pt-4 sm:pt-6">
                También recopilamos datos históricos de tormentas tropicales
                para su análisis y estudio, permitiendo acceder a información
                valiosa sobre eventos pasados.
              </p>
            </div>

            <div className="rounded-xl sm:rounded-2xl p-5 sm:p-6 flex flex-col bg-slate-800/40 backdrop-blur-3xl border border-slate-700 hover:border-[#00FF66]/30 transition-colors">
              <h3 className="text-xl sm:text-2xl font-medium text-[#03e55d] mb-3 sm:mb-4">
                Visualización
              </h3>
              <p className="text-white/60 text-sm sm:text-base mb-4">
                La visualización se realiza mediante mapas interactivos que
                muestran la trayectoria y ubicación de las tormentas tropicales
                en tiempo real. Utilizando tecnologías como Folium, puedes
                explorar mapas detallados y dinámicos.
              </p>
              <iframe
                src="mapa.html"
                title="Mapa de tormentas"
                className="w-full h-64 sm:h-80 md:h-96 rounded-lg border border-slate-700"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
