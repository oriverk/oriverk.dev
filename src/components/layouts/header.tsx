import { h, FunctionalComponent } from "preact";
import { Link } from "preact-router/match";
import { styled } from "goober";

import { NamedIcon } from "../named-icon";
import { ContactIcon, PenIcon } from "../icons";

const blogPath = import.meta.env.VITE_BLOG_PATH;

interface Props {
  className?: string;
}

const Component: FunctionalComponent<Props> = (props) => (
  <header {...props}>
    <nav>
      <Link href="/" activeClassName="active" className="left" >
        oriverk.dev
      </Link>
      <div className="right">
        <Link href="/about" activeClassName="active">
          <NamedIcon name="About" variant="none" width={16} height={16} fontSize={3}>
            <ContactIcon label="go to resume page" size={8} color="var(--color-gray)" />
          </NamedIcon>
        </Link>
        <a href={blogPath} target="_blank" rel="noopener noreferrer">
          <NamedIcon name="Blog" variant="none" width={16} height={16} fontSize={3}>
            <PenIcon label="go to blog page" size={8} color="var(--color-gray)" />
          </NamedIcon>
        </a>
      </div>
    </nav>
  </header>
);

const StyledComponent = styled(Component)`
  font-size: 1.5rem;
  & > nav {
    margin: 0 auto;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: var(--max-width);
    & > .left {
      color: var(--color-white);
      text-decoration: none;
      &.active {
        text-decoration: underline var(--color-miku);
      }
      &:hover {
        color: var(--color-miku);
        transition: color 0.3s ease;
      }
    }
    & > .right {
      display: flex;
      & > a:hover {
        text-decoration: none;
        transition: background 0.25s ease;
        background: rgba(0, 0, 0, 0.3);
        border-radius: 0.2rem;
      }
    }
  }
`;

const ContainerComponent: FunctionalComponent = () => <StyledComponent />;

export const Header = ContainerComponent;