import { FunctionComponent } from "react";
import { ErrorRange, ScaleFunction } from '../../types/charts';
interface ErrorBarProps {
    error: Record<string, ErrorRange>;
    xScale: ScaleFunction;
    yScale: ScaleFunction;
}
declare const ErrorBar: FunctionComponent<ErrorBarProps>;
export default ErrorBar;
