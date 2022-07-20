import React from "react";
import Header from "./components/sections/Header";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects/Projects";
import Skills from "./components/sections/Skills/Skills";
import Experience from "./components/sections/Experience";
import Footer from "./components/sections/Footer";
import { portfolioData } from "./data/portfolioData";

import "./styles.css";

export default function App() {
  return (
    <div>
      <Header name={portfolioData.basic_info.name} />
      <About about={portfolioData.basic_info.about} />
      <Projects work={portfolioData.work} />
      <Skills skills={portfolioData.skills} />
      <Experience work={portfolioData.experience} />
      <Footer
        name={portfolioData.basic_info.name}
        social={portfolioData.basic_info.social}
      />
    </div>
  );
}
