import { FunctionComponent } from "react";
import { ticks as d3Ticks } from "d3-array";
import { Domain, ScaleFunction, BaseAxisProps } from "../types";
import * as Styled from "../styles";

export interface XAxisProps extends BaseAxisProps {
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
  labelRender,
  labelledById,
  margin,
  tickHeight = 5,
  showBaseline = true,
  className,
}) => {
  if (xDomain.length < 2) {
    console.error("Failed to render: invalid domain", xDomain);

    return null;
  }

  const defaultMargins = { top: 0, right: 0, bottom: 0, left: 0 };
  const finalMargins = { ...defaultMargins, ...margin };
  const tickArr = Array.isArray(ticks)
    ? ticks
    : d3Ticks(xDomain[0], xDomain[1], ticks);

  return (
    <>
      {showBaseline && (
        <Styled.BaseLine
          x1={xScale(xDomain[0]) - finalMargins.left}
          x2={xScale(xDomain[1]) + finalMargins.right}
          y1={y}
          y2={y}
        />
      )}
      {tickArr.length > 0 && (
        <g role="list" aria-labelledby={labelledById} className={className}>
          {tickArr.map((value, i) => {
            if (value >= xDomain[1]) return null;

            /** the visual location of the tick, accounting for padding */
            const labelY = y + tickHeight;
            const labelX = xScale(value);

            return (
              <g role="listitem" key={i}>
                {tickHeight > 0 && (
                  <Styled.Tick x1={labelX} x2={labelX} y1={y} y2={labelY} />
                )}
                {labelRender ? (
                  labelRender(value, labelX, labelY, i)
                ) : (
                  <Styled.XLabel x={labelX} y={labelY}>
                    {value}
                  </Styled.XLabel>
                )}
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
