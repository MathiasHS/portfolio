import React from "react";
import TopBarDots from "../TopBarDots";
import { Icon } from "@iconify/react";
export default function Polaroid() {
  return (
    <div className="border-2 shadow ">
      <TopBarDots className="bg-slate-50 border-b-2" />
      <div className="polaroid p-3">
        <div className="flex mb-4 justify-center items-center ">
          <img width={180} src="images/image_me.png" alt="Avatar placeholder" />
        </div>
        <div className="inline-flex">
          <Icon icon="logos:react" height="40" className="m-1" />
          <Icon icon="logos:java" height="40" className="m-1" />
          <Icon icon="logos:javascript" height="40" className="m-1" />
          <Icon icon="logos:mysql" height="40" className="m-1" />
        </div>
      </div>
    </div>
  );
}
