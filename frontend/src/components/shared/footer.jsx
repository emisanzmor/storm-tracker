function Footer({ data }) {
  return (
    <footer className="w-full bg-black/30 backdrop-blur-md text-white/60 text-sm mt-12 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-8 py-6 flex flex-col md:flex-row justify-between gap-6">
        <div className="flex flex-col items-start md:items-start">
          <p className="font-semibold text-[#00FF66] mb-2">Desarrolladores:</p>
          <p className="text-white/40 text-xs mt-2">
            {data.map((dev, index) => (
              <span key={index}>
                {dev} {index < data.length - 1 && " · "}
              </span>
            ))}
          </p>
        </div>

        <div className="mt-4 md:mt-0 text-xs text-white/40">
          &copy; {new Date().getFullYear()} Storm Tracker
        </div>
      </div>
    </footer>
  );
}

export default Footer;
