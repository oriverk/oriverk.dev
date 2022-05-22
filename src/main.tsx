import React from "react";
import ReactDOM from "react-dom/client";
import { setup } from "goober";
import { HelmetProvider } from "react-helmet-async";
import { App } from "./app";
import { GlobalStyles } from "./styles/global";

setup(React.createElement);

const root = document.getElementById("root") as Element;

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <GlobalStyles />
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);
