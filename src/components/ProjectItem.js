import React from "react";

export default function ProjectItem() {
  return (
    <div className=" bg-slate-400 w-60 h-40 p-2">
      <p>Title of project</p>
      <p>Short description of project, 2 lines maybe, not more</p>
      <div className="flex">
        <div className="flex h-15 w-30 bg-slate-600">react</div>
        <div className="flex ml-2 h-15 w-30 bg-slate-600">react</div>
        <div className="flex ml-2 h-15 w-30 bg-slate-600">react</div>
      </div>
      <div className="flex justify-end">
        <p>View Code</p>
      </div>
    </div>
  );
}
