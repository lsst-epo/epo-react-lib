import { FunctionComponent } from "react";
import { Domain, ScaleFunction } from "../types";
import * as Styled from "../styles";

interface GuidelinesProps {
  guides: number;
  direction?: "horizontal" | "vertical";
  xScale: ScaleFunction;
  xDomain: Domain;
  yScale: ScaleFunction;
  yDomain: Domain;
}

const Guidelines: FunctionComponent<GuidelinesProps> = ({
  guides = 0,
  direction = "horizontal",
  xScale = (v) => v,
  xDomain = [0, 1],
  yScale = (v) => v,
  yDomain = [0, 1],
}) => {
  if (guides === 0) return null;

  const domain = direction === "horizontal" ? yDomain : xDomain;
  const scale = direction === "horizontal" ? yScale : xScale;
  const interval = (domain[1] - domain[0]) / guides;

  return (
    <g>
      {Array(guides + 1)
        .fill(undefined)
        .map((_, i) => {
          const value = domain[0] + interval * i;

          /** the visual location of the tick, accounting for padding */
          const position = scale(value);
          const start =
            direction === "horizontal"
              ? [xScale(xDomain[0]), position]
              : [position, yScale(yDomain[0])];
          const end =
            direction === "horizontal"
              ? [xScale(xDomain[1]), position]
              : [position, yScale(yDomain[1])];

          return (
            <Styled.Guide key={i} points={`${start.join()} ${end.join()}`} />
          );
        })}
    </g>
  );
};

Guidelines.displayName = "Charts.Guidelines";

export default Guidelines;
