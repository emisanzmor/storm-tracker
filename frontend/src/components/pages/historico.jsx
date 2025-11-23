import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../Historical/datepicker.css";

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
      const response = await fetch(
        `http://localhost:8000/data_date/${formattedDate}`
      );
      const json = await response.json();

      const lst_storms = json["Info Tormentas"] || [];
      setPastStorms(lst_storms);

      console.log("Tormentas del día:", lst_storms);
    } catch (error) {
      console.error("Error al obtener tormentas pasadas:", error);
    }
  };

  return (
    <div className="px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 pt-20 sm:pt-24 md:pt-28">
      <section className="space-y-6 sm:space-y-8" id="tormentas-pasadas">
        <div className="text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-[#00FF66] px-4">
            Histórico de tormentas
          </h2>

          <p className="text-sm sm:text-base md:text-lg px-4 text-white/60 max-w-3xl mx-auto">
            Histórico es una opción que permite seleccionar una fecha y observar
            las tormentas registradas en ese día.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-lg sm:rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6 hover:border-[#00FF66]/30 transition-colors">
            <h3 className="text-lg sm:text-xl font-medium text-[#00FF66] mb-4 sm:mb-6">
              Calendario
            </h3>

            <p className="text-sm sm:text-base text-white/60 mb-4 sm:mb-6">
              Selecciona una fecha para ver las tormentas registradas de ese
              día:
            </p>

            <div className="calendar-container">
              <div className="text-white/60 text-sm text-center mb-4">
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
            </div>
          </div>

          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-lg sm:rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6 hover:border-[#00FF66]/30 transition-colors flex flex-col">
            <h3 className="text-lg sm:text-xl font-medium text-[#00FF66] mb-4 sm:mb-6">
              Tormentas del{" "}
              {selectedDate.toLocaleDateString("es-ES", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </h3>

            <div className="flex-1">
              {pastStorms.length > 0 ? (
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {pastStorms.map((stormId) => {
                    const year = selectedDate.getFullYear();
                    const month = String(selectedDate.getMonth() + 1).padStart(
                      2,
                      "0"
                    );
                    const day = String(selectedDate.getDate()).padStart(2, "0");
                    const formattedDate = `${year}_${month}_${day}`;

                    return (
                      <a
                        key={stormId}
                        href={`/resume/${formattedDate}/${stormId}`}
                        className="px-3 sm:px-4 py-2 bg-slate-700/80 text-white text-sm sm:text-base rounded-lg hover:bg-[#00FF66] hover:text-black transition-all font-medium"
                      >
                        {stormId}
                      </a>
                    );
                  })}
                </div>
              ) : (
                <div className="flex items-center justify-center h-full min-h-[150px]">
                  <p className="text-white/40 text-sm sm:text-base text-center">
                    No hay tormentas registradas para esta fecha.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Historico;
