import React from "react";
import ProjectItem from "./ProjectItem";

export default function Projects() {
  return (
    <div className="flex flex-col items-center h-96 bg-primaryBeige justify-center">
      <div className="flex items-center justify-center mb-[50px]">
        <h1 className=" text-lg tracking-widest">Prosjekter</h1>
      </div>
      <div className="felx flex-row">
        <ProjectItem />
        {/* <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem /> */}
      </div>
    </div>
  );
}
