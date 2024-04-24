import { Point } from "@/types/charts";

// Points

export const pointRadius = 6;

export const defaultPoint: Partial<Point> = {
  radius: pointRadius,
  fill: "var(--point-fill, #12726D)",
  stroke: "var(--point-stroke, #12726D)",
};

// Error Bars

export const errorBarCapWidth = pointRadius / 2;
const errorBarStroke = "var(--error-bar-stroke, var(--black, #000))";
const errorBarStrokeWidth = "var(--error-bar-stroke-width, 1)";
const errorBarFill = "var(--error-bar-fill, none)";

export const defaultErrorBarStyles = {
  stroke: errorBarStroke,
  strokeWidth: errorBarStrokeWidth,
  fill: errorBarFill,
};
