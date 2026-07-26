import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { LanguageProvider } from "./context/LanguageContext";

function App() {
  return (
    <div>
      <main>
        <LanguageProvider>
          <Header />
          <Hero />
          <About />
          <Projects />
          <Contact />
          <Footer />
        </LanguageProvider>
      </main>
    </div>
  );
}

export default App;
