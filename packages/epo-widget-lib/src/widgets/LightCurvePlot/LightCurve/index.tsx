import { Point, ScaleFunction } from "@/charts/types";
import { FunctionComponent } from "react";

interface LightCurveProps {
  data: Array<Point>;
  xScale: ScaleFunction;
  yScale: ScaleFunction;
  yOffset: number;
}

const LightCurve: FunctionComponent<LightCurveProps> = ({
  data,
  xScale,
  yScale,
  yOffset,
}) => {
  const curve = data
    .map(({ x, y }, i) => {
      return `${i === 0 ? "M" : "L"}${xScale(x)},${yScale(y)}`;
    })
    .join("");

  return (
    <path
      transform={`translate(0,${yOffset})`}
      d={curve}
      fill="none"
      strokeWidth={2}
      stroke="#000"
    />
  );
};

LightCurve.displayName = "Widgets.LightCurve.Curve";

export default LightCurve;
