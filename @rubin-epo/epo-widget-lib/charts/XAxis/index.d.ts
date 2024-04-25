import { FunctionComponent } from "react";
import { Domain, ScaleFunction, BaseAxisProps } from '../../types/charts';
export interface XAxisProps extends BaseAxisProps {
    xDomain: Domain;
    xScale: ScaleFunction;
    y?: number;
    tickHeight?: number;
}
declare const XAxis: FunctionComponent<XAxisProps>;
export default XAxis;
