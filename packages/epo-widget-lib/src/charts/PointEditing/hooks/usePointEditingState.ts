import { useEffect, useState } from "react";
import { AxisConfig } from "@/types/charts";
import { EditablePoint, PointEditingConfig } from "../types";
import { findById } from "../helpers";
import usePointEditing from "./usePointEditing";

/** How far one nudge moves a point, as a fraction of an axis step */
const NUDGE_STEP = 0.05;

interface UsePointEditingStateProps<T extends EditablePoint> {
  config?: PointEditingConfig<T>;
  /** The unzoomed axes, whose steps set how far one nudge moves a point */
  xAxis: AxisConfig;
  yAxis: AxisConfig;
}

/**
 * All of the editing state a chart needs, in one object: which point is selected or hovered, and the
 * placing, dragging, and nudging from `usePointEditing`.
 *
 * Everything here is independent of the chart's scales, so it can be built before the plot renders.
 * `EditingLayer` and `EditingOverlay` take what comes out and draw it.
 */
const usePointEditingState = <T extends EditablePoint>({
  config,
  xAxis,
  yAxis,
}: UsePointEditingStateProps<T>) => {
  const {
    points = [],
    xValueAccessor = "x",
    yValueAccessor = "y",
    isSelectable = false,
    isEditable = false,
    nudgeStep = NUDGE_STEP,
  } = config ?? {};

  const [selectedId, setSelectedId] = useState<string>();
  const [hoveredId, setHoveredId] = useState<string>();

  /**
   * A parent can drive the selection by handing over a different active point. This deliberately
   * doesn't call `onSelectionChange` — that would report the parent's own change back to it, and the
   * two would drive each other.
   */
  const activePointId = config?.activePoint?.id;

  useEffect(() => {
    setSelectedId(activePointId);
    setHoveredId(undefined);
  }, [activePointId]);

  const setSelection = (point?: T) => {
    setSelectedId(point?.id);
    config?.onSelectionChange?.(point);
  };

  const selectedPoint = findById(points, selectedId);

  const editing = usePointEditing<T>({
    points,
    activePoint: config?.activePoint ?? selectedPoint,
    steps: [xAxis.step * nudgeStep, yAxis.step * nudgeStep],
    onChange: config?.onChange,
    xValueAccessor,
    yValueAccessor,
    isEditable,
  });

  /** The point the tooltip describes: the one under the pointer, else the selected one */
  const activeId = hoveredId ?? selectedId;
  const tooltipPoint = findById(points, activeId);

  return {
    ...editing,
    selectedId,
    hoveredId,
    activeId,
    selectedPoint,
    isSelectable,
    isEditable,
    select: (point: T) =>
      setSelection(point.id === selectedId ? undefined : point),
    /** Non-toggling, so dragging a point can't deselect it */
    focus: (point: T) => point.id !== selectedId && setSelection(point),
    hover: ({ id }: T) => setHoveredId(id),
    hoverOut: () => setHoveredId(undefined),
    tooltip:
      config?.tooltip && tooltipPoint
        ? () => config.tooltip?.(tooltipPoint)
        : undefined,
  };
};

export type PointEditingState<T extends EditablePoint> = ReturnType<
  typeof usePointEditingState<T>
>;

export default usePointEditingState;
