function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex flex-row backdrop-blur-md bg-black/30">
      <div className="flex flex-col p-4 w-auto">
        <a href="/" className="pl-4 text-xl text-green-300 whitespace-nowrap">
          Storm Tracker
        </a>
      </div>
      <nav className="w-full p-4 flex justify-end">
        <ul className="flex gap-8 cursor-pointer">
          <li>
            <a href="/" className="text-xl text-white hover:text-green-200">
              Home
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
