import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./shared/App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import {
  BrowserRouter,
  unstable_HistoryRouter as HistoryRouter,
} from "react-router-dom";
import { createBrowserHistory } from "history";
import store from "./redux/configureStore";

export const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <HistoryRouter history={history}>
      <App />
    </HistoryRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
