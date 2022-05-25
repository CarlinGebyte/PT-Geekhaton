import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";
import AppRoutes from "./Routes/AppRoutes";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <AppRoutes/>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);