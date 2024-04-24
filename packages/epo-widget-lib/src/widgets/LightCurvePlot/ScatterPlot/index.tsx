import { FunctionComponent, ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { max, min } from "d3-array";
import BaseScatterPlot from "@/charts/ScatterPlot";
import {
  ChartMargin,
  Bounds,
  ChartEdge,
  PlotChildRenderer,
} from "@/types/charts";
import { formatMagnitudePoints } from "../helpers";
import defaults from "../defaults";
import * as Styled from "./styles";

export interface ScatterPlotProps extends Partial<Bounds> {
  data: ReturnType<typeof formatMagnitudePoints>;
  name?: string;
  activeAlertId?: number;
  className?: string;
  slider?: ReactNode;
  renderInFront?: PlotChildRenderer;
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

const ScatterPlot: FunctionComponent<ScatterPlotProps> = ({
  data,
  activeAlertId,
  xMin,
  xMax,
  yMin = defaults.yMin,
  yMax = defaults.yMax,
  width = defaults.width,
  height = defaults.height,
  name,
  slider,
  className,
  renderInFront,
}) => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  const xAxisLabel = t("light_curve.plot.x_label");
  const yAxisLabel = t("light_curve.plot.y_label");

  const margins: ChartMargin = {
    top: 10,
    right: 10,
    bottom: 25,
    left: 40,
  };

  return (
    <Styled.PlotContainer className={className}>
      <BaseScatterPlot
        {...{ width, height, margins, renderInFront }}
        activePointId={activeAlertId}
        title={name}
        xAxis={{
          min: xMin || min(data, ({ x }) => x) || defaults.xMin,
          max: xMax || max(data, ({ x }) => x) || defaults.xMax,
          step: defaults.xStep,
          label: xAxisLabel,
        }}
        yAxis={{
          min: yMin,
          max: yMax,
          step: yMin < yMax ? Math.abs(defaults.yStep) : defaults.yStep,
          label: yAxisLabel,
        }}
        data={{
          label: t("light_curve.plot.plot_label"),
          points: data.map(({ x, y, error, id }) => {
            const days = Math.round(x);
            const context = days > 0 ? "after" : days === 0 ? "peak" : "before";

            return {
              x,
              y,
              id,
              error: {
                y: { min: error, max: error },
              },
              description:
                t("light_curve.plot.point_label", {
                  magnitude: y,
                  count: Math.abs(days),
                  context,
                }) || undefined,
            };
          }),
        }}
        tooltip={({ y }) =>
          t("light_curve.plot.tooltip", {
            magnitude: y.toLocaleString(language, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }),
          })
        }
        renderBehind={({ xScale, yStart, yEnd }) => (
          <rect
            x={xScale(0)}
            y={yEnd}
            width={xScale(15) - xScale(0)}
            height={yStart - yEnd}
            stroke="var(--neutral60,##6A6E6E)"
            strokeDasharray={6}
            fill="var(--neutral20,#DCE0E3)"
          />
        )}
      />
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
