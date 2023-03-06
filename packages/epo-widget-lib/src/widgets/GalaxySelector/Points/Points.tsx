import { FunctionComponent } from "react";
import { AstroDataset, AstroObject } from "../GalaxySelector";
import Point from "../Point";

interface PointsProps {
  data: AstroObject[];
  selectedData: AstroObject;
  active: AstroDataset;
  xValueAccessor: string;
  yValueAccessor: string;
  xScale: (value: number) => number;
  yScale: (value: number) => number;
  className: string;
  color: string;
}

const Points: FunctionComponent<PointsProps> = ({
  data,
  selectedData,
  active,
  className,
  xScale,
  yScale,
  xValueAccessor,
  yValueAccessor,
}) => {
  return (
    <g className={className}>
      {data.map((d) => {
        const { id, color, radius = NaN, [xValueAccessor]: xVal } = d;
        const modR = 0.6 * radius;
        const isSelected = !!find(selectedData, { id: d.id });
        const isActive = active ? active.id === d.id : false;
        const pointColor = isNumber(color) ? chartColors.chart6 : color;
        const colorOverrideHex = colorOverride
          ? chartColors[`chart${colorOverride}`]
          : false;

        return (
          <Point
            key={`point-${id}`}
            {...{ id, isActive, isSelected, className }}
            radius={xScale(xVal - modR) - xScale(xVal + modR)}
            x={xScale(xVal)}
            y={yScale(d[yValueAccessor])}
            color={colorOverrideHex || pointColor}
            tabIndex="0"
          />
        );
      })}
    </g>
  );
};

Points.displayName = "Widgets.GalaxySelector.Points";

export default Points;
