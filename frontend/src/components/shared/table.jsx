import PropTypes from "prop-types";

function Table({ data = [] }) {
  return (
    <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-lg sm:rounded-xl hover:border-[#00FF66]/30 transition-colors overflow-hidden">
      <div className="p-4 sm:p-5 md:p-6">
        <h3 className="text-lg sm:text-xl font-medium text-[#00FF66] mb-4 sm:mb-6">
          Datos de la tormenta
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-white/80 text-sm sm:text-base text-center">
            <thead>
              <tr className="border-b border-slate-700/50">
                <th className="py-3 px-4 font-medium text-[#00FF66]">Horas</th>
                <th className="py-3 px-4 font-medium text-[#00FF66]">
                  Latitud
                </th>
                <th className="py-3 px-4 font-medium text-[#00FF66]">
                  Longitud
                </th>
                <th className="py-3 px-4 font-medium text-[#00FF66]">
                  Incertidumbre
                </th>
              </tr>
            </thead>
            <tbody>
              {data.length > 0 ? (
                data.map((row, index) => (
                  <tr
                    key={index}
                    className=" hover:bg-slate-700/20 transition-colors"
                  >
                    <td className="py-3 px-4 ">{row.horas || "-"}</td>
                    <td className="py-3 px-4">{row.latitud || "-"}</td>
                    <td className="py-3 px-4">{row.longitud || "-"}</td>
                    <td className="py-3 px-4">{row.incertidumbre || "-"}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="4"
                    className="py-8 px-4 text-center text-white/40"
                  >
                    No hay datos disponibles
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

Table.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      horas: PropTypes.string,
      latitud: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      longitud: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      incertidumbre: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ),
};

export default Table;
