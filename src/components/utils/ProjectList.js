import React from "react";
import ProjectItem from "./ProjectItem";

export default function ProjectList(props) {
  return (
    <div>
      {props.work.projects.map((project) => (
        <ProjectItem title={project.title} />
      ))}
    </div>
  );
}
