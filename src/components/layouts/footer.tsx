import { h, FunctionalComponent } from "preact";
import { styled } from "goober";

interface Props {
  className?: string;
}

const year = new Date().getFullYear();
const preactjs = "https://preactjs.com";
const cloudflarePages = "https://pages.cloudflare.com";

const Component: FunctionalComponent<Props> = (props) => (
  <footer {...props}>
    <div>
      <small>@{year} Kawano Yudai.</small>
      <br />
      <p>
        This site is built with&nbsp;
        <a href={preactjs} target="_blank" rel="noopener noreferrer">
          Preact
        </a>
        &nbsp; and hosting on&nbsp;
        <a href={cloudflarePages} target="_blank" rel="noopener noreferrer">
          Cloudflare Pages
        </a>
        .
      </p>
    </div>
  </footer>
);

const StyledComponent = styled(Component)`
  padding: 1rem;
  text-align: center;
  & > div {
    margin: 0 auto;
    max-width: var(--max-width);
    font-size: 1rem;
    color: var(--color-gray);
    small {
      font-size: 1rem;
    }
    p {
      margin: 0.5rem 0 0;
    }
  }
`;

const ContainerComponent: FunctionalComponent = () => <StyledComponent />;

export const Footer = ContainerComponent;
