import React from "react";
import Header from "./components/sections/Header";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Footer from "./components/sections/Footer";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
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
