import { Alert } from "@/types/astro";
import { Point } from "@/types/charts";
import { useTranslation } from "react-i18next";

export const daysSincePeak = (current: number, peak: number) => {
  return current - peak;
};

export const useAlertsAsPoints = (
  alerts: Array<Alert>,
  phaseCorrection: number
): Array<Point> => {
  const { t } = useTranslation();

  return alerts.map(({ date, magnitude, error, id }) => {
    const x = daysSincePeak(date, phaseCorrection);
    const days = Math.round(x);
    const context = days > 0 ? "after" : days === 0 ? "peak" : "before";

    return {
      x,
      y: magnitude,
      error: {
        y: { min: error, max: error },
      },
      id,
      date,
      description:
        t("light_curve.plot.point_label", {
          magnitude,
          count: Math.abs(days),
          context,
        }) || undefined,
    };
  });
};

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

export const calculateResidual = (
  data: { x: number; y: number; error: number },
  gaussianWidth: number,
  yOffset: number
) =>
  Math.abs(
    data.y - estimateMagnitudeWithOffset(data.x, gaussianWidth, yOffset)
  );
