import React, { useState } from "react";
import { Icon } from "@iconify/react";
import Switch from "react-switch";
import Typewriter from "typewriter-effect";

export default function Header(props) {
  const [checked, setChecked] = useState(false);

  function onThemeSwitchChange(checked) {
    setChecked(checked);
    setTheme();
  }

  function setTheme() {
    var dataThemeAttribute = "data-theme";
    var body = document.body;
    var newTheme =
      body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
    body.setAttribute(dataThemeAttribute, newTheme);
  }

  return (
    <>
      {/* h-[calc(100vh-8.75rem)] */}
      <header className="h-screen flex justify-center items-center">
        <div className="flex items-center flex-col">
          <Icon icon="la:laptop-code" width="150" height="150" />
          <p className="title-styles text-lg tracking-widest">{props.name}</p>

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

          <Switch
            checked={checked}
            onChange={onThemeSwitchChange}
            offColor="#baaa80"
            onColor="#353535"
            className="react-switch mx-auto"
            width={90}
            height={40}
            uncheckedIcon={
              <span
                className="iconify"
                data-icon="twemoji:owl"
                data-inline="false"
                style={{
                  display: "block",
                  height: "100%",
                  fontSize: 25,
                  textAlign: "end",
                  marginLeft: "20px",
                  color: "#353239",
                }}
              />
            }
            checkedIcon={
              <span
                className="iconify"
                data-icon="noto-v1:sun-with-face"
                data-inline="false"
                style={{
                  display: "block",
                  height: "100%",
                  fontSize: 25,
                  textAlign: "end",
                  marginLeft: "10px",
                  color: "#353239",
                }}
              />
            }
            id="icon-switch"
          />
        </div>
      </header>
      {/* <div className="flex items-center justify-center language">
        <div style={{ marginRight: 15 }}>
          <span
            className="iconify language-icon"
            data-icon="twemoji-flag-for-flag-norway"
            data-inline="false"
          ></span>
        </div>
        <div>
          <span
            className="iconify language-icon"
            data-icon="twemoji-flag-for-flag-united-kingdom"
            data-inline="false"
          ></span>
        </div>
      </div> */}
    </>
  );
}
