import React from "react";
import { styled } from "goober";

interface Props {
  className?: string;
}

const year = new Date().getFullYear();
const reactjs = "https://reactjs.org/";
const cloudflarePages = "https://pages.cloudflare.com";

const Component: React.FC<Props> = ({ className }) => (
  <footer className={className}>
    <div>
      <small>@{year} Kawano Yudai.</small>
      <br />
      <p>
        This site is built with&nbsp;
        <a href={reactjs} target="_blank" rel="noopener noreferrer">
          React
        </a>
        &nbsp;and hosting on&nbsp;
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
  background: var(--color-background);
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

const ContainerComponent: React.FC = () => <StyledComponent />;

export const Footer = ContainerComponent;
