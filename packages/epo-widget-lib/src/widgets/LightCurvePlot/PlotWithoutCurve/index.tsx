import { FunctionComponent } from "react";
import { Alert } from "@/types/astro";
import Plot, { ScatterPlotProps } from "../ScatterPlot";
import { formatMagnitudePoints } from "../helpers";

export interface PlotWithoutCurveProps extends Omit<ScatterPlotProps, "data"> {
  alerts: Array<Alert>;
  peakMjd: number;
}

const PlotWithoutCurve: FunctionComponent<PlotWithoutCurveProps> = ({
  alerts,
  peakMjd,
  ...props
}) => {
  const data = formatMagnitudePoints(alerts, peakMjd);

  return (
    <Plot
      {...{
        ...props,
        data,
      }}
    />
  );
};

export default PlotWithoutCurve;
