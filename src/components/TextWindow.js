import React from "react";
import { Icon } from "@iconify/react";
import "../styles.css";

export default function TextWindow() {
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
        <p style={{ fontSize: 20 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          facilisis, leo sit amet fermentum fringilla, quam elit venenatis
          nulla, eu ultrices turpis purus sit amet massa. Ut suscipit quam quam,
          nec pharetra sem ullamcorper id. Nulla elit leo, ultricies a aliquam
          eget, lobortis nec ipsum. Proin quis eros molestie, feugiat magna a,
          ornare lectus. Praesent rutrum elit at tellus ornare, eget tristique
          risus rhoncus. Suspendisse eleifend mauris enim, a lacinia sapien
          ornare et. Mauris vulputate volutpat est, at consectetur purus
          fermentum non.
        </p>
      </div>
    </div>
  );
}
