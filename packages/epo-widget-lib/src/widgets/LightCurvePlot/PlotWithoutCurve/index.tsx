import { FunctionComponent } from "react";
import { Alert } from "@/types/astro";
import Plot, { PlotProps } from "../Plot";
import { useAlertsAsPoints } from "../helpers";
import AspectRatio from "@/layout/AspectRatio";

export interface PlotWithoutCurveProps extends Omit<PlotProps, "data"> {
  alerts: Array<Alert>;
  peakMjd: number;
}

const PlotWithoutCurve: FunctionComponent<PlotWithoutCurveProps> = ({
  alerts,
  peakMjd,
  ...props
}) => {
  const data = useAlertsAsPoints(alerts, peakMjd);

  return (
    <AspectRatio ratio="square">
      <Plot
        {...{
          ...props,
          data,
        }}
      />
    </AspectRatio>
  );
};

export default PlotWithoutCurve;
