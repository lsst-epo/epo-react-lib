import {
  FunctionComponent,
  PropsWithChildren,
  ReactNode,
  useState,
} from "react";
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
import { ChartMargin, Bounds, ChartEdge } from "@/charts/types";
import { formatMagnitudePoints } from "../helpers";
import defaults from "../defaults";
import Point from "../Point";
import * as Styled from "./styles";

export interface ScatterPlotProps extends Partial<Bounds> {
  data: ReturnType<typeof formatMagnitudePoints>;
  name?: string;
  activeAlertId?: number;
  className?: string;
  slider?: ReactNode;
}

const addMargins = (margins: ChartMargin, width: number, height: number) => {
  const styles: Record<string, string> = {};
  const keys = Object.keys(margins) as Array<ChartEdge>;
  keys.forEach((key: ChartEdge) => {
    const size = key === "top" || key === "bottom" ? height : width;

    const keyName = `${key.charAt(0).toUpperCase()}${key.slice(1)}`;

    styles[`padding${keyName}`] = `${(margins[key] / size) * 100}%`;
  });

  return styles;
};

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
  slider,
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
    right: 10,
    bottom: 25,
    left: 40,
  };

  const xRange = [0 + margins.left, width - margins.right];

  const [xDomain, xTicks, xScale] = useAxis({
    min: xMin || min(data, ({ x }) => x) || defaults.xMin,
    max: xMax || max(data, ({ x }) => x) || defaults.xMax,
    step: defaults.xStep,
    range: xRange,
  });

  const xRoot = xScale(xDomain[0]);

  const yRange = [height - margins.bottom, 0 + margins.top];

  const [yDomain, yTicks, yScale] = useAxis({
    min: yMin,
    max: yMax,
    step: yMin < yMax ? Math.abs(defaults.yStep) : defaults.yStep,
    range: yRange,
  });

  const yRoot = yScale(yDomain[0]);

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
        <ClippingContainer
          x={xRoot}
          y={yScale(yDomain[1])}
          width={xRange[1] - xRange[0]}
          height={yRange[0] - yRange[1]}
        >
          <rect
            x={xScale(0)}
            y={yScale(yDomain[1])}
            width={xScale(15) - xScale(0)}
            height={yRoot - yScale(yDomain[1])}
            fill="#F5F5F5"
          />
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
      {slider && (
        <Styled.SliderOuterWrapper>
          <Styled.SliderInnerWrapper
            style={{ ...addMargins(margins, width, height) }}
          >
            {slider}
          </Styled.SliderInnerWrapper>
        </Styled.SliderOuterWrapper>
      )}
    </Styled.PlotContainer>
  );
};

ScatterPlot.displayName = "Widgets.LightCurve.ScatterPlot";

export default ScatterPlot;
