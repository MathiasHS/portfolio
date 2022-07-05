import React from "react";
import RoundedNote from "./RoundedNote";
export default function ProjectItem(props) {
  return (
    <div className="max-w-[300px] m-2 bg-white p-2 rounded shadow-md">
      <p className="text-xl">{props.title}</p>
      <div className="min-h-[50px] min-w-[90px]">
        <p>{props.description}</p>
      </div>
      <div className="flex flex-wrap">
        <RoundedNote title="MySQL" className="bg-red-500/75" />
        <RoundedNote title="MySQL" className="bg-red-500/75" />
      </div>
      <div className="flex justify-end ">
        <a
          className="hover:bg-primaryBeige/60 hover:shadow-md p-1"
          href="https://www.vg.no"
          target="_blank"
          rel="noreferrer"
        >
          <p>View Code</p>
        </a>
      </div>
    </div>
  );
}
