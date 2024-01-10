import { ReactNode } from "react";

export type Domain = Array<number>;
export type ScaleFunction = (value: number) => number;
export type LabelFormatter = (value: number, index?: number) => ReactNode;
export interface BaseAxisProps {
  ticks: number;
  labelFormatter?: LabelFormatter;
  labelledById?: string;
  showBaseline?: boolean;
  padding?: number;
  className?: string;
}
