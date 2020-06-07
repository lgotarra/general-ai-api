import PropTypes from "prop-types";
import App from "./App";
import { Provider, useSelector } from "react-redux";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Image from "./Image";

const ExtendedImage = ({ match }) => {
  let imageID = match.params.imageid;
  const images = useSelector((state) => state.images);
  const result = images.find(({ id }) => id === imageID);
  return (<Image image={result} />);
}

const Root = ({ store }) => (
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/image/:imageid" exact strict component={ExtendedImage} />
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>
);


Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;
