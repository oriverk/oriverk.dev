import React from "react";
import { styled } from "goober";

export type Props = {
  size: number;
}

const StyledDiv = styled('div')<Props>`
  width: ${props => props.size}rem;
  height: ${props => props.size}rem;
  border-radius: 30% 70% 59% 41% / 30% 26% 74% 70%;
  background: linear-gradient(
    to top right,
    hsl(157.83, 100%, 45.1%) 0%,
    hsl(158.37, 100%, 44.88%) 9.1%,
    hsl(159.93, 100%, 44.27%) 16.8%,
    hsl(162.39, 100%, 43.3%) 23.5%,
    hsl(165.67, 100%, 42.03%) 29.2%,
    hsl(169.74, 100%, 40.48%) 34.4%,
    hsl(174.6, 100%, 38.69%) 39.1%,
    hsl(180.28, 100%, 36.88%) 43.6%,
    hsl(186.13, 100%, 38.5%) 48.2%,
    hsl(191.54, 100%, 40.03%) 53%,
    hsl(196.45, 100%, 41.43%) 58.3%,
    hsl(200.81, 100%, 42.65%) 64.3%,
    hsl(204.51, 100%, 43.66%) 71.3%,
    hsl(207.41, 100%, 44.43%) 79.4%,
    hsl(209.31, 100%, 44.92%) 88.9%,
    hsl(210, 100%, 45.1%) 100%
  );
`

export const GradientIcon: React.FC<Props> = (props) => (
  <StyledDiv {...props} />
)