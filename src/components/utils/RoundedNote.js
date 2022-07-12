import React from "react";

export default function RoundedNote(props) {
  const styles = {
    borderRadius: "15px",
    padding: "5px",
    margin: "2px",
    fontSize: "0.75rem",
  };
  return (
    <div style={styles} className={[props.className]}>
      <p className="primaryBlack">{props.title}</p>
    </div>
  );
}
