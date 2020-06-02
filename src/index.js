import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import Header from "./Header";
import Item from "./Item";

const some_img_url = "https://samples.clarifai.com/metro-north.jpg"

function App() {
  return (
    <div>
      <Item img_url = {some_img_url} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
