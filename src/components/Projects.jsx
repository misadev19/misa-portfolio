import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import misa from "../assets/images/misa.jpg";

const projects = [
  {
    id: 1,
    title: "My portfolio website",
    image: misa,
    description: "Tech Stack: React/JavaScript/HTML/CSS/Vite",
    github: "https://github.com/xxx",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

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

            <a href={selectedProject.github} target="_blank" className="btn">
              View Github
              <FaGithub />
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
