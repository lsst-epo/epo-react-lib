import { FunctionComponent } from "react";
import { AstroType } from "../GalaxySelector";
import * as Styled from "./styles";

interface PointProps {
  id: AstroType;
  isSelected: boolean;
  isActive: boolean;
  x: number;
  y: number;
  radius?: number;
  className?: string;
  color: string;
}

const Point: FunctionComponent<PointProps> = ({
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

  const getRadius = (id: string, radius?: number) => {
    if (radius) {
      return Math.abs(radius);
    }

    const { [id]: r = 8 } = defaultRadii;

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

  const baseRadius = getRadius(id, radius);
  const activeRadius = Math.max(10, baseRadius * 1.2);

  return (
    <Styled.Point
      cx={x}
      cy={y}
      r={isActive ? activeRadius : baseRadius}
      fill="transparent"
      stroke={getStroke(isActive, isSelected, color)}
      {...{ isSelected, className }}
    />
  );
};

Point.displayName = "Widgets.GalaxySelector.Point";

export default Point;
