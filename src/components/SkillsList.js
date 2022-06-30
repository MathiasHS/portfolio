import React from "react";
import SkillItem from "./SkillItem.js";
import { portfolioData } from "../data/portfolioData.js";

export default function SkillsList(props) {
  return (
    <div className="flex flex-row">
      {portfolioData.map((info) => (
        <ul
          key={info.skills.icons.toString()}
          style={{ listStyleType: "none", justifyContent: "space-around" }}
        >
          {info.skills.icons.map((skills) => (
            <li
              key={skills.name.toString()}
              style={{ float: "left", marginRight: "1rem", marginLeft: "1rem" }}
            >
              <SkillItem name={skills.name} icon={skills.icon} />
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}
