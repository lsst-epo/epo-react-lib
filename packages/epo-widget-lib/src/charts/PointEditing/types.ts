import { ReactNode } from "react";

export interface EditablePoint {
  id: string;
  label?: string;
  color?: string;
  [key: string]: unknown;
}

export interface ValueAccessors {
  xValueAccessor: string;
  yValueAccessor: string;
}

/** Everything a chart needs to let the user place, select, and move its points */
export interface PointEditingConfig<T extends EditablePoint> {
  points: Array<T>;
  /** Names the group of points for screenreaders */
  label: string;
  xValueAccessor: string;
  yValueAccessor: string;
  /** What a screenreader says about a point */
  describePoint: (point: T) => string;
  /** Contents of the tooltip for the point */
  tooltip?: (point: T) => ReactNode;
  /** Called with a new array whenever a point is placed, dragged, or nudged */
  onChange?: (points: Array<T>) => void;
  activePoint?: T;
  isSelectable?: boolean;
  isEditable?: boolean;
  onSelectionChange?: (point?: T) => void;
  color?: string;
  radius?: number;
  /** How far one nudge moves a point */
  nudgeStep?: number;
}
