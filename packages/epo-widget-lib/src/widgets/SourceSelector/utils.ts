const defaultRadii: Record<string, number> = {
  supernova: 0.04,
  galaxy: 0.08,
  galaxyFilter: 0.05,
};

export const getRadius = (type: string, radius?: number | string): number => {
  if (radius) {
    if (typeof radius === "number") return Math.abs(radius);

    return parseFloat(radius);
  }

  const { [type]: r = 0.04 } = defaultRadii;

  return r;
};
