import { h, FunctionalComponent } from "preact";
import { styled } from "goober";

import { Seo } from "../components/seo";

interface Props {
  className?: string;
}

const Component: FunctionalComponent<Props> = (props) => (
  <div {...props}>
    <Seo path="/" title="404: Page Not Found" description="Kawano Yudai`s website" noindex />
    <h1>404</h1>
    <p>Page Not Found ...</p>
    <a href="/">go back to home</a>
  </div>
);

const StyledComponent = styled(Component)`
  max-width: var(--max-width);
  display: flex;
  flex-direction: column;
  font-size: 2rem;
  text-align: center;

  h1, p {
    margin: 0 0 1rem;
    padding: 0;
  }
`;

const ContainerComponent: FunctionalComponent = () => <StyledComponent />;

export const PageNotFound = ContainerComponent;
