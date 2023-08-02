export const getLinearScale = (
  domain: number[],
  range: number[],
  clamp = false
) => {
  return (val: number) => {
    const sub = domain[1] - domain[0];

    if (sub === 0) {
      return (range[0] + range[1]) / 2;
    }
    let t = (val - domain[0]) / sub;

    if (clamp) {
      t = Math.min(Math.max(t, 0), 1);
    }

    return t * (range[1] - range[0]) + range[0];
  };
};
