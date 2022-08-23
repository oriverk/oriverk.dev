import React from 'react'
import useSWR from 'swr'
import { format } from 'date-fns'
import { styled } from 'goober'

import { fetchContributions } from '../../utils/fetcher/fetchContributions'
import { Container } from '../Container'
import { LoadingIcon } from '../LoadingIcon'
import { PinnedRepositories } from './PinnedRepositries'
import { ContributionsCalendar } from "./Contributions"

const Wrapper = styled(Container)`
  width: 100%;
  height: 100vh;
  flex-direction: column;
  padding: 0;
  scroll-snap-align: start;
  background: var(--color-background);
  color: white;
`


type Props = {
  className?: string;
}

const Component = (props: Props) => {
  const { className } = props;

  const token = import.meta.env.VITE_GITHUB_PERSONAL_ACCESS_TOKEN;
  const githubId = "oriverk"
  // 2021-06-06T00:00:00Z
  const today = `${format(new Date(), 'yyyy-MM-dd')}T00:00:00Z`;
  
  const { data, error } = useSWR([token, githubId, today,], fetchContributions)
  if (error) return <div>failed to load</div>
  if (!data) return (
    <Wrapper>
      <LoadingIcon />
    </Wrapper>
  )

  const { user } = data
  const { pinnedItems, contributionsCollection } = user
  const { contributionCalendar } = contributionsCollection
  
  return (
    <Wrapper className={className}>
      <h2>GitHub</h2>
      {pinnedItems.nodes?.length && (
        <div className="pinnedItems">
          <h3>Pinned</h3>
          <PinnedRepositories pinnedItems={pinnedItems} />
        </div>
      )}
      <div className="contributions">
        <h3>Contributions</h3>
        <ContributionsCalendar githubId={githubId} {...contributionCalendar} />
      </div>
    </Wrapper>
  )
}

const StyledComponent = styled(Component)`
  h2, h3 {
    text-align: center;
  }
  .pinnedItems {
    margin-bottom: 2rem;
  }

`

const ContainerComponent: React.FC = () => (
  <StyledComponent />
)

export const GitHub = ContainerComponent