import React from "react";
import Routers from "./helpers/routers";
import AlertBox from "./components/pwa-update-alert/pwa-update-box";

function App() {
  return (
    <>
      <AlertBox />
      <Routers />
    </>
  );
}

export default App;
