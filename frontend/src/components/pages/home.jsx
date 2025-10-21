function Home() {
  // Sample data for storms
  const storms = [
    { id: 1, name: "Storm A", status: "Active" },
    { id: 2, name: "Storm B", status: "Inactive" },
    { id: 3, name: "Storm C", status: "Active" },
  ];

  return (
    <section className="min-h-screen flex justify-center items-center">
      <div className="w-full max-w-3xl h-[500px] bg-black/20 rounded-lg shadow-md flex flex-row gap-56 p-8 justify-center text-white/50">
        <div>
          <h2>Tormentas Activas</h2>
          <ul className="mt-4 text-white text-lg cursor-pointer space-y-2">
            {storms
              .filter((storm) => storm.status === "Active")
              .map((storm) => (
                <li key={storm.id}>{storm.name}</li>
              ))}
          </ul>
        </div>
        <div>
          <h2>Filtro de búsqueda</h2>
        </div>
      </div>
    </section>
  );
}

export default Home;
