import { FunctionComponent, MouseEvent, PointerEvent } from "react";
import { getSvgPoint } from "@/charts/helpers";
import { InteractionSurfaceProps } from "./types";

/**
 * A transparent rect covering the plot, so that gestures over empty space are
 * still heard. It sits below the points, which get the pointer first.
 */
const InteractionSurface: FunctionComponent<InteractionSurfaceProps> = ({
  area,
  surfaceRef,
  gestureHandlers = {},
  toDomain,
  canPlace = false,
  onPlace,
  tracksGhost = false,
  onGhostMove,
}) => {
  const toChartPoint = (
    event: PointerEvent<SVGRectElement> | MouseEvent<SVGRectElement>,
  ) =>
    getSvgPoint(
      event.currentTarget.ownerSVGElement,
      event.clientX,
      event.clientY,
    );

  return (
    <rect
      {...area}
      ref={surfaceRef}
      fill="transparent"
      style={{
        cursor: canPlace ? "crosshair" : "default",
        touchAction: "none",
      }}
      {...gestureHandlers}
      onPointerMove={(event) => {
        gestureHandlers.onPointerMove?.(event);

        if (tracksGhost) onGhostMove?.(toChartPoint(event));
      }}
      onPointerLeave={(event) => {
        gestureHandlers.onPointerLeave?.(event);

        if (tracksGhost) onGhostMove?.(undefined);
      }}
      onClick={(event) => {
        const point = canPlace ? toChartPoint(event) : undefined;

        if (point && toDomain) onPlace?.(toDomain(point));
      }}
    />
  );
};

InteractionSurface.displayName = "Charts.InteractionSurface";

export default InteractionSurface;
