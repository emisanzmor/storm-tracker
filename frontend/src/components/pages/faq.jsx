function Faq() {
  return (
    <section className="min-h-screen text-white p-4 sm:p-6 md:p-8 pt-20 sm:pt-24 md:pt-28">
      <div className="max-w-5xl mx-auto space-y-8 sm:space-y-12 md:space-y-16">
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-3 sm:mb-4 text-[#00FF66] px-4">
            Preguntas Frecuentes (FAQ)
          </h1>
          <p className="text-sm sm:text-base md:text-lg px-4 text-white/60 text-center mb-4">
            Encuentra aquí respuestas a las dudas más comunes sobre el sistema
            de seguimiento de tormentas.
          </p>
        </div>

        <div className="space-y-6 sm:space-y-8 md:space-y-10 px-4">
          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-lg p-4 sm:p-5 md:p-6 hover:border-[#00FF66]/30 transition-colors">
            <h2 className="text-lg sm:text-xl md:text-2xl font-medium mb-2 sm:mb-3 text-[#00FF66]">
              ¿Cuál es el propósito?
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              Permite consultar información en tiempo real sobre huracanes y
              tormentas, mostrando su trayectoria, intensidad y evolución
              mediante mapas interactivos.
            </p>
          </div>

          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-lg p-4 sm:p-5 md:p-6 hover:border-[#00FF66]/30 transition-colors">
            <h2 className="text-lg sm:text-xl md:text-2xl font-medium mb-2 sm:mb-3 text-[#00FF66]">
              ¿De dónde proviene la información meteorológica?
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              La información se obtiene a través de la API del proyecto, que
              utiliza la librería{" "}
              <span className="font-bold text-white">Tropycal</span> para
              acceder a los datos oficiales del National Hurricane Center (NHC),
              que proporciona información oficial y actualizada.
            </p>
          </div>

          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-lg p-4 sm:p-5 md:p-6 hover:border-[#00FF66]/30 transition-colors">
            <h2 className="text-lg sm:text-xl md:text-2xl font-medium mb-2 sm:mb-3 text-[#00FF66]">
              ¿Con qué frecuencia se actualizan los datos?
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              La información de las tormentas se actualiza cada 3 horas para
              detectar cualquier cambio proveniente del National Hurricane
              Center (NHC).
            </p>
          </div>

          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-lg p-4 sm:p-5 md:p-6 hover:border-[#00FF66]/30 transition-colors">
            <h2 className="text-lg sm:text-xl md:text-2xl font-medium mb-2 sm:mb-3 text-[#00FF66]">
              ¿Cómo puedo ver los datos de tormentas pasadas?
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              Al acceder a la sección{" "}
              <span className="font-bold text-white">Histórico</span>, puedes
              seleccionar una fecha en el calendario. Si no hubo tormentas ese
              día, aparecerá el mensaje "no hay tormentas registradas para esta
              fecha". Si sí hubo, se mostrará la opción para ver la información.
            </p>
          </div>

          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-lg p-4 sm:p-5 md:p-6 hover:border-[#00FF66]/30 transition-colors">
            <h2 className="text-lg sm:text-xl md:text-2xl font-medium mb-2 sm:mb-3 text-[#00FF66]">
              ¿Qué información muestra cada tormenta?
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              Incluye ID, nombre, velocidad del viento, presión atmosférica,
              fecha y su trayectoria.
            </p>
          </div>

          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-lg p-4 sm:p-5 md:p-6 hover:border-[#00FF66]/30 transition-colors">
            <h2 className="text-lg sm:text-xl md:text-2xl font-medium mb-2 sm:mb-3 text-[#00FF66]">
              ¿Cómo puedo ver las tormentas activas?
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              En la sección{" "}
              <span className="font-bold text-white">Tormentas actuales</span>,
              si no hay tormentas activas se mostrará el mensaje "no hay
              tormentas activas en este momento". Si sí hay, se mostrarán las
              imágenes del mapa junto con la opción de ver la información
              detallada.
            </p>
          </div>

          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-lg p-4 sm:p-5 md:p-6 hover:border-[#00FF66]/30 transition-colors">
            <h2 className="text-lg sm:text-xl md:text-2xl font-medium mb-2 sm:mb-3 text-[#00FF66]">
              ¿Cómo puedo usar su API?
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              Puede entrar a nuestro repositorio y descargarlo para tu uso
              propio:{" "}
              <span className="text-[#00FF66]">
                {"{placeholder de github}"}
              </span>
              .
            </p>
          </div>

          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-lg p-4 sm:p-5 md:p-6 hover:border-[#00FF66]/30 transition-colors">
            <h2 className="text-lg sm:text-xl md:text-2xl font-medium mb-2 sm:mb-3 text-[#00FF66]">
              ¿Cómo puedo reportar un problema?
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              Comunícate con nosotros a través de correo{" "}
              <a
                href="mailto:placeholder@gmail.com"
                className="text-blue-400 underline hover:text-blue-300 transition-colors break-all"
              >
                placeholder@gmail.com
              </a>{" "}
              y haznos saber tu inquietud.
            </p>
          </div>

          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-lg p-4 sm:p-5 md:p-6 hover:border-[#00FF66]/30 transition-colors">
            <h2 className="text-lg sm:text-xl md:text-2xl font-medium mb-2 sm:mb-3 text-[#00FF66]">
              ¿Qué tecnologías utiliza el sistema?
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              Se desarrolló con Python, FastAPI, Tropycal, Folium y Cartopy para
              obtener, procesar y visualizar los datos meteorológicos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq;
