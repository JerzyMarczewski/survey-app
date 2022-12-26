import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "survey-core/modern.min.css";
import { StylesManager } from "survey-core";

import { store } from "./app/store";
import { Provider } from "react-redux";

StylesManager.applyTheme("modern");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
