import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import { portfolioData } from "./data/portfolioData";
import "./styles.css";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

export default function App() {
  return (
    <>
      <Header name={portfolioData.basic_info.name} />
      <About about={portfolioData.basic_info.about} />
      <Projects />
      <Skills skills={portfolioData.skills} />
      <Experience work={portfolioData.experience} />
      <Footer
        name={portfolioData.basic_info.name}
        social={portfolioData.basic_info.social}
      />
    </>
  );
}
