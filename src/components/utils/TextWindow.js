import React from "react";
import TopBarDots from "./TopBarDots";

export default function TextWindow(props) {
  return (
    <div id="aboutWindow" className="m-4 lg:mr-[200px]">
      <TopBarDots className="border-2 rounded-t bg-slate-50 dark:border-darkModeColor0 dark:bg-darkModeColor4" />

      <div className="border-2 border-t-0 bg-white dark:bg-darkModeColor3 rounded-b p-4 dark:border-darkModeColor0">
        <p className="text-base">{props.about}</p>

        <div className="mt-4">
          <a
            href="mailto:mathias.hodne.simonsen@gmail.com?subject=Hei Mathias, la oss ta en prat!"
            target="_blank"
            rel="noreferrer"
          >
            <p className="flex justify-center">
              <span className="bg-blue-200 dark:bg-darkModeColor1 rounded p-1 hover:shadow-sm">
                Ta kontakt!
              </span>
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
