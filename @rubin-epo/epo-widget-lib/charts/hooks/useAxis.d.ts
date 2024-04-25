import { Domain, Scale, ScaleFunction } from '../../types/charts';
interface UseAxisProps {
    min: number;
    max: number;
    step: number;
    scale?: Scale;
    scaleOptions?: any;
    range: Array<number>;
}
type Axis = [Domain, Array<number>, ScaleFunction];
/**
 * Creates an axis with ticks defined by a min, max, and desired step.
 * @returns [domain, ticks, scale]
 */
declare const useAxis: ({ min, max, step, range: scaleRange, scale: scaleType, scaleOptions, }: UseAxisProps) => Axis;
export default useAxis;
