import React from "react";
import "./index.css";

import { ControlElement } from "../controlElement";

export const ControlPanel = ({controlElements, currEl, activate}) => {
  const elements = controlElements.map((el, i) => (
    <ControlElement img={el} key={i} id={i} curr={currEl} onClick={() => activate(el)}/>
  ));

  return <div className="controlPanel">{elements}</div>;
}
