import React from "react";
import TextWindow from "../utils/TextWindow";
import Polaroid from "../utils/Polaroid";
import SectionTitle from "../utils/SectionTitle";

export default function About(props) {
  return (
    <div id="about" className="bg-white dark:bg-darkModeColor1 min-h-full">
      <SectionTitle title="Om meg" className="dark:text-white" />

      <div className="grid gap-5 sm:grid-cols-2 xs:grid-cols-1 place-items-center min-h-screen">
        <Polaroid />

        <TextWindow about={props.about} />
      </div>
    </div>
  );
}
