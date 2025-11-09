import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="sticky top-0 left-0 w-full z-50 flex flex-row items-center justify-between backdrop-blur-md bg-[#011928]/60 border-b border-b-neutral-400/10 px-8 py-2">
      <div>
        <Link
          to="/"
          className="text-xl text-[#00FF66] whitespace-nowrap px-2 py-1
 relative inset-0 
bg-[#00FF66]/10 scale-x-100
 overflow-hidden -z-10 "
        >
          Storm Tracker
        </Link>
      </div>
      <nav className="w-full p-4 flex justify-end">
        <ul className="flex gap-12 cursor-pointer">
          <li>
            <Link
              to="/"
              className="relative text-lg text-white px-2 py-1
after:content-[''] after:absolute after:inset-0 
after:bg-[#00FF66]/60 after:transform after:scale-x-0 after:origin-left 
after:transition-transform after:duration-600 hover:after:scale-x-100
 overflow-hidden after:-z-10 "
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/Tormentas_Actuales"
              className="relative text-lg text-white px-2 py-1
after:content-[''] after:absolute after:inset-0 
after:bg-[#00FF66]/60 after:transform after:scale-x-0 after:origin-left 
after:transition-transform after:duration-600 hover:after:scale-x-100
 overflow-hidden after:-z-10"
            >
              Tormentas Actuales
            </Link>
          </li>

          <li>
            <Link
              to="/historico"
              className="relative text-lg text-white px-2 py-1
after:content-[''] after:absolute after:inset-0 
after:bg-[#00FF66]/60 after:transform after:scale-x-0 after:origin-left 
after:transition-transform after:duration-600 hover:after:scale-x-100
 overflow-hidden after:-z-10"
            >
              Historico
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              className="relative text-lg text-white px-2 py-1
after:content-[''] after:absolute after:inset-0 
after:bg-[#00FF66]/60 after:transform after:scale-x-0 after:origin-left 
after:transition-transform after:duration-600 hover:after:scale-x-100
 overflow-hidden after:-z-10"
            >
              About Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
