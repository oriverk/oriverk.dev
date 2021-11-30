import { h, FunctionalComponent } from "preact"
import { styled } from "goober"

import NamedIcon from "../components/NamedIcon"
import { ContactIcon, PenIcon } from "../components/icons"

interface Props {
  className?: string;
}

const Component: FunctionalComponent<Props> = (props) => {
  return (
    <header {...props}>
      <nav>
        <a href="/">oriverk.dev</a>
        <div className="right">
          <a href="#">
            <NamedIcon name="Resume" variant="none" width={16} height={16} fontSize={3}>
              <ContactIcon label="go to resume page" size={8} color="var(--color-gray)" />
            </NamedIcon>
          </a>
          <a href="#blog">
            <NamedIcon name="Blog" variant="none" width={16} height={16} fontSize={3}>
              <PenIcon label="go to blog page" size={8} color="var(--color-gray)" />
            </NamedIcon>
          </a>
        </div>
      </nav>
    </header>
  )
}

const StyledComponent = styled(Component)`
text-align: center;
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 1rem;
  max-width: var(--max-width);
  a {
    color: white;
    text-decoration: none;
  }
  .right {
    display: flex;
    a:hover {
      transition: background .25s ease;
      background: rgba(0,0,0,0.3);
      border-radius: 5px;
    }
  }
}
`

const ContainerComponent: FunctionalComponent = () => (
  <StyledComponent />
)

const Hero = ContainerComponent
export default Hero
