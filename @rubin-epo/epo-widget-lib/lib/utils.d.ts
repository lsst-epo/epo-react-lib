/** clamps the index to the bounds of an array
 *  if the index is higher than the final index
 *  it will clamp to 0, if it is lower it will clamp
 *  to the final index.
 */
export declare const getClampedArrayIndex: (index: number, lastIndex: number) => number;
/** tests if a number is between two other numbers */
export declare const between: (x: number, min: number, max: number) => boolean;
/** gets the intersection between two array ranges
 *  ex. [1, 5] and [3, 10] have an intersection of
 *  [3,5]
 */
export declare const intersection: (a?: number[], b?: number[]) => number[] | null;
/**
 * maps an input domain to a final range
 * ex. for a domain of [0,10] and range of [10,20]
 * a value of 5 would become 15
 * @param domain observed set of values, the input data.
 * @param range transformed, or visual values. Often corresponds to desired pixel size.
 * @param clamp should values outside the domain be clamped to the range
 * @returns (domainValue: number) => rangeValue: number
 */
export declare const getLinearScale: (domain?: number[], range?: number[], options?: {
    clamp?: boolean;
    fractionDigits?: number;
}) => (domainValue: number) => number;
export declare const precision: (number: number, precision: number) => number;
export declare const isSafari: () => boolean;
