import { h, render } from 'preact'
import { setup } from 'goober'
import { App } from './app'

// import "./index.css"

setup(h)

render(<App />, document.getElementById('app')!)
