import { FunctionComponent } from "react";

interface LightCurvePointProps {
  x: number;
  y: number;
  error: number;
  onMouseOver: () => void;
  onMouseOut: () => void;
  description?: string;
}

const LightCurvePoint: FunctionComponent<LightCurvePointProps> = ({
  x,
  y,
  error,
  onMouseOver,
  onMouseOut,
  description,
}) => {
  const pointRadius = 6;
  const barLength = pointRadius / 2;
  return (
    <g
      role="listitem"
      aria-label={description}
      transform={`translate(${x},${y})`}
      {...{ onMouseOver, onMouseOut }}
    >
      <line
        x={0}
        y1={error}
        y2={-error}
        stroke="var(--black, #000)"
        strokeWidth={1}
        fill="none"
      />
      <line
        x1={-barLength}
        x2={barLength}
        y1={error}
        y2={error}
        stroke="var(--black, #000)"
        strokeWidth={1}
        fill="none"
      />
      <line
        x1={-barLength}
        x2={barLength}
        y1={-error}
        y2={-error}
        stroke="var(--black, #000)"
        strokeWidth={1}
        fill="none"
      />
      <circle
        fill="var(--turquoise85, #12726D)"
        r={pointRadius}
        cursor="pointer"
      />
    </g>
  );
};

LightCurvePoint.displayName = "Widgets.LightCurve.Point";

export default LightCurvePoint;
