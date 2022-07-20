import React from "react";
import SectionTitle from "../../utils/SectionTitle";
import SkillsList from "./components/SkillsList";

export default function Skills(props) {
  return (
    <div className="flex flex-col items-center justify-center bg-primaryBlack min-h-[300px]">
      <SectionTitle title="Skills" className="text-white" />

      <SkillsList skills={props.skills} />
    </div>
  );
}
