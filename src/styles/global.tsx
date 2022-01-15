import { createGlobalStyles } from "goober/global";

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
  --color-divider: #41464b;
}

html,
body {
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
  background: var(--color-background);
  font-family: 'Helvetica Neue', arial, sans-serif;
  font-weight: 400;
  color: var(--color-white);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  color: var(--color-miku);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}

#app {
  display: flex;
  flex-direction: column;
  height: 100%;
}
`;
