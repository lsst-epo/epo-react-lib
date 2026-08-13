import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import { tickStep } from "d3-array";
import InteractiveScatterPlot from "@/widgets/InteractiveScatterPlot/InteractiveScatterPlot";
import { useNavigationRailContext } from "@/layout/NavigationRail/Context";
import { findById, getValue } from "@/charts/PointEditing";
import { AxisConfig } from "@/types/charts";
import GalaxyTooltip from "../GalaxyTooltip";
import defaults from "../defaults";
import { MODE_CAPABILITIES, getMode, toPlotPoints } from "../helpers";
import {
  Galaxy,
  HubblePlotOptions,
  SelectionCallback,
  UserHubblePlotCallback,
} from "../types";
import * as Styled from "../styles";

interface PlotAreaProps {
  galaxies: Array<Galaxy>;
  options?: HubblePlotOptions;
  isLoading?: boolean;
  width?: number;
  height?: number;
  xValueAccessor?: string;
  yValueAccessor?: string;
  selectionCallback?: SelectionCallback;
  userHubblePlotCallback?: UserHubblePlotCallback;
}

/** The plot, following whichever galaxy the rail has made active */
const PlotArea: FunctionComponent<PlotAreaProps> = ({
  galaxies,
  options,
  isLoading = false,
  width = defaults.width,
  height = defaults.height,
  xValueAccessor = defaults.xValueAccessor,
  yValueAccessor = defaults.yValueAccessor,
  selectionCallback,
  userHubblePlotCallback,
}) => {
  const { t } = useTranslation();
  const { activeId, setActiveId } = useNavigationRailContext();
  const { createUserHubblePlot } = options ?? {};
  const { isSelectable, isEditable, isZoomable } =
    MODE_CAPABILITIES[getMode(options)];

  const accessors = { xValueAccessor, yValueAccessor };
  const activeGalaxy = findById(galaxies, activeId);

  const [[xMin, xMax], [yMin, yMax]] = options?.domain ?? [
    defaults.xDomain,
    defaults.yDomain,
  ];
  const toAxis = (min: number, max: number, label: string): AxisConfig => ({
    min,
    max,
    step: tickStep(min, max, defaults.axisTicks),
    guidelines: true,
    label,
  });

  return (
    <Styled.Plot>
      <InteractiveScatterPlot<Galaxy>
        scatterplot={{
          width,
          height,
          margins: defaults.margins,
          xAxis: toAxis(xMin, xMax, t("hubble_plot.plot.x_label")),
          yAxis: toAxis(yMin, yMax, t("hubble_plot.plot.y_label")),
          data: {
            label: t("hubble_plot.plot.label"),
            points: toPlotPoints(galaxies, xValueAccessor, yValueAccessor),
          },
        }}
        minZoom={defaults.minZoom}
        maxZoom={defaults.maxZoom}
        pointEditing={{
          points: galaxies,
          label: t("hubble_plot.plot.label"),
          nudgeStep: defaults.nudgeStep,
          activePoint: activeGalaxy,
          color: activeGalaxy?.color,
          isSelectable,
          isEditable,
          describePoint: (galaxy) =>
            t("hubble_plot.point_description", {
              name: galaxy.name ?? t("hubble_plot.plot.galaxy"),
              x:
                getValue(galaxy, xValueAccessor) ??
                t("hubble_plot.tooltip.unplotted"),
              y:
                getValue(galaxy, yValueAccessor) ??
                t("hubble_plot.tooltip.unplotted"),
            }),
          tooltip: (galaxy) => <GalaxyTooltip {...{ galaxy, ...accessors }} />,
          onChange: (updated) =>
            createUserHubblePlot &&
            userHubblePlotCallback?.(createUserHubblePlot, updated),
          onSelectionChange: (galaxy) => {
            if (galaxy) setActiveId(galaxy.id);

            selectionCallback?.(galaxy ? [galaxy] : null);
          },
          ...accessors,
        }}
        {...{ isZoomable }}
      />
      {isLoading && <Styled.Loader />}
    </Styled.Plot>
  );
};

PlotArea.displayName = "Widgets.HubblePlotter.PlotArea";

export default PlotArea;
