import { FunctionComponent } from "react";
import * as Styled from "../styles";
import { Domain, ScaleFunction, BaseAxisProps } from "../types";

export interface YAxisProps extends BaseAxisProps {
  yDomain: Domain;
  yScale: ScaleFunction;
  x?: number;
  tickLength?: number;
}

const YAxis: FunctionComponent<YAxisProps> = ({
  yDomain = [0, 1],
  yScale = (v) => v,
  x = 0,
  padding = 0,
  ticks = 0,
  labelFormatter = (v) => v,
  labelledById,
  showBaseline = true,
  tickLength = 5,
  className,
}) => {
  if (yDomain.length < 2) {
    console.error("Failed to render: invalid domain", yDomain);

    return null;
  }

  /** the value interval between ticks */
  const interval = (yDomain[1] - yDomain[0]) / ticks;

  return (
    <>
      {showBaseline && (
        <Styled.BaseLine
          x1={x}
          x2={x}
          y1={yScale(yDomain[0]) - padding}
          y2={yScale(yDomain[1]) + padding}
        />
      )}
      {ticks > 0 && (
        <g role="list" aria-labelledby={labelledById} className={className}>
          {Array.from(Array(ticks + 1)).map((tick, i) => {
            /** the numeric value of the tick */
            const value = yDomain[0] + interval * i;

            const label = labelFormatter ? labelFormatter(value) : value;
            const position = yScale(value);

            return (
              <g role="listitem" key={i}>
                <Styled.Tick
                  x1={x - tickLength}
                  x2={x}
                  y1={position}
                  y2={position}
                />
                <Styled.YLabel x={x - tickLength - 2} y={position}>
                  {label}
                </Styled.YLabel>
              </g>
            );
          })}
        </g>
      )}
    </>
  );
};

YAxis.displayName = "Charts.YAxis";

export default YAxis;
