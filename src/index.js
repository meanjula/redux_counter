import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import reducer from "./store/reducer";
import { Provider } from "react-redux";

import { createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";

const store = createStore(reducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
