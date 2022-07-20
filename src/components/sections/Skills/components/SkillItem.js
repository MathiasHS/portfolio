import React from "react";
import { Icon } from "@iconify/react";

export default function SkillItem(props) {
  return (
    <div className="flex">
      <div className="p-2 m-1 min-w-[150px] rounded bg-slate-100/[0.05]">
        <div className="flex items-center justify-center ">
          <Icon
            icon={props.icon}
            width={40}
            style={{ margin: 5, color: "white" }}
          />
        </div>
        <div className="flex items-center justify-center min-w-[35px] rounded text-white">
          <p className="text-base">{props.name}</p>
        </div>
      </div>
    </div>
  );
}
