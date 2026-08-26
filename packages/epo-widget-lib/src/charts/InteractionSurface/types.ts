import { PointerEventHandler, Ref } from "react";
import { Box, Coordinates } from "@/charts/types";

export type PointerHandlers = Partial<
  Record<
    | "onPointerDown"
    | "onPointerMove"
    | "onPointerUp"
    | "onPointerCancel"
    | "onPointerLeave",
    PointerEventHandler<SVGRectElement>
  >
>;

export interface InteractionSurfaceProps {
  /** The plot area, in the chart's coordinates */
  area: Box;
  surfaceRef?: Ref<SVGRectElement>;
  /** Zoom gestures, which run before this component's own handling */
  gestureHandlers?: PointerHandlers;
  /**
   * Converts a point in the chart's coordinates into domain values. Only
   * needed alongside `onPlace`; a surface that just hears gestures can omit it.
   */
  toDomain?: (point: Coordinates) => Coordinates;
  /** Whether a click moves the point being worked on */
  canPlace?: boolean;
  onPlace?: (position: Coordinates) => void;
  /** Whether the ghost point follows the pointer, in chart coordinates */
  tracksGhost?: boolean;
  onGhostMove?: (position?: Coordinates) => void;
}
