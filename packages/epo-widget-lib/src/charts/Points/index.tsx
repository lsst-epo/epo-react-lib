import { FunctionComponent, HTMLProps } from "react";
import { Domain, ScaleFunction } from "../types";

interface Point {
  stroke?: string;
  fill?: string;
  width?: number;
  x: number;
  y: number;
  props?: HTMLProps<SVGCircleElement>;
}

interface PointsProps {
  data: Array<Point>;
  xScale: ScaleFunction;
  yScale: ScaleFunction;
  yDomain: Domain;
  className?: string;
}

const Points: FunctionComponent<PointsProps> = ({
  data,
  xScale,
  yScale,
  yDomain,
  className,
}) => {
  if (data.length === 0) return null;

  return (
    <g className={className}>
      {data.map(({ stroke, fill, width = 4, x, y, props }, i) => {
        return (
          <circle
            key={i}
            cx={xScale(x)}
            cy={yScale(yDomain[1] - yDomain[0] - y)}
            r={width / 2}
            fill={fill || "var(--point-fill, #12726D)"}
            stroke={stroke || "var(--point-stroke, #12726D)"}
            {...props}
          />
        );
      })}
    </g>
  );
};

Points.displayName = "Charts.Points";

export default Points;
