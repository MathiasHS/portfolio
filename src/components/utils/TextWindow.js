import React from "react";
import TopBarDots from "./TopBarDots";

export default function TextWindow(props) {
  return (
    <div id="aboutWindow" className="m-4 lg:mr-[200px]">
      <TopBarDots className="border-2 rounded-t bg-slate-50" />

      <div className="border-2 border-t-0 rounded-b p-4">
        <p className="text-xl">{props.about}</p>

        <div>
          <a
            href="mailto:mathias.hodne.simonsen@gmail.com?subject=Hei Mathias, la oss ta en prat!"
            target="_blank"
            rel="noreferrer"
          >
            <p className="flex justify-center">
              <span className="bg-blue-200 rounded p-1 hover:shadow-sm">
                Ta kontakt!
              </span>
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
