import React, { useState } from "react";
import "../styles/projects.css"; 
import projectsList from '../assets/ProjectsList'

function Projects() {
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? projectsList : projectsList.slice(0, 2);

  return (
    <section className="projects">
       <h2><i className="fa fa-laptop"></i>Mes Projets</h2>
      <p>Quelques exemples de mes réalisations en développement web.</p>
      <div className="projects-grid">
        {displayedProjects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.description}</p>
            <div className="project-links">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="link-with-icon"
              >
                <i className="fas fa-globe"></i> Voir en ligne
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="link-with-icon"
              >
                <i className="fab fa-github"></i> Code GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    
      {projectsList.length > 2 && (
       <button
            className="toggle-button"
            onClick={() => {
              console.log("Bouton cliqué !");
              setShowAll(!showAll);  // Inverse l'état de showAll
            }}
          >
            {showAll ? "Voir moins -" : "Voir plus +"}
       </button>
     
      
      )}
    </section>
  );
}

export default Projects;