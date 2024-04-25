import { HTMLProps, ReactNode } from "react";

// Chart
export type ChartEdge = "top" | "right" | "bottom" | "left";
export type ChartMargin = Record<ChartEdge, number>;

export interface XBounds {
  xMin: number;
  xMax: number;
  width: number;
}

export interface YBounds {
  yMin: number;
  yMax: number;
  height: number;
}

export type Bounds = XBounds & YBounds;

// Axis

export type Domain = Array<number>;

export type LabelRenderer = (
  value: number,
  x: number,
  y: number,
  index?: number
) => ReactNode;

export interface BaseAxisProps {
  ticks: number | number[];
  labelRender?: LabelRenderer;
  labelledById?: string;
  showBaseline?: boolean;
  margin?: ChartMargin;
  className?: string;
}

// Scales

export type Scale = "linear";

export type ScaleFunction = (value: number) => number;

export type ScaleFactory = (
  domain: Domain,
  range: Domain,
  options?: any
) => ScaleFunction;

// Data

export interface ErrorRange {
  min?: number;
  max?: number;
}

export interface Point {
  stroke?: string;
  fill?: string;
  radius?: number;
  id: string | number;
  x: number;
  y: number;
  error?: {
    x?: ErrorRange;
    y?: ErrorRange;
  };
  description?: string;
  props?: HTMLProps<SVGCircleElement>;
}

export interface ScatterPlotDataset {
  label: string;
  points: Array<Point>;
}

export type HistogramData = Array<{ bin: number; value: number }>;

// Tooltip

// Renderers

export type PlotChildRenderer = (props: {
  Data: ReactNode;
  xScale: ScaleFunction;
  yScale: ScaleFunction;
  xDomain: Domain;
  yDomain: Domain;
  xStart: number;
  xEnd: number;
  yStart: number;
  yEnd: number;
}) => ReactNode;
