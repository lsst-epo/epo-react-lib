import { FunctionComponent, HTMLProps } from "react";
import { Domain, ScaleFunction } from "../../types/charts";
export interface Bar {
    stroke?: string;
    fill?: string;
    width?: number;
    value: number;
    x: number;
    props?: HTMLProps<SVGRectElement>;
}
export interface BarsProps {
    data: Array<Bar>;
    yDomain: Domain;
    xScale: ScaleFunction;
    yScale: ScaleFunction;
    y?: number;
}
declare const Bars: FunctionComponent<BarsProps>;
export default Bars;
