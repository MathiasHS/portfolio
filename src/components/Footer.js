import React from "react";
import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <div className="footer flex items-center justify-center flex-col">
      <div className="flex" style={{ marginBottom: 15 }}>
        <a href="https://github.com/Datamus" target="_blank">
          <Icon
            icon="akar-icons:github-fill"
            color="white"
            width="25"
            height="25"
            style={{ marginRight: 20 }}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/mathias-simonsen-6723541a3/"
          target="_blank"
        >
          <Icon
            icon="akar-icons:linkedin-box-fill"
            color="white"
            width="25"
            height="25"
          />
        </a>
      </div>

      <div>
        <p style={{ fontSize: 15, color: "white" }}>
          Copyright &copy; Mathias Simonsen
        </p>
      </div>
    </div>
  );
}
