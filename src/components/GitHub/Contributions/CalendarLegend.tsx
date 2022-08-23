import React from 'react'
import { styled } from 'goober'
import type { ContributionCalendar } from "../../../graphql/generated/graphql"

interface PassedProps extends Pick<ContributionCalendar, 'colors'> {
  blockSize: number;
  blockRadius: number;
}

interface Props extends PassedProps {
  className?: string;
}
const Component = (props: Props) => {
  const { className, colors, blockSize = 10, blockRadius = 2, } = props;

  return (
    <div className={className}>
      <span>Less</span>
      {colors.map((color, index) => (
        <svg width={blockSize} height={blockSize} key={color}>
          <rect
            className="ContributionCalendar-day"
            width={blockSize} height={blockSize} rx={blockRadius} ry={blockRadius}
            data-level={index}
          />
        </svg>
      ))}
      <span>More</span>
    </div>
  )
}

const StyledComponent = styled(Component)`
  font-size: .9rem;
  & svg {
    margin: 0 1px;
  }
`

const ContainerComponent: React.FC<PassedProps> = (props) => (
  <StyledComponent {...props} />
)

export const CalendarLegend = ContainerComponent