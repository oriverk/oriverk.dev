import React, { Suspense } from "react";
import { styled } from "goober";

import { Container } from "../components/Container"
import { Seo } from "../components/Seo";
import { LoadingIcon } from "../components/LoadingIcon";

const Box = styled(Container)`
  width: 100%;
  background: var(--color-background);
  color: white;
`

const Resume = React.lazy(() => import('../components/Resume'));

export const About: React.FC = () => (
    <Box className="About">
      <Seo pathname="/about/" title="About" description="About Kawano Yudai" noindex />
      <Suspense fallback={<LoadingIcon />}>
        <Resume owner="oriverk" repo="Curriculum-Vitae" type='html' />
      </Suspense>
    </Box>
  );