import { FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <h1 className="logo">Contact</h1>

      <div className="contact-content">
        <p>
          I'm available for website development projects and front-end
          development opportunities.
        </p>
        <p>
          Webサイト制作やフロントエンド開発に関する
          ご相談、ご依頼を歓迎しています。
        </p>
      </div>

      <p className="email-address">hello.misa.dev@gmail.com</p>
      <a href="mailto:hello.misa.dev@gmail.com" className="btn">
        Send Email
        <FaEnvelope />
      </a>
    </section>
  );
}
