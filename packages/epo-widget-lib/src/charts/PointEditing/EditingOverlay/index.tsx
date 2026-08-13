import { ScaleFunction } from "@/types/charts";
import { Coordinates } from "@/charts/types";
import { EditablePoint, PointEditingConfig } from "../types";
import { PointEditingState } from "../hooks/usePointEditingState";
import { getValue } from "../helpers";
import CursorPoint from "../CursorPoint";
import Nudge from "../Nudge";

export interface EditingOverlayProps<T extends EditablePoint> {
  config: PointEditingConfig<T>;
  state: PointEditingState<T>;
  xScale: ScaleFunction;
  yScale: ScaleFunction;
}

/**
 * The transient half of editing — the ghost following the pointer and the D-pad on the selected
 * point. Drawn last so neither ends up beneath the plot's own marks.
 */
function EditingOverlay<T extends EditablePoint>({
  config,
  state,
  xScale,
  yScale,
}: EditingOverlayProps<T>) {
  const { selectedPoint } = state;

  const toChartPoint = (point: T): Coordinates | undefined => {
    const x = getValue(point, config.xValueAccessor);
    const y = getValue(point, config.yValueAccessor);

    return x === null || y === null ? undefined : [xScale(x), yScale(y)];
  };

  /** The D-pad sits on the selected point, but not while it's moving */
  const nudgePosition =
    state.isEditable && selectedPoint && !state.draggingId
      ? toChartPoint(selectedPoint)
      : undefined;

  return (
    <>
      {state.cursorPosition && (
        <CursorPoint position={state.cursorPosition} fill={config.color} />
      )}
      {nudgePosition && selectedPoint && (
        <Nudge
          x={nudgePosition[0]}
          y={nudgePosition[1]}
          onNudge={(key) => state.nudge(selectedPoint, key)}
          onNudgeEnd={state.endNudge}
        />
      )}
    </>
  );
}

EditingOverlay.displayName = "Charts.PointEditing.EditingOverlay";

export default EditingOverlay;
