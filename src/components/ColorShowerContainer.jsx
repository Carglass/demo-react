import { connect } from "react-redux";
import { toggleColor } from "../actions";
import ColorShower from "./ColorShower";

const getVisible = ({ shower }, color) => {
  console.log(color);
  return shower[color];
};

const mapStateToProps = (state, { color }) => {
  return {
    isVisible: getVisible(state, color),
    color: color
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChangeHandler: color => {
      dispatch(toggleColor(color));
    }
  };
};

const ColorShowerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ColorShower);

export default ColorShowerContainer;
