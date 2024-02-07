import { FunctionComponent } from "react";
import { Domain, ScaleFunction, BaseAxisProps } from "../types";
export interface YAxisProps extends BaseAxisProps {
    yDomain: Domain;
    yScale: ScaleFunction;
    x?: number;
    tickLength?: number;
}
declare const YAxis: FunctionComponent<YAxisProps>;
export default YAxis;
