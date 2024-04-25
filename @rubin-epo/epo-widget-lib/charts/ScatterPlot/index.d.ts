import { FunctionComponent, ReactNode } from "react";
import { ChartMargin, PlotChildRenderer, Point, ScatterPlotDataset } from '../../types/charts';
interface AxisConfig {
    label: string;
    min: number;
    max: number;
    step: number;
    guidelines?: boolean;
}
export interface ScatterPlotProps {
    xAxis: AxisConfig;
    yAxis: AxisConfig;
    width: number;
    height: number;
    data: ScatterPlotDataset;
    activePointId?: string | number;
    title?: string;
    className?: string;
    margins?: Partial<ChartMargin>;
    tooltip?: string | ((point: Point) => ReactNode);
    plotChildren?: PlotChildRenderer;
}
declare const ScatterPlot: FunctionComponent<ScatterPlotProps>;
export default ScatterPlot;
