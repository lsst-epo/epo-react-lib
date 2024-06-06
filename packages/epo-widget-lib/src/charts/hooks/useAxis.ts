import { Domain, Scale, ScaleFactory, ScaleFunction } from "@/types/charts";
import { getLinearScale } from "@/lib/utils";
import { tickStep, ticks } from "d3-array";

interface UseAxisProps {
  min: number;
  max: number;
  step?: number;
  ticks?: number;
  scale?: Scale;
  scaleOptions?: any;
  range: Array<number>;
}

type Axis = [Domain, Array<number>, ScaleFunction];

const scales: Record<Scale, ScaleFactory> = {
  linear: getLinearScale,
};

const adjustStep = (start: number, stop: number, step: number) =>
  start > stop ? -Math.abs(step) : Math.abs(step);

const stretchDomain = (domain: Domain, stretch: number): Domain =>
  domain.map((d, i) => {
    if (i === 0) {
      return d - stretch;
    }
    return d + stretch;
  });

/**
 * Creates an axis with ticks defined by a min, max, and desired step or number of ticks.
 * @returns [domain, ticks, scale]
 */
const useAxis = ({
  min: start,
  max: stop,
  step: configStep,
  ticks: configTicks = 5,
  range,
  scale = "linear",
  scaleOptions,
}: UseAxisProps): Axis => {
  const ticksFromStep =
    typeof configStep === "number"
      ? Math.floor(Math.abs((stop - start) / configStep))
      : undefined;

  const tickCount = ticksFromStep || configTicks;

  const step =
    typeof configStep === "number"
      ? adjustStep(start, stop, configStep)
      : tickStep(start, stop, configTicks);

  const halfStep = step / 2;

  const domain = stretchDomain([start, stop], halfStep);

  return [
    domain,
    ticks(start, stop, tickCount),
    scales[scale](domain, range, scaleOptions),
  ];
};

export default useAxis;
