import { PlotPoint } from "@/types/charts";
import { getValue, isPlotted } from "@/charts/PointEditing";
import {
  Capabilities,
  Galaxy,
  HubblePlotMode,
  HubblePlotOptions,
} from "./types";

export const GALAXY_COLORS = [
  "#1ab579",
  "#8e3efe",
  "#c82960",
  "#eb7c39",
  "#fed828",
  "#a3bb0d",
];

export const withColors = (galaxies: Array<Galaxy>): Array<Galaxy> =>
  galaxies.map((galaxy, index) => ({
    ...galaxy,
    color: galaxy.color ?? GALAXY_COLORS[index % GALAXY_COLORS.length],
  }));

export const getMode = ({
  preSelected,
  createUserHubblePlot,
  userTrendline,
}: HubblePlotOptions = {}): HubblePlotMode => {
  if (preSelected) return createUserHubblePlot ? "display" : "select";
  if (userTrendline) return "select";
  if (createUserHubblePlot) return "plot";

  return "display";
};

/**
 * select: hover for a tooltip, click to select
 * plot: place, drag, and nudge points, and zoom the plot 
 * display: not editable, zoomable, or draggable
 */
export const MODE_CAPABILITIES: Record<HubblePlotMode, Capabilities> = {
  select: { isSelectable: true, isEditable: false, isZoomable: false },
  plot: { isSelectable: true, isEditable: true, isZoomable: true },
  display: { isSelectable: false, isEditable: false, isZoomable: false },
};

/**
 * The plotted galaxies as chart points.
 */
export const toPlotPoints = (
  galaxies: Array<Galaxy>,
  xValueAccessor: string,
  yValueAccessor: string
): Array<PlotPoint> =>
  galaxies.flatMap((galaxy) => {
    const x = getValue(galaxy, xValueAccessor);
    const y = getValue(galaxy, yValueAccessor);

    if (x === null || y === null) return [];

    return [{ id: galaxy.id, x, y }];
  });

export const getInitialGalaxies = (
  data: Array<Galaxy>,
  value: Array<Galaxy> | undefined,
  options: HubblePlotOptions | undefined,
  xValueAccessor: string,
  yValueAccessor: string
): Array<Galaxy> => {
  const { createUserHubblePlot, preSelected } = options ?? {};

  if (value && value.length > 0) return withColors(value);

  if (createUserHubblePlot && !preSelected) {
    return withColors(
      data.map((galaxy) => ({
        ...galaxy,
        [xValueAccessor]: null,
        [yValueAccessor]: null,
      }))
    );
  }

  return withColors(data);
};

export { isPlotted };
