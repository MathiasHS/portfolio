import React from "react";

import { Icon } from "@iconify/react";
import TextWindow from "./TextWindow";
import TopBarDots from "../TopBarDots";

export default function About(props) {
  return (
    <div id="about">
      <div className="flex items-center justify-center">
        <h1 className="text-4xl m-10">Om meg</h1>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 xs: grid-cols-1 place-items-center min-h-screen">
        <div className="border-2 shadow ">
          <TopBarDots className="bg-slate-50 border-b-2" />
          <div className="polaroid p-3">
            <div className="flex mb-4 justify-center items-center ">
              <img
                width={180}
                src="images/image_me.png"
                alt="Avatar placeholder"
              />
            </div>
            <div className="inline-flex">
              <Icon icon="logos:react" height="40" className="m-1" />
              <Icon icon="logos:java" height="40" className="m-1" />
              <Icon icon="logos:javascript" height="40" className="m-1" />
              <Icon icon="logos:mysql" height="40" className="m-1" />
            </div>
          </div>
        </div>

        <TextWindow about={props.about} />
      </div>
    </div>
  );
}
