/* eslint-disable react/prop-types */
import { useTranslation } from "react-i18next";
import Readout from "@/charts/Readout";
import { estimateMagnitude } from "../../helpers";
import * as Styled from "./styles";

/**
 *
 * @param {object} props
 * @param {number} props.gaussianWidth
 * @param {string} [props.className]
 * @returns
 */
const DM15Display = ({ gaussianWidth, className }) => {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const peak = estimateMagnitude(0, gaussianWidth);
  const fifteenDay = estimateMagnitude(15, gaussianWidth);
  const dm15 = fifteenDay - peak;

  return (
    <Readout className={className}>
      <Styled.Line />
      <math xmlns="http://www.w3.org/1998/Math/MathML">
        <mn>&Delta;</mn>
        <msub>
          <mi>m</mi>
          <mn>15</mn>
        </msub>
        <mo>=</mo>
        <mn
          role="status"
          aria-live="polite"
          aria-label={t("light_curve.deltaM15.label") || undefined}
        >
          {Number(dm15).toLocaleString(language, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </mn>
      </math>
    </Readout>
  );
};

DM15Display.displayName = "Widgets.LightCurve.DM15Display";

export default DM15Display;
