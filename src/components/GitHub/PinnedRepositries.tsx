import React from 'react'
import { styled } from 'goober'

import { PinnableItemConnection } from 'src/graphql/generated/graphql'
import { PinnedRepository } from './PinnedRepository'

const Container = styled('div')`
  display: flex;
  justify-content: space-around;
`

interface Props {
  className?: string;
  pinnedItems: PinnableItemConnection;
}

export const PinnedRepositories: React.FC<Props> = (props) => {
  const { className, pinnedItems } = props
  
  return (
    <Container className={className}>
      {pinnedItems.nodes?.map((node) => {
        const { url } = node!;
        return <PinnedRepository {...node!} key={url} />
      })}
    </Container>
  )
}