import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import * as Styled from "./styles";
import { type HorizontalSliderProps } from "@rubin-epo/epo-react-lib/HorizontalSlider";

interface MagnitudeSliderProps {
  yMin: number;
  yMax: number;
  magnitude: number;
  onMagnitudeChangeCallback: HorizontalSliderProps["onChangeCallback"];
  estimatedPeak: number;
  disabled?: boolean;
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
  disabled,
}) => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  const min = Math.min(yMin, yMax);
  const max = Math.max(yMin, yMax);

  return (
    <Styled.Slider
      ariaLabel={t("light_curve.magnitude_slider.label")}
      orientation="vertical"
      value={magnitude}
      step={0.05}
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
      renderThumb={({ key, style, ...props }) => {
        return (
          <Styled.ThumbContainer key={key} {...props} style={style}>
            <Styled.ThumbBar />
            <Styled.ThumbHandle />
          </Styled.ThumbContainer>
        );
      }}
      {...{ min, max, disabled }}
    />
  );
};

MagnitudeSlider.displayName = "Widgets.LightCurve.MagnitudeSlider";

export default MagnitudeSlider;
