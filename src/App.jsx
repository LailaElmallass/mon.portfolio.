import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import { Particles } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // Remplace @tsparticles/engine par @tsparticles/slim
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/global.css";

function App() {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <Router>
      {/* Particules en arrière-plan */}
      <Particles id="tsparticles" init={particlesInit} 
      options={{
          background: {
            color: "#000",
          },
          particles: {
            number: {
              value: 100,
            },
            size: {
              value: 3,
            },
            move: {
              enable: true,
              speed: 1,
            },
          },
        }} />
        
      
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
