import { FunctionComponent, PropsWithChildren, useState } from "react";
import { useTranslation, Trans } from "react-i18next";
import { max, min } from "d3-array";
import useAxis from "@/charts/hooks/useAxis";
import { Base, Tooltip, Viewport, XAxis, YAxis } from "@/charts/index";
import { ChartMargin } from "@/charts/types";
import { timestampFromMJD } from "@/lib/helpers";
import { formatMagnitudePoints } from "../helpers";
import defaults from "../defaults";
import Point from "../Point";

export interface ScatterPlotProps {
  data: ReturnType<typeof formatMagnitudePoints>;
  activeAlertId?: number;
  yMin: number;
  yMax?: number;
  width?: number;
  height?: number;
}

const ScatterPlot: FunctionComponent<PropsWithChildren<ScatterPlotProps>> = ({
  data,
  activeAlertId,
  yMin = defaults.yMin,
  yMax = defaults.yMax,
  width = defaults.width,
  height = defaults.height,
  children,
}) => {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const [hoveredIndex, setHovered] = useState<number>();

  const activeItem =
    typeof hoveredIndex !== "undefined"
      ? data[hoveredIndex]
      : data.find(({ id }) => id === activeAlertId);

  const margins: ChartMargin = {
    top: 10,
    left: 30,
    right: 10,
    bottom: 20,
  };

  const xMin = min(data, ({ x }) => x) || Math.min(...data.map(({ x }) => x));
  const xMax = max(data, ({ x }) => x) || Math.max(...data.map(({ x }) => x));
  const xRange = [0 + margins.left, width - margins.right];

  const [xDomain, xTicks, xScale] = useAxis({
    min: xMin,
    max: xMax,
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

  const tooltipDateOptions: Intl.DateTimeFormatOptions = {
    timeZone: "UTC",
    dateStyle: "short",
    timeStyle: "short",
  };

  return (
    <Base
      {...{ width, height }}
      horizontalLabel="Days"
      verticalLabel="Apparent Magnitude (m)"
    >
      <rect
        x={xScale(0)}
        y={yScale(yDomain[0])}
        width={xScale(15) - xScale(0)}
        height={yRoot - yScale(yDomain[0])}
        fill="#F5F5F5"
      />
      <XAxis ticks={xTicks} y={yRoot} {...{ xDomain, xScale }} />
      <YAxis ticks={yTicks} x={xRoot} {...{ yDomain, yScale }} />
      <g role="list" aria-label={t("light_curve.plot.plot_label") || undefined}>
        {data.map(({ x, y, error, id }, i) => {
          const days = Math.round(x);
          const context = days > 0 ? "after" : days === 0 ? "peak" : "before";
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
        <Trans i18nKey="light_curve.plot.tooltip">
          Apparent Magnitude: {{ magnitude: activeItem?.y }}
          <br />
          Date:
          {{
            date: new Date(
              timestampFromMJD(activeItem?.date || 0)
            ).toLocaleString(language, tooltipDateOptions),
          }}
        </Trans>
      </Tooltip>
    </Base>
  );
};

ScatterPlot.displayName = "Widgets.LightCurve.ScatterPlot";

export default ScatterPlot;
