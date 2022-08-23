import React from 'react'
import type { ContributionCalendarDay } from "../../../graphql/generated/graphql"

const getDataLevel = (contributionLevel: string) => {
  let level
  switch (contributionLevel) {
    case "FIRST_QUARTILE":
      level = 1;
      break;
    case "SECOND_QUARTILE":
      level = 2;
      break;
    case "THIRD_QUARTILE":
      level = 3;
      break;
    case "FOURTH_QUARTILE":
      level = 4;
      break;
    default:
      level = 0;
  }
  return level
}

interface Props extends Pick<ContributionCalendarDay, 'date' | 'contributionCount' | 'contributionLevel'> { 
  x: number;
  y: number;
  blockSize: number;
  blockRadius: number;
}

export const CalendarBlock: React.FC<Props> = (props) => {
  const { x, y, blockSize, blockRadius, contributionCount, contributionLevel, date } = props;
  const level = getDataLevel(contributionLevel)

  return (
    <rect
      className="ContributionCalendar-day"
      width={blockSize} height={blockSize} x={x} y={y} rx={blockRadius} ry={blockRadius}
      data-count={contributionCount}
      data-date={date}
      data-level={level}
    />
  )
}
