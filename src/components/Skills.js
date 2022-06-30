import React from "react";
import SkillsList from "./SkillsList";

export default function Skills(props) {
  return (
    <div className="flex flex-col items-center justify-center skills">
      <div className="flex items-center justify-center mb-[50px]">
        <h1 className=" text-lg tracking-widest text-white">SKILLS</h1>
      </div>

      <SkillsList />
    </div>
  );
}
