import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import { ForeignObject } from "@/charts/index";
import * as Styled from "./styles";

interface MagnitudeSliderProps {
  yMin: number;
  yMax: number;
  magnitude: number;
  onMagnitudeChangeCallback: (value: number) => void;
  estimatedPeak: number;
}

const distanceContext = (
  estimatedPeak: number,
  userPeak: number,
  locale: string
) => {
  const distance = Number(Math.abs(userPeak - estimatedPeak).toFixed(1));
  const formattedDistance = distance.toLocaleString(locale, {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });
  let context: string;

  if (distance <= 0.05) {
    context = "equal";

    return { distance, context };
  }

  if (estimatedPeak < userPeak) {
    context = "above";
  } else {
    context = "below";
  }

  return { distance: formattedDistance, context };
};

const MagnitudeSlider: FunctionComponent<MagnitudeSliderProps> = ({
  magnitude,
  yMin,
  yMax,
  onMagnitudeChangeCallback,
  estimatedPeak,
}) => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  return (
    <ForeignObject>
      <Styled.Slider
        ariaLabel={t("light_curve.magnitude_slider.label") || undefined}
        orientation="vertical"
        value={magnitude}
        min={yMin}
        max={yMax}
        step={0.1}
        ariaValuetext={() =>
          t("light_curve.magnitude_slider.value", {
            ...distanceContext(estimatedPeak, magnitude, language),
            magnitude: magnitude.toLocaleString(language, {
              minimumFractionDigits: 1,
              maximumFractionDigits: 1,
            }),
          })
        }
        onChange={onMagnitudeChangeCallback}
        renderThumb={(props) => {
          return (
            <Styled.ThumbContainer {...props}>
              <Styled.ThumbBar />
              <Styled.ThumbHandle />
            </Styled.ThumbContainer>
          );
        }}
      />
    </ForeignObject>
  );
};

MagnitudeSlider.displayName = "Widgets.LightCurve.MagnitudeSlider";

export default MagnitudeSlider;
