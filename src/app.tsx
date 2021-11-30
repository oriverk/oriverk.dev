import { h, Fragment } from "preact"
import Header from "./components/Header"
import Main from './components/Main'
import Footer from './components/Footer'

export function App() {
  return (
    <Fragment>
      <Header />
      <Main />
      <Footer />
    </Fragment>
  )
}
