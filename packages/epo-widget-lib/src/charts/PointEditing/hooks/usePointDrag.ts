import { PointerEvent } from "react";
import { getSvgPoint } from "@/charts/helpers";
import { Coordinates } from "@/charts/types";
import { EditablePoint } from "../types";

interface UsePointDragProps<T> {
  /** Converts a point in the chart's coordinates into domain values */
  toDomain: (point: Coordinates) => Coordinates;
  onDragStart?: (point: T) => void;
  onDragMove?: (position: Coordinates) => void;
  onDragEnd?: (position: Coordinates) => void;
  onDragCancel?: () => void;
}

/**
 * Pointer handling for dragging a plotted point. 
 */
const usePointDrag = <T extends EditablePoint>({
  toDomain,
  onDragStart,
  onDragMove,
  onDragEnd,
  onDragCancel,
}: UsePointDragProps<T>) => {
  const toChartPoint = (event: PointerEvent<SVGGraphicsElement>) =>
    getSvgPoint(
      event.currentTarget.ownerSVGElement,
      event.clientX,
      event.clientY
    );

  return {
    startDrag: (event: PointerEvent<SVGGraphicsElement>, point: T) => {
      event.currentTarget.setPointerCapture(event.pointerId);
      onDragStart?.(point);
    },
    moveDrag: (event: PointerEvent<SVGGraphicsElement>) => {
      const position = toChartPoint(event);

      if (position) onDragMove?.(position);
    },
    endDrag: (event: PointerEvent<SVGGraphicsElement>) => {
      event.currentTarget.releasePointerCapture(event.pointerId);

      const position = toChartPoint(event);

      if (position) {
        onDragEnd?.(toDomain(position));
      } else {
        onDragCancel?.();
      }
    },
  };
};

export default usePointDrag;
