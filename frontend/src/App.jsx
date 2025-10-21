import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/shared/header";
import Footer from "./components/shared/footer";
import Home from "./components/pages/home";
import Dashboard from "./components/pages/dashboard";
import About from "./components/pages/about";
import { useState } from "react";

function App() {
  const [devsArray, setDevsArray] = useState([
    "Emiliano Sánchez Moreno",
    "Bruno Arturo Goñi Flores",
    "Pedro Enrique Mendoza García",
  ]);

  return (
    <BrowserRouter>
      <div className="relative bg-linear-to-b from-gray-950/90 via-gray-800 to-gray-950/90 w-full h-screen overflow-x-hidden">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About data={devsArray} />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>

        <Footer data={devsArray} />
      </div>
    </BrowserRouter>
  );
}

export default App;
