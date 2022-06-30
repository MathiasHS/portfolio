import React from "react";
import { Icon } from "@iconify/react";
import { portfolioData } from "../data/portfolioData";

export default function Footer() {
  var networks = portfolioData.basic_info.social.map((network) => {
    return (
      <a key={network.name} href={network.url} target="_blank" rel="noreferrer">
        <Icon
          icon={network.icon}
          color="white"
          width="25"
          height="25"
          style={{ marginRight: 20 }}
        />
      </a>
    );
  });

  return (
    <div className="flex items-center justify-center flex-col bg-primaryBlack h-40">
      <div className="flex mb-4">{networks}</div>

      <p className="text-white">
        Copyright &copy; {portfolioData.basic_info.name}
      </p>
    </div>
  );
}
