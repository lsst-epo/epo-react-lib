import { FunctionComponent, MouseEventHandler } from "react";
import Point from "../Point";
import * as Styled from "../styles";
import { Source } from "@/types/astro";

export interface PointSelectorProps {
  width: number;
  height: number;
  id?: string;
  sources: Source[];
  selectedSource: string[];
  onSelectCallback: (id?: string) => void;
}

const PointSelector: FunctionComponent<PointSelectorProps> = ({
  width,
  height,
  id,
  sources,
  selectedSource,
  onSelectCallback,
}) => {
  const handleClick: MouseEventHandler<SVGSVGElement> = (event) => {
    const { id } = event.target as SVGSVGElement;

    onSelectCallback && onSelectCallback(id);
  };

  return (
    <Styled.SVG
      preserveAspectRatio="xMidYMid meet"
      viewBox={`0 0 ${width} ${height}`}
      onClick={handleClick}
      id={id}
    >
      <g role="list">
        {sources.map((d) => {
          const { type, id, color, radius = NaN, x, y } = d;
          const isSelected = selectedSource.includes(id);
          const isActive = false;

          return (
            <Point
              key={id}
              {...{ x, y, radius, id, type, isActive, isSelected, color }}
            />
          );
        })}
      </g>
    </Styled.SVG>
  );
};

PointSelector.displayName = "Widgets.PointSelector";

export default PointSelector;
