import { SourceType } from "@/types/astro";
import { FunctionComponent } from "react";
import * as Styled from "./styles";

export interface PointProps {
  type: SourceType;
  id: string;
  isSelected: boolean;
  isActive: boolean;
  x: number;
  y: number;
  radius?: number;
  className?: string;
  color: string;
}

const Point: FunctionComponent<PointProps> = ({
  type,
  id,
  isActive,
  isSelected,
  x,
  y,
  radius,
  className,
  color,
}) => {
  const defaultRadii: { [key: string]: number } = {
    supernova: 20,
    galaxy: 60,
    galaxyFilter: 25,
  };

  const getRadius = (type: string, radius?: number) => {
    if (radius) {
      return Math.abs(radius);
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

  const baseRadius = getRadius(type, radius);
  const activeRadius = Math.max(10, baseRadius * 1.2);

  return (
    <Styled.Point
      data-id={id}
      data-type={type}
      cx={x}
      cy={y}
      r={isActive ? activeRadius : baseRadius}
      fill="transparent"
      stroke={getStroke(isActive, isSelected, color)}
      tabIndex={0}
      role="listitem"
      {...{ $isSelected: isSelected, className }}
    />
  );
};

Point.displayName = "Widgets.SourceSelector.Point";

export default Point;
