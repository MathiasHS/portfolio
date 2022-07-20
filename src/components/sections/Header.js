import React from "react";
import Typewriter from "typewriter-effect";
import { Icon } from "@iconify/react";
import DarkmodeToggle from "../utils/DarkmodeToggle";
export default function Header(props) {
  return (
    <>
      {/* h-[calc(100vh-8.75rem)] */}
      <header className="h-screen flex justify-center items-center bg-primaryBeige dark:bg-darkModeColor0">
        <div className="flex items-center flex-col">
          <Icon icon="la:laptop-code" width="150" height="150" />

          <p className="title-styles text-lg tracking-widest">
            {"<" + props.name + " />"}
          </p>

          <div className="title-h-14 title-styles">
            <Typewriter
              options={{
                loop: true,
                autoStart: true,
                pauseFor: 1500,
                strings: [
                  "Webutvikler",
                  "Datanerd",
                  "Crypto entusiast",
                  "Gamer",
                  "Speider",
                ],
              }}
            />
          </div>

          <div className="absolute top-0 right-0 mt-4 mr-4">
            <DarkmodeToggle />
          </div>
        </div>
      </header>
    </>
  );
}
