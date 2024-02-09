import { FunctionComponent } from "react";
import { max, min, nice, range, ticks } from "d3-array";
import { scaleLinear } from "d3-scale";
import { Base, XAxis, YAxis } from "@/charts/index";
import { Alert } from "@/types/astro";
import { ChartMargin } from "@/charts/types";

interface LightCurvePlotProps {
  alerts: Array<Alert>;
  activeAlertId?: number;
  peakMjd: number;
  yMin?: number;
  yMax?: number;
}

const daysSincePeak = (current: number, peak: number) => {
  return current - peak;
};

const LightCurvePlot: FunctionComponent<LightCurvePlotProps> = ({
  alerts,
  activeAlertId,
  peakMjd,
  yMin = 14,
  yMax = 20,
}) => {
  const data = alerts.map(({ date, magnitude }) => {
    return { x: daysSincePeak(date, peakMjd), y: magnitude };
  });

  const margins: ChartMargin = {
    top: 0,
    left: 25,
    right: 0,
    bottom: 20,
  };
  const width = 600;
  const height = 600;

  const xMin = min(data, ({ x }) => x) || Math.min(...data.map(({ x }) => x));
  const xMax = max(data, ({ x }) => x) || Math.max(...data.map(({ x }) => x));
  const xStep = 10;
  const xTickCount = (Math.ceil((xMax - xMin + 1) / 10) * 10) / xStep;
  const xDomain = nice(xMin, xMax, xTickCount);
  const xTicks = range(xDomain[0], xDomain[1], xStep);
  const xScale = scaleLinear(xDomain, [
    0 + margins.left,
    width - margins.right,
  ]);
  const xRoot = xScale(xDomain[0]);

  const yStep = 0.5;
  const yTicks = range(yMin, yMax, yStep);
  const yDomain = nice(yMin, yMax, yTicks.length);
  const yScale = scaleLinear(yDomain, [
    0 + margins.top,
    height - margins.bottom,
  ]);
  const yRoot = yScale(yDomain[1]);

  return (
    <Base {...{ width, height }}>
      <rect
        x={xScale(0)}
        y={yScale(yDomain[1])}
        width={xScale(15) - xScale(0)}
        height={yScale(yDomain[0]) - yScale(yDomain[1])}
        fill="#F5F5F5"
      />
      <XAxis ticks={xTicks} y={yRoot} {...{ xDomain, xScale }} />
      <YAxis ticks={yTicks} x={xRoot} {...{ yDomain, yScale }} />
      {data.map(({ x, y }) => (
        <circle cx={xScale(x)} cy={yScale(y)} r="4">
          {x}, {y}
        </circle>
      ))}
    </Base>
  );
};

LightCurvePlot.displayName = "Widgets.LightCurve.Plot";

export default LightCurvePlot;
