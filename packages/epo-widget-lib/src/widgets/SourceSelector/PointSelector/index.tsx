import { FunctionComponent } from "react";
import { getLinearScale } from "@/lib/utils";
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
  const xScale = getLinearScale([0, width], [0, width]);
  const yScale = getLinearScale([0, height], [0, height]);

  return (
    <Styled.SVG
      preserveAspectRatio="xMidYMid meet"
      viewBox={`0 0 ${width} ${height}`}
      onClick={() => onSelectCallback && onSelectCallback(undefined)}
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
              x={xScale(x)}
              y={yScale(y)}
              onClickCallback={(event) => {
                event.stopPropagation();
                return onSelectCallback && onSelectCallback(id);
              }}
              {...{
                radius,
                id,
                type,
                isActive,
                isSelected,
                color,
              }}
            />
          );
        })}
      </g>
    </Styled.SVG>
  );
};

PointSelector.displayName = "Widgets.PointSelector";

export default PointSelector;
