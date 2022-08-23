import React from 'react'
import { styled } from 'goober'

import { Container } from './Container'
import { GithubIcon, TwitterIcon } from "../components/icons";
import { NamedIcon } from "../components/NamedIcon";

const twitterId = import.meta.env.VITE_TWITTER_USER_ID || "";
const githubId = import.meta.env.VITE_GITHUB_USER_ID || "";
const twitter = `https://twitter.com/${twitterId}`;
const github = `https://github.com/${githubId}`;

interface Props {
  className?: string;
}

const Component = (props: Props) => {
  const { className } = props
  
  return (
    <Container className={`Hero ${className}`}>
      <h1>Kawano Yudai</h1>
      <p>Agr. → ? / Bicycle</p>
      <div className="icons">
        <a href={twitter} target="_blank" rel="noopener noreferrer">
          <NamedIcon name={`@${twitterId}`} variant="none" width={16} height={16} fontSize={3}>
            <TwitterIcon size={2} label="Twitter" />
          </NamedIcon>
        </a>
        <a href={github} target="_blank" rel="noopener noreferrer">
          <NamedIcon name={githubId} variant="none" width={16} height={16} fontSize={3}>
            <GithubIcon size={2} label="Github" />
          </NamedIcon>
        </a>
      </div>
    </Container>
  )
}

const StyledComponent = styled(Component)`
  padding: 0;
  flex-direction: column;
  flex-grow: 1;
  font-size: 2rem;
  color: white;
  height: calc(100vh - 6rem);
  width: 100%;
  background: var(--color-background);

  h1, p {
    margin: 1rem auto 0;
  }

  .icons {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;

    a {
      padding: 0 1rem;
      text-decoration: none;
      &:hover {
        transition: background 0.25s ease;
        background: rgba(0, 0, 0, 0.3);
        border-radius: 0.3rem;
      }
    }
  }
`

const ContainerComponent: React.FC = () => (
  <StyledComponent />
)

export const Hero = ContainerComponent;
