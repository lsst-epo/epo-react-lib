import { FunctionComponent } from "react";
import { ChartMargin, Domain, ScaleFunction } from '../../types/charts';
export interface GuidelinesProps {
    guides: number;
    direction?: "horizontal" | "vertical";
    xScale: ScaleFunction;
    xDomain: Domain;
    yScale: ScaleFunction;
    yDomain: Domain;
    margin?: ChartMargin;
    className?: string;
}
declare const Guidelines: FunctionComponent<GuidelinesProps>;
export default Guidelines;
