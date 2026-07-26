import { useLanguage } from "../context/LanguageContext";

export default function Header() {
  const { language, changeLanguage } = useLanguage();

  return (
    <header className="header">
      <a href="#" className="header-name">
        Misa
      </a>

      <nav className="nav">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>

        <div className="language-switch">
          <button
            className={language === "jp" ? "active" : ""}
            onClick={() => changeLanguage("jp")}
          >
            JP
          </button>

          <span>/</span>

          <button
            className={language === "en" ? "active" : ""}
            onClick={() => changeLanguage("en")}
          >
            EN
          </button>
        </div>
      </nav>
    </header>
  );
}
