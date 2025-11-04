import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="relative top-0 left-0 w-full z-50 flex flex-row backdrop-blur-md bg-black/30">
      <div className="flex flex-col p-4 w-auto">
        <Link to="/" className="pl-4 text-xl text-green-400 whitespace-nowrap">
          Storm Tracker
        </Link>
      </div>
      <nav className="w-full p-4 flex justify-end">
        <ul className="flex gap-8 cursor-pointer">
          {/* DASHBOARD LINK FOR TESTING PURPOSES ONLY */}
          <li>
            <Link
              to="/dashboard"
              className="text-lg text-white hover:text-green-200"
            >
              DashboardDEV
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-lg text-white hover:text-green-200"
            >
              About
            </Link>
          </li>
          <li>
            <Link to="/" className="text-lg text-white hover:text-green-200">
              Home
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
