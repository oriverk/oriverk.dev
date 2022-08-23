import React from 'react'
import { styled } from 'goober'

interface Props {
  className?: string;
  children: React.ReactNode;
}

const StyledSection = styled('section')`
  border: 1px solid yellow;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding: 70px 50px;
`

export const Container = (props: Props) => {
  const { className, children } = props
  return (
    <StyledSection className={className}>
      {children}
    </StyledSection>
  )
}