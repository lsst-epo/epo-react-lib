import { Coordinates } from "./types";

/**
 * Converts a screen position into the chart SVG's own coordinates. This is the
 * general form of `charts/Trendline/helpers.getPointInSvg`, which only accepts
 * pointer events on a `rect`; here the same conversion is needed for circles
 * and for native wheel events too.
 */
export const getSvgPoint = (
  svg: SVGSVGElement | null | undefined,
  clientX: number,
  clientY: number
): Coordinates | undefined => {
  const screenToSvg = svg?.getScreenCTM?.()?.inverse();

  if (!screenToSvg) return undefined;

  const { x, y } = new DOMPoint(clientX, clientY).matrixTransform(screenToSvg);

  return [x, y];
};