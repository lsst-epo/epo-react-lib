import { FunctionComponent, useId, useState } from "react";
import {
  ChartMargin,
  Domain,
  HistogramData,
  ScaleFunction,
} from "@/types/charts";
import XAxis from "@/charts/XAxis";
import Guidelines from "@/charts/Guidelines";
import YAxis from "@/charts/YAxis";
import { XLabel } from "@/charts/styles";
import { between } from "@/lib/utils";
import * as Styled from "./styles";

export interface HistogramProps {
  data: HistogramData;
  activeRange: Array<number>;
  margin: ChartMargin;
  xDomain: Domain;
  yDomain: Domain;
  xScale: ScaleFunction;
  yScale: ScaleFunction;
  yTicks: number;
  xTicks: number;
  step: number;
  width: number;
  height: number;
  className?: string;
  horizontalLabel: string;
  verticalLabel: string;
  renderTooltip?: (bar: HistogramData[number]) => string;
  renderAriaLabel?: (bar: HistogramData[number]) => string;
  selectedIndex?: number;
  onBarClick?: (bar: HistogramData[number] & { index: number }) => void;
}

const Histogram: FunctionComponent<HistogramProps> = ({
  data,
  margin,
  activeRange,
  xDomain,
  yDomain,
  xScale,
  yScale,
  yTicks,
  xTicks,
  step,
  width,
  height,
  className,
  horizontalLabel,
  verticalLabel,
  renderTooltip,
  renderAriaLabel,
  selectedIndex,
  onBarClick,
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number>();

  const yRoot = yScale(yDomain[0]);
  const xAxisLabelId = useId();
  const yAxisLabelId = useId();

  const tooltipIndex =
    typeof selectedIndex === "number"
      ? selectedIndex
      : typeof hoveredIndex === "number"
      ? hoveredIndex
      : undefined;
  const hasTooltip = typeof tooltipIndex === "number";

  const bars = data.map(({ value, bin }, i) => {
    return {
      x: bin,
      value,
      width: 12,
      fill: between(bin, activeRange[0], activeRange[1])
        ? undefined
        : "#30E0E3",
      props: {
        "aria-label": renderAriaLabel
          ? renderAriaLabel({ value, bin })
          : `${value}`,
        "data-selected": selectedIndex === i,
        onMouseOver: () => setHoveredIndex(i),
        onMouseOut: () => setHoveredIndex(undefined),
        onClick: () =>
          onBarClick ? onBarClick({ value, bin, index: i }) : undefined,
      },
    };
  });

  return (
    <Styled.Base
      xMin={xDomain[0]}
      yMin={yDomain[0]}
      {...{ width, height, horizontalLabel, verticalLabel, className }}
      horizontalLabelId={xAxisLabelId}
      verticalLabelId={yAxisLabelId}
    >
      <YAxis
        showBaseline={false}
        x={xScale(xDomain[0]) - 10}
        ticks={yTicks}
        tickLength={0}
        labelledById={yAxisLabelId}
        labelRender={(v, x, y) => (
          <Styled.YLabel {...{ x, y }}>{v}</Styled.YLabel>
        )}
        {...{ yDomain, yScale }}
      />
      <Guidelines
        guides={yTicks}
        {...{ xDomain, xScale, yDomain, yScale, margin }}
      />
      <Styled.Bars data={bars} {...{ xDomain, yDomain, xScale, yScale }} />
      <XAxis
        ticks={xTicks}
        y={yRoot}
        labelledById={xAxisLabelId}
        labelRender={(v, x, y) => (
          <XLabel x={x} y={y + 5}>
            {v}
          </XLabel>
        )}
        {...{ xDomain, xScale, margin }}
      />
      <Styled.Tooltip
        x={hasTooltip ? xScale(data[tooltipIndex].bin) : 0}
        y={hasTooltip ? yScale(bars[tooltipIndex].value) : 0}
        visible={hasTooltip}
      >
        {hasTooltip
          ? renderTooltip
            ? renderTooltip(data[tooltipIndex])
            : bars[tooltipIndex].value
          : null}
      </Styled.Tooltip>
    </Styled.Base>
  );
};

export default Histogram;
