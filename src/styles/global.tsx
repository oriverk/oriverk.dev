import { createGlobalStyles } from 'goober/global';

// 1024px x .75 = 768px

export const GlobalStyles = createGlobalStyles`
* {
  box-sizing: border-box;
}

:root {
  --max-width: 768px; 
  --color-white: #fafafa;
  --color-gray: #b3b3b3;
  --color-background: #1A202C;
  --color-miku: #00e1ee;
  --color-purple: #673ab8;
}

html,
body {
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
  background: var(--color-background);
  font-family: 'Helvetica Neue', arial, sans-serif;
  font-weight: 400;
  color: var(--color-white);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app {
  display: flex;
  flex-direction: column;
  height: 100%;
  text-align: center;
  background-color: var(--color-background);
  color: var(--color-white);
  font-size: 1.5em;
}

a {
  color: var(--color-miku);
}
`;