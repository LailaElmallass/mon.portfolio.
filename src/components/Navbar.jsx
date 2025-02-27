import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import MyLogo from "../assets/MyLogo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="brand">
        <img src={MyLogo} alt="Laila" width={100} />
      </div>
      <button className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <div className={`links ${isOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setIsOpen(false)} className="nav-link">
          <i className="fas fa-home"></i> Accueil
        </Link>
        <Link to="/projects" onClick={() => setIsOpen(false)} className="nav-link">
          <i className="fas fa-project-diagram"></i> Projets
        </Link>
        <Link to="/about" onClick={() => setIsOpen(false)} className="nav-link">
          <i className="fas fa-user"></i> À propos
        </Link>
        <Link to="/contact" onClick={() => setIsOpen(false)} className="nav-link">
          <i className="fas fa-envelope"></i> Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;