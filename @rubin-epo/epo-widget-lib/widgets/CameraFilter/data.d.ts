import { Band } from '../../types/astro';
export type Range<T, N extends number, R extends T[] = []> = R["length"] extends N ? R : Range<T, N, [T, ...R]>;
export interface Filter {
    band?: Band;
    range: Range<number, 2>;
}
interface GradientStop {
    stopColor: string;
    offset: number;
    id?: string;
}
export interface VisibleColor {
    name: string;
    range: Range<number, 2>;
    color: string;
}
export interface Spectrum {
    name: string;
    upper?: number;
    lower?: number;
    stops: GradientStop[];
    colors?: VisibleColor[];
}
export declare const filters: Filter[];
export declare const colors: VisibleColor[];
export declare const spectrums: Spectrum[];
export declare const rangeConfig: {
    condensed: {
        min: number;
        max: number;
        range: number;
    };
    default: {
        min: number;
        max: number;
        range: number;
    };
};
export {};
