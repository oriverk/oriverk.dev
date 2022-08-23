import { createGlobalStyles } from "goober/global";

// 1024px x .75 = 768px

export const GlobalStyles = createGlobalStyles`
:root {
  --max-width: 1024px; 
  --color-white: #fafafa;
  --color-gray: #b3b3b3;
  --color-background: #1A202C;
  --color-miku: #00e1ee;
  --color-purple: #673ab8;
  --color-divider: #41464b;
}

* {
  box-sizing: border-box;
}

html {
  font-family: 'Helvetica Neue', arial, sans-serif;
}

body {
  margin: 0;
}

a {
  color: var(--color-miku);
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
}
`;
