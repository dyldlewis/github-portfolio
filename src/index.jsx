import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom"
import { AppContainer } from "react-hot-loader";
import reducer from "./reducers/repos";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import App from "./components/App";

import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";

const loggerMiddleware = createLogger();

const store = createStore(
  reducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("react-app-root")
);
