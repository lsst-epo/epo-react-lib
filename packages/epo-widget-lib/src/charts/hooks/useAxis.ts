import { useCallback, useMemo } from "react";
import { nice, range } from "d3-array";
import { Domain, Scale, ScaleFactory, ScaleFunction } from "@/charts/types";
import { getLinearScale } from "@/lib/utils";

interface UseAxisProps {
  min: number;
  max: number;
  step: number;
  scale?: Scale;
  scaleOptions?: any;
  range: Array<number>;
}

type Axis = [Domain, Array<number>, ScaleFunction];

const scales: Record<Scale, ScaleFactory> = {
  linear: getLinearScale,
};

/**
 * Creates an axis with ticks defined by a min, max, and desired step.
 * @returns [domain, ticks, scale]
 */
const useAxis = ({
  min,
  max,
  step,
  range: scaleRange,
  scale: scaleType = "linear",
  scaleOptions,
}: UseAxisProps): Axis => {
  const tickCount = useMemo(
    () => (Math.ceil((max - min + 1) / 10) * 10) / step,
    [min, max, step]
  );
  const domain = useMemo(
    () => nice(min, max, tickCount),
    [min, max, tickCount]
  );
  const ticks = range(domain[0], domain[1], step);
  const scale = useCallback(
    scales[scaleType](domain, scaleRange, scaleOptions),
    [domain, scaleRange, scaleType]
  );

  return [domain, ticks, scale];
};

export default useAxis;
