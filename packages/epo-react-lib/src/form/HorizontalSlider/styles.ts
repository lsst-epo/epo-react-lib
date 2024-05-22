import styled from "styled-components";
import ReactSlider from "react-slider";

export const HorizontalSliderContainer = styled.div`
  --color-text-slider: inherit;
  --color-border-slider: var(--blue20, #c7d4f4);
  --color-background-slider: var(--neutral60, #6a6e6e);
  --color-background-track-disabled: var(--color-background-slider);
  --color-background-thumb-label: var(--neutral10, #f5f5f5);
  --size-height-slider: 18px;
  --size-border-radius-slider: calc(var(--size-height-slider) / 2);
  --size-border-slider: 8px;
  --size-offset-label: 4px;
  --size-height-thumb: 14px;

  &[data-theme="dark"] {
    --color-text-slider: var(--white, #fff);
    --color-border-slider: var(--white, #fff);
    --color-background-thumb-label: var(--neutral80, #404040);
  }

  display: flex;
  flex-flow: column nowrap;
  padding-bottom: 16px;
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
  color: var(--color-text-slider);
`;

export const ThumbLabel = styled.span`
  background-color: var(--color-background-thumb-label);
  border: 1px solid var(--color-border-slider);
  box-sizing: border-box;
  color: var(--color-text-slider);
  position: absolute;
  top: calc(100% + var(--size-offset-label));
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
  --color-background-thumb: var(--color-background-track);

  background-color: var(--color-background-thumb);
  box-sizing: border-box;
  position: relative;
  cursor: grab;
  width: var(--size-height-thumb);
  height: var(--size-height-thumb);
  text-align: center;
  border-radius: 50%;

  &::before {
    --size-height-click-box: calc(var(--size-height-thumb) * 2);

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
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.35);
  height: var(--size-height-slider);
  background-color: var(--color-background-slider);
  border: var(--size-border-slider) solid var(--white, #fff);
  border-radius: var(--size-border-radius-slider);

  &.disabled {
    --color-background-track: var(--color-background-track-disabled);
  }

  & + & {
    margin-top: 43px;
  }
`;
