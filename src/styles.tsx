import { createGlobalStyles } from 'goober/global';

export const GlobalStyles = createGlobalStyles`
html,
body {
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
  background: #fafafa;
  font-family: 'Helvetica Neue', arial, sans-serif;
  font-weight: 400;
  color: #444;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  box-sizing: border-box;
}

#app {
  height: 100%;
  text-align: center;
  background-color: #673ab8;
  color: #fff;
  font-size: 1.5em;
  padding-top: 100px;
}

.link {
  color: #fff;
}
`;