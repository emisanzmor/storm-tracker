import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/shared/header";
import Dashboard from "./components/dashboard";
import Footer from "./components/shared/footer";

function App() {
  return (
    <>
      <div className="relative bg-black/90 w-full h-screen overflow-x-hidden">
        <Header />
        <Dashboard />
        <Footer />
      </div>
    </>
  );
}

export default App;
