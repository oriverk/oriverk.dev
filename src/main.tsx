import { Fragment, h, render } from "preact";
import { setup } from "goober";
import { App } from "./app";
import { GlobalStyles } from "./styles/global";

setup(h);

const app = document.getElementById("app") as Element;

render(
  <Fragment>
    <GlobalStyles />
    <App />
  </Fragment>,
  app
);
