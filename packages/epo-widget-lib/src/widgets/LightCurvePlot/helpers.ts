import { Alert } from "@/types/astro";

export const daysSincePeak = (current: number, peak: number) => {
  return current - peak;
};

export const formatMagnitudePoints = (
  alerts: Array<Alert>,
  phaseCorrection: number
) =>
  alerts.map(({ date, magnitude, error, id }) => {
    return {
      x: daysSincePeak(date, phaseCorrection),
      y: magnitude,
      error,
      id,
      date,
    };
  });

export const gaussianBump = (x: number, gaussianWidth: number) => {
  const loc = 5.0;
  const sig = 20;
  return gaussianWidth * Math.exp(-((x - loc) ** 2) / sig ** 2) + 1;
};

export const exponentialRise = (x: number, magnitude: number) => {
  const p3 = 0.1;
  const p4 = -15.0;

  return (magnitude *= Math.exp(-p3 * (x - p4)) + 1);
};

/**
 * Fit the magnitudes with a Vacca Leibundqut (1997) analytical model
 * @param x number of days in relation to peak
 * @param gaussianWidth
 */
export const estimateMagnitude = (x: number, gaussianWidth: number) => {
  const p5 = 0.02;
  const p6 = 15.0;

  // gaussian bump
  let mag = gaussianBump(x, gaussianWidth);

  // exponential rise
  mag = exponentialRise(x, mag);

  // linear decay
  const xMock = Math.max(x, 0);

  mag += p5 * xMock + p6;

  return Number(mag.toFixed(4));
};

export const estimateMagnitudeWithOffset = (
  x: number,
  gaussianWidth: number,
  yOffset: number
) => estimateMagnitude(x, gaussianWidth) - yOffset;

// questions
// where is phase correction used?
// p[0] = 0 to 4, step 0.01 ex. 2
// p[1] = -50 to 50, step 0.1 ex. -5
// delta m 15 is difference between peak and 15 day observation
// live region should read out the residual (total difference) between curve and observations
