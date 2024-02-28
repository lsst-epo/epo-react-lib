import { FunctionComponent, PropsWithChildren, useState } from "react";
import { useTranslation } from "react-i18next";
import { max, min } from "d3-array";
import useAxis from "@/charts/hooks/useAxis";
import {
  ClippingContainer,
  Tooltip,
  Viewport,
  XAxis,
  YAxis,
} from "@/charts/index";
import { ChartMargin, Bounds } from "@/charts/types";
import { formatMagnitudePoints } from "../helpers";
import defaults from "../defaults";
import Point from "../Point";
import * as Styled from "./styles";

export interface ScatterPlotProps extends Partial<Bounds> {
  data: ReturnType<typeof formatMagnitudePoints>;
  name?: string;
  activeAlertId?: number;
  className?: string;
}

const ScatterPlot: FunctionComponent<PropsWithChildren<ScatterPlotProps>> = ({
  data,
  activeAlertId,
  xMin,
  xMax,
  yMin = defaults.yMin,
  yMax = defaults.yMax,
  width = defaults.width,
  height = defaults.height,
  name,
  children,
  className,
}) => {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const [hoveredIndex, setHovered] = useState<number>();

  const xAxisLabel = t("light_curve.plot.x_label");
  const xAxisLabelId = "xAxisLabel";
  const yAxisLabel = t("light_curve.plot.y_label");
  const yAxisLabelId = "yAxisLabel";

  const activeItem =
    typeof hoveredIndex !== "undefined"
      ? data[hoveredIndex]
      : data.find(({ id }) => id === activeAlertId);

  const margins: ChartMargin = {
    top: 10,
    left: 40,
    right: 10,
    bottom: 25,
  };

  const xRange = [0 + margins.left, width - margins.right];

  const [xDomain, xTicks, xScale] = useAxis({
    min: xMin || min(data, ({ x }) => x) || defaults.xMin,
    max: xMax || max(data, ({ x }) => x) || defaults.xMax,
    step: defaults.xStep,
    range: xRange,
  });

  const xRoot = xScale(xDomain[0]);

  const yRange = [0 + margins.top, height - margins.bottom];

  const [yDomain, yTicks, yScale] = useAxis({
    min: yMin,
    max: yMax,
    step: defaults.yStep,
    range: yRange,
  });

  const yRoot = yScale(yDomain[1]);

  return (
    <Styled.PlotContainer className={className}>
      <Styled.Chart
        {...{ width, height }}
        horizontalLabel={xAxisLabel}
        horizontalLabelId={xAxisLabelId}
        verticalLabel={yAxisLabel}
        verticalLabelId={yAxisLabelId}
        title={name}
      >
        <rect
          x={xScale(0)}
          y={yScale(yDomain[0])}
          width={xScale(15) - xScale(0)}
          height={yRoot - yScale(yDomain[0])}
          fill="#F5F5F5"
        />
        <XAxis
          ticks={xTicks}
          y={yRoot}
          labelledById={xAxisLabelId}
          {...{ xDomain, xScale }}
        />
        <YAxis
          ticks={yTicks}
          x={xRoot}
          labelledById={yAxisLabelId}
          {...{ yDomain, yScale }}
        />
        <ClippingContainer
          x={xRoot}
          y={yScale(yDomain[0])}
          width={xRange[1] - xRange[0]}
          height={yRange[1] - yRange[0]}
        >
          <g
            role="list"
            aria-label={t("light_curve.plot.plot_label") || undefined}
          >
            {data.map(({ x, y, error, id }, i) => {
              const days = Math.round(x);
              const context =
                days > 0 ? "after" : days === 0 ? "peak" : "before";
              return (
                <Point
                  key={id}
                  x={xScale(x)}
                  y={yScale(y)}
                  error={yScale(error) - yScale(0)}
                  onMouseOver={() => setHovered(i)}
                  onMouseOut={() => setHovered(undefined)}
                  description={
                    t("light_curve.plot.point_label", {
                      magnitude: y,
                      count: Math.abs(days),
                      context,
                    }) || undefined
                  }
                />
              );
            })}
          </g>
        </ClippingContainer>

        <Viewport
          x={xRoot}
          y={yScale(yDomain[0])}
          outerWidth={xRange[1] - xRange[0]}
          outerHeight={yRange[1] - yRange[0]}
          innerWidth={width}
          innerHeight={height}
        >
          {children}
        </Viewport>
        <Tooltip
          x={activeItem ? xScale(activeItem.x) : undefined}
          y={activeItem ? yScale(activeItem.y) : undefined}
          visible={!!activeItem}
          offset={6}
        >
          {t("light_curve.plot.tooltip", {
            magnitude: activeItem?.y.toLocaleString(language, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }),
          })}
        </Tooltip>
      </Styled.Chart>
    </Styled.PlotContainer>
  );
};

ScatterPlot.displayName = "Widgets.LightCurve.ScatterPlot";

export default ScatterPlot;
