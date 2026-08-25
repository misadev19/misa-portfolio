import Ronny from "../assets/images/Ronny.jpg";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n";

export default function About() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="about" className="about">
      <h1 className="logo">About</h1>

      <div className="about-intro">
        <img src={Ronny} alt="Misa" />

        <div className="about-intro-text">
          <h2>{t.about.name}</h2>
          <p className="about-role">{t.about.role}</p>
          <p>{t.about.intro}</p>
        </div>
      </div>

      <div className="about-section">
        <h2 className="about-section-title">{t.about.whatIDo.title}</h2>

        <div className="about-grid">
          {t.about.whatIDo.items.map((item, index) => (
            <div className="about-item" key={index}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span>{item.tech}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="about-section about-approach">
        <h2 className="about-section-title">{t.about.approach.title}</h2>
        <p>{t.about.approach.text}</p>
      </div>

      <div className="about-section about-more">
        <h2 className="about-section-title">{t.about.moreAboutMe.title}</h2>
        <p>{t.about.moreAboutMe.text}</p>
      </div>
    </section>
  );
}
