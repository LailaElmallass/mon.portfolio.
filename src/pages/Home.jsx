import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";
import SplitText from "../components/SplitText";
import MyPhoto from "../assets/MyPhoto.png";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";

const handleAnimationComplete = () => {
  console.log("All letters have animated!");
};

const Home = () => {
  return (
    <>
    <section className="hero">
      <div className="hero-content">
        <div className="hero-img">
          <img src={MyPhoto} alt="Laila Elmallass" className="shiny-img" />
        </div>
        <div className="hero-text">
          <SplitText
            text="Laila Elmallass"
            className="shiny-text"
            delay={150}
            animationFrom={{ opacity: 0, transform: "translate3d(0, 50px, 0)" }}
            animationTo={{ opacity: 1, transform: "translate3d(0, 0, 0)" }}
            easing="easeOutCubic"
            threshold={0.2}
            rootMargin="-50px"
            onLetterAnimationComplete={handleAnimationComplete}
          />
          <hr className="hr" />
          <p className="intro">Bonjour, je suis Laila,</p>
          <p className="description">
            Développeuse web Full-Stack spécialisée dans la création
            d’applications web modernes et performantes.
          </p>
          <hr className="hr" />
          <Link to="/contact" className="hero-btn">
            Contactez-moi
          </Link>
          <div className="social-media">
            <a
              href="https://github.com/LailaElmallass"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/laila-elmallass-614295208"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="mailto:Laila.elmallass.2018@gmail.com"
              aria-label="Email"
            >
              <i className="fa-solid fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
     
    </section>
    <Projects />
    <About />
    <Contact />
    </>
  );
};

export default Home;