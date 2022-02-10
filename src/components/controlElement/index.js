import React from "react";
import "./index.css";

export function ControlElement({ onClick, img, curr }) {
  return (
    <div
      className="controlElement"
      onClick={onClick}
      style={{ color: curr === img ? "blue" : "gray" }}
    >
      {img}
    </div>
  );
}
