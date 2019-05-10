import React from "react";

function Selector(props) {
  return (
    <label>
      {props.color}
      <input
        type="checkbox"
        checked={props.isChecked}
        onChange={props.onChangeHandler}
      />
    </label>
  );
}

export default Selector;
