import { FunctionComponent } from "react";
import { AxisConfig, Point } from "@/types/charts";
import WidgetControls from "@/layout/Controls";
import ScatterPlot from "@/charts/ScatterPlot";
import AspectRatio from "@/layout/AspectRatio";
import defaults from "./defaults";

type Props = {
  isDisplayOnly?: boolean;
  data: Array<Point>;
  xAxis: AxisConfig;
  yAxis: AxisConfig;
};

const IsochronePlot: FunctionComponent<Props> = ({
  data,
  isDisplayOnly = false,
}) => {
  const { width, height } = defaults;

  const margins = { top: 0, right: 0, bottom: 20, left: 20 };
  const xAxis = { label: "Color Index", step: 1, min: -1, max: 4 };
  const yAxis = { label: "Apparent G Magnitude", step: 2, min: 22, max: 8 };

  const Widget = (
    <ScatterPlot
      data={{ label: "Star Cluster", points: data }}
      {...{ width, height, xAxis, yAxis, margins }}
    ></ScatterPlot>
  );
  const Controls = <form></form>;

  if (isDisplayOnly) return <AspectRatio ratio="square">{Widget}</AspectRatio>;

  return <WidgetControls widget={Widget} controls={Controls} />;
};

IsochronePlot.displayName = "Widgets.IsochronePlot";

export default IsochronePlot;
