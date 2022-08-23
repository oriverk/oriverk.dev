import React from 'react'
import { styled } from 'goober'
import type { Repository } from "../../graphql/generated/graphql"

interface Props extends Repository {
  className?: string;
}

const Component = (props: Props) => {
  const { className, url, name, description, primaryLanguage, stargazerCount } = props;
  const { name: languageName } = primaryLanguage!

  return (
    <div className={className}>
      <a href={url} target="_blank" rel="noreferrer noopener">
        {name}
      </a>
      <p className="desc">{description}</p>
      <p className="info">
        <span className="language">
          <span className="languageColor" />
          <span>{languageName}</span>
        </span>
        <a href={`${url}/stargazers`} target="_blank" rel="noreferrer noopener">
          ★ {stargazerCount}
        </a>
      </p>
  </div>
  )
}

const StyledComponent = styled<Repository>(Component)`
  padding: 1rem;
  width: 100%;
  max-width: 20rem;

  border: 1px solid var(--color-gray);
  border-radius: .35rem;
  display: flex;
  flex-direction: column;

  p {
    font-size: .9rem;
  }
  & > * {
    margin-top: .5rem;
  }
  & > a {
    font-size: 1rem;
  }

  .desc {
    flex-grow: 1;
  }

  .language {
    display: inline-block;
    margin-right: 1rem;

    .languageColor {
      margin-right: .5rem;
      position: relative;
      top: 1px;
      display: inline-block;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: ${(props) => (props.primaryLanguage?.color)};
    }
  }
`

const ContainerComponent: React.FC<Repository> = (props) => (
  <StyledComponent {...props} />
)

export const PinnedRepository = ContainerComponent;
