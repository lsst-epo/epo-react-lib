import { ChartMargin, Point } from '../types/charts';
export declare const margins: ChartMargin;
export declare const pointRadius = 6;
export declare const point: Partial<Point>;
export declare const errorBarCapWidth: number;
export declare const errorBarStyles: {
    stroke: string;
    strokeWidth: string;
    fill: string;
};
declare const defaults: {
    margins: ChartMargin;
    pointRadius: number;
    point: Partial<Point>;
    errorBarCapWidth: number;
    errorBarStyles: {
        stroke: string;
        strokeWidth: string;
        fill: string;
    };
};
export default defaults;
