import React from "react";
import { render } from "react-dom";
import "typeface-poppins";
import configureStore, { history } from "./store/configureStore";
import App from "./App";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

const store = configureStore();

render(
  <BrowserRouter basename="/">
    <App history={history} store={store} />
  </BrowserRouter>,
  document.getElementById("app")
);

moduleHotAccept(module);

export function moduleHotAccept(mod) {
  if (mod.hot) {
    mod.hot.accept("./App", () => {
      const NewApp = require("./App").default;
      render(
        <BrowserRouter basename="/">
          <NewApp history={history} store={store} />
        </BrowserRouter>,
        document.getElementById("app")
      );
    });
  }
}
