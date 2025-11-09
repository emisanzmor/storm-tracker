function Footer({ data }) {
  return (
    <footer className="w-full bg-black/30 backdrop-blur-md text-white/60 text-sm mt-12 border-t border-white/10">
      <div className="mx-auto px-8 py-6 flex flex-col justify-between items-start">
        <p className="font-semibold text-[#00ff66bd]">Desarrolladores: </p>
        <p className="text-white/40 text-xs mt-2">
          {data.map((dev, index) => (
            <span key={index}>
              {dev} {index < data.length - 1 && " · "}
            </span>
          ))}
        </p>
      </div>
    </footer>
  );
}
export default Footer;
