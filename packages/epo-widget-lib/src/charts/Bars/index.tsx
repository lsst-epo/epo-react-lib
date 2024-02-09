import { FunctionComponent, HTMLProps } from "react";
import { Domain, ScaleFunction } from "../types";
import * as Styled from "../styles";

export interface Bar {
  stroke?: string;
  fill?: string;
  width?: number;
  value: number;
  x: number;
  props?: HTMLProps<SVGRectElement>;
}

export interface BarsProps {
  data: Array<Bar>;
  yDomain: Domain;
  xScale: ScaleFunction;
  yScale: ScaleFunction;
  y?: number;
}

const Bars: FunctionComponent<BarsProps> = ({
  data,
  yDomain,
  xScale,
  yScale,
  y = yScale(yDomain[0]),
}) => {
  if (data.length === 0) return null;

  return (
    <g role="list">
      {data.map(({ stroke, fill, width = 8, x, value, props }, i) => {
        if (value === 0) return null;
        const height = y - yScale(value);

        return (
          <Styled.Bar
            role="listitem"
            {...{ height, y, width }}
            x={xScale(x)}
            fill={fill || "var(--bar-fill, #12726D)"}
            stroke={stroke || "var(--bar-stroke, transparent)"}
            key={i}
            transform={`translate(-${width / 2} -${height})`}
            {...props}
          />
        );
      })}
    </g>
  );
};

Bars.displayName = "Charts.Bars";

export default Bars;
