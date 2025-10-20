function Footer() {
  const authors = ["Emiliano Sánchez Moreno"];

  return (
    <footer className="w-full bg-black/30 backdrop-blur-md text-white/60 text-sm mt-12 border-t border-white/10">
      <div className="mx-auto px-8 py-6 flex flex-col justify-between items-start">
        <p className="font-semibold">Autores: </p>
        <p className="text-white/40 text-xs mt-2">
          {authors.map((author, index) => (
            <span>
              {author} {index < authors.length - 1 && " · "}
            </span>
          ))}
        </p>
      </div>
    </footer>
  );
}
export default Footer;
