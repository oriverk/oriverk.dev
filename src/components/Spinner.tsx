import React from "react";
import { styled, keyframes } from "goober";

type Props = {
  children: React.ReactNode;
}

const rotate = keyframes`
  0% {
    animation-timing-function: cubic-bezier(0.5856,0.0703,0.4143,0.9297);
    transform: rotate(0);
  }
  100% {
    transform: rotate(1800deg);
  }
`

const StyledDiv = styled('div')`
  animation: ${rotate} 2s linear 0s infinite running;
`

export const Spinner: React.FC<Props> = ({ children }) => (
  <StyledDiv>
    {children}
  </StyledDiv>
)
