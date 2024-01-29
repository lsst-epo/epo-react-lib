import { FunctionComponent } from "react";
import { ticks } from "d3-array";
import { ChartMargin, Domain, ScaleFunction } from "../types";
import * as Styled from "../styles";

export interface GuidelinesProps {
  guides: number;
  direction?: "horizontal" | "vertical";
  xScale: ScaleFunction;
  xDomain: Domain;
  yScale: ScaleFunction;
  yDomain: Domain;
  margin?: ChartMargin;
  className?: string;
}

const Guidelines: FunctionComponent<GuidelinesProps> = ({
  guides = 0,
  direction = "horizontal",
  xScale = (v) => v,
  xDomain = [0, 1],
  yScale = (v) => v,
  yDomain = [0, 1],
  margin,
  className,
}) => {
  if (guides === 0) return null;

  const domain = direction === "horizontal" ? yDomain : xDomain;
  const scale = direction === "horizontal" ? yScale : xScale;

  const defaultMargins = { top: 0, right: 0, bottom: 0, left: 0 };
  const finalMargins = { ...defaultMargins, ...margin };
  const tickArr = ticks(domain[1], domain[0], guides);

  return (
    <g className={className}>
      {tickArr.map((value, i) => {
        /** the visual location of the tick, accounting for padding */
        const position = scale(value);
        const start =
          direction === "horizontal"
            ? [xScale(xDomain[0]) - finalMargins.left, position]
            : [position - finalMargins.top, yScale(yDomain[0])];
        const end =
          direction === "horizontal"
            ? [xScale(xDomain[1]) + finalMargins.right, position]
            : [position, yScale(yDomain[1]) + finalMargins.bottom];

        return (
          <Styled.Guide key={i} points={`${start.join()} ${end.join()}`} />
        );
      })}
    </g>
  );
};

Guidelines.displayName = "Charts.Guidelines";

export default Guidelines;
