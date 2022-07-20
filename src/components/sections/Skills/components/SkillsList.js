import React from "react";
import SkillItem from "./SkillItem.js";

export default function SkillsList(props) {
  return (
    <div id="skillList">
      <ul className=" flex flex-wrap justify-center items-center max-w-[500px] mb-10">
        {props.skills.icons.map((icon) => (
          <li key={icon.name.toString()}>
            <SkillItem name={icon.name} icon={icon.icon} />
          </li>
        ))}
      </ul>
    </div>
  );
}
