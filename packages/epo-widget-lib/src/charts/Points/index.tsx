import { FunctionComponent } from "react";
import { Point, ScaleFunction } from "@/types/charts";
import ErrorBar from "./ErrorBar";
import { defaultPoint } from "../defaults";

export interface PointsProps {
  data: Array<Point>;
  label?: string;
  xScale: ScaleFunction;
  yScale: ScaleFunction;
  className?: string;
  onHoverCallback: (index: number) => void;
  onHoverOutCallback: () => void;
}

const Points: FunctionComponent<PointsProps> = ({
  data,
  label,
  xScale,
  yScale,
  onHoverCallback,
  onHoverOutCallback,
  className,
}) => {
  if (data.length === 0) return null;

  return (
    <g role="list" aria-label={label} className={className}>
      {data.map((point, i) => {
        const { stroke, fill, radius, x, y, description, error, id, props } = {
          ...defaultPoint,
          ...point,
        };

        return (
          <g
            key={id}
            role="listitem"
            aria-label={description}
            transform={`translate(${xScale(x)},${yScale(y)})`}
            onMouseEnter={() => onHoverCallback && onHoverCallback(i)}
            onMouseLeave={() => onHoverOutCallback && onHoverOutCallback()}
          >
            {error && <ErrorBar {...{ error, xScale, yScale }} />}
            <circle
              cursor="pointer"
              r={radius}
              {...{ stroke, fill, ...props }}
            />
          </g>
        );
      })}
    </g>
  );
};

Points.displayName = "Charts.Points";

export default Points;
