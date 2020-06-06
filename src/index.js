import "./index.css";
import React from "react";
import { render } from "react-dom";
import {imagesStore} from "./redux/stores"
import Root from "./components/Root";


render(<Root store={imagesStore} />, document.getElementById("root"));
