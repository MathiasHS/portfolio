import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";

// import "./App.scss";
import "./styles.css";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

export default function App() {
  return (
    <>
      <Header />
      <div className="aligner language">
        <div style={{ marginRight: 15 }}>
          <span
            className="iconify language-icon"
            data-icon="twemoji-flag-for-flag-norway"
            data-inline="false"
          ></span>
        </div>
        <div>
          <span
            className="iconify language-icon"
            data-icon="twemoji-flag-for-flag-united-kingdom"
            data-inline="false"
          ></span>
        </div>
      </div>
      <About />
      <Projects />
      <Skills icon="logos:react" height="40" name="React" />
      <Experience />
      <Footer />
    </>
  );
}
