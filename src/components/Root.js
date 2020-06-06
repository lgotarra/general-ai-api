import PropTypes from "prop-types";
import App from "../App";
import { Provider } from "react-redux";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { render } from "react-dom";

const Root = ({ store }) => (
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Route path="/" component={App} />
      </Router>
    </Provider>
  </React.StrictMode>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;
