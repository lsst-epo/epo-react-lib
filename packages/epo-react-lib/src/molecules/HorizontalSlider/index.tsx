/* eslint-disable react/prop-types */
import { isColorTransparent, isStyleSupported } from "@/lib/utils";
import { useState, FunctionComponent, useId, ReactNode } from "react";
import { ReactSliderProps } from "react-slider";
import Mark from "./Mark";
import Track from "./Track";
import * as Styled from "./styles";

type BaseSliderProps = Pick<
  ReactSliderProps<number | readonly number[]>,
  | "value"
  | "min"
  | "max"
  | "step"
  | "className"
  | "ariaValuetext"
  | "defaultValue"
  | "marks"
>;

type RenderThumb = ReactSliderProps<number | readonly number[]>["renderThumb"];

export interface HorizontalSliderProps extends BaseSliderProps {
  onChangeCallback: ReactSliderProps<number | readonly number[]>["onChange"];
  onBeforeChange?: ReactSliderProps<
    number | readonly number[]
  >["onBeforeChange"];
  onAfterChange?: ReactSliderProps<number | readonly number[]>["onAfterChange"];
  minLabel?: string;
  maxLabel?: string;
  labelledbyId?: string;
  color?: string;
  isDisabled?: boolean;
  styleAs?: "light" | "dark";
  renderLabel?: (state: {
    index: number;
    value: number | readonly number[];
    valueNow: number;
  }) => ReactNode;
}

const getValidColor = (color?: string, disabled = false) => {
  const validColor =
    color && isStyleSupported("color", color) && !isColorTransparent(color)
      ? color
      : "var(--color-background-track-override,#313333)";

  return disabled ? "var(--neutral60, #6a6e6e)" : validColor;
};

const HorizontalSlider: FunctionComponent<HorizontalSliderProps> = ({
  value,
  onChangeCallback,
  minLabel,
  maxLabel,
  labelledbyId,
  color,
  isDisabled: disabled = false,
  className,
  renderLabel,
  styleAs = "light",
  onBeforeChange,
  onAfterChange,
  ...props
}) => {
  const id = useId();
  const [showThumbLabels, setShowThumbLabels] = useState(false);
  const hasDoubleHandles = typeof value === "object" && value.length > 1;

  const renderThumb: RenderThumb = (props, state) => {
    const { key, style, ...other } = props;
    const { valueNow } = state;

    return (
      <Styled.ThumbContainer
        key={key}
        style={{
          ...style,
          "--opacity-label-thumb": showThumbLabels ? 1 : undefined,
        }}
        {...other}
      >
        <Styled.Thumb aria-disabled={disabled} data-testid="slider-thumb">
          <Styled.ThumbLabel>
            {renderLabel ? renderLabel(state) : valueNow}
          </Styled.ThumbLabel>
        </Styled.Thumb>
      </Styled.ThumbContainer>
    );
  };

  const minLabelId = `${id}-min-label`;
  const maxLabelId = `${id}-max-label`;

  return (
    <Styled.HorizontalSliderContainer
      style={{
        "--color-background-track": getValidColor(color),
      }}
      data-theme={styleAs}
      {...{ className }}
    >
      {minLabel || maxLabel ? (
        <Styled.TrackLabels>
          <Styled.Label id={minLabelId}>{minLabel}</Styled.Label>
          <Styled.Label id={maxLabelId}>{maxLabel}</Styled.Label>
        </Styled.TrackLabels>
      ) : null}
      <Styled.HorizontalSlider
        {...{ value, disabled, renderThumb, ...props }}
        onBeforeChange={(...args) => {
          setShowThumbLabels(true);
          onBeforeChange && onBeforeChange(...args);
        }}
        onChange={onChangeCallback}
        onAfterChange={(...args) => {
          setShowThumbLabels(false);
          onAfterChange && onAfterChange(...args);
        }}
        renderTrack={({ key, ...props }, state) => (
          <Track key={key} {...{ ...props, state }} />
        )}
        renderMark={({ key, ...props }) => (
          <Mark markValue={key} key={key} {...{ ...props, value }} />
        )}
        ariaLabelledby={
          hasDoubleHandles ? [minLabelId, maxLabelId] : labelledbyId
        }
      />
    </Styled.HorizontalSliderContainer>
  );
};

HorizontalSlider.displayName = "Molecule.HorizontalSlider";

export default HorizontalSlider;
