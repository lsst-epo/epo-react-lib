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

/** tests if a number is between two other number */
export const between = (x: number, min: number, max: number) =>
  x >= min && x <= max;
