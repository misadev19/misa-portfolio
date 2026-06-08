import { FaGithub } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="hero">
      <h1 className="hero-logo">Misa</h1>
      <p>Frontend Developer based in Tokyo, Japan.</p>
      <a
        href="https://github.com/misadev19"
        target="_blank"
        rel="noopener noreferrer"
        className="btn"
      >
        View GitHub
        <FaGithub />
      </a>
    </section>
  );
}
