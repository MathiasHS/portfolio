import React from "react";
import ProjectItem from "../utils/ProjectItem";
import SectionTitle from "../utils/SectionTitle";

export default function Projects() {
  return (
    <div className="bg-primaryBeige min-h-[400px] px-80">
      <SectionTitle title="Prosjekter" />
      <div className="grid grid-cols-3 justify-items-center">
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
      </div>
    </div>
  );
}
