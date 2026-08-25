import { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import misa from "../assets/images/misa.jpg";
import meno from "../assets/images/meno.png";
import crownAndAmber from "../assets/images/crown-and-amber.png";
import { translations } from "../i18n";
import { useLanguage } from "../context/LanguageContext";

const projects = [
  {
    id: "portfolio",
    title: {
      en: "Portfolio Website",
      jp: "ポートフォリオサイト",
    },
    image: misa,
    description: {
      en: "A personal portfolio website built with React and Vite. Designed with a focus on clean UI, responsive layouts, and a smooth user experience.",
      jp: "ReactとViteを使用して制作した個人ポートフォリオサイトです。シンプルで見やすいUIとレスポンシブ対応を意識して開発しました。",
    },
    techStack: "React / JavaScript / HTML / CSS / Vite/ Vercel",
    github: "https://github.com/misadev19/misa-portfolio",
    url: "https://misa-dev.vercel.app/",
  },
  {
    id: "meno",
    title: {
      en: "Meno",
      jp: "Meno",
    },
    image: meno,
    description: {
      en: "An all-in-one productivity app that combines a calendar, to-do list, and notes in a simple and intuitive interface.",
      jp: "カレンダー・Todo・メモをひとつにまとめた、シンプルで使いやすいオールインワンアプリです。",
    },
    techStack: "React Native / Expo / JavaScript / AsyncStorage / AdMob",

    url: "https://apps.apple.com/us/app/meno-カレンダー-todo-メモ/id6802020654",
  },
  {
    id: "crown-and-amber",
    title: {
      en: "CROWN & AMBER",
      jp: "CROWN & AMBER",
    },
    image: crownAndAmber,
    description: {
      en: "A fictional tea brand e-commerce website built with React and Vite. Designed with a focus on elegant visual design, responsive layouts, and an immersive shopping experience.",
      jp: "架空の紅茶ブランド「CROWN & AMBER」のECサイトを想定して制作したWebサイトです。エレガントなビジュアルデザインとレスポンシブ対応を意識し、ブランドの世界観を感じられるサイトを目指しました。",
    },
    techStack: "React / JavaScript / HTML / CSS / Vite / Vercel",
    github: "https://github.com/misadev19/crown-and-amber",
    url: "https://crown-and-amber.vercel.app/",
  },
];

export default function Projects() {
  const { language } = useLanguage();
  const t = translations[language];
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
            <img src={project.image} alt={project.title[language]} />

            <div className="project-overlay">
              <p>{t.projects.viewDetail}</p>
            </div>

            <h3>{project.title[language]}</h3>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="modal" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="close-btn"
              onClick={() => setSelectedProject(null)}
              aria-label="Close"
            >
              ✕
            </button>

            <img
              src={selectedProject.image}
              alt={selectedProject.title[language]}
              className="modal-image"
            />

            <h2>{selectedProject.title[language]}</h2>

            <p className="modal-description">
              {selectedProject.description[language]}
            </p>

            <p className="tech-stack">
              {t.projects.techStack}
              {selectedProject.techStack}
            </p>

            <div className="modal-links">
              {selectedProject.url && (
                <a
                  href={selectedProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {selectedProject.id === "meno" ? "App Store" : "Live Demo"}
                  <FiExternalLink />
                </a>
              )}

              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub <FaGithub />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
