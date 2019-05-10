import { combineReducers } from "redux";
import { TOGGLE_COLOR } from "./../actions";

function shower(state = { blue: false, red: false, green: false }, action) {
  switch (action.type) {
    case TOGGLE_COLOR:
      const newState = Object.assign({}, state);
      console.log(action.color);
      newState[action.color] = !newState[action.color];
      return newState;
    default:
      return state;
  }
}

const demo = combineReducers({
  shower
});

export default demo;
