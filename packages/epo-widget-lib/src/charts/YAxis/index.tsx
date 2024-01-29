import { FunctionComponent } from "react";
import { ticks as d3Ticks } from "d3-array";
import { Domain, ScaleFunction, BaseAxisProps } from "../types";
import * as Styled from "../styles";

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
  margin,
  ticks = 0,
  labelRender,
  labelledById,
  showBaseline = true,
  tickLength = 5,
  className,
}) => {
  if (yDomain.length < 2) {
    console.error("Failed to render: invalid domain", yDomain);

    return null;
  }

  const defaultMargins = { top: 0, right: 0, bottom: 0, left: 0 };
  const finalMargins = { ...defaultMargins, ...margin };
  const tickArr = d3Ticks(yDomain[0], yDomain[1], ticks);

  return (
    <>
      {showBaseline && (
        <Styled.BaseLine
          x1={x}
          x2={x}
          y1={yScale(yDomain[0]) - finalMargins.top}
          y2={yScale(yDomain[1]) + finalMargins.bottom}
        />
      )}
      {ticks > 0 && (
        <g role="list" aria-labelledby={labelledById} className={className}>
          {tickArr.map((value, i) => {
            if (value <= yDomain[0]) return null;

            const labelY = yScale(yDomain[1] - value + yDomain[0]);
            const labelX = x - tickLength;

            return (
              <g role="listitem" key={i}>
                {tickLength > 0 && (
                  <Styled.Tick x1={labelX} x2={x} y1={labelY} y2={labelY} />
                )}
                {labelRender ? (
                  labelRender(value, labelX, labelY, i)
                ) : (
                  <Styled.YLabel x={labelX} y={labelY}>
                    {value}
                  </Styled.YLabel>
                )}
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
