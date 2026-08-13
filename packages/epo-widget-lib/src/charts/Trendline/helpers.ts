

import {
  PointerEvent,
} from "react";
import { Domain, ScaleFunction } from "@/types/charts";
import { Box, Coordinates } from "../types";

/** Fraction of each axis the slope line stops short of the plot's edge */
export const SLOPE_BUFFER = 0.08;

export const EMPTY_BOX: Box = { x: 0, y: 0, width: 0, height: 0 };

export const getElBox = (el: SVGGraphicsElement | null): Box => {
  if (el && el.getBBox) {
    const { x, y, width, height } = el.getBBox();
    return { x, y, width, height };
  }

  return EMPTY_BOX;
};

export const getMidPoint = (a: Coordinates, b: Coordinates): Coordinates => [
  (a[0] + b[0]) / 2,
  (a[1] + b[1]) / 2,
];

/**
 * Where a line from the origin with the given slope meets the buffered edge
 * of the plot, whether that's the top edge or the right one.
 */
export const getSlopeTerminus = (
  slope: number,
  [xDomain, yDomain]: [Domain, Domain],
  xScale: ScaleFunction,
  yScale: ScaleFunction,
): Coordinates => {
  const [minX, maxX] = xDomain;
  const [minY, maxY] = yDomain;
  const bufferedMaxX = maxX - (maxX - minX) * SLOPE_BUFFER;

  let y = maxY - (maxY - minY) * SLOPE_BUFFER;
  let x = y / slope;

  if (x > bufferedMaxX) {
    x = bufferedMaxX;
    y = slope * x;
  }

  return [xScale(x), yScale(y)];
};

/** Converts a pointer's screen position into the root SVG's coordinates */
export const getPointInSvg = (
  event: PointerEvent<SVGRectElement>,
): Coordinates | undefined => {
  const svg = event.currentTarget.ownerSVGElement;
  const screenToSvg = svg?.getScreenCTM?.()?.inverse();

  if (!screenToSvg) return undefined;

  const { x, y } = new DOMPoint(event.clientX, event.clientY).matrixTransform(
    screenToSvg,
  );

  return [x, y];
};