import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// Custom Router
import { HistoryRouter } from "./_helpers/historyRouter.tsx";
// Antd
import "../node_modules/antd/dist/antd.min.css";
import { Provider } from "react-redux";
import store from "./store";

// Custom history
import { history } from "./_helpers/history";

ReactDOM.render(
  <Provider store={store}>
    <HistoryRouter history={history}>
      <App />
    </HistoryRouter>
  </Provider>,
  document.getElementById("root")
);
