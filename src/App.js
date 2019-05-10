import React from "react";
import ColorShowerContainer from "./components/ColorShowerContainer";
import { createStore } from "redux";
import { Provider } from "react-redux";
import demo from "./reducers";

const store = createStore(demo);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ColorShowerContainer color="blue" />
        <ColorShowerContainer color="green" />
        <ColorShowerContainer color="red" />
      </div>
    </Provider>
  );
}

export default App;
