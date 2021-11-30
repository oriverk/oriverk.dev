import { h, Fragment } from "preact"
import Router from "preact-router"

import Header from "./components/Header"
import Footer from './components/Footer'
import Home from "./pages/Home"
import About from "./pages/About"

export function App() {
  return (
    <Fragment>
      <Header />
      <Router>
        <Home path="/" />
        <About path="/about" />
      </Router>
      <Footer />
    </Fragment>
  )
}
