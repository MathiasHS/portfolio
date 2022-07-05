import React from "react";
import "../styles.css";
import TopBarDots from "../TopBarDots";

export default function TextWindow(props) {
  return (
    <div id="aboutWindow" className="m-4 lg:mr-[200px]">
      <TopBarDots className="border-2 rounded-t bg-slate-50" />

      <div className="border-2 border-t-0 rounded-b">
        <p className="text-xl">{props.about}</p>
      </div>
    </div>
  );
}
