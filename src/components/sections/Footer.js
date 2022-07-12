import React from "react";
import { Icon } from "@iconify/react";

export default function Footer(props) {
  var networks = props.social.map((network) => {
    return (
      <a key={network.name} href={network.url} target="_blank" rel="noreferrer">
        <Icon
          icon={network.icon}
          width="25"
          height="25"
          style={{ marginRight: 20, color: "white" }}
        />
      </a>
    );
  });

  return (
    <div className="flex items-center justify-center flex-col bg-primaryBlack h-40">
      <div className="flex mb-4">{networks}</div>

      <p className="text-white">Copyright &copy; {props.name}</p>
    </div>
  );
}
