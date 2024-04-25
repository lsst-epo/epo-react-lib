import { FunctionComponent, ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { max, min } from "d3-array";
import BaseScatterPlot from "@/charts/ScatterPlot";
import {
  ChartMargin,
  Bounds,
  ChartEdge,
  PlotChildRenderer,
  Point,
} from "@/types/charts";
import defaults from "../defaults";
import * as Styled from "./styles";

export interface PlotProps extends Partial<Bounds> {
  data: Array<Point>;
  name?: string;
  activeAlertId?: number;
  className?: string;
  slider?: ReactNode;
  plotChildren?: PlotChildRenderer;
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

const Plot: FunctionComponent<PlotProps> = ({
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
  plotChildren,
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
        {...{ width, height, margins }}
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
          points: data,
        }}
        tooltip={({ y }) =>
          t("light_curve.plot.tooltip", {
            magnitude: y.toLocaleString(language, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }),
          })
        }
        plotChildren={({ xScale, yStart, yEnd, Data, ...props }) => (
          <>
            <rect
              x={xScale(0)}
              y={yEnd}
              width={xScale(15) - xScale(0)}
              height={yStart - yEnd}
              stroke="var(--neutral60,##6A6E6E)"
              strokeDasharray={6}
              fill="var(--neutral20,#DCE0E3)"
            />
            {Data}
            {plotChildren &&
              plotChildren({ xScale, yStart, yEnd, Data, ...props })}
          </>
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

Plot.displayName = "Widgets.LightCurve.Plot";

export default Plot;
