import { FunctionComponent, HTMLProps } from "react";
import { ScaleFunction } from "../types";

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
}

const Points: FunctionComponent<PointsProps> = ({ data, xScale, yScale }) => {
  if (data.length === 0) return null;

  return (
    <g>
      {data.map(({ stroke, fill, width = 4, x, y, props }) => {
        return (
          <circle
            cx={xScale(x)}
            cy={yScale(y)}
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
