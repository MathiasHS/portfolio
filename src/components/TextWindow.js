import React from "react";
import { Icon } from "@iconify/react";
import "../styles.css";

export default function TextWindow(props) {
  return (
    <div className=" justify-center items-center ">
      <div className="textWindowTop">
        <div className="inline-flex">
          <Icon
            icon="emojione:red-circle"
            width="10"
            height="10"
            style={{ margin: "12.5 5 10" }}
          />
          <Icon
            icon="twemoji:yellow-circle"
            width="10"
            height="10"
            style={{ margin: "12.5 5 10" }}
          />
          <Icon
            icon="twemoji:green-circle"
            width="10"
            height="10"
            style={{ margin: "12.5 5 10" }}
          />
        </div>
      </div>

      <div className="textWindowBody">
        <p style={{ fontSize: 20 }}>{props.about}</p>
      </div>
    </div>
  );
}
