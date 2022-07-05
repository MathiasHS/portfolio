import React from "react";
import { Icon } from "@iconify/react";

export default function TopBarDots(props) {
  return (
    <div className={[props.className]}>
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
  );
}
