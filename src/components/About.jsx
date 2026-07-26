import Ronny from "../assets/images/Ronny.jpg";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n";

export default function About() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="about" className="about">
      <h1 className="logo">About</h1>
      <img src={Ronny} />
      <div className="about-content">
        {t.about.paragraphs.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>
    </section>
  );
}
