import React from "react";

import { Icon } from "@iconify/react";
import TextWindow from "./TextWindow";

export default function About() {
  return (
    <div id="about">
      <div className="flex items-center justify-center">
        <h1 className="text-4xl" style={{ marginTop: 20 }}>
          Om meg
        </h1>
      </div>

      <div className="grid grid-cols-12 ">
        <div className="col-span-3 ">
          <div className="flex polaroid items-center justify-center ">
            <span>
              <div className="flex mb-4 justify-center items-center container">
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
            </span>
          </div>
        </div>

        <div className="col-span-9 flex justify-center items-center ">
          <TextWindow />
        </div>
      </div>
    </div>
  );
}
