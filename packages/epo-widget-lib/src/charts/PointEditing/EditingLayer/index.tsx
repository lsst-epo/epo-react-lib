import { ScaleFunction } from "@/types/charts";
import { Coordinates } from "@/charts/types";
import { EditablePoint, PointEditingConfig } from "../types";
import { PointEditingState } from "../hooks/usePointEditingState";
import EditablePoints from "../EditablePoints";

export interface EditingLayerProps<T extends EditablePoint> {
  config: PointEditingConfig<T>;
  state: PointEditingState<T>;
  xScale: ScaleFunction;
  yScale: ScaleFunction;
  /** Converts a point in the chart's coordinates into domain values */
  toDomain: (point: Coordinates) => Coordinates;
}

/**
 * The editable points themselves, drawn where the chart's own points would go. The cursor ghost and
 * the D-pad are in `EditingOverlay` instead, so a chart can put its trendline between the two.
 */
function EditingLayer<T extends EditablePoint>({
  config,
  state,
  xScale,
  yScale,
  toDomain,
}: EditingLayerProps<T>) {
  return (
    <EditablePoints
      points={config.points}
      label={config.label}
      describePoint={config.describePoint}
      color={config.color}
      radius={config.radius}
      xValueAccessor={config.xValueAccessor}
      yValueAccessor={config.yValueAccessor}
      selectedId={state.selectedId}
      hoveredId={state.hoveredId}
      draggingId={state.draggingId}
      isSelectable={state.isSelectable}
      isEditable={state.isEditable}
      onSelect={state.select}
      onHover={state.hover}
      onHoverOut={state.hoverOut}
      onDragStart={(point) => {
        state.focus(point);
        state.startDrag(point);
      }}
      onDragMove={state.moveDrag}
      onDragEnd={state.endDrag}
      onDragCancel={state.cancelDrag}
      onNudge={state.nudge}
      onNudgeEnd={state.endNudge}
      {...{ xScale, yScale, toDomain }}
    />
  );
}

EditingLayer.displayName = "Charts.PointEditing.EditingLayer";

export default EditingLayer;
