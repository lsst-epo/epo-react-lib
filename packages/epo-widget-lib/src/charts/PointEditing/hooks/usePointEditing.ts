import { useRef, useState } from "react";
import { Coordinates } from "@/charts/types";
import { EditablePoint, ValueAccessors } from "../types";
import {
  findTargetPoint,
  isPlotted,
  nudgePoint,
  setPointPosition,
} from "../helpers";
import defaults from "../defaults";

interface UsePointEditingProps<T> extends ValueAccessors {
  points: Array<T>;
  /** The point a click on empty space plots */
  activePoint?: T;
  /** How far one nudge moves a point on each axis */
  steps: Coordinates;
  onChange?: (points: Array<T>) => void;
  /** Only gates the ghost; the caller decides whether to wire up the rest */
  isEditable?: boolean;
}

interface DragState {
  id: string;
  /** Where the pointer is, in the chart's coordinates */
  position?: Coordinates;
}

/**
 * Placing, dragging, and nudging points. Every change produces a new array of new points — the
 * `points` argument is never written to.
 *
 * Positions arrive in domain units; the components that own the pointer events hold the scales and
 * convert before calling in.
 */
const usePointEditing = <T extends EditablePoint>({
  points,
  activePoint,
  xValueAccessor,
  yValueAccessor,
  steps,
  onChange,
  isEditable = true,
}: UsePointEditingProps<T>) => {
  const [drag, setDrag] = useState<DragState>();
  /** Where the pointer is, while a point is still waiting to be placed */
  const [ghostPosition, setGhostPosition] = useState<Coordinates>();
  /** Grows while a nudge is held down, so a long press covers more ground */
  const acceleration = useRef(1);

  const movePoint = (id: string, [x, y]: Coordinates) =>
    onChange?.(
      setPointPosition(points, id, x, y, xValueAccessor, yValueAccessor)
    );

  /** The ghost previews the point `place` moves, so it shows only while that one is unplotted */
  const target = findTargetPoint(points, activePoint, xValueAccessor);
  const tracksGhost =
    isEditable && !!target && !isPlotted(target, xValueAccessor, yValueAccessor);

  return {
    draggingId: drag?.id,
    dragPosition: drag?.position,
    tracksGhost,
    /** Hand to `InteractionSurface`'s `onGhostMove` */
    moveGhost: setGhostPosition,
    /** Where `CursorPoint` goes: the point being dragged, else the ghost of the one to be placed */
    cursorPosition:
      drag?.position ?? (tracksGhost ? ghostPosition : undefined),
    place: (position: Coordinates) => {
      if (target) movePoint(target.id, position);
    },
    startDrag: ({ id }: T) => setDrag({ id }),
    moveDrag: (position: Coordinates) =>
      setDrag((previous) => previous && { ...previous, position }),
    endDrag: (position: Coordinates) => {
      if (drag) movePoint(drag.id, position);

      setDrag(undefined);
    },
    cancelDrag: () => setDrag(undefined),
    nudge: ({ id }: T, key: string) => {
      const [xStep, yStep] = steps;
      const factor = acceleration.current;

      onChange?.(
        nudgePoint(
          points,
          id,
          key,
          [xStep * factor, yStep * factor],
          xValueAccessor,
          yValueAccessor
        )
      );

      acceleration.current = factor * defaults.nudgeAcceleration;
    },
    endNudge: () => {
      acceleration.current = 1;
    },
  };
};

export default usePointEditing;
