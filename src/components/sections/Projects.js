import React from "react";
import ProjectList from "../utils/ProjectList";
import SectionTitle from "../utils/SectionTitle";

export default function Projects(props) {
  return (
    <div className="bg-primaryBeige min-h-[400px]">
      <SectionTitle title="Prosjekter" />

      <ProjectList project={props} />
    </div>
  );
}
