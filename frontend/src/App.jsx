import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/shared/header";
import Footer from "./components/shared/footer";
import Home from "./components/pages/home";
import Dashboard from "./components/pages/dashboard";
import About from "./components/pages/about";

function App() {
  return (
    <BrowserRouter>
      <div className="relative bg-black/90 w-full h-screen overflow-x-hidden">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
