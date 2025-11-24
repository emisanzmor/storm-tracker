import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [open, setOpen] = useState(false);

  // Detecta si la pantalla es menor a 768px
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="sticky top-0 left-0 w-full z-50 flex flex-row items-center justify-between backdrop-blur-md bg-[#011928]/60 border-b border-b-neutral-400/10 px-8 py-6">
      <div>
        <Link
          to="/"
          className="text-xl text-[#00FF66] whitespace-nowrap px-2 py-1
          relative inset-0 bg-[#00FF66]/10 scale-x-100 overflow-hidden -z-10"
        >
          Storm Tracker
        </Link>
      </div>

      <nav className="w-full flex justify-end relative">
        {!isMobile && (
          <ul className="flex gap-12 cursor-pointer">
            <li>
              <Link
                to="/"
                className="relative text-lg text-white px-2 py-1 after:content-[''] after:absolute after:inset-0 after:bg-[#00FF66]/60 after:transform after:scale-x-0 after:origin-left after:transition-transform after:duration-600 hover:after:scale-x-100 overflow-hidden after:-z-10"
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                to="/tormentas_actuales"
                className="relative text-lg text-white px-2 py-1 after:content-[''] after:absolute after:inset-0 after:bg-[#00FF66]/60 after:transform after:scale-x-0 after:origin-left after:transition-transform after:duration-600 hover:after:scale-x-100 overflow-hidden after:-z-10"
              >
                Tormentas Actuales
              </Link>
            </li>
            <li>
              <Link
                to="/historico"
                className="relative text-lg text-white px-2 py-1 after:content-[''] after:absolute after:inset-0 after:bg-[#00FF66]/60 after:transform after:scale-x-0 after:origin-left after:transition-transform after:duration-600 hover:after:scale-x-100 overflow-hidden after:-z-10"
              >
                Histórico
              </Link>
            </li>
            <li>
              <Link
                to="/faq"
                className="relative text-lg text-white px-2 py-1 after:content-[''] after:absolute after:inset-0 after:bg-[#00FF66]/60 after:transform after:scale-x-0 after:origin-left after:transition-transform after:duration-600 hover:after:scale-x-100 overflow-hidden after:-z-10"
              >
                Preguntas Frecuentes
              </Link>
            </li>
          </ul>
        )}

        {isMobile && (
          <>
            <button
              onClick={() => setOpen(!open)}
              className="p-2 text-white hover:text-[#00FF66] z-50"
            >
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>

            <ul
              className={`
                absolute top-12 right-0 w-56 bg-[#011928]/95 border border-slate-700 rounded-xl shadow-lg transition-all duration-300 ease-in-out
                ${
                  open
                    ? "opacity-100 text-white translate-y-0"
                    : "opacity-0 -translate-y-4 pointer-events-none"
                }
              `}
            >
              <li>
                <Link
                  to="/"
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 hover:text-[#03e55d] transition-all"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to="/tormentas_actuales"
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 hover:text-[#03e55d] transition-all"
                >
                  Tormentas actuales
                </Link>
              </li>
              <li>
                <Link
                  to="/historico"
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 hover:text-[#03e55d] transition-all"
                >
                  Histórico
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 hover:text-[#03e55d] transition-all"
                >
                  Preguntas Frecuentes
                </Link>
              </li>
            </ul>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;
