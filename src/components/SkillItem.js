import React from "react";
import { Icon } from "@iconify/react";

export default function SkillItem(props) {
  return (
    <>
      <div className="skills-tile">
        <div className="flex items-center justify-center">
          <Icon
            icon={props.icon}
            width={40}
            color={"white"}
            style={{ margin: 5 }}
          />
        </div>
        <div className="flex items-center justify-center min-h-[35px] text-white">
          <p className="text-base">{props.name}</p>
        </div>
      </div>
    </>
  );
}
