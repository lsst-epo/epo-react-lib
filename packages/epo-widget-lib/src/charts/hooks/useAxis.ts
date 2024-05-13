import { useCallback, useMemo } from "react";
import { nice, range } from "d3-array";
import { Domain, Scale, ScaleFactory, ScaleFunction } from "@/types/charts";
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
  const adjustedStep = max > min ? Math.abs(step) : -Math.abs(step);
  const halfStep = adjustedStep / 2;

  const tickCount = useMemo(
    () => Math.abs((Math.ceil((max - min + 1) / 10) * 10) / step),
    [min, max, step]
  );
  const domain = useMemo(
    () => nice(min - halfStep, max + halfStep, tickCount),
    [min, max, tickCount, halfStep]
  );
  const ticks = range(domain[0] + halfStep, domain[1], adjustedStep);
  const scale = useCallback(
    scales[scaleType](domain, scaleRange, scaleOptions),
    [domain, scaleRange, scaleType]
  );

  return [domain, ticks, scale];
};

export default useAxis;
