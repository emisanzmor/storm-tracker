function Dashboard() {
  return (
    <section className="min-h-[500vh] pt-20 p-8">
      <div>
        <h1 className="text-white">Nombre de tormenta</h1>
      </div>
      <div className="flex flex-row">
        <div className="mt-4 w-104 h-64 bg-gray-800 border-2 border-gray-600 rounded-md flex justify-center items-center">
          <p>PNG trayectoria</p>
        </div>

        <div className="ml-4 mt-4 w-104 h-64 bg-gray-800 border-2 border-gray-600 rounded-md flex justify-center items-center">
          <p>PNG prediccion de trayectoria</p>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
