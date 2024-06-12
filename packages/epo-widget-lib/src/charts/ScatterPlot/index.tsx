import { FunctionComponent, ReactNode, useState } from "react";
import {
  XAxis,
  YAxis,
  ClippingContainer,
  Points,
  Tooltip,
  Guidelines,
} from "@/charts/index";
import {
  AxisConfig,
  ChartMargin,
  PlotChildRenderer,
  Point,
  ScatterPlotDataset,
} from "@/types/charts";
import useAxis from "@/charts/hooks/useAxis";
import * as Styled from "./styles";
import defaults from "../defaults";
import CanvasPoints from "../canvas/Points";
import { isSafari } from "@/lib/utils";

export interface ScatterPlotProps {
  xAxis: AxisConfig;
  yAxis: AxisConfig;
  width: number;
  height: number;
  data: ScatterPlotDataset;
  activePointId?: string | number;
  title?: string;
  className?: string;
  margins?: Partial<ChartMargin>;
  tooltip?: string | ((point: Point) => ReactNode);
  renderer?: "svg" | "canvas";
  onLoadedCallback?: () => void;
  plotChildren?: PlotChildRenderer;
}

const Renderers = {
  svg: Points,
  canvas: CanvasPoints,
};

const ScatterPlot: FunctionComponent<ScatterPlotProps> = ({
  data,
  className,
  xAxis,
  yAxis,
  width,
  height,
  title,
  activePointId,
  margins: customMargins,
  tooltip,
  onLoadedCallback,
  renderer = "svg",
  plotChildren,
}) => {
  const [hoveredIndex, setHovered] = useState<number>();
  const { label, points } = data;
  const margins = { ...defaults.margins, ...customMargins };

  const activePoint =
    typeof hoveredIndex !== "undefined"
      ? points[hoveredIndex]
      : points.find(({ id }) => id === activePointId);

  const xRange = [0 + margins.left, width - margins.right];
  const yRange = [height - margins.bottom, 0 + margins.top];

  const [xDomain, xTicks, xScale] = useAxis({ ...xAxis, range: xRange });
  const [yDomain, yTicks, yScale] = useAxis({ ...yAxis, range: yRange });

  const yStart = yScale(yDomain[0]);
  const xStart = xScale(xDomain[0]);
  const yEnd = yScale(yDomain[1]);
  const xEnd = xScale(xDomain[1]);

  const xAxisLabelId = "x-axis-label";
  const yAxisLabelId = "y-axis-label";

  const outerWidth = Math.abs(xRange[1] - xRange[0]);
  const outerHeight = Math.abs(yRange[1] - yRange[0]);

  const Points = Renderers[renderer];
  const Data = (
    <Points
      data={points}
      onHoverCallback={tooltip ? (i) => setHovered(i) : undefined}
      onHoverOutCallback={tooltip ? () => setHovered(undefined) : undefined}
      {...{ width, height, xScale, yScale, label, onLoadedCallback }}
    />
  );

  const renderProps = {
    Data,
    xScale,
    yScale,
    yStart,
    yEnd,
    xStart,
    xEnd,
    yDomain,
    xDomain,
  };

  return (
    <Styled.Chart
      verticalLabel={yAxis.label}
      verticalLabelId={yAxisLabelId}
      horizontalLabel={xAxis.label}
      horizontalLabelId={xAxisLabelId}
      {...{ className, width, height, title }}
    >
      <YAxis
        ticks={yTicks}
        x={xStart}
        labelledById={yAxisLabelId}
        {...{ yDomain, yScale }}
      />
      <ClippingContainer
        x={xStart}
        y={yEnd}
        width={outerWidth}
        height={outerHeight}
      >
        {xAxis.guidelines && (
          <Guidelines
            guides={xTicks.length}
            direction="vertical"
            {...{ xDomain, yDomain, xScale, yScale }}
          />
        )}
        {yAxis.guidelines && (
          <Guidelines
            guides={yTicks.length}
            {...{ xDomain, yDomain, xScale, yScale }}
          />
        )}
        {plotChildren ? plotChildren(renderProps) : Data}
      </ClippingContainer>
      <XAxis
        ticks={xTicks}
        y={yStart}
        labelledById={xAxisLabelId}
        {...{ xDomain, xScale }}
      />
      {tooltip && !isSafari() && (
        <Tooltip
          x={activePoint ? xScale(activePoint.x) : undefined}
          y={activePoint ? yScale(activePoint.y) : undefined}
          visible={!!activePoint}
          offset={defaults.pointRadius}
        >
          {activePoint && typeof tooltip === "function" && tooltip(activePoint)}
          {activePoint && typeof tooltip === "string" && tooltip}
        </Tooltip>
      )}
    </Styled.Chart>
  );
};

ScatterPlot.displayName = "Charts.ScatterPlot";

export default ScatterPlot;
