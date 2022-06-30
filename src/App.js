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
      <Header {...portfolioData} />
      <About {...portfolioData} />
      <Projects />
      {/* <Skills /> */}
      <Experience />
      <Footer {...portfolioData} />
    </>
  );
}
