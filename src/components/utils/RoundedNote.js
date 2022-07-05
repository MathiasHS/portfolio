import React from "react";

export default function RoundedNote(props) {
  const styles = {
    "border-radius": "15px",
    padding: "5px",
    margin: "2px",
    "font-size": "0.75rem",
  };
  return (
    <div style={styles} className={[props.className]}>
      <p className="primaryBlack">{props.title}</p>
    </div>
  );
}
