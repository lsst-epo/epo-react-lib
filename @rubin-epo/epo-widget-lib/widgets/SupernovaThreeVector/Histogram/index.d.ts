import { FunctionComponent } from "react";
import { ChartMargin, Domain, HistogramData, ScaleFunction } from '../../../types/charts';
interface DistanceHistogramProps {
    data: HistogramData;
    activeRange: Array<number>;
    margin: ChartMargin;
    xDomain: Domain;
    yDomain: Domain;
    xScale: ScaleFunction;
    yScale: ScaleFunction;
    yTicks: number;
    xTicks: number;
    step: number;
    width: number;
    height: number;
    className?: string;
}
declare const DistanceHistogram: FunctionComponent<DistanceHistogramProps>;
export default DistanceHistogram;
