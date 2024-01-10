import { FunctionComponent } from "react";
import * as Styled from "../styles";
import { Domain, ScaleFunction, BaseAxisProps } from "../types";

interface XAxisProps extends BaseAxisProps {
  xDomain: Domain;
  xScale: ScaleFunction;
  y?: number;
  tickHeight?: number;
}

const XAxis: FunctionComponent<XAxisProps> = ({
  xDomain = [0, 1],
  xScale = (v) => v,
  y = 0,
  ticks = 0,
  labelFormatter = (v) => v,
  labelledById,
  padding = 0,
  tickHeight = 5,
  showBaseline = true,
  className,
}) => {
  if (xDomain.length < 2) {
    console.error("Failed to render: invalid domain", xDomain);

    return null;
  }

  /** the value interval between ticks */
  const interval = (xDomain[1] - xDomain[0]) / ticks;

  return (
    <>
      {showBaseline && (
        <Styled.BaseLine
          x1={xScale(xDomain[0]) - padding}
          x2={xScale(xDomain[1]) + padding}
          y1={y}
          y2={y}
        />
      )}
      {ticks > 0 && (
        <g role="list" aria-labelledby={labelledById} className={className}>
          {Array.from(Array(ticks + 1)).map((tick, i) => {
            /** the numeric value of the tick */
            const value = xDomain[0] + interval * i;

            /** the visual location of the tick, accounting for padding */
            const position = xScale(value);
            const label = labelFormatter(value, i);

            return (
              <g role="listitem" key={`${label}-${i}`}>
                <Styled.Tick
                  x1={position}
                  x2={position}
                  y1={y}
                  y2={y + tickHeight}
                />
                <Styled.XLabel x={position} y={y + tickHeight}>
                  {label}
                </Styled.XLabel>
              </g>
            );
          })}
        </g>
      )}
    </>
  );
};

XAxis.displayName = "Charts.XAxis";

export default XAxis;
