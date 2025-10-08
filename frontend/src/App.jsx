import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/shared/header";
import Dashboard from "./components/shared/dashboard";

function App() {
  return (
    <>
      <div className="relative bg-neutral-900 w-full h-screen overflow-x-hidden">
        <Header />
        <Dashboard />
      </div>
    </>
  );
}

export default App;
