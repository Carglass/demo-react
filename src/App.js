import React from "react";
import Selector from "./components/Selector";

function App() {
  return (
    <div className="App">
      <Selector onChangeHandler={() => true} color="blue" isChecked={true} />
    </div>
  );
}

export default App;
