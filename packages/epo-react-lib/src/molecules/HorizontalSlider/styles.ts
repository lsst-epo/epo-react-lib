import styled from "styled-components";
import ReactSlider from "react-slider";

export const HorizontalSliderContainer = styled.div`
  --size-border-radius-slider: calc(var(--size-height-slider, 18px) / 2);
  --size-border-radius-track: calc(var(--size-height-track, 6px) / 2);

  display: flex;
  flex-flow: column nowrap;
  padding-block-end: var(--size-padding-slide-block-end, var(--size-spacing-s));

  &[data-theme="dark"] {
    --color-background-thumb: var(--white, #fff);
    --color-border-thumb: var(--neutral10, #f5f5f5);
    --color-background-track-override: var(--neutral10, #f5f5f5);
    --color-background-thumb-label: rgb(0, 0, 0, 0.7);
    --color-box-shadow: transparent;
    --size-border-slider: 0px;
    --size-height-slider: 3px;

    color: var(--color-font-invert);
  }
`;

export const TrackLabels = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3px 6px;
`;

export const Label = styled.div`
  box-sizing: border-box;
  font-size: 14px;
  font-weight: bold;
  line-height: 1.6;
  color: var(--color-text-slider, inherit);
`;

export const ThumbLabel = styled.span`
  background-color: var(
    --color-background-thumb-label,
    var(--neutral10, #f5f5f5)
  );
  border: 1px solid var(--color-border-slider, var(--blue20, #c7d4f4));
  box-sizing: border-box;
  color: var(--color-text-slider, inherit);
  position: absolute;
  top: calc(100% + var(--size-offset-label, 4px));
  left: 50%;
  transform: translateX(-50%);
  padding: 5px;
  font-size: 14px;
  font-weight: normal;
  text-align: center;
  line-height: 1.35;
  border-radius: 5px;
  opacity: var(--opacity-label-thumb, 0);
  transition: opacity 0.4s ease-in-out;
  user-select: none;
`;

export const ThumbContainer = styled.div`
  &:focus,
  &.active {
    outline: none;
  }
`;

export const Thumb = styled.div`
  background-color: var(
    --color-background-thumb,
    var(--color-background-track)
  );
  border: 1px solid var(--color-border-thumb, transparent);
  box-sizing: border-box;
  position: relative;
  cursor: grab;
  width: var(--size-height-thumb, 14px);
  height: var(--size-height-thumb, 14px);
  text-align: center;
  border-radius: 50%;

  &::before {
    --size-height-click-box: calc(var(--size-height-thumb, 14px) * 2);

    content: "";
    display: inline-block;
    position: relative;
    left: -50%;
    top: -50%;
    width: var(--size-height-click-box);
    height: var(--size-height-click-box);
  }

  &[aria-disabled="true"] {
    cursor: not-allowed;
  }

  &:not([aria-disabled="true"]):focus,
  &:not([aria-disabled="true"]):hover,
  &:not([aria-disabled="true"]):active,
  &:not([aria-disabled="true"]).active {
    outline: none;
    --opacity-label-thumb: 1;
  }

  &:not([aria-disabled="true"]):active,
  &:not([aria-disabled="true"]).active,
  &:not([aria-disabled="true"]):focus {
    cursor: grabbing;
  }
`;

export const HorizontalSlider = styled(ReactSlider)`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  box-shadow: 0 0 4px var(--color-box-shadow, rgba(0, 0, 0, 0.35));
  height: var(--size-height-slider, 18px);
  background-color: var(--color-background-slider, var(--neutral60, #6a6e6e));
  border: var(--size-border-slider, 8px) solid
    var(--color-border-slider, var(--white, #fff));
  border-radius: var(--size-border-radius-slider);

  &.disabled {
    --color-background-track: var(--color-background-track-disabled);
  }

  & + & {
    margin-top: 43px;
  }
`;
