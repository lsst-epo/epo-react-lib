import { PointerEvent, useEffect, useRef, useState } from "react";
import { ZoomTransform } from "../types";
import {
  IDENTITY_TRANSFORM,
  clampTranslate,
  zoomAbout,
  zoomAxis,
} from "../helpers";
import { Coordinates } from "@/charts/types";
import { getSvgPoint } from "@/charts/helpers";
import { AxisConfig } from "@/types/charts";

interface UseZoomProps {
  minZoom: number;
  maxZoom: number;
  /** The plot's pixel ranges, which the zoomed plot has to keep covered */
  xRange: [number, number];
  yRange: [number, number];
  xAxis: AxisConfig;
  yAxis: AxisConfig;
  isEnabled?: boolean;
}

/** d3-zoom's wheel delta, so a scroll travels the same distance it used to */
const getWheelFactor = ({ deltaY, deltaMode }: WheelEvent) =>
  2 ** (-deltaY * (deltaMode ? 120 : 1) * 0.002);

const getDistance = ([ax, ay]: Coordinates, [bx, by]: Coordinates) =>
  Math.hypot(bx - ax, by - ay);

const getMidPoint = ([ax, ay]: Coordinates, [bx, by]: Coordinates): Coordinates =>
  [(ax + bx) / 2, (ay + by) / 2];

/**
 * Wheel, pinch, and slider zooming, all reduced to a single transform.
 *
 * The transform is the only thing that accumulates. Everything derived from it
 * is recomputed from the unzoomed plot, so zooming in and back out lands
 * exactly where it started.
 */
const useZoom = ({
  minZoom,
  maxZoom,
  xRange,
  yRange,
  xAxis,
  yAxis,
  isEnabled = true,
}: UseZoomProps) => {
  const [transform, setTransform] = useState<ZoomTransform>(IDENTITY_TRANSFORM);
  const surfaceRef = useRef<SVGRectElement>(null);
  /** Pointers currently down on the plot, keyed by pointer id */
  const pointers = useRef(new Map<number, Coordinates>());
  const pinchDistance = useRef<number | undefined>(undefined);

  const center: Coordinates = [
    (xRange[0] + xRange[1]) / 2,
    (yRange[0] + yRange[1]) / 2,
  ];

  const zoomBy = (factor: number, origin: Coordinates) =>
    setTransform((previous) =>
      zoomAbout(previous, factor, origin, [minZoom, maxZoom], xRange, yRange)
    );

  const panBy = ([dx, dy]: Coordinates) =>
    setTransform(({ k, tx, ty }) =>
      clampTranslate({ k, tx: tx + dx, ty: ty + dy }, xRange, yRange)
    );

  /**
   * The wheel listener has to be a native one: React registers `wheel`
   * passively, where `preventDefault` is ignored and the page scrolls instead.
   */
  const zoomByRef = useRef(zoomBy);
  zoomByRef.current = zoomBy;

  useEffect(() => {
    const surface = surfaceRef.current;

    if (!surface || !isEnabled) return;

    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();

      const origin = getSvgPoint(
        surface.ownerSVGElement,
        event.clientX,
        event.clientY
      );

      if (origin) zoomByRef.current(getWheelFactor(event), origin);
    };

    surface.addEventListener("wheel", handleWheel, { passive: false });

    return () => surface.removeEventListener("wheel", handleWheel);
  }, [isEnabled]);

  const trackPointer = (event: PointerEvent<SVGRectElement>) => {
    const point = getSvgPoint(
      event.currentTarget.ownerSVGElement,
      event.clientX,
      event.clientY
    );

    if (point) pointers.current.set(event.pointerId, point);

    return point;
  };

  const forgetPointer = (event: PointerEvent<SVGRectElement>) => {
    pointers.current.delete(event.pointerId);

    if (pointers.current.size < 2) pinchDistance.current = undefined;
  };

  const getPinch = (): [Coordinates, Coordinates] | undefined => {
    const points = Array.from(pointers.current.values());

    return points.length === 2 ? [points[0], points[1]] : undefined;
  };

  /** Two fingers pinch to zoom and drag to pan; one finger is left alone */
  const handlePinch = (event: PointerEvent<SVGRectElement>) => {
    const previous = getPinch();

    trackPointer(event);

    const current = getPinch();

    if (!current) return;

    const distance = getDistance(...current);
    const midPoint = getMidPoint(...current);
    const previousDistance = pinchDistance.current;

    pinchDistance.current = distance;

    if (!previous || !previousDistance) return;

    const previousMidPoint = getMidPoint(...previous);

    zoomBy(distance / previousDistance, midPoint);
    panBy([
      midPoint[0] - previousMidPoint[0],
      midPoint[1] - previousMidPoint[1],
    ]);
  };

  const zoomXAxis = zoomAxis(xAxis, xRange, transform.k, transform.tx);
  const zoomYAxis = zoomAxis(yAxis, yRange, transform.k, transform.ty);

  return {
    transform,
    surfaceRef,
    /** Zooms to an absolute scale, holding the middle of the plot still */
    zoomTo: (k: number) => zoomBy(k / transform.k, center),
    reset: () => setTransform(IDENTITY_TRANSFORM),
    gestureHandlers: {
      onPointerDown: (event: PointerEvent<SVGRectElement>) => {
        trackPointer(event);
      },
      onPointerMove: handlePinch,
      onPointerUp: forgetPointer,
      onPointerCancel: forgetPointer,
      onPointerLeave: forgetPointer,
    },
    zoomXAxis,
    zoomYAxis
  };
};

export default useZoom;
