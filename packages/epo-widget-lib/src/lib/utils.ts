import mergeWith from "lodash/mergeWith";
import isNil from "lodash/isNil";
import { Point } from "@/types/charts";

/** clamps the index to the bounds of an array
 *  if the index is higher than the final index
 *  it will clamp to 0, if it is lower it will clamp
 *  to the final index.
 */
export const getClampedArrayIndex = (
  index: number,
  lastIndex: number
): number => {
  switch (true) {
    case index > lastIndex:
      return 0;
    case index < 0:
      return lastIndex;
    default:
      return index;
  }
};

/** tests if a number is between two other numbers */
export const between = (x: number, min: number, max: number) =>
  x >= min && x <= max;

/** gets the intersection between two array ranges
 *  ex. [1, 5] and [3, 10] have an intersection of
 *  [3,5]
 */
export const intersection = (a: number[] = [], b: number[] = []) => {
  const min = a[0] < b[0] ? a : b;
  const max = min === a ? b : a;

  // min ends before max starts -> no intersection
  if (min[1] < max[0]) return null; // the ranges don't intersect

  return [max[0], min[1] < max[1] ? min[1] : max[1]];
};

export const middle = <T>(arr: Array<T>) =>
  arr[Math.round((arr.length - 1) / 2)];

/**
 * maps an input domain to a final range
 * ex. for a domain of [0,10] and range of [10,20]
 * a value of 5 would become 15
 * @param domain observed set of values, the input data.
 * @param range transformed, or visual values. Often corresponds to desired pixel size.
 * @param clamp should values outside the domain be clamped to the range
 * @returns (domainValue: number) => rangeValue: number
 */
export const getLinearScale = (
  domain: number[] = [0, 1],
  range: number[] = [0, 1],
  options?: { clamp?: boolean; fractionDigits?: number }
): ((domainValue: number) => number) => {
  const defaultOptions = { clamp: false, fractionDigits: 2 };
  const { clamp, fractionDigits } = { ...defaultOptions, ...options };

  return (val: number) => {
    const sub = domain[1] - domain[0];

    if (sub === 0) {
      return (range[0] + range[1]) / 2;
    }
    let t = (val - domain[0]) / sub;

    if (clamp) {
      t = Math.min(Math.max(t, 0), 1);
    }

    return Number(
      (t * (range[1] - range[0]) + range[0]).toFixed(fractionDigits)
    );
  };
};

export const precision = (number: number, precision: number) => {
  const factor = Math.pow(10, precision);
  const n = precision < 0 ? number : 0.01 / factor + number;
  return Math.round(n * factor) / factor;
};

export const isSafari = (): boolean => {
  const chromeInAgent = navigator.userAgent.indexOf("Chrome") > -1;
  const safariInAgent = navigator.userAgent.indexOf("Safari") > -1;
  return safariInAgent && !chromeInAgent;
};

export const defaultsMerger = (objValue: any, srcValue: any) => {
  if (isNil(srcValue) && objValue) {
    return isNil(objValue) ? srcValue : objValue;
  }

  return srcValue;
};

export const mergeWithDefaults = (value: any, defaultValues: any) =>
  mergeWith({}, defaultValues, value, defaultsMerger);

export const buildPath = (
  points: Array<Point>,
  translate: Array<number> = [0, 0]
) =>
  points.reduce((prev, { x, y }, i) => {
    return (prev += `${i === 0 ? "M" : " L"}${x + translate[0]},${
      y + translate[1]
    }`);
  }, "");
