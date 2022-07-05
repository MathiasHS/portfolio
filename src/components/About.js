import React from "react";
import TextWindow from "./TextWindow";
import Polaroid from "./Polaroid";

export default function About(props) {
  return (
    <div id="about">
      <div className="flex items-center justify-center">
        <h1 className="text-4xl m-10">Om meg</h1>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 xs:grid-cols-1 place-items-center min-h-screen">
        <Polaroid />

        <TextWindow about={props.about} />
      </div>
    </div>
  );
}
