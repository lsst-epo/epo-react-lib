import { EditablePoint } from "./types";

/** The x or y value of a point, or null when it hasn't been plotted yet */
export const getValue = (
  point: EditablePoint,
  accessor: string
): number | null => {
  const value = point[accessor];

  return typeof value === "number" ? value : null;
};

/** Whether a point has both of its values, and so a place on the plot */
export const isPlotted = (
  point: EditablePoint,
  xValueAccessor: string,
  yValueAccessor: string
): boolean =>
  getValue(point, xValueAccessor) !== null &&
  getValue(point, yValueAccessor) !== null;

export const findById = <T extends EditablePoint>(
  points: Array<T>,
  id?: string
): T | undefined => (id ? points.find((point) => point.id === id) : undefined);

/**
 * The point a click on empty space plots: the one being worked on, else the first one still missing
 * from the plot, else the last one.
 */
export const findTargetPoint = <T extends EditablePoint>(
  points: Array<T>,
  activePoint: T | undefined,
  xValueAccessor: string
): T | undefined => {
  const active = findById(points, activePoint?.id);

  if (active) return active;

  return (
    points.find((point) => getValue(point, xValueAccessor) === null) ??
    points[points.length - 1]
  );
};

export const setPointPosition = <T extends EditablePoint>(
  points: Array<T>,
  id: string,
  x: number,
  y: number,
  xValueAccessor: string,
  yValueAccessor: string
): Array<T> =>
  points.map((point) =>
    point.id === id
      ? { ...point, [xValueAccessor]: x, [yValueAccessor]: y }
      : point
  );

const NUDGES: Record<string, [number, number]> = {
  ArrowUp: [0, 1],
  ArrowDown: [0, -1],
  ArrowRight: [1, 0],
  ArrowLeft: [-1, 0],
};

export const isNudgeKey = (key: string): boolean => key in NUDGES;

/** Moves a plotted point one step in the direction of an arrow key */
export const nudgePoint = <T extends EditablePoint>(
  points: Array<T>,
  id: string,
  key: string,
  [xStep, yStep]: [number, number],
  xValueAccessor: string,
  yValueAccessor: string
): Array<T> => {
  const point = findById(points, id);
  const nudge = NUDGES[key];

  if (!point || !nudge) return points;

  const x = getValue(point, xValueAccessor);
  const y = getValue(point, yValueAccessor);

  if (x === null || y === null) return points;

  const [xDirection, yDirection] = nudge;

  return setPointPosition(
    points,
    id,
    x + xDirection * xStep,
    y + yDirection * yStep,
    xValueAccessor,
    yValueAccessor
  );
};
