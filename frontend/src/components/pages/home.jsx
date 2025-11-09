import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="px-6 py-12">
      <div className="px-6 py-12">
        <section className="space-y-8 text-white text-center py-32">
          <h1
            className="
      relative z-10 text-7xl font-semibold text-[#03e55d] mb-4 
      after:content-[' '] after:absolute after:inset-0 
      after:bg-[#00FF66]/10 after:origin-center 
      after:scale-x-0 hover:after:scale-x-80
      after:transition-transform after:duration-700 
      after:z-0 overflow-hidden
    "
          >
            Persigue la tormenta
          </h1>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto">
            Explora mapas en vivo y análisis sobre sistemas tropicales en todo
            el mundo.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Link
              to="/tormentas_actuales"
              className="px-6 py-3 bg-[#03e55d] text-black font-medium rounded-lg hover:bg-[#00ff88] transition-all"
            >
              Tormentas actuales
            </Link>
            <Link
              to="/historico"
              className="px-6 py-3 bg-slate-800/60 text-white font-medium rounded-lg hover:bg-green-700 transition-all"
            >
              Histórico
            </Link>
          </div>
        </section>
      </div>

      <section className="py-24 text-center">
        <div className="max-w-4xl mx-auto bg-slate-800/40 backdrop-blur-3xl border border-slate-700 rounded-2xl p-10">
          <h3 className="text-4xl font-semibold text-[#03e55d] mb-6">
            Storm Tracker
          </h3>
          <p className="text-white/60 text-lg leading-relaxed">
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

      <section className="py-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl p-6 flex flex-col bg-slate-800/40 backdrop-blur-3xl border border-slate-700">
            <h3 className="text-2xl font-medium text-[#03e55d] mb-4">
              Tropycal API
            </h3>
            <p className="text-white/60">
              Tropycal obtiene información actual de las tormentas tropicales a
              través de una API pública desarrollada por nosotros, que recopila
              datos en tiempo real de fuentes confiables como la NHC (National
              Hurricane Center). Esta API proporciona datos actualizados sobre
              la ubicación, intensidad, trayectoria y pronósticos de las
              tormentas tropicales, permitiendo a los usuarios acceder a
              información precisa y oportuna para monitorear y rastrear estas
              condiciones climáticas.
            </p>
            <p className="text-white/60 pt-6">
              Así mismo recopilamos datos históricos de tormentas tropicales
              para su análisis y estudio. De esta manera los usuarios pueden
              acceder a información valiosa sobre eventos pasados.
            </p>
          </div>

          <div className="rounded-2xl p-6 flex flex-col bg-slate-800/40 backdrop-blur-3xl border border-slate-700">
            <h3 className="text-2xl font-medium text-[#03e55d] mb-4">
              Visualización
            </h3>
            <p className="text-white/60 mb-4">
              La visualización de datos en Storm Tracker se realiza mediante
              mapas interactivos que muestran la trayectoria y ubicación de las
              tormentas tropicales en tiempo real. Utilizando tecnologías como
              Folium, los usuarios pueden explorar mapas detallados y dinámicos
              que representan la información meteorológica de manera clara y
              comprensible.
            </p>
            <iframe
              src="mapa.html"
              title="Mapa de tormentas"
              className="w-full h-96 rounded-lg border border-slate-700"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
