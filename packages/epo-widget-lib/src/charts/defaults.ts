import { ChartMargin, PlotPoint } from "@/types/charts";

// Chart
export const margins: ChartMargin = { top: 0, right: 0, bottom: 0, left: 0 };

// Points

export const pointRadius = 6;

export const point: Partial<PlotPoint> = {
  radius: pointRadius,
  fill: "var(--point-fill, #12726D)",
  stroke: "var(--point-stroke, #12726D)",
};

// Error Bars

export const errorBarCapWidth = pointRadius / 2;
const errorBarStroke = "var(--error-bar-stroke, var(--black, #000))";
const errorBarStrokeWidth = "var(--error-bar-stroke-width, 1)";
const errorBarFill = "var(--error-bar-fill, none)";

export const errorBarStyles = {
  stroke: errorBarStroke,
  strokeWidth: errorBarStrokeWidth,
  fill: errorBarFill,
};

const defaults = {
  margins,
  pointRadius,
  point,
  errorBarCapWidth,
  errorBarStyles,
};

export default defaults;
