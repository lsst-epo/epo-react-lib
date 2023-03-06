export const getLinearScale = (
  domain: number[],
  range: number[]
): ((value: number) => number) => {
  const [dMin, dMax] = domain;
  const [rMin, rMax] = range;

  return (value) => (value / (dMax - dMin)) * (rMax - rMin) + rMin;
};
