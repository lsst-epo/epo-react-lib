import { FunctionComponent } from "react";
import { Alert } from '../../../types/astro';
import { PlotProps } from "../Plot";
export interface PlotWithoutCurveProps extends Omit<PlotProps, "data"> {
    alerts: Array<Alert>;
    peakMjd: number;
}
declare const PlotWithoutCurve: FunctionComponent<PlotWithoutCurveProps>;
export default PlotWithoutCurve;
