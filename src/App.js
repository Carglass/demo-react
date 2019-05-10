import React from "react";
import ColorShower from "./components/ColorShower";

function App() {
  return (
    <div className="App">
      <ColorShower onChangeHandler={() => true} color="blue" isVisible={false} />
    </div>
  );
}

export default App;
