function About() {
  return (
    <section className="min-h-screen bg-linear-to-b from-gray-900 via-gray-800 to-gray-900 text-white p-8 pt-32">
      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* Hero */}
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Acerca de la API de Datos de Tormentas</h1>
          <p className="text-lg text-gray-300">
            Información en tiempo real de tormentas y visualizaciones dinamicas
          </p>
        </div>

        {/* Objetivo del proyecto */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">Objetivo del Proyecto</h2>
          <p className="text-gray-300">
            Nuestra API recolecta datos en tiempo real de tormentas usando la librería <span className="font-bold">Tropycal</span>, genera archivos JSON con información actual de las tormentas, produce imágenes visuales y crea un mapa dinámico interactivo usando <span className="font-bold">Folium</span>.
          </p>
        </div>

        {/* Cómo funciona */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">Cómo Funciona</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li><span className="font-semibold">Recolección de datos:</span> Tropycal obtiene información actualizada de las tormentas.</li>
            <li><span className="font-semibold">Generación de JSON:</span> La API transforma los datos en un formato accesible.</li>
            <li><span className="font-semibold">Visualizaciones:</span> Se generan imágenes de las tormentas y un mapa dinámico con Folium.</li>
          </ul>
        </div>

        {/* Tecnologías */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">Tecnologías</h2>
          <p className="text-gray-300">
            Python, Tropycal, FastAPI (API), Folium, JSON, Vite
          </p>
        </div>

        {/* Beneficios */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">Beneficios</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Investigadores y meteorólogos</li>
            <li>Desarrolladores de aplicaciones meteorológicas</li>
            <li>Entusiastas del clima y la meteorología</li>
          </ul>
        </div>

        {/* Desarrollador */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">Desarrollador</h2>
          <p className="text-gray-300">
            Desarrollado por:
            Bruno
            Pedro
            Emi  
            <br />
            <a href="." className="text-blue-400 underline">Contactanos</a>
          </p>
        </div>

      </div>
    </section>
  );
}

export default About;
