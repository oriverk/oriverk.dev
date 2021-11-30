import { Fragment, h, render } from 'preact'
import { setup } from 'goober'
import { App } from './app'
import { GlobalStyles } from './styles/global'

setup(h)

render(
  <Fragment>
    <GlobalStyles />
    <App />
  </Fragment>,
  document.getElementById('app')!)
