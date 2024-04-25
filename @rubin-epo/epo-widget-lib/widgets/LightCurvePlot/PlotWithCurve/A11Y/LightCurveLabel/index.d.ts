import { FunctionComponent } from "react";
import { formatMagnitudePoints } from "../../../helpers";
interface LightCurveLabelProps {
    data: ReturnType<typeof formatMagnitudePoints>;
    controlledById?: string;
    estimatedPeak: number;
    gaussianWidth: number;
    yOffset: number;
}
declare const LightCurveLabel: FunctionComponent<LightCurveLabelProps>;
export default LightCurveLabel;
