import React from "react";
import SkillItem from "./SkillItem.js";

export default function SkillsList(props) {
  return (
    <div className="flex flex-row">
      <ul style={{ listStyleType: "none", justifyContent: "space-around" }}>
        {props.skills.icons.map((icon) => (
          <li
            key={icon.name.toString()}
            style={{ float: "left", marginRight: "1rem", marginLeft: "1rem" }}
          >
            <SkillItem name={icon.name} icon={icon.icon} />
          </li>
        ))}
      </ul>
    </div>
  );
}
