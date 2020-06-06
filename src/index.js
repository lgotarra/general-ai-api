import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import React from "react";
import { imagesStore } from "./redux/stores";
import { render } from "react-dom";

/*const some_img = {
  url: [
    "https://samples.clarifai.com/metro-north.jpg",
    "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
  ],
  title: ["Metro North", "Google Img"],
};*/

render(
  <React.StrictMode>
    <Provider store={imagesStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
