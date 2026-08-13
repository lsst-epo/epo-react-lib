import {
  FunctionComponent,
  KeyboardEventHandler,
  PointerEventHandler,
} from "react";
import PointLabel from "./PointLabel";
import * as Styled from "./styles";

export interface PointProps {
  x: number;
  y: number;
  radius: number;
  fill: string;
  label?: string;
  description: string;
  isSelected?: boolean;
  isHovered?: boolean;
  isDimmed?: boolean;
  isHidden?: boolean;
  isInteractive?: boolean;
  onClick?: PointerEventHandler<SVGCircleElement>;
  onPointerEnter?: PointerEventHandler<SVGCircleElement>;
  onPointerLeave?: PointerEventHandler<SVGCircleElement>;
  onPointerDown?: PointerEventHandler<SVGCircleElement>;
  onPointerMove?: PointerEventHandler<SVGCircleElement>;
  onPointerUp?: PointerEventHandler<SVGCircleElement>;
  onPointerCancel?: PointerEventHandler<SVGCircleElement>;
  onKeyDown?: KeyboardEventHandler<SVGCircleElement>;
  onKeyUp?: KeyboardEventHandler<SVGCircleElement>;
}

const Point: FunctionComponent<PointProps> = ({
  x,
  y,
  radius,
  fill,
  label,
  description,
  isSelected = false,
  isHovered = false,
  isDimmed = false,
  isHidden = false,
  isInteractive = false,
  ...handlers
}) => {
  const isActive = isSelected || isHovered;

  return (
    <g role="listitem" transform={`translate(${x},${y})`}>
      <Styled.Point
        r={radius}
        stroke={fill}
        strokeWidth={2}
        fillOpacity={0.5}
        role={isInteractive ? "button" : undefined}
        aria-pressed={isInteractive ? isSelected : undefined}
        aria-label={description}
        tabIndex={isInteractive && !isHidden ? 0 : undefined}
        data-active={isActive}
        data-dimmed={isDimmed}
        data-hidden={isHidden}
        data-interactive={isInteractive}
        {...{ fill, ...handlers }}
      />
      {label && !isHidden && (
        <PointLabel label={label} x={radius * 3} y={radius} {...{ isActive }} />
      )}
    </g>
  );
};

Point.displayName = "Charts.EditablePoints.Point";

export default Point;
