import { FunctionComponent, PropsWithChildren } from "react";
import { Viewport, XAxis, YAxis } from "@/charts/index";
import BaseChart from "../Base";
import { ChartMargin } from "../types";
import useAxis from "../hooks/useAxis";

interface AxisConfig {
  label: string;
  min: number;
  max: number;
  step: number;
  guidelines?: boolean;
}

export interface ScatterPlotProps {
  className?: string;
  margins?: ChartMargin;
  xAxis: AxisConfig;
  yAxis: AxisConfig;
  width: number;
  height: number;
  title?: string;
}

const ScatterPlot: FunctionComponent<PropsWithChildren<ScatterPlotProps>> = ({
  className,
  children,
  xAxis,
  yAxis,
  width,
  height,
  title,
  margins = { top: 0, right: 0, bottom: 0, left: 0 },
}) => {
  const xRange = [0 + margins.left, width - margins.right];

  const yRange = [height - margins.bottom, 0 + margins.top];

  const [xDomain, xTicks, xScale] = useAxis({ ...xAxis, range: xRange });
  const [yDomain, yTicks, yScale] = useAxis({ ...yAxis, range: yRange });

  const xRoot = xScale(xDomain[0]);
  const yRoot = yScale(yDomain[0]);

  const xAxisLabelId = "x-axis-label";
  const yAxisLabelId = "y-axis-label";

  return (
    <BaseChart
      verticalLabel={yAxis.label}
      verticalLabelId={yAxisLabelId}
      horizontalLabel={xAxis.label}
      horizontalLabelId={xAxisLabelId}
      {...{ className, width, height, title }}
    >
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
      {children}
    </BaseChart>
  );
};

ScatterPlot.displayName = "Charts.ScatterPlot";

export default ScatterPlot;
