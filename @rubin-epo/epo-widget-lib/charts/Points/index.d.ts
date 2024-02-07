import { FunctionComponent, HTMLProps } from "react";
import { Domain, ScaleFunction } from "../types";
export interface Point {
    stroke?: string;
    fill?: string;
    width?: number;
    x: number;
    y: number;
    props?: HTMLProps<SVGCircleElement>;
}
export interface PointsProps {
    data: Array<Point>;
    xScale: ScaleFunction;
    yScale: ScaleFunction;
    yDomain: Domain;
    className?: string;
}
declare const Points: FunctionComponent<PointsProps>;
export default Points;
