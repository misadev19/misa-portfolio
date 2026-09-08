import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Header() {
  const { language, changeLanguage } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`header ${menuOpen ? "menu-open" : ""}`}>
      <a href="#" className="header-name">
        Misa
      </a>

      {/* PC Navigation */}
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

      {/* Mobile Menu Button */}
      <button
        className="menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <nav className="mobile-nav">
          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </nav>

        <div className="mobile-language">
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
      </div>
    </header>
  );
}
