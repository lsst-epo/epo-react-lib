import { KeyboardEvent } from "react";
import { ScaleFunction } from "@/types/charts";
import { Coordinates } from "@/charts/types";
import defaults from "@/charts/defaults";
import { EditablePoint } from "../types";
import { getValue, isNudgeKey } from "../helpers";
import usePointDrag from "../hooks/usePointDrag";
import Point from "./Point";

export interface EditablePointsProps<T extends EditablePoint> {
  points: Array<T>;
  /** Names the group of points for screenreaders */
  label: string;
  xValueAccessor: string;
  yValueAccessor: string;
  xScale: ScaleFunction;
  yScale: ScaleFunction;
  /** Converts a point in the chart's coordinates into domain values */
  toDomain: (point: Coordinates) => Coordinates;
  radius?: number;
  /** Fill for points that don't carry a color of their own */
  color?: string;
  selectedId?: string;
  hoveredId?: string;
  /** The point being dragged, which `CursorPoint` draws instead */
  draggingId?: string;
  isSelectable?: boolean;
  isEditable?: boolean;
  /** What a screenreader says about a point */
  describePoint: (point: T) => string;
  onSelect?: (point: T) => void;
  onHover?: (point: T) => void;
  onHoverOut?: () => void;
  onDragStart?: (point: T) => void;
  /** Where the pointer is now, in the chart's coordinates */
  onDragMove?: (position: Coordinates) => void;
  /** Where the point was dropped, in domain values */
  onDragEnd?: (position: Coordinates) => void;
  onDragCancel?: () => void;
  onNudge?: (point: T, key: string) => void;
  onNudgeEnd?: () => void;
}

const SELECT_KEYS = ["Enter", " "];

/**
 * The points a user can select, drag, and nudge. Positions are read off each point with the
 * caller's accessors, so a point that hasn't been placed yet — one whose accessor holds anything
 * but a number — is drawn hidden rather than dropped, keeping its place in the tab order.
 */
function EditablePoints<T extends EditablePoint>({
  points,
  label,
  xValueAccessor,
  yValueAccessor,
  xScale,
  yScale,
  toDomain,
  radius = defaults.pointRadius,
  color = "var(--point-fill, #12726D)",
  selectedId,
  hoveredId,
  draggingId,
  isSelectable = false,
  isEditable = false,
  describePoint,
  onSelect,
  onHover,
  onHoverOut,
  onDragStart,
  onDragMove,
  onDragEnd,
  onDragCancel,
  onNudge,
  onNudgeEnd,
}: EditablePointsProps<T>) {
  const hasActivePoint = !!selectedId || !!hoveredId;
  const isInteractive = isSelectable || isEditable;

  const { startDrag, moveDrag, endDrag } = usePointDrag<T>({
    toDomain,
    onDragStart,
    onDragMove,
    onDragEnd,
    onDragCancel,
  });

  const handleKeyDown = (event: KeyboardEvent<SVGCircleElement>, point: T) => {
    const { key } = event;

    if (isEditable && isNudgeKey(key)) {
      event.preventDefault();
      onNudge?.(point, key);
      return;
    }

    if (isSelectable && SELECT_KEYS.includes(key)) {
      event.preventDefault();
      onSelect?.(point);
    }
  };

  return (
    <g role="list" aria-label={label}>
      {points.map((point) => {
        const { id } = point;
        const x = getValue(point, xValueAccessor);
        const y = getValue(point, yValueAccessor);
        const isPlotted = x !== null && y !== null;
        const isSelected = id === selectedId;
        const isHovered = id === hoveredId;
        const isDragging = id === draggingId;

        return (
          <Point
            key={id}
            x={isPlotted ? xScale(x) : 0}
            y={isPlotted ? yScale(y) : 0}
            fill={point.color ?? color}
            label={point.label}
            description={describePoint(point)}
            isDimmed={hasActivePoint && !isSelected && !isHovered}
            isHidden={!isPlotted || isDragging}
            onClick={
              isSelectable && !isEditable ? () => onSelect?.(point) : undefined
            }
            onPointerEnter={isSelectable ? () => onHover?.(point) : undefined}
            onPointerLeave={isSelectable ? onHoverOut : undefined}
            onPointerDown={
              isEditable ? (event) => startDrag(event, point) : undefined
            }
            onPointerMove={isDragging ? moveDrag : undefined}
            onPointerUp={isDragging ? endDrag : undefined}
            onPointerCancel={isDragging ? onDragCancel : undefined}
            onKeyDown={(event) => handleKeyDown(event, point)}
            onKeyUp={isEditable ? onNudgeEnd : undefined}
            {...{ radius, isSelected, isHovered, isInteractive }}
          />
        );
      })}
    </g>
  );
}

EditablePoints.displayName = "Charts.EditablePoints";

export default EditablePoints;
