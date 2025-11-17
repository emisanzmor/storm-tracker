import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";


function Dashboard() {
  const {id_storm} = useParams();
  const [tormenta, setTormenta] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const info_tormenta = await fetch(`http://localhost:8000/data/${id_storm}`);
        const info = await info_tormenta.json();
        setTormenta(info);

        const imageResponse = await fetch(`http://localhost:8000/images/${id_storm}`);
        const blob = await imageResponse.blob();
        setImageUrl(URL.createObjectURL(blob));

      } 
      catch (error) {
        console.error("Error al cargar datos de la tormenta:", error);
      }
    };

    fetchData();
  }, [id_storm]);

  return (
    <section className="h-auto pt-6 pl-8 pr-8 pb-8">
      <h2 className="text-3xl font-medium text-[#00FF66] text-left py-6">
        Nombre de tormenta
      </h2>

      <div className="flex flex-row">
        <div className="mt-4 w-192 h-104 bg-slate-800/40  border border-slate-700 rounded-md flex justify-center items-center">
          <p className="text-white/40">PNG trayectoria</p>
        </div>

        <div className="ml-4 mt-4 w-192 h-104 bg-slate-800/40  border border-slate-700 rounded-md flex justify-center items-center">
          <p className="text-white/40">PNG prediccion de trayectoria</p>
        </div>

        <div className="w-124 ml-4 mt-4 bg-[#011928]/60 backdrop-blur-md rounded-md flex items-start">
          <p className="text-white p-4">Info</p>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="mt-4 w-184 h-132 bg-slate-800/40  border border-slate-700 rounded-md flex justify-center items-center">
          <p className="text-white/40">Mapa con folium</p>
        </div>
        <div className="ml-4 mt-4 w-74 bg-slate-800/40 border border-slate-700 rounded-md flex justify-center items-center">
          <p className="text-white/40">Terminología</p>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
