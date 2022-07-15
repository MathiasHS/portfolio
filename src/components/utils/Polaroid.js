import React from "react";
import TopBarDots from "./TopBarDots";
import { Icon } from "@iconify/react";
import pictureMe from "../../images/image_me.PNG"
export default function Polaroid() {
  const favTechIcons = () => {
    if (localStorage.getItem("theme") === "dark") {
      return (
        <div className="inline-flex">
          <Icon
            icon="akar-icons:react-fill"
            height="40"
            color="white"
            className="m-1"
          />
          <Icon icon="bxl:java" height="40" color="white" className="m-1" />
          <Icon
            icon="ion:logo-javascript"
            height="40"
            color="white"
            className="m-1"
          />
          <Icon icon="cib:mysql" height="40" color="white" className="m-1" />
        </div>
      );
    } else {
      return (
        <div className="inline-flex">
          <Icon icon="logos:react" height="40" className="m-1" />
          <Icon icon="logos:java" height="40" className="m-1" />
          <Icon icon="logos:javascript" height="40" className="m-1" />
          <Icon icon="logos:mysql" height="40" className="m-1" />
        </div>
      );
    }
  };

  return (
    <div className="border-2 dark:border-none shadow ">
      <TopBarDots className="bg-slate-50 dark:bg-darkModeColor4 border-b-2 dark:border-none" />
      <div className="polaroid dark:bg-darkModeColor4 p-3">
        <div className="flex mb-4 justify-center items-center ">
          <img width={180} src={pictureMe} alt="Avatar placeholder" />
        </div>
        <div className="inline-flex">{favTechIcons()}</div>
      </div>
    </div>
  );
}
