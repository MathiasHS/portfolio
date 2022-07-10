import React from "react";
import RoundedNote from "./RoundedNote";
import { Icon } from "@iconify/react";
export default function ProjectItem(props) {
  var techs = props.tech.map((tech) => {
    return <RoundedNote title={tech.name} className={tech.color} />;
  });

  return (
    <div className="w-72  my-2 bg-white p-2 rounded shadow-md ">
      <div className="flex">
        <p className="text-xl">{props.title}</p>
        <a className=" " href={props.url} target="_blank" rel="noreferrer">
          <Icon icon="charm:link-external" />
        </a>
      </div>

      <p>{props.description}</p>
      <div className="flex flex-wrap">{techs}</div>
    </div>
  );
}
