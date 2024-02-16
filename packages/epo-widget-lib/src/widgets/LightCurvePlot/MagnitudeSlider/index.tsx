import { FunctionComponent } from "react";
import { ForeignObject } from "@/charts/index";
import * as Styled from "./styles";

interface MagnitudeSliderProps {
  yMin: number;
  yMax: number;
  magnitude: number;
  onMagnitudeChangeCallback: (value: number) => void;
}

const MagnitudeSlider: FunctionComponent<MagnitudeSliderProps> = ({
  magnitude,
  yMin,
  yMax,
  onMagnitudeChangeCallback,
}) => {
  return (
    <ForeignObject>
      <Styled.Slider
        orientation="vertical"
        value={magnitude}
        min={yMin}
        max={yMax}
        step={0.1}
        onChange={onMagnitudeChangeCallback}
        renderThumb={(props, state) => {
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
