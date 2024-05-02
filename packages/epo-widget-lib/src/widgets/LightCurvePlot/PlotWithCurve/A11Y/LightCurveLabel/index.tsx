import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import minBy from "lodash/minBy";
import { calculateResidual, useAlertsAsPoints } from "../../../helpers";
import { between } from "@/lib/utils";
import * as Styled from "./styles";

interface LightCurveLabelProps {
  data: ReturnType<typeof useAlertsAsPoints>;
  controlledById?: string;
  estimatedPeak: number;
  gaussianWidth: number;
  yOffset: number;
}

const LightCurveLabel: FunctionComponent<LightCurveLabelProps> = ({
  data,
  gaussianWidth,
  yOffset,
  controlledById,
  estimatedPeak,
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
  const { y: brightest } = minBy(data, ({ y }) => y) || {};

  return (
    <Styled.HiddenOutput form={controlledById}>
      {t("light_curve.curve.description", {
        residual: meanResidual.toLocaleString(language, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }),
        brightest: brightest?.toLocaleString(language, {
          minimumFractionDigits: 1,
          maximumFractionDigits: 1,
        }),
        context: estimatedPeak < Number(brightest) ? "above" : "below",
      })}
    </Styled.HiddenOutput>
  );
};

LightCurveLabel.displayName = "Widgets.LightCurvel.A11Y.LightCurveLabel";

export default LightCurveLabel;
