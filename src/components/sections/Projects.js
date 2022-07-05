import React from "react";
import ProjectItem from "../utils/ProjectItem";
import ProjectList from "../utils/ProjectList";
import SectionTitle from "../utils/SectionTitle";
import { portfolioData } from "../../data/portfolioData";
export default function Projects(props) {
  return (
    <div className="bg-primaryBeige min-h-[400px] ">
      <SectionTitle title="Prosjekter" />
      <div className="grid grid-cols-3 justify-items-center">
        {props.work.projects.map((project) => (
          <ProjectItem
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
}
