import React, {useState} from "react";
import { Icon } from '@iconify/react';
import Switch from "react-switch";
import Typewriter from 'typewriter-effect';

export default function Header({props}) {

    const [checked, setChecked] = useState(false);

    function onThemeSwitchChange(checked){
      setChecked(checked);
      setTheme();
    }

    function setTheme() {
      var dataThemeAttribute = "data-theme";
      var body = document.body;
      var newTheme =
        body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
      body.setAttribute(dataThemeAttribute, newTheme);
    }

    return (
        <header id="home" style={{height: window.innerHeight - 140, display: 'block'}}>
            <div className="row aligner" style={{height: '100%'}}>
                <div>
                    <div>
                    <Icon icon="la:laptop-code" width="150" height="150"/>
                    <p className="title-styles">Mathias Simonsen</p>

                    <div className="title-container title-styles">
                        <Typewriter 
                          options={{
                            loop: true,
                            autoStart: true,
                            pauseFor: 1500,
                            strings: ["Webutvikler", "Datanerd", "Crypto entusiast", "Gamer", "Speider"]
                          }}
                        />
                    </div>

                    <Switch 
                        checked={checked}
                        onChange={onThemeSwitchChange}
                        offColor="#baaa80"
                        onColor="#353535"
                        className="react-switch mx-auto"
                        width={90}
                        height={40}
                        uncheckedIcon={
                          <span
                            className="iconify"
                            data-icon="twemoji:owl"
                            data-inline="false"
                            style={{
                              display: "block",
                              height: "100%",
                              fontSize: 25,
                              textAlign: "end",
                              marginLeft: "20px",
                              color: "#353239",
                            }}
                          ></span>
                        }
                        checkedIcon={
                          <span
                            className="iconify"
                            data-icon="noto-v1:sun-with-face"
                            data-inline="false"
                            style={{
                              display: "block",
                              height: "100%",
                              fontSize: 25,
                              textAlign: "end",
                              marginLeft: "10px",
                              color: "#353239",
                            }}
                          ></span>
                        }
                        id="icon-switch"
                    />
                    </div>
                </div>
            </div>
        </header>
    );
}