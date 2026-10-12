import { useEffect, useState } from "react";
import "./styles/App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import {
  experiences,
  personalInfo,
  skills,
} from "./data/portfolioData";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const stored = localStorage.getItem("portfolio-theme");
    return stored === "dark";
  });

  useEffect(() => {
    document.body.classList.toggle("dark", isDarkMode);
    localStorage.setItem("portfolio-theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  return (
    <>
      <Navbar
        isDarkMode={isDarkMode}
        onToggleTheme={() => setIsDarkMode((prev) => !prev)}
        resumePath={personalInfo.resumePath}
      />

      <Hero personalInfo={personalInfo} />

      <main>
        <About />
        <Skills skills={skills} />
        <Experience experiences={experiences} />
        <Contact personalInfo={personalInfo} />
      </main>

      <footer className="site-footer">
        <div className="app-shell">
          <p>
            © {new Date().getFullYear()} {personalInfo.name}. Software Developer
            Portfolio.
          </p>
        </div>
      </footer>
    </>
  );
}