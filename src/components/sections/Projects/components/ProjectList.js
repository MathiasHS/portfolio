import React from "react";
import ProjectItem from "./ProjectItem";

export default function ProjectList(props) {
  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-1 justify-items-center pb-10 ">
      {props.project.work.projects.map((project) => (
        <ProjectItem
          key={project.title}
          title={project.title}
          description={project.description}
          url={project.url}
          tech={project.tech}
        />
      ))}
    </div>
  );
}
