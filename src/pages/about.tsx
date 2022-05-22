import React from "react";
import { styled } from "goober";

import { Seo } from "../components/seo";
import markdown from "../../Resume.md?raw";
import { parseMarkdwon } from "../utils/markdown";
import { DangerouslySetInnerHTML } from "../components/markdown";

interface Props {
  className?: string;
}

const Component: React.FC<Props> = ({ className }) => {
  const { html } = parseMarkdwon(markdown);

  return (
    <div className={className}>
      <Seo pathname="/about/" title="About" description="About Kawano Yudai" noindex />
      <DangerouslySetInnerHTML html={html} />
    </div>
  );
};

const StyledComponent = styled(Component)`
  max-width: var(--max-width);
`;

const ContainerComponent: React.FC = () => <StyledComponent />;

export const About = ContainerComponent;
