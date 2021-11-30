import { h, FunctionalComponent } from "preact"
import { styled } from "goober"

import { GithubIcon, TwitterIcon } from "../components/icons"
import NamedIcon from "../components/NamedIcon"

interface Props {
  className?: string;
}

const twitter = "https://twitter.com/not_you_die"
const github = "https://github.com/oriverk"

const Component: FunctionalComponent<Props> = (props) => {
  return (
    <main {...props}>
      <div className="content">
        <h1>Kawano Yudai</h1>
        <p>Agr. → ? / Bicycle</p>
        <div className="icons">
          <a href={twitter} target="_blank" rel="noopener noreferrer">
            <NamedIcon name="@not_you_die"
              variant="none" width={16} height={16} fontSize={3}
            >
              <TwitterIcon size={8} label="Twitter" />              
            </NamedIcon>
          </a>
          <a href={github} target="_blank" rel="noopener noreferrer">
            <NamedIcon name="oriverk"
              variant="none" width={16} height={16} fontSize={3}
            >
              <GithubIcon size={8} label="Github" />
            </NamedIcon>
          </a>
        </div>
      </div>
    </main>
  )
}

const StyledComponent = styled(Component)`
  padding: 1rem;
  text-align: center;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  .content {
    max-width: var(--max-width);
    display: flex;
    flex-direction: column;

    h1, p {
      margin: 1rem auto 0;
    }

    .icons {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1rem 0;

      a {
        display: inline-block;
        padding: 0 1rem;
        text-decoration: none;
      }
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

const Home = ContainerComponent
export default Home
