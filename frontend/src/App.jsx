import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/shared/header";
import Footer from "./components/shared/footer";
import Home from "./components/pages/home";
import Dashboard from "./components/Current/dashboard";
import { useState, useEffect } from "react";
import Historico from "./components/pages/historico";
import Resumen_his from "./components/Historical/resume_his";
import TormentasActuales from "./components/pages/actuales";
import Faq from "./components/pages/faq";

function App() {
  const [devsArray, setDevsArray] = useState([
    "Emiliano Sánchez Moreno",
    "Bruno Arturo Goñi Flores",
    "Pedro Enrique Mendoza García",
  ]);

  const [ip, setIp] = useState("localhost");

  useEffect(() => {
    document.documentElement.style.backgroundColor = "#000c14";
    document.body.style.backgroundColor = "#000c14";
    document.body.style.margin = "0";
    document.body.style.padding = "0";
  }, []);

  return (
    <BrowserRouter>
      <div className="relative bg-[#000c14] w-full overflow-x-hidden">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/tormentas_actuales" element={<TormentasActuales />} />
          <Route path="/dashboard/:id_storm" element={<Dashboard />} />
          <Route path="/historico" element={<Historico />} />
          <Route path="/resume/:date/:id_storm" element={<Resumen_his />} />
        </Routes>
        <Footer data={devsArray} />
      </div>
    </BrowserRouter>
  );
}

export default App;
