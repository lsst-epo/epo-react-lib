import { isColorTransparent, isStyleSupported } from "@/lib/utils";
import { useState, FunctionComponent } from "react";
import { ReactSliderProps } from "react-slider";
import * as Styled from "./styles";

type SliderValue = number | readonly number[];

interface BaseProps
  extends Pick<ReactSliderProps, "min" | "max" | "step" | "className"> {
  label: string;
  minLabel?: string;
  maxLabel?: string;
  labelledbyId?: string;
  color?: string;
  darkMode?: boolean;
  isDisabled?: boolean;
}

interface SingleSliderProps extends BaseProps {
  value: number;
  defaultValue?: number;
  onChangeCallback: (value: number, label: string) => void;
}

interface RangedSliderProps extends BaseProps {
  value: number[];
  defaultValue?: number[];
  onChangeCallback: (value: number[], label: string) => void;
}

export type HorizontalSliderProps = SingleSliderProps | RangedSliderProps;

const HorizontalSlider: FunctionComponent<HorizontalSliderProps> = ({
  min = 0,
  max = 100,
  step = 1,
  value,
  defaultValue,
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
      color && isStyleSupported("color", color) && !isColorTransparent(color)
        ? color
        : undefined;

    return isDisabled ? "var(--neutral60, #6a6e6e)" : validColor;
  };

  const Track = (props: any, state: { index: number }) => {
    const { index } = state;
    const { key, ...other } = props;
    const hasColor =
      (hasDoubleHandles && index === 1) || (!hasDoubleHandles && index === 0);
    const trackColor = getValidColor(color);
    return (
      <Styled.Track
        color={hasColor ? trackColor : "transparent"}
        key={key}
        {...other}
      />
    );
  };

  const Thumb = (
    props: any,
    state: { index: number; value: SliderValue; valueNow: number }
  ) => {
    const { key, ...other } = props;
    const { valueNow } = state;
    const thumbColor = getValidColor(color);

    return (
      <Styled.ThumbContainer key={key} {...other}>
        <Styled.Thumb {...{ color: thumbColor, $isDisabled: isDisabled }} />
        <Styled.ThumbLabel
          style={{ "--thumb-label-opacity": showThumbLabels ? 1 : 0 }}
        >
          {valueNow}
        </Styled.ThumbLabel>
      </Styled.ThumbContainer>
    );
  };

  const minLabelId = `${label}-min-label`;
  const maxLabelId = `${label}-max-label`;

  return (
    <Styled.HorizontalSliderContainer
      data-theme={darkMode ? "dark" : "light"}
      {...{ className }}
    >
      {minLabel || maxLabel ? (
        <Styled.TrackLabels>
          <Styled.Label id={minLabelId}>{minLabel}</Styled.Label>
          <Styled.Label id={maxLabelId}>{maxLabel}</Styled.Label>
        </Styled.TrackLabels>
      ) : null}
      <Styled.HorizontalSlider
        {...{ defaultValue, min, max, step, value, showThumbLabels }}
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
