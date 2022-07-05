import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import { portfolioData } from "./data/portfolioData";
import "./styles.css";

export default function App() {
  return (
    <div>
      <Header name={portfolioData.basic_info.name} />
      <About about={portfolioData.basic_info.about} />
      <Projects />
      <Skills skills={portfolioData.skills} />
      <Experience work={portfolioData.experience} />
      <Footer
        name={portfolioData.basic_info.name}
        social={portfolioData.basic_info.social}
      />
    </div>
  );
}
