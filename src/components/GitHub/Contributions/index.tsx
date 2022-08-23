import React from 'react'
import { styled } from 'goober'
import { getDay, getDate } from "date-fns"
import type { ContributionCalendar } from "../../../graphql/generated/graphql"

import { CalendarBlock } from "./CalendarBlock";
import { CalendarLegend } from "./CalendarLegend";

interface PassedProps extends ContributionCalendar {
  githubId?: string
  textColor?: string;
  blockSize?: number;
  blockRadius?: number;
  blockGap?: number;
  displayMonth?: boolean;
  displayLegend?: boolean;
}
interface Props extends PassedProps {
  className?: string;
}

const Component = (props: Props) => {  
  const {
    className, weeks, totalContributions,
    blockSize = 10, blockRadius = 2, blockGap = 2,
    displayMonth = true, displayLegend = true, colors
  } = props;

  const baseColor = 'gray';
  const width = 717
  const height = 112

  return (
    <div className={className}>
      <div className="js-calendar-graph ContributionCalendar">
        <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="js-calendar-graph-svg">
          <g transform="translate(15, 20)">
            {weeks.map((week, index) => {
              const { contributionDays } = week;
              const transform = `translate(${(blockSize + blockGap * 2) * index}, 0)`;
              const coordX = (blockSize + blockGap * 2) - index;

              return (
                <g transform={transform} key={transform}>
                  {contributionDays.map((day) => {
                    const { date, contributionCount, contributionLevel } = day
                    
                    const dateString = new Date(date)
                    // sunday => 0
                    const dayOfWeek = getDay(dateString)
                    const isFirstDay = getDate(dateString) === 1;
                    const coordY = dayOfWeek * (blockSize + blockGap * 2 - 1);

                    // if (displayMonth && isFirstDay) {
                    //   setMonthTextData(prev => [...prev, { x: coordX, y: -7, text: format(dateString, 'MMM') }])
                    // }
                    
                    return (
                      <CalendarBlock
                        x={coordX} y={coordY} blockSize={blockSize} blockRadius={blockRadius} date={date}
                        contributionCount={contributionCount} contributionLevel={contributionLevel}
                        key={date}
                      />
                    )
                  })}
                </g>
              )
            })}
            {/* {displayMonth && monthTextData.map(({ x, y, text }) => (
              <text x={x} y={y} className="ContributionCalendar-label" key={text}>
                {text}
              </text>
            ))} */}
            {/* <text textAnchor="start" className="ContributionCalendar-label" dx="-15" dy="8" style="display: none;">Sun</text> */}
            <text textAnchor="start" className="ContributionCalendar-label" dx="-15" dy="22">Mon</text>
            {/* <text textAnchor="start" className="ContributionCalendar-label" dx="-15" dy="32" style="display: none;">Tue</text> */}
            <text textAnchor="start" className="ContributionCalendar-label" dx="-15" dy="48">Wed</text>
            {/* <text textAnchor="start" className="ContributionCalendar-label" dx="-15" dy="57" style="display: none;">Thu</text> */}
            <text textAnchor="start" className="ContributionCalendar-label" dx="-15" dy="73">Fri</text>
            {/* <text textAnchor="start" className="ContributionCalendar-label" dx="-15" dy="81" style="display: none;">Sat</text> */}
          </g>
        </svg>

        <div className="footer">
          {displayLegend && (
            <CalendarLegend
              colors={colors}
              blockSize={blockSize} blockRadius={blockRadius}
            />
          )}
          <p>{totalContributions} contributions in the last year</p>
        </div>
      </div>
    </div>
  )
}

const StyledComponent = styled(Component)<PassedProps>`
  padding: 1rem;
  border: 1px solid red;
  border-radius: .35rem;
  width: 100%;
  overflow-x: auto;

  svg:not(:root) {
    overflow: hidden;
}

  .js-calendar-graph-svg {
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }

  .ContributionCalendar-label {
    font-size: 12px;
    fill: ${props => props.textColor || "white"};
  }

  .ContributionCalendar-day {
    outline: 1px solid rgba(255, 255, 255, 0.05);
  }
  .ContributionCalendar-day[data-level="0"] {
    fill: gray;
  }
  .ContributionCalendar-day[data-level="1"] {
    fill: ${props => props.colors[0]};
  }
  .ContributionCalendar-day[data-level="2"] {
    fill: ${props => props.colors[1]};
  }
  .ContributionCalendar-day[data-level="3"] {
    fill: ${props => props.colors[2]};
  }
  .ContributionCalendar-day[data-level="4"] {
    fill: ${props => props.colors[3]};
  }

  .footer {
    width: 100%;
    text-align: center;
  }
`

const ContainerComponent: React.FC<PassedProps> = (props) => (
  <StyledComponent {...props} />
)

export const ContributionsCalendar = ContainerComponent