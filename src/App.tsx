import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ThemeToggleBtn from "./components/ThemeToggleBtn";
import { useEffect, useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem("darkMode");
    return stored ? JSON.parse(stored) : false;
  });
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="font-sans bg-light dark:bg-Dark-grayish-blue dark:text-light text-Black75 scroll-smooth flex flex-col">
      {/* dark & light mode toggle */}
      <section className="fixed desktop:bottom-[0.7vw] bottom-[3vw] desktop:right-[1.5vw] right-[3vw] z-[99999999999]">
        <ThemeToggleBtn {...{ darkMode, setDarkMode }} />
      </section>
      {/* Navigation always on top */}
      <Navbar />

      {/* Main sections */}
      <main>
        <Hero darkMode={darkMode}/>
        <About />
        <hr className="desktop:my-[3vw] h-0.5 border-0 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

        <Projects />
        <hr className="desktop:mt-[5vw] h-0.5 border-0 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
        <Skills />
        <hr className="desktop:mt-[5vw] h-0.5 border-0 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
