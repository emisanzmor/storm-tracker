function Dashboard() {
  return (
    <section className="h-auto pt-6 pl-8 pr-8 pb-8">
      <div>
        <h1 className="text-white">Nombre de tormenta</h1>
      </div>

      <div className="flex flex-row">
        <div className="mt-4 w-192 h-104 bg-slate-900/80  border border-slate-700 rounded-md flex justify-center items-center">
          <p className="text-white/40">PNG trayectoria</p>
        </div>

        <div className="ml-4 mt-4 w-192 h-104 bg-slate-900/80  border border-slate-700 rounded-md flex justify-center items-center">
          <p className="text-white/40">PNG prediccion de trayectoria</p>
        </div>

        <div className="w-124 ml-4 mt-4 bg-black/20 backdrop-blur-md rounded-md flex items-start">
          <p className="text-white p-4">Info</p>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="mt-4 w-184 h-132 bg-slate-900/80  border border-slate-700 rounded-md flex justify-center items-center">
          <p className="text-white/40">Mapa con folium</p>
        </div>
        <div className="ml-4 mt-4 w-74 bg-slate-900/80 border border-slate-700 rounded-md flex justify-center items-center">
          <p className="text-white/40">Terminología</p>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
