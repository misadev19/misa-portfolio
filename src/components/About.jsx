import Ronny from "../assets/images/Ronny.jpg";

export default function About() {
  return (
    <section id="about" className="about">
      <h1 className="logo">About</h1>
      <img src={Ronny} />
      <div className="about-content">
        <div className="about-en">
          <p>
            I'm a developer based in Japan with a growing focus on front-end
            development.
          </p>
          <p>
            My current interests lie in building clean, intuitive, and
            user-friendly web experiences using React and modern JavaScript.
            Through both professional work and personal projects, I've gained
            experience with JavaScript, C#, Python, and SQL, while continuing to
            expand my front-end development skills.
          </p>
          <p>
            Having spent a year in Canada on a working holiday, I'm comfortable
            communicating in both Japanese and English and enjoy working in
            international environments.
          </p>
          <p>
            I'm currently focused on developing my expertise in React and
            creating web applications that combine functionality with a great
            user experience.
          </p>
        </div>
        <hr className="about-divider" />
        <div className="about-ja">
          <p>
            Reactを中心としたモダンなフロントエンド開発を学習しており、
            ユーザーにとって使いやすく、分かりやすいUIを作ることに興味があります。
          </p>
          <p>
            これまで業務や個人開発を通してJavaScript、C#、Python、SQLに触れてきました。
            現在はReactを中心に学習を進めながら、ポートフォリオ制作や
            Webアプリケーション開発に取り組んでいます。
          </p>
          <p>
            カナダでのワーキングホリデー経験があり、
            日本語と英語の両方でコミュニケーションが可能です。
          </p>
        </div>
      </div>
    </section>
  );
}
