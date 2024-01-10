import { FunctionComponent, HTMLProps } from "react";
import { Domain, ScaleFunction } from "../types";
import * as Styled from "../styles";

export interface Bar {
  stroke?: string;
  fill?: string;
  width?: number;
  value: number;
  props?: HTMLProps<SVGRectElement>;
}

export interface BarsProps {
  data: Array<Bar>;
  xDomain: Domain;
  yDomain: Domain;
  xScale: ScaleFunction;
  yScale: ScaleFunction;
  ticks: number;
}

const Bars: FunctionComponent<BarsProps> = ({
  data,
  xDomain,
  yDomain,
  xScale,
  yScale,
  ticks,
}) => {
  if (data.length === 0) return null;

  const interval = (xDomain[1] - xDomain[0]) / ticks;

  return (
    <g>
      {data.map(({ stroke, fill, width = 8, value, props }, i) => {
        const height = yScale(value);

        if (value === 0) return null;

        const x = xScale(interval * i);
        const y = yScale(yDomain[1] - value);
        return (
          <Styled.Bar
            {...{ height, x, y, width }}
            fill={fill || "var(--bar-fill, #12726D)"}
            stroke={stroke || "var(--bar-stroke, transparent)"}
            key={i}
            transform={`translate(-${width / 2} 1)`}
            {...props}
          />
        );
      })}
    </g>
  );
};

Bars.displayName = "Charts.Bars";

export default Bars;
