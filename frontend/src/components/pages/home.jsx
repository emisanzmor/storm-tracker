import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="px-6 py-12">

      <div className="px-6 py-12">
      <section className="space-y-6">
        aqui sugiero un texto en grande y bonito con un logo, algo que llame la atencion y que este centrado
      </section>
      </div>


      <section className="space-y-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 h-120">
          
          <div className="rounded-2xl p-6 flex flex-col bg-slate-800/40 backdrop-blur-3xl border border-slate-700">
            <h3 className="text-xl font-medium text-white mb-6">Storm Tracker</h3>
            <p className="text-white/60 mb-4">
              Storm Tracker es un proyecto que tiene como objetivo principal
              monitorear y rastrear tormentas tropicales en tiempo real.
              Utilizando datos obtenidos de la{" "}
              <a
                href="https://www.nhc.noaa.gov/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 underline hover:text-green-300"
              >
                NHC
              </a>
              , la aplicación proporciona información precisa sobre la trayectoria,
              intensidad y pronósticos de las tormentas. Los usuarios pueden
              visualizar mapas interactivos.
            </p>
          </div>

          <div className="rounded-2xl p-6 flex flex-col bg-slate-800/40 backdrop-blur-3xl border border-slate-700">
            <h3 className="text-xl font-medium text-white mb-6">Te invitamos a que indagues en nuestra pagina</h3>
            
            <Link
              to="/tormentas_actuales"
              className="px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-green-700 transition-all text-center"
            >
              Tormentas Actuales
            </Link>

            <Link
              to="/historico"
              className="px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-green-700 transition-all text-center"
            >
              Historico de Tormentas
            </Link>

          </div>
        </div>
      </section>

      <div className="px-6 py-12">
        <section>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 h-120">
            <div className="rounded-2xl p-6 flex flex-col bg-slate-800/40 backdrop-blur-3xl border border-slate-700">
              <p className="text-white/60 mb-4">
              Tropycal obtiene información actual de las tormentas tropicales a través de
              una API pública desarrollada por nosotros, que recopila datos en tiempo real de
              fuentes confiables como la NHC (National Hurricane Center). Esta API proporciona
              datos actualizados sobre la ubicación, intensidad, trayectoria y pronósticos de las
              tormentas tropicales, permitiendo a los usuarios acceder a información precisa y
              oportuna para monitorear y rastrear estas condiciones climáticas.
            </p>

            <p className="text-white/60 mb-4">
              Asi mismo recopilamos datos historicos de tormentas tropicales para su analisis y estudio.
              De esta manera los usuarios pueden acceder a informacion valiosa sobre eventos pasados.
            </p>
            </div>

            <div className="rounded-2xl p-6 flex flex-col bg-slate-800/40 backdrop-blur-3xl border border-slate-700">
              <h3 className="text-xl font-medium text-white mb-6">Data</h3>

            </div>
          </div>
        </section>
      </div>

        <section>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 h-120">
            <div className="rounded-2xl p-6 flex flex-col bg-slate-800/40 backdrop-blur-3xl border border-slate-700">
              <h3 className="text-xl font-medium text-white mb-6">Visualización</h3>
              <p className="text-white/60 mb-4">
                La visualización de datos en Storm Tracker se realiza mediante mapas interactivos
                que muestran la trayectoria y ubicación de las tormentas tropicales en tiempo real.
                Utilizando tecnologías como Folium, los usuarios pueden explorar mapas detallados y dinámicos
                que representan la información meteorológica de manera clara y comprensible.
              </p>
            </div>

            <div className="rounded-2xl p-6 flex flex-col bg-slate-800/40 backdrop-blur-3xl border border-slate-700">
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