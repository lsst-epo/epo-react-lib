import { FunctionComponent } from "react";
import Point from "../Point";
import { Source, SourceType } from "@/types/astro";

interface PointsProps {
  sources?: Source[];
  selectedSource?: string[];
  activeType?: SourceType;
  xScale: (value: number) => number;
  yScale: (value: number) => number;
  className?: string;
  color?: string;
}

const Points: FunctionComponent<PointsProps> = ({
  sources = [],
  selectedSource = [],
  activeType,
  className,
  xScale,
  yScale,
  color: colorOverride,
}) => {
  return (
    <g className={className} role="list">
      {sources.map((d) => {
        const { type, id, color, radius = NaN, x, y } = d;
        const modR = 0.6 * radius;
        const isSelected = selectedSource.includes(id);
        const isActive = activeType ? activeType === type : false;

        return (
          <Point
            key={`point-${type}-${id}`}
            {...{ id, type, isActive, isSelected, className }}
            radius={xScale(x - modR) - xScale(x + modR)}
            x={xScale(x)}
            y={yScale(y)}
            color={colorOverride || color}
          />
        );
      })}
    </g>
  );
};

Points.displayName = "Widgets.SourceSelector.Points";

export default Points;
