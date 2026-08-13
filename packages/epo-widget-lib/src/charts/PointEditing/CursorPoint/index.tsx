import { FunctionComponent } from "react";
import { Coordinates } from "@/charts/types";
import defaults from "../defaults";

interface CursorPointProps {
  /** Where the pointer is, in the chart's coordinates */
  position: Coordinates;
  fill?: string;
  radius?: number;
}

/**
 * A preview of the point about to be plotted: it follows the pointer while the point is unplotted,
 * and stands in for a point while it's dragged.
 */
const CursorPoint: FunctionComponent<CursorPointProps> = ({
  position: [x, y],
  fill = "var(--point-fill, #12726D)",
  radius = defaults.cursorPointRadius,
}) => (
  <circle
    cx={x}
    cy={y}
    r={radius}
    opacity={0.5}
    pointerEvents="none"
    aria-hidden
    {...{ fill }}
  />
);

CursorPoint.displayName = "Charts.CursorPoint";

export default CursorPoint;
