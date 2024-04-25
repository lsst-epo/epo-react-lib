import { FunctionComponent } from "react";
import { Domain, ScaleFunction, BaseAxisProps } from '../../types/charts';
export interface YAxisProps extends BaseAxisProps {
    yDomain: Domain;
    yScale: ScaleFunction;
    x?: number;
    tickLength?: number;
}
/**
 * YAxis creates an axis with ticks. It needs a yDomain (your input data) and a yScale method to place
 * the ticks and data. Remember that SVG starts from the upper left corner, so the yScale will need an inverted
 * range for most purposes.
 */
declare const YAxis: FunctionComponent<YAxisProps>;
export default YAxis;
