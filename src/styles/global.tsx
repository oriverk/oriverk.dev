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
  margin: 0;
  padding: 0;
  border: 0;
}

html {
  font-family: 'Helvetica Neue', arial, sans-serif;
}

a {
  color: var(--color-miku);
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
}
`;
