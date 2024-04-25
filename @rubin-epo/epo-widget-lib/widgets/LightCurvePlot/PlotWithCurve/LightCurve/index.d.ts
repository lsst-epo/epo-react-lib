import { FunctionComponent } from "react";
import { Domain, ScaleFunction } from '../../../../types/charts';
interface LightCurveProps {
    xScale: ScaleFunction;
    yScale: ScaleFunction;
    yOffset: number;
    gaussianWidth: number;
    xDomain: Domain;
    yDomain: Domain;
}
declare const LightCurve: FunctionComponent<LightCurveProps>;
export default LightCurve;
