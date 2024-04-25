import { FunctionComponent, PropsWithChildren } from "react";
import { Bounds } from '../../types/charts';
export interface BaseChartProps extends Partial<Bounds> {
    className?: string;
    title?: string;
    verticalLabel?: string;
    verticalLabelId?: string;
    horizontalLabel?: string;
    horizontalLabelId?: string;
}
declare const BaseChart: FunctionComponent<PropsWithChildren<BaseChartProps>>;
export default BaseChart;
