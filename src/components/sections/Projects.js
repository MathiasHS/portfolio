import React from "react";
import ProjectList from "../utils/ProjectList";
import SectionTitle from "../utils/SectionTitle";

export default function Projects(props) {
  return (
    <div className="bg-primaryBeige dark:bg-darkModeColor2 min-h-[400px]">
      <SectionTitle title="Prosjekter" className="dark:text-white" />

      <ProjectList project={props} />
    </div>
  );
}
