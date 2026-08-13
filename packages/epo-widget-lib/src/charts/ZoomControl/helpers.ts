import { tickStep } from "d3-array";
import { AxisConfig, ChartMargin } from "@/types/charts";
import { ZoomTransform } from "./types";

export const IDENTITY_TRANSFORM: ZoomTransform = { k: 1, tx: 0, ty: 0 };

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

/** Keeps the zoomed plot covering the viewport, so no blank edges appear */
const clampAxisTranslate = (t: number, k: number, range: [number, number]) => {
  const [min, max] = [Math.min(...range), Math.max(...range)];

  return clamp(t, max * (1 - k), min * (1 - k));
};

export const clampTranslate = (
  { k, tx, ty }: ZoomTransform,
  xRange: [number, number],
  yRange: [number, number]
): ZoomTransform => ({
  k,
  tx: clampAxisTranslate(tx, k, xRange),
  ty: clampAxisTranslate(ty, k, yRange),
});

/**
 * Scales the plot by `scaleFactor` while holding `origin` — a point in the
 * chart's own coordinates — still. Every gesture reduces to this.
 */
export const zoomAbout = (
  transform: ZoomTransform,
  scaleFactor: number,
  [originX, originY]: [number, number],
  [minZoom, maxZoom]: [number, number],
  xRange: [number, number],
  yRange: [number, number]
): ZoomTransform => {
  const { k, tx, ty } = transform;
  const zoom = clamp(k * scaleFactor, minZoom, maxZoom);
  /** Clamping may have shrunk the requested factor */
  const applied = zoom / k;

  return clampTranslate(
    {
      k: zoom,
      tx: originX - (originX - tx) * applied,
      ty: originY - (originY - ty) * applied,
    },
    xRange,
    yRange
  );
};

/** The pixel ranges `ScatterPlot` derives from its size and margins */
export const getRanges = (
  width: number,
  height: number,
  margins: ChartMargin
) => ({
  xRange: [margins.left, width - margins.right] as [number, number],
  yRange: [height - margins.bottom, margins.top] as [number, number],
});

/** The step `useAxis` would derive if the config didn't name one */
export const getAxisStep = ({ min, max, step, ticks = 5 }: AxisConfig) =>
  step ?? tickStep(min, max, ticks);

/**
 * Rewrites an axis so that it covers only the zoomed-in portion of itself,
 * the way d3-zoom's `rescaleX` would.
 *
 * `useAxis` stretches its domain by half a step at each end, so the config
 * returned here is pre-shrunk by the same amount and lands back on the visible
 * domain. That makes this the one piece coupled to `useAxis`'s internals.
 *
 * Always call this with the *base* axis: the transform accumulates, the axis
 * must not, or the rounding in `getLinearScale` compounds.
 */
export const zoomAxis = (
  axis: AxisConfig,
  range: [number, number],
  k: number,
  t: number
): AxisConfig => {
  if (k === 1 && t === 0) return axis;

  const step = getAxisStep(axis);
  const halfStep = step / 2;
  const [d0, d1] = [axis.min - halfStep, axis.max + halfStep];
  const [r0, r1] = range;

  /** The domain value drawn at a given pixel before the plot was zoomed */
  const invert = (pixel: number) =>
    d0 + ((pixel - r0) / (r1 - r0)) * (d1 - d0);

  const zoomedStep = step / k;
  const zoomedHalfStep = zoomedStep / 2;

  return {
    ...axis,
    min: invert((r0 - t) / k) + zoomedHalfStep,
    max: invert((r1 - t) / k) - zoomedHalfStep,
    step: zoomedStep,
  };
};