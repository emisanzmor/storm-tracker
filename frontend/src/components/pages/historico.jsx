import { useState } from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../Historico/datepicker.css";

function Historico() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [pastStorms, setPastStorms] = useState([]);

  const handleDateChange = async (date) => {
    setSelectedDate(date);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const formattedDate = `${year}_${month}_${day}`;

    try {
      const response = await fetch(`http://localhost:8000/data_date/${formattedDate}`);
      const json = await response.json();

      const lst_storms = json["Info Tormentas"] || [];
      setPastStorms(lst_storms);

      console.log("Tormentas del día:", lst_storms);
    } catch (error) {
      console.error("Error al obtener tormentas pasadas:", error);
    }
  };

  return (
    <div className="px-6 py-12">
      <section className="space-y-6" id="tormentas-pasadas">
        <h2 className="text-3xl font-medium text-white text-center">
          Histórico de tormentas
        </h2>

        <div>
          <p className="text-white/60 text-center mb-4">
            Histórico es una opción que permite seleccionar una fecha y observar
            las tormentas registradas en ese día.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 h-120">
          <div className="rounded-2xl p-6 bg-slate-800/40 backdrop-blur-3xl border border-slate-700">
            <h3 className="text-xl font-medium text-white mb-6">Calendario</h3>

            <p className="text-white/60 mb-4">
              Selecciona una fecha para ver las tormentas registradas de ese día:
            </p>

            <div className="calendar-container">
              <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                inline
                dateFormat="dd/MM/yyyy"
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
              />
            </div>
          </div>

          {/* Tormentas del día */}
          <div className="rounded-2xl p-6 flex flex-col bg-slate-800/40 backdrop-blur-3xl border border-slate-700">
            <p className="text-xl font-medium text-white mb-6">
              Tormentas del{" "}
              {selectedDate.toLocaleDateString("es-ES", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>

            <div className="flex flex-wrap gap-3">
              {pastStorms.length > 0 ? (
                pastStorms.map((stormId) => {
                  const year = selectedDate.getFullYear();
                  const month = String(selectedDate.getMonth() + 1).padStart(2, "0");
                  const day = String(selectedDate.getDate()).padStart(2, "0");
                  const formattedDate = `${year}_${month}_${day}`;

                  return (
                    <Link
                      key={stormId}
                      to={`/resume/${formattedDate}/${stormId}`}
                      className="px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-green-700 transition-all"
                    >
                      {stormId}
                    </Link>
                  );
                })
              ) : (
                <p className="text-white/40">
                  No hay tormentas registradas para esta fecha.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Historico;
