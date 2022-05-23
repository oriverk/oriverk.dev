/* eslint-disable arrow-body-style */
import React, { Suspense } from "react";
import { styled } from "goober";

import { Seo } from "../components/seo";
import { LoadingIcon } from "../components/LoadingIcon";

const Resume = React.lazy(() => import('../components/Resume'));

interface Props {
  className?: string;
}

const Component: React.FC<Props> = ({ className }) => {

  return (
    <div className={className}>
      <Seo pathname="/about/" title="About" description="About Kawano Yudai" noindex />
      <Suspense fallback={<LoadingIcon />}>
        <Resume owner="oriverk" repo="Curriculum-Vitae" type='html' />
      </Suspense>
    </div>
  );
};

const StyledComponent = styled(Component)`
  max-width: var(--max-width);
`;

const ContainerComponent: React.FC = () => <StyledComponent />;

export const About = ContainerComponent;
