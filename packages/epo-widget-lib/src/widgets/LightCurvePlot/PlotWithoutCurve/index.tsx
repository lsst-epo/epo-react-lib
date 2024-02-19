import { FunctionComponent } from "react";
import { Alert } from "@/types/astro";
import Plot from "../ScatterPlot";
import { formatMagnitudePoints } from "../helpers";

export interface PlotWithoutCurveProps {
  alerts: Array<Alert>;
  name: string;
  activeAlertId?: number;
  peakMjd: number;
  yMin: number;
  yMax?: number;
  width?: number;
  height?: number;
  className?: string;
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
