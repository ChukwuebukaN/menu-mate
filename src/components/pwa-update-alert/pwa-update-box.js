import React from "react";
import Alert from "./pwa-update-alert";
// import { useSelector } from "react-redux";
// import {
//   serviceWorkerInitialized,
//   serviceWorkerUpdated,
//   serviceWorkerRegistration,
// } from "../../redux/auth/authSlice";
// import { SW_INIT, SW_UPDATE } from "./pwa-update-types";

function AlertBox() {
  // const isServiceWorkerInitialized = useSelector(serviceWorkerInitialized);
  // const isServiceWorkerUpdated = useSelector(serviceWorkerUpdated);
  // const isServiceWorkerRegistration = useSelector(serviceWorkerRegistration);
  // const isServiceWorkerRegistration = useSelector(serviceWorkerRegistration);
  const isServiceWorkerUpdated = localStorage.getItem("pwaHasUpdates");
  const isServiceWorkerInitialized = localStorage.getItem("pwaSWInitialized");
  // eslint-disable-next-line no-console
  console.log("All SW Stuff =", isServiceWorkerInitialized, isServiceWorkerUpdated);

  /** Handles the Service Worker function that triggers the reload of current page  */
  // const updateServiceWorker = () => {
  //   const registrationWaiting = isServiceWorkerRegistration.waiting;

  //   if (registrationWaiting) {
  //     registrationWaiting.postMessage({ type: "SKIP_WAITING" });

  //     registrationWaiting.addEventListener("statechange", (e) => {
  //       if (e.target.state === "activated") {
  //         window.location.reload();
  //       }
  //     });
  //   }
  // };

  const updateServiceWorker = () => {
    localStorage.setItem("pwaHasUpdates", "false");
    localStorage.setItem("pwaSWInitialized", "false");
    window.location.reload(true);
  };

  return (
    <div className="absolute w-full justify-between flex px-4 py-2">
      <span />
      <span>
        {isServiceWorkerInitialized === "true" && (
          <Alert
            text="Service Worker is initialized for the first time"
            // type={SW_INIT}
          />
        )}
        {isServiceWorkerUpdated === "true" && (
          <Alert
            text="There is a new version available."
            buttonText="Update"
            // type={SW_UPDATE}
            onClick={() => updateServiceWorker()}
          />
        )}
      </span>
    </div>
  );
}

export default AlertBox;
