import { FunctionComponent } from "react";
import { PlotWithoutCurveProps } from "../PlotWithoutCurve";
interface PlotWithLightCurveProps extends PlotWithoutCurveProps {
    gaussianWidth?: number;
    yOffset?: number;
    userMagnitude?: number;
    onUserMagnitudeChangeCallback?: (value: number) => void;
    onGaussianChangeCallback?: (value: number) => void;
    onYOffsetChangeCallback?: (value: number) => void;
    isDisplayOnly?: boolean;
}
declare const PlotWithLightCurve: FunctionComponent<PlotWithLightCurveProps>;
export default PlotWithLightCurve;
