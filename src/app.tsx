import { h, Fragment } from "preact"
import Router from "preact-router"

import Header from "./components/Header"
import Footer from './components/Footer'
import Home from "./pages/Home"
import About from "./pages/About"
import Main from "./components/Main"

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
  )
}
