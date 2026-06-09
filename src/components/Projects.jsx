import { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import misa from "../assets/images/misa.jpg";

const projects = [
  {
    id: 1,
    title: "My portfolio website",
    image: misa,
    description: "Tech Stack: React/JavaScript/HTML/CSS/Vite",
    github: "https://github.com/misadev19/misa-portfolio",
    url: "https://misa-dev.vercel.app/",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="projects">
      <h1 className="logo">Projects</h1>
      <div className="project-grid">
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-card"
            onClick={() => setSelectedProject(project)}
          >
            <img src={project.image} alt={project.title} />

            <div className="project-overlay">
              <p>View Details</p>
            </div>

            <h3>{project.title}</h3>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="modal" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="close-btn"
              onClick={() => setSelectedProject(null)}
            >
              Close
            </button>

            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="modal-image"
            />
            <h2>{selectedProject.title}</h2>

            <p>{selectedProject.description}</p>
            <div className="modal-buttons">
              <a
                href={selectedProject.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                Live Demo <FiExternalLink />
              </a>

              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                View GitHub <FaGithub />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
