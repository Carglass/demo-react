import React from "react";
import Selector from "./Selector";
import ColorSquare from "./ColorSquare";

function ColorShower(props) {
  return (
    <div>
      <Selector
        color={props.color}
        onChangeHandler={props.onChangeHandler}
        isChecked={props.isVisible}
      />
      <ColorSquare color={props.color} isVisible={props.isVisible} />
    </div>
  );
}

export default ColorShower;
