import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Resumen_his() {
  const { date, id_storm } = useParams();
  const [tormenta, setTormenta] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const info_tormenta = await fetch(
          `http://localhost:8000/data_date/${date}/${id_storm}`
        );
        const info = await info_tormenta.json();
        setTormenta(info);

        const imageResponse = await fetch(
          `http://localhost:8000/image_date/${date}/${id_storm}`
        );
        const blob = await imageResponse.blob();
        setImageUrl(URL.createObjectURL(blob));
      } catch (error) {
        console.error("Error al cargar datos de la tormenta:", error);
      }
    };

    fetchData();
  }, [date, id_storm]);

  return (
    <div>
      <h2>Resumen de tormenta {id_storm}</h2>
      {tormenta && (
        <>
          <p>Nombre: {tormenta.name}</p>
          <p>Inicio: {tormenta.start_date}</p>
          <p>Fin: {tormenta.end_date}</p>
          <p>Viento máximo: {tormenta.max_wind}</p>
          <p>Presión mínima: {tormenta.min_mslp}</p>
        </>
      )}
      {imageUrl && <img src={imageUrl} alt="Mapa de tormenta" />}
    </div>
  );
}

export default Resumen_his;