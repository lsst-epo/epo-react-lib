import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import { ForeignObject } from "@/charts/index";
import { estimateMagnitude } from "../helpers";
import * as Styled from "./styles";

interface DM15DisplayProps {
  gaussianWidth: number;
}

const DM15Display: FunctionComponent<DM15DisplayProps> = ({
  gaussianWidth,
}) => {
  const {
    i18n: { language },
  } = useTranslation();
  const peak = estimateMagnitude(0, gaussianWidth);
  const fifteenDay = estimateMagnitude(15, gaussianWidth);
  const dm15 = fifteenDay - peak;

  return (
    <ForeignObject>
      <Styled.DisplayContainer>
        <Styled.Line />
        <math>
          <mn>&Delta;</mn>
          <msub>
            <mi>m</mi>
            <mn>15</mn>
          </msub>
          <mo>=</mo>
          <mn>
            {Number(dm15).toLocaleString(language, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </mn>
        </math>
      </Styled.DisplayContainer>
    </ForeignObject>
  );
};

DM15Display.displayName = "Widgets.LightCurve.DM15Display";

export default DM15Display;