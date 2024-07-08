import { FunctionComponent } from "react";
import { Source } from "@/types/astro";
import { getRadius } from "../utils";
import * as Styled from "./styles";

export interface SourceMapProps {
  width: number;
  height: number;
  sources: Source[];
}

const invertY = (y: number | string, height: number) => {
  if (typeof y === "string") {
    const isPercent = y.includes("%");

    return isPercent ? `${100 - parseFloat(y)}%` : height - parseFloat(y);
  }

  return height - y;
};

const SourceMap: FunctionComponent<SourceMapProps> = ({
  width,
  height,
  sources,
}) => {
  return (
    <Styled.SVG
      preserveAspectRatio="xMidYMid meet"
      viewBox={`0 0 ${width} ${height}`}
    >
      <g role="list">
        {sources.map((d) => {
          const { type, id, color, radius = NaN, x, y } = d;
          const isActive = false;

          return (
            <Styled.Point
              key={id}
              cx={x}
              cy={invertY(y, height)}
              fill="transparent"
              stroke={isActive ? "#fed828" : color}
              strokeWidth={3}
              transform={`scale(${isActive ? 1.2 : 1})`}
              tabIndex={0}
              role="listitem"
              r={`${getRadius(type, radius) * 100}%`}
              {...{ id }}
            />
          );
        })}
      </g>
    </Styled.SVG>
  );
};

SourceMap.displayName = "Widgets.SourceMap";

export default SourceMap;
