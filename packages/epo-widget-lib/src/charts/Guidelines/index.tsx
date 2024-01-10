import { FunctionComponent } from "react";
import { Domain, ScaleFunction } from "../types";
import * as Styled from "../styles";

export interface GuidelinesProps {
  guides: number;
  direction?: "horizontal" | "vertical";
  xScale: ScaleFunction;
  xDomain: Domain;
  yScale: ScaleFunction;
  yDomain: Domain;
  padding?: number;
  className?: string;
}

const Guidelines: FunctionComponent<GuidelinesProps> = ({
  guides = 0,
  direction = "horizontal",
  xScale = (v) => v,
  xDomain = [0, 1],
  yScale = (v) => v,
  yDomain = [0, 1],
  padding = 0,
  className,
}) => {
  if (guides === 0) return null;

  const domain = direction === "horizontal" ? yDomain : xDomain;
  const scale = direction === "horizontal" ? yScale : xScale;
  const interval = (domain[1] - domain[0]) / guides;

  return (
    <g className={className}>
      {Array(guides + 1)
        .fill(undefined)
        .map((_, i) => {
          const value = domain[0] + interval * i;

          /** the visual location of the tick, accounting for padding */
          const position = scale(value);
          const start =
            direction === "horizontal"
              ? [xScale(xDomain[0]) - padding, position]
              : [position - padding, yScale(yDomain[0])];
          const end =
            direction === "horizontal"
              ? [xScale(xDomain[1]) + padding, position]
              : [position, yScale(yDomain[1]) + padding];

          return (
            <Styled.Guide key={i} points={`${start.join()} ${end.join()}`} />
          );
        })}
    </g>
  );
};

Guidelines.displayName = "Charts.Guidelines";

export default Guidelines;
