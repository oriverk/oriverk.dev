import { h } from "preact";
import Router from "preact-router";

import { Layout } from "./components/layouts";
import { Home } from "./pages/home";
import { About } from "./pages/about";

export function App() {
  return (
    <Layout>
      <Router>
        <Home path="/" />
        <About path="/about" />
      </Router>
    </Layout>
  );
}
