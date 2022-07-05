import React from "react";

export default function SectionTitle(props) {
  return (
    <div className="flex py-10 justify-center text-lg tracking-widest">
      <h1 className={[props.className]}>{props.title}</h1>
    </div>
  );
}
