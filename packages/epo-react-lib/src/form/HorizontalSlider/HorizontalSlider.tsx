import { useState, FunctionComponent } from "react";
import * as Styled from "./styles";

type SliderValue = number | readonly number[];

interface HorizontalSliderProps {
  min?: number;
  max?: number;
  step?: number;
  value: number | number[];
  label: string;
  minLabel?: string;
  maxLabel?: string;
  labelledbyId?: string;
  onChangeCallback: (value: number | number[], label: string) => void;
  color?: string;
  darkMode?: boolean;
}

const HorizontalSlider: FunctionComponent<HorizontalSliderProps> = ({
  min = 0,
  max = 100,
  step = 1,
  value,
  onChangeCallback,
  label,
  minLabel,
  maxLabel,
  labelledbyId,
  color = "transparent",
  darkMode = false,
}) => {
  const [showThumbLabels, setShowThumbLabels] = useState(false);
  const hasDoubleHandles = Array.isArray(value) && value.length > 1;

  const handleChange = (value: SliderValue) => {
    setShowThumbLabels(false);
    if (onChangeCallback) onChangeCallback(value as number | number[], label);
  };

  const Track = (props: any, state: { index: number; value: SliderValue }) => {
    const { index } = state;
    const hasColor =
      (hasDoubleHandles && index === 1) || (!hasDoubleHandles && index === 0);

    return <Styled.Track color={hasColor ? color : "transparent"} {...props} />;
  };

  const Thumb = (
    props: any,
    state: { index: number; value: SliderValue; valueNow: number }
  ) => {
    const { valueNow } = state;

    return (
      <Styled.ThumbContainer {...{ ...props }}>
        <Styled.Thumb />
        <Styled.ThumbLabel {...{ showThumbLabels, darkMode }}>
          {valueNow}
        </Styled.ThumbLabel>
      </Styled.ThumbContainer>
    );
  };

  const minLabelId = `${label}-min-label`;
  const maxLabelId = `${label}-max-label`;

  return (
    <Styled.HorizontalSliderContainer>
      {minLabel || maxLabel ? (
        <Styled.TrackLabels>
          <Styled.Label id={minLabelId} {...{ darkMode }}>
            {minLabel}
          </Styled.Label>
          <Styled.Label id={maxLabelId} {...{ darkMode }}>
            {maxLabel}
          </Styled.Label>
        </Styled.TrackLabels>
      ) : null}
      <Styled.HorizontalSlider
        {...{ min, max, step, value, showThumbLabels }}
        onChange={() => {
          setShowThumbLabels(true);
        }}
        onAfterChange={handleChange}
        renderTrack={Track}
        renderThumb={Thumb}
        ariaLabelledby={
          hasDoubleHandles ? [minLabelId, maxLabelId] : labelledbyId
        }
      />
    </Styled.HorizontalSliderContainer>
  );
};

HorizontalSlider.displayName = "Form.HorizontalSlider";

export default HorizontalSlider;
