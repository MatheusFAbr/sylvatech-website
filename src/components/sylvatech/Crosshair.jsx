import React from "react";

export default function Crosshair({ position = "top-left" }) {
  const posClasses = {
    "top-left": "top-0 left-0",
    "top-right": "top-0 right-0",
    "bottom-left": "bottom-0 left-0",
    "bottom-right": "bottom-0 right-0",
  };

  return (
    <span
      className={`absolute ${posClasses[position]} text-border text-xs leading-none font-mono pointer-events-none select-none`}
      style={{ fontSize: "10px" }}
    >
      +
    </span>
  );
}