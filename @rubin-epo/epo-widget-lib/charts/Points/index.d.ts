import { FunctionComponent } from "react";
import { Point, ScaleFunction } from '../../types/charts';
export interface PointsProps {
    data: Array<Point>;
    label?: string;
    xScale: ScaleFunction;
    yScale: ScaleFunction;
    className?: string;
    onHoverCallback: (index: number) => void;
    onHoverOutCallback: () => void;
}
declare const Points: FunctionComponent<PointsProps>;
export default Points;
