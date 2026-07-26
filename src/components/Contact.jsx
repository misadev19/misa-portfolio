import { FaEnvelope } from "react-icons/fa";
import { translations } from "../i18n";
import { useLanguage } from "../context/LanguageContext";

export default function Contact() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="contact" className="contact">
      <h1 className="logo">Contact</h1>

      <div className="contact-content">
        <p>{t.contact.description}</p>
      </div>

      <p className="email-address">hello.misa.dev@gmail.com</p>
      <a href="mailto:hello.misa.dev@gmail.com" className="btn">
        {t.contact.email}
        <FaEnvelope />
      </a>
    </section>
  );
}
