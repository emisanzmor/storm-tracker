function About({ data }) {
  return (
    <section className="min-h-screen text-white p-8 pt-16">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Hero */}
        <div className="text-center">
          <h1 className="text-4xl font-medium mb-4">
            Acerca de la API de Datos de Tormentas
          </h1>
          <p className="text-lg text-gray-300">
            Información en tiempo real de tormentas y visualizaciones dinamicas
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-medium mb-2">Objetivo del Proyecto</h2>
          <p className="text-gray-300">
            Nuestra API recolecta datos en tiempo real de tormentas usando la
            librería <span className="font-bold">Tropycal</span>, genera
            archivos JSON con información actual de las tormentas, produce
            imágenes visuales y crea un mapa dinámico interactivo usando{" "}
            <span className="font-bold">Folium</span>.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-medium mb-2">Cómo Funciona</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>
              <span className="font-medium">Recolección de datos:</span>{" "}
              Tropycal obtiene información actualizada de las tormentas.
            </li>
            <li>
              <span className="font-medium">Generación de JSON:</span> La API
              transforma los datos en un formato accesible.
            </li>
            <li>
              <span className="font-medium">Visualizaciones:</span> Se generan
              imágenes de las tormentas y un mapa dinámico con Folium.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-medium mb-2">Tecnologías</h2>
          <p className="text-gray-300">
            Python, Tropycal, FastAPI (API), Folium, JSON, React, Vite, Tailwind
            CSS
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Desarrolladores</h2>
          <p className="text-gray-300">
            Desarrollado por:{" "}
            {data.map((dev, index) => (
              <span key={index}>
                {dev} {index < data.length - 1 && " · "}
              </span>
            ))}
            <br />
            <a
              href="mailto:emisanzmor@gmail.com"
              className="text-blue-400 underline"
            >
              Contactanos
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
