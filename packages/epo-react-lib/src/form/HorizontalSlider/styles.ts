import styled from "styled-components";
import ReactSlider from "react-slider";

const sliderHeight = 18;
const sliderBorder = 8;
const trackHeight = 6;
const thumbBorder = 4;

export const HorizontalSliderContainer = styled.div`
  --slider-color: inherit;
  --slider-border-color: var(--blue20, #c7d4f4);
  --slider-background-color: var(--neutral10, #f5f5f5);

  &[data-theme="dark"] {
    --slider-color: var(--white, #fff);
    --slider-border-color: var(--white, #fff);
    --slider-background-color: var(--neutral80, #404040);
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
  color: var(--slider-color);
`;

export const ThumbLabel = styled.span`
  background-color: var(--slider-background-color);
  border: 1px solid var(--slider-border-color);
  box-sizing: border-box;
  color: var(--slider-color);
  position: absolute;
  top: calc(100% + ${thumbBorder}px);
  left: 50%;
  transform: translateX(-50%);
  padding: 5px;
  font-size: 14px;
  font-weight: normal;
  text-align: center;
  line-height: 1.35;
  border-radius: 5px;
  opacity: var(--thumb-label-opacity, 0);
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
  --thumb-height: 14px;

  background-color: var(--thumb-color);
  box-sizing: border-box;
  position: relative;
  cursor: grab;
  width: var(--thumb-height);
  height: var(--thumb-height);
  text-align: center;
  border-radius: 50%;

  &::before {
    --click-box-height: calc(var(--thumb-height) * 2);

    content: "";
    display: inline-block;
    position: relative;
    left: -50%;
    top: -50%;
    width: var(--click-box-height);
    height: var(--click-box-height);
  }

  &[aria-disabled="true"] {
    background-color: var(--neutral60, #6a6e6e);
    cursor: not-allowed;
  }

  &:not([aria-disabled="true"]):focus,
  &:not([aria-disabled="true"]):hover,
  &:not([aria-disabled="true"]):active,
  &:not([aria-disabled="true"]).active {
    outline: none;
    --thumb-label-opacity: 1;
  }

  &:not([aria-disabled="true"]):active,
  &:not([aria-disabled="true"]).active,
  &:not([aria-disabled="true"]):focus {
    cursor: grabbing;
  }
`;

export const Track = styled.div`
  box-sizing: border-box;
  border-radius: ${trackHeight / 2}px;
  background-color: var(--track-color);
  height: ${trackHeight}px;
`;

export const HorizontalSlider = styled(ReactSlider)`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.35);
  height: ${sliderHeight}px;
  background-color: var(--neutral60, #6a6e6e);
  border: ${sliderBorder}px solid var(--white, #fff);
  border-radius: ${sliderHeight / 2}px;

  & + & {
    margin-top: 43px;
  }
`;
