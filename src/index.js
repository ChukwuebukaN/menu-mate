/* eslint-disable prettier/prettier */
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Provider } from "react-redux";
// import {
//   SW_INIT,
//   SW_UPDATE,
// } from "./components/pwa-update-alert/pwa-update-types";
import configureStore from "./redux/index";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import App from "./App";

const store = configureStore;
const history = createBrowserHistory();

// localStorage.setItem("pwaHasUpdates", "true");
// localStorage.setItem("pwaSWInitialized", "false");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter history={history}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
// serviceWorkerRegistration.register({
//   onSuccess: () => store.dispatch({ type: SW_INIT }),
//   onUpdate: (registration) =>
//     store.dispatch({ type: SW_UPDATE, payload: registration }),
// });

serviceWorkerRegistration.register({
  onUpdate: () => localStorage.setItem("pwaSWInitialized", "true"),
  onupdate: () => localStorage.setItem("pwaHasUpdates", "true"),
});

// onSuccess: () => dispatch({ type: SW_INIT }),
// onUpdate: (registration) =>
// dispatch({ type: SW_UPDATE, payload: registration }),

// import { userNotifications } from "./redux/auth/authSlice";
//   onSuccess: () =>
//     dispatch(
//       userNotifications({
//         serviceWorkerUpdated: true,
//       })
//     ),
//   onUpdate: (registration) =>
//     dispatch(
//       userNotifications({
//         serviceWorkerRegistration: registration,
//       })
//     ),

// serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
