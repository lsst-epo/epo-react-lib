import { Alert } from '../../types/astro';
import { Point } from '../../types/charts';
export declare const daysSincePeak: (current: number, peak: number) => number;
export declare const useAlertsAsPoints: (alerts: Array<Alert>, phaseCorrection: number) => Array<Point>;
export declare const gaussianBump: (x: number, gaussianWidth: number) => number;
export declare const exponentialRise: (x: number, magnitude: number) => number;
/**
 * Fit the magnitudes with a Vacca Leibundqut (1997) analytical model
 * @param x number of days in relation to peak
 * @param gaussianWidth
 */
export declare const estimateMagnitude: (x: number, gaussianWidth: number) => number;
export declare const estimateMagnitudeWithOffset: (x: number, gaussianWidth: number, yOffset: number) => number;
export declare const calculateResidual: (data: {
    x: number;
    y: number;
    error: number;
}, gaussianWidth: number, yOffset: number) => number;
