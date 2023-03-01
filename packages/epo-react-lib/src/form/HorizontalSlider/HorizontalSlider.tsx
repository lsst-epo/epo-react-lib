import { isColorTransparent } from "@/lib/utils";
import { useState, FunctionComponent } from "react";
import * as Styled from "./styles";

type SliderValue = number | readonly number[];

type BaseProps = {
  min?: number;
  max?: number;
  step?: number;
  label: string;
  minLabel?: string;
  maxLabel?: string;
  labelledbyId?: string;
  color?: string;
  darkMode?: boolean;
  isDisabled?: boolean;
  className?: string;
};

interface SingleSliderProps extends BaseProps {
  value: number;
  onChangeCallback: (value: number, label: string) => void;
}

interface RangedSliderProps extends BaseProps {
  value: number[];
  onChangeCallback: (value: number[], label: string) => void;
}

export type HorizontalSliderProps = SingleSliderProps | RangedSliderProps;

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
  color,
  darkMode = false,
  isDisabled = false,
  className,
}) => {
  const [showThumbLabels, setShowThumbLabels] = useState(false);
  const hasDoubleHandles = Array.isArray(value) && value.length > 1;

  const handleChange = (value: SliderValue) => {
    setShowThumbLabels(false);
    if (onChangeCallback) onChangeCallback(value as number & number[], label);
  };

  const getValidColor = (color?: string) => {
    const validColor =
      color && CSS.supports("color", color) && !isColorTransparent(color)
        ? color
        : undefined;

    return isDisabled ? "var(--neutral60, #6a6e6e)" : validColor;
  };

  const Track = (props: any, state: { index: number; value: SliderValue }) => {
    const { index } = state;
    const hasColor =
      (hasDoubleHandles && index === 1) || (!hasDoubleHandles && index === 0);
    const trackColor = getValidColor(color);

    return (
      <Styled.Track color={hasColor ? trackColor : "transparent"} {...props} />
    );
  };

  const Thumb = (
    props: any,
    state: { index: number; value: SliderValue; valueNow: number }
  ) => {
    const { valueNow } = state;
    const thumbColor = getValidColor(color);

    return (
      <Styled.ThumbContainer {...{ ...props }}>
        <Styled.Thumb {...{ color: thumbColor, isDisabled }} />
        <Styled.ThumbLabel {...{ showThumbLabels, darkMode }}>
          {valueNow}
        </Styled.ThumbLabel>
      </Styled.ThumbContainer>
    );
  };

  const minLabelId = `${label}-min-label`;
  const maxLabelId = `${label}-max-label`;

  return (
    <Styled.HorizontalSliderContainer {...{ className }}>
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
        disabled={isDisabled}
      />
    </Styled.HorizontalSliderContainer>
  );
};

HorizontalSlider.displayName = "Form.HorizontalSlider";

export default HorizontalSlider;
