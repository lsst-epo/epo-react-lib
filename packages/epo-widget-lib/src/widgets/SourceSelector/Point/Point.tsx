import { Source } from "@/types/astro";
import { FunctionComponent, MouseEventHandler } from "react";
import * as Styled from "./styles";

export interface PointProps extends Source {
  isSelected: boolean;
  isActive: boolean;
  className?: string;
  onClickCallback?: MouseEventHandler<SVGCircleElement>;
}

const getRadius = (type: string, radius?: number | string) => {
  const defaultRadii: { [key: string]: number } = {
    supernova: 20,
    galaxy: 60,
    galaxyFilter: 25,
  };

  if (radius) {
    if (typeof radius === "number") return Math.abs(radius);

    return radius;
  }

  const { [type]: r = 8 } = defaultRadii;

  return r;
};

const getStroke = (isActive: boolean, isSelected: boolean, color: string) => {
  if (isActive) {
    return "#fed828";
  }

  if (isSelected) {
    return color;
  }

  return "transparent";
};

const Point: FunctionComponent<PointProps> = ({
  type,
  isActive,
  isSelected,
  x,
  y,
  radius,
  className,
  color,
  onClickCallback,
  id,
}) => {
  const r = getRadius(type, radius);

  return (
    <Styled.Point
      onClick={onClickCallback}
      cx={x}
      cy={y}
      fill="transparent"
      stroke={getStroke(isActive, isSelected, color)}
      strokeWidth={3}
      transform={`scale(${isActive ? 1.2 : 1})`}
      tabIndex={0}
      role="listitem"
      {...{ className, r, id }}
    />
  );
};

Point.displayName = "Widgets.SourceSelector.Point";

export default Point;
