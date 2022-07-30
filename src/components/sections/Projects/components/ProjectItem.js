import React from "react";
import RoundedNote from "../../../utils/RoundedNote";
import { Icon } from "@iconify/react";
export default function ProjectItem(props) {
  var techs = props.tech.map((tech) => {
    return (
      <RoundedNote key={tech.name} title={tech.name} className={tech.color} />
    );
  });

  return (
    <div className="w-72 p-2 my-2 bg-white dark:bg-darkModeColor0 rounded shadow-md flex flex-col">
      <div className="flex-grow">
        <div className="flex">
          <p className=" dark:text-white mr-2">{props.title}</p>
          <a
            className=" dark:text-white mt-0.5"
            href={props.url}
            target="_blank"
            rel="noreferrer"
          >
            <Icon icon="charm:link-external" />
          </a>
        </div>
        <p className="dark:text-white text-sm">{props.description}</p>
      </div>

      <div className="flex flex-wrap">{techs}</div>
    </div>
  );
}
