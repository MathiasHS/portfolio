import React, { useState } from "react";
import Switch from "react-switch";

export default function DarkModeSwitch() {
  return (
    <>
      <Switch
        // checked={}
        // onChange={}
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
      {/* <h2>{colorTheme === "light" ? "Darkmode" : "Lightmode"}</h2> */}
    </>
  );
}
