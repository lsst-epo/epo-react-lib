import { FunctionComponent, PropsWithChildren } from "react";
export interface BaseChartProps {
    width?: number;
    height?: number;
    minX?: number;
    minY?: number;
    className?: string;
}
declare const BaseChart: FunctionComponent<PropsWithChildren<BaseChartProps>>;
export default BaseChart;
