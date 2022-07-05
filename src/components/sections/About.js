import React from "react";
import TextWindow from "../utils/TextWindow";
import Polaroid from "../utils/Polaroid";
import SectionTitle from "../utils/SectionTitle";

export default function About(props) {
  return (
    <div id="about">
      <SectionTitle title="Om meg" />

      <div className="grid gap-5 sm:grid-cols-2 xs:grid-cols-1 place-items-center min-h-screen">
        <Polaroid />

        <TextWindow about={props.about} />
      </div>
    </div>
  );
}
