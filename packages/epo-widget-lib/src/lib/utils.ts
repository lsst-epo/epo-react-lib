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

  //min ends before max starts -> no intersection
  if (min[1] < max[0]) return null; //the ranges don't intersect

  return [max[0], min[1] < max[1] ? min[1] : max[1]];
};
