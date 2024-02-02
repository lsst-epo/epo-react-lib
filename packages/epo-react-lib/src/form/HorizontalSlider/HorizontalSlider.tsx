import { isColorTransparent, isStyleSupported } from "@/lib/utils";
import { useState, FunctionComponent } from "react";
import { ReactSliderProps } from "react-slider";
import * as Styled from "./styles";

interface HorizontalSliderProps
  extends Pick<
    ReactSliderProps<number | readonly number[]>,
    | "value"
    | "min"
    | "max"
    | "step"
    | "className"
    | "ariaValuetext"
    | "defaultValue"
  > {
  onChangeCallback: ReactSliderProps<number | readonly number[]>["onChange"];
  label: string;
  minLabel?: string;
  maxLabel?: string;
  labelledbyId?: string;
  color?: string;
  darkMode?: boolean;
  isDisabled?: boolean;
}

const HorizontalSlider: FunctionComponent<HorizontalSliderProps> = ({
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
  ...props
}) => {
  const [showThumbLabels, setShowThumbLabels] = useState(false);
  const hasDoubleHandles = Array.isArray(value) && value.length > 1;

  const getValidColor = (color?: string) => {
    const validColor =
      color && isStyleSupported("color", color) && !isColorTransparent(color)
        ? color
        : "#313333";

    return isDisabled ? "var(--neutral60, #6a6e6e)" : validColor;
  };

  const trackColor = getValidColor(color);

  const Track: ReactSliderProps<number | readonly number[]>["renderTrack"] = (
    props,
    state
  ) => {
    const { index } = state;
    const { key, style, ...other } = props;
    const hasColor =
      (hasDoubleHandles && index === 1) || (!hasDoubleHandles && index === 0);

    return (
      <Styled.Track
        data-testid={`slider-track-${index}`}
        style={{
          ...style,
          "--track-color": hasColor && trackColor,
        }}
        key={key}
        {...other}
      />
    );
  };

  const Thumb: ReactSliderProps<number | readonly number[]>["renderThumb"] = (
    props,
    state
  ) => {
    const { key, style, ...other } = props;
    const { valueNow } = state;

    return (
      <Styled.ThumbContainer
        key={key}
        style={{
          ...style,
          "--thumb-color": trackColor,
          "--thumb-label-opacity": showThumbLabels ? 1 : undefined,
        }}
        {...other}
      >
        <Styled.Thumb aria-disabled={isDisabled} data-testid="slider-thumb">
          <Styled.ThumbLabel>{valueNow}</Styled.ThumbLabel>
        </Styled.Thumb>
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
        {...{ value, ...props }}
        onBeforeChange={() => setShowThumbLabels(true)}
        onChange={onChangeCallback}
        onAfterChange={() => setShowThumbLabels(false)}
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
