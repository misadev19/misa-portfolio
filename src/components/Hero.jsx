import { FaGithub } from "react-icons/fa";
import { translations } from "../i18n";
import { useLanguage } from "../context/LanguageContext";
import logo from "../assets/images/misa-logo.png";

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="hero">
      <img src={logo} alt="Misa" className="hero-logo" />
      <p>
        Frontend Engineer & Mobile App Developer <br />
        based in Tokyo, Japan.
      </p>
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
