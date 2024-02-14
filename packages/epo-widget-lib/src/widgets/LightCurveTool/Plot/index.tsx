import { FunctionComponent, PropsWithChildren, useState } from "react";
import { useTranslation, Trans } from "react-i18next";
import { max, min } from "d3-array";
import useAxis from "@/charts/hooks/useAxis";
import { Base, Tooltip, XAxis, YAxis } from "@/charts/index";
import { Alert } from "@/types/astro";
import { ChartMargin } from "@/charts/types";
import { timestampFromMJD } from "@/lib/utils";
import Point from "../Point";

interface LightCurvePlotProps {
  alerts: Array<Alert>;
  activeAlertId?: number;
  peakMjd: number;
  yMin?: number;
  yMax?: number;
}

const daysSincePeak = (current: number, peak: number) => {
  return current - peak;
};

const LightCurvePlot: FunctionComponent<
  PropsWithChildren<LightCurvePlotProps>
> = ({ alerts, activeAlertId, peakMjd, yMin = 14, yMax = 20, children }) => {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const [hoveredIndex, setHovered] = useState<number>();
  const data = alerts.map(({ date, magnitude, error, id }) => {
    return {
      x: daysSincePeak(date, peakMjd),
      y: magnitude,
      error,
      magnitude,
      id,
      date,
    };
  });

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
  const width = 600;
  const height = 600;

  const xMin = min(data, ({ x }) => x) || Math.min(...data.map(({ x }) => x));
  const xMax = max(data, ({ x }) => x) || Math.max(...data.map(({ x }) => x));

  const [xDomain, xTicks, xScale] = useAxis({
    min: xMin,
    max: xMax,
    step: 10,
    range: [0 + margins.left, width - margins.right],
  });

  const xRoot = xScale(xDomain[0]);

  const [yDomain, yTicks, yScale] = useAxis({
    min: yMin,
    max: yMax,
    step: 0.5,
    range: [0 + margins.top, height - margins.bottom],
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
      {children}
      <Tooltip
        x={activeItem ? xScale(activeItem.x) : undefined}
        y={activeItem ? yScale(activeItem.y) : undefined}
        visible={!!activeItem}
        offset={6}
      >
        <Trans i18nKey="light_curve.plot.tooltip">
          Apparent Magnitude: {{ magnitude: activeItem?.magnitude }}
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

LightCurvePlot.displayName = "Widgets.LightCurve.Plot";

export default LightCurvePlot;
