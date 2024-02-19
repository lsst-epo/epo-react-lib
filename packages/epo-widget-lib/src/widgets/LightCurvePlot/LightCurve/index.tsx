import { FunctionComponent } from "react";
import { range } from "d3-array";
import { Domain, ScaleFunction } from "@/charts/types";
import { estimateMagnitude } from "../helpers";

interface LightCurveProps {
  xScale: ScaleFunction;
  yScale: ScaleFunction;
  yOffset: number;
  gaussianWidth: number;
  xDomain: Domain;
  yDomain: Domain;
}

const LightCurve: FunctionComponent<LightCurveProps> = ({
  xScale,
  xDomain,
  yScale,
  yDomain,
  gaussianWidth,
  yOffset,
}) => {
  const magnitudes = range(xDomain[0], xDomain[1], 0.5).map((x) => {
    return { x, y: estimateMagnitude(x, gaussianWidth) };
  });

  const curve = magnitudes
    .map(({ x, y }, i) => {
      return `${i === 0 ? "M" : "L"}${xScale(x)},${yScale(y)}`;
    })
    .join("");

  return (
    <path
      transform={`translate(0,${yScale(yDomain[0] - yOffset)})`}
      d={curve}
      fill="none"
      strokeWidth={2}
      stroke="var(--black,#000)"
    />
  );
};

LightCurve.displayName = "Widgets.LightCurve.Curve";

export default LightCurve;
