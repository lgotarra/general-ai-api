import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { imagesReducer } from "../reducers";
import api from "../api";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const imagesStore = createStore(
  imagesReducer,
  composeEnhancers(applyMiddleware(thunk.withExtraArgument(api)))
);
