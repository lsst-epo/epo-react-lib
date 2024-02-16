import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import minBy from "lodash/minBy";
import { between } from "@/lib/utils";
import LiveRegion from "@/atomic/LiveRegion";
import {
  estimateMagnitudeWithOffset,
  formatMagnitudePoints,
} from "../../helpers";

interface CurveResidualProps {
  data: ReturnType<typeof formatMagnitudePoints>;
  gaussianWidth: number;
  yOffset: number;
}

const calculateResidual = (
  data: { x: number; y: number; error: number },
  gaussianWidth: number,
  yOffset: number
) =>
  Math.abs(
    data.y - estimateMagnitudeWithOffset(data.x, gaussianWidth, yOffset)
  );

const CurveResidual: FunctionComponent<CurveResidualProps> = ({
  data,
  gaussianWidth,
  yOffset,
}) => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  const meanResidual =
    data
      .filter(({ x }) => between(x, 0, 15))
      .reduce(
        (prev, curr) => prev + calculateResidual(curr, gaussianWidth, yOffset),
        0
      ) / data.length;
  const peak = estimateMagnitudeWithOffset(0, gaussianWidth, yOffset);
  const { y: brightest } = minBy(data, ({ y }) => y) || {};

  return (
    <LiveRegion>
      {t("light_curve.live_regions.curve_residual", {
        residual: meanResidual.toLocaleString(language, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }),
        brightest: brightest?.toLocaleString(language, {
          minimumFractionDigits: 1,
          maximumFractionDigits: 1,
        }),
        context: peak < Number(brightest) ? "above" : "below",
      })}
    </LiveRegion>
  );
};

CurveResidual.displayName = "Widgets.LightCurve.A11Y.CurveResidual";

export default CurveResidual;
