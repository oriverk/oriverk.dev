import { h, Fragment } from "preact";
import Router from "preact-router";

import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Home } from "./pages/home";
import { About } from "./pages/about";
import { Main } from "./components/main";

export function App() {
  return (
    <Fragment>
      <Header />
      <Main>
        <Router>
          <Home path="/" />
          <About path="/about" />
        </Router>
      </Main>
      <Footer />
    </Fragment>
  );
}
