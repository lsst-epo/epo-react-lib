import { FunctionComponent } from "react";
import { AccessorKey, AstroObject, AstroType } from "../GalaxySelector";
import Point from "../Point";

interface PointsProps {
  data?: AstroObject[];
  selectedData?: AstroObject[];
  activeId?: AstroType;
  xValueAccessor: AccessorKey;
  yValueAccessor: AccessorKey;
  xScale: (value: number) => number;
  yScale: (value: number) => number;
  className?: string;
  color?: string;
}

const Points: FunctionComponent<PointsProps> = ({
  data = [],
  selectedData = [],
  activeId,
  className,
  xScale,
  yScale,
  xValueAccessor,
  yValueAccessor,
  color: colorOverride,
}) => {
  return (
    <g className={className} role="list">
      {data.map((d) => {
        const {
          id,
          color,
          radius = NaN,
          [xValueAccessor]: xVal,
          [yValueAccessor]: yVal,
        } = d;
        const modR = 0.6 * radius;
        const isSelected = selectedData.some((s) => s.id === id);
        const isActive = activeId ? activeId === id : false;

        return (
          <Point
            key={`point-${id}`}
            {...{ id, isActive, isSelected, className }}
            radius={xScale(xVal - modR) - xScale(xVal + modR)}
            x={xScale(xVal)}
            y={yScale(yVal)}
            color={colorOverride || color}
          />
        );
      })}
    </g>
  );
};

Points.displayName = "Widgets.GalaxySelector.Points";

export default Points;
