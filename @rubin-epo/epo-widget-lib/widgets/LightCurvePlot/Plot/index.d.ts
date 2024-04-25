import { FunctionComponent, ReactNode } from "react";
import { Bounds, PlotChildRenderer, Point } from '../../../types/charts';
export interface PlotProps extends Partial<Bounds> {
    data: Array<Point>;
    name?: string;
    activeAlertId?: number;
    className?: string;
    slider?: ReactNode;
    plotChildren?: PlotChildRenderer;
}
declare const Plot: FunctionComponent<PlotProps>;
export default Plot;
