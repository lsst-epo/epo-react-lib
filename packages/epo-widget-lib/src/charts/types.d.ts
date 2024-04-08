import { ReactNode } from "react";

export interface Point {
  x: number;
  y: number;
}

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

export type Domain = Array<number>;

export type Scale = "linear";

export type ScaleFunction = (value: number) => number;

export type ScaleFactory = (
  domain: Domain,
  range: Domain,
  options?: any
) => ScaleFunction;

export type HistogramData = Array<{ bin: number; value: number }>;

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
