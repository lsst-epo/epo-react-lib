import { FunctionComponent, useId, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  ChartMargin,
  Domain,
  HistogramData,
  ScaleFunction,
} from "@/types/charts";
import Base from "@/charts/Base";
import XAxis from "@/charts/XAxis";
import Guidelines from "@/charts/Guidelines";
import YAxis from "@/charts/YAxis";
import Bars from "@/charts/Bars";
import Tooltip from "@/charts/Tooltip";
import { XLabel } from "@/charts/styles";
import { between } from "@/lib/utils";
import * as Styled from "./styles";

interface DistanceHistogramProps {
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
}

const DistanceHistogram: FunctionComponent<DistanceHistogramProps> = ({
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
}) => {
  const { t } = useTranslation();
  const [hoveredIndex, setHoveredIndex] = useState<number>();

  const yRoot = yScale(yDomain[0]);
  const xAxisLabelId = useId();

  const hasTooltip = typeof hoveredIndex === "number";

  const bars = data.map(({ value, bin }, i) => {
    return {
      x: bin,
      value,
      width: 12,
      fill: between(bin, activeRange[0], activeRange[1])
        ? undefined
        : "#30E0E3",
      props: {
        "aria-label": t("supernova_three_vector.histogram.bar_label", {
          count: value,
          binMin: bin,
          binMax: bin + step,
        }),
        onMouseOver: () => setHoveredIndex(i),
        onMouseOut: () => setHoveredIndex(undefined),
      },
    };
  });

  return (
    <Base
      xMin={xDomain[0]}
      yMin={yDomain[0]}
      {...{ width, height, className }}
      horizontalLabel={t("supernova_three_vector.histogram.x_label")}
      horizontalLabelId={xAxisLabelId}
    >
      <YAxis
        showBaseline={false}
        x={xScale(xDomain[0]) - 10}
        ticks={yTicks}
        tickLength={0}
        labelRender={(v, x, y) => (
          <Styled.YLabel {...{ x, y }}>{v}</Styled.YLabel>
        )}
        {...{ yDomain, yScale }}
      />
      <Guidelines
        guides={yTicks}
        {...{ xDomain, xScale, yDomain, yScale, margin }}
      />
      <Bars data={bars} {...{ xDomain, yDomain, xScale, yScale }} />
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
      <Tooltip
        x={hasTooltip ? xScale(data[hoveredIndex].bin) : 0}
        y={hasTooltip ? yScale(bars[hoveredIndex].value) : 0}
        visible={hasTooltip}
      >
        {hasTooltip ? bars[hoveredIndex].value : null}
      </Tooltip>
    </Base>
  );
};

export default DistanceHistogram;
