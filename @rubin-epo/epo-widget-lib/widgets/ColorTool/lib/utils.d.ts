import { AstroCategory, AstroObject, ImageFilter } from "../ColorTool";
/** calculates a value that can be used in the CSS {@link https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/brightness brightness filter } */
export declare const getBrightnessValue: (min: number, max: number, value: number) => number;
export declare const isFilterActive: (filters: ImageFilter[]) => boolean;
export declare const updateFilters: (datum: AstroObject) => {
    brightness: number;
    color: string | undefined;
    label: string;
    defaultColor?: string | undefined;
    active: boolean;
    image: string;
    isDisabled: boolean;
    value: number;
    defaultValue?: number | undefined;
    min: number;
    max: number;
}[];
export declare const prepareData: (data: AstroObject) => AstroObject;
export declare const getDataFiltersByName: (data: AstroCategory[], name: string) => ImageFilter[];
export declare const getCategoryName: (data: AstroCategory[], objectName: string) => string | null;
export declare const areActionsActive: (data: AstroObject) => boolean;
export declare function isStyleSupported(prop: string, value: string): boolean;
