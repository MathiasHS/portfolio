import React from "react";
import Header from "./components/Header";
import "./App.scss";

export default function App() {
  return (


    <>
      <Header/>
      <div className="aligner language">
        <div style={{marginRight: 15}}>
          <span
            className="iconify language-icon"
            data-icon="twemoji-flag-for-flag-norway"
            data-inline="false"
          ></span>
        </div>
        <div>
          <span
            className="iconify language-icon"
            data-icon="twemoji-flag-for-flag-united-kingdom"
            data-inline="false"
          ></span>
        </div>
      </div>
    </>
    
  )
}


