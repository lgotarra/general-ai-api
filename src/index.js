import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import Header from "./Header";
import Item from "./Item";

function App() {
  return (
    <div>
      <Item />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
