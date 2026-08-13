import ScatterPlot from "@/charts/ScatterPlot";
import Trendline, { TrendlineConfig } from "@/charts/Trendline";
import { ZoomControl, useZoom, getRanges } from "@/charts/ZoomControl";
import { InteractionSurface } from "@/charts/InteractionSurface";
import {
  EditablePoint,
  EditingLayer,
  EditingOverlay,
  PointEditingConfig,
  usePointEditingState,
} from "@/charts/PointEditing";
import { Coordinates } from "@/charts/types";
import { Domain } from "@/types/charts";
import { invertLinearScale } from "@/lib/utils";
import defaults from "@/charts/defaults";
import * as Styled from "./styles";

type ScatterPlotProps = React.ComponentProps<typeof ScatterPlot>;

export type { PointEditingConfig };

interface Props<T extends EditablePoint> {
  scatterplot: ScatterPlotProps;
  trendline?: TrendlineConfig;
  isZoomable?: boolean;
  minZoom?: number;
  maxZoom?: number;
  pointEditing?: PointEditingConfig<T>;
}

export default function InteractiveScatterPlot<
  T extends EditablePoint = EditablePoint,
>({
  scatterplot: {
    plotChildren,
    xAxis: baseXAxis,
    yAxis: baseYAxis,
    width,
    height,
    margins: customMargins,
    ...scatterplot
  },
  trendline,
  isZoomable = false,
  minZoom = 1,
  maxZoom = 5,
  pointEditing,
}: Props<T>) {
  const margins = { ...defaults.margins, ...customMargins };
  const { xRange, yRange } = getRanges(width, height, margins);

  const {
    transform,
    surfaceRef,
    zoomTo,
    gestureHandlers,
    zoomXAxis,
    zoomYAxis,
  } = useZoom({
    minZoom,
    maxZoom,
    xRange,
    yRange,
    xAxis: baseXAxis,
    yAxis: baseYAxis,
    isEnabled: isZoomable,
  });

  const editing = usePointEditingState<T>({
    config: pointEditing,
    xAxis: baseXAxis,
    yAxis: baseYAxis,
  });

  return (
    <Styled.Wrapper>
      <ScatterPlot
        {...scatterplot}
        {...(pointEditing && {
          tooltip: editing.tooltip ?? scatterplot.tooltip,
          activePointId: editing.activeId,
        })}
        {...{ width, height, margins, xAxis: zoomXAxis, yAxis: zoomYAxis }}
        plotChildren={(renderProps) => {
          const { Data, xScale, yScale, xDomain, yDomain } = renderProps;
          const { xStart, xEnd, yStart, yEnd } = renderProps;

          const chartProps = {
            xScale,
            yScale,
            domain: [xDomain, yDomain] as [Domain, Domain],
          };

          const captureArea = {
            x: xStart,
            y: yEnd,
            width: xEnd - xStart,
            height: yStart - yEnd,
          };

          const toDomain = ([x, y]: Coordinates): Coordinates => [
            invertLinearScale(xScale, xDomain)(x),
            invertLinearScale(yScale, yDomain)(y),
          ];

          const editingProps = { state: editing, xScale, yScale };

          return (
            <>
              {(isZoomable || editing.isEditable) && (
                <InteractionSurface
                  area={captureArea}
                  gestureHandlers={isZoomable ? gestureHandlers : undefined}
                  canPlace={editing.isEditable}
                  onPlace={editing.place}
                  onGhostMove={editing.moveGhost}
                  tracksGhost={editing.tracksGhost}
                  {...{ surfaceRef, toDomain }}
                />
              )}
              {/* `plotChildren` replaces the default points, and so does point editing, which
                  draws its own interactive ones further down */}
              {plotChildren
                ? plotChildren(renderProps)
                : pointEditing
                ? null
                : Data}
              {pointEditing && (
                <EditingLayer
                  config={pointEditing}
                  {...{ toDomain, ...editingProps }}
                />
              )}
              {trendline?.variant === "slope" ? (
                <Trendline
                  {...trendline}
                  {...chartProps}
                  {...{ captureArea }}
                />
              ) : trendline?.variant === "axis" ? (
                <Trendline {...trendline} {...chartProps} />
              ) : null}
              {pointEditing && (
                <EditingOverlay config={pointEditing} {...editingProps} />
              )}
            </>
          );
        }}
      />
      {isZoomable && (
        <ZoomControl
          zoom={transform.k}
          onZoomChange={zoomTo}
          {...{ minZoom, maxZoom }}
        />
      )}
    </Styled.Wrapper>
  );
}
