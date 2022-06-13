import React from "react";
import { styled } from "goober";

import { Container } from "../components/Container"
import { Seo } from "../components/Seo";

const Box = styled(Container)`
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  text-align: center;
  overflow: hidden;
  position: relative;
  background: var(--color-background);
  color: white;

  font-size: 2rem;
  text-align: center;

  h1, p {
    margin: 0 0 1rem;
    padding: 0;
  }
`

export const PageNotFound: React.FC = () => (
  <Box>
    <Seo pathname="/404/" title="404: Page Not Found" description="Kawano Yudai`s website" noindex />
    <h1>404</h1>
    <p>Page Not Found</p>
  </Box>
);