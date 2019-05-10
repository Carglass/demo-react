import React from "react";
import "./ColorSquare.css";

function ColorSquare(props) {
  if (props.isVisible) {
    return <div className={`color-square-${props.color}`} />;
  } else {
    return null
  }
}

export default ColorSquare;
