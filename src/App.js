import React from "react";
import Routers from "./helpers/routers";
import { ToastAlertContextProvider } from "./contexts/ToastAlertContext";

function App() {
  return (
    <ToastAlertContextProvider>
      <Routers />
    </ToastAlertContextProvider>
  );
}

export default App;
