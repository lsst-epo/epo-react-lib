import { ReactNode } from "react";

export interface ChartMargin {
  top: number;
  right: number;
  bottom: number;
  left: number;
}
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
