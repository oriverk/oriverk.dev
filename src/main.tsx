import { Fragment, h, render } from "preact";
import { setup } from "goober";
import { App } from "./app";
import { GlobalStyles } from "./styles/global";

setup(h);

const app = document.getElementById("app")!;

render(
  <Fragment>
    <GlobalStyles />
    <App />
  </Fragment>,
  app
);
