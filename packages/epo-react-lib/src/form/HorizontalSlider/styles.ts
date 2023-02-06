import styled, { css } from "styled-components";
import ReactSlider from "react-slider";

const sliderHeight = 22;
const sliderBorder = 6;
const trackHeight = sliderHeight - sliderBorder * 2;
const thumbBorder = 4;
const thumbHeight = 26;

export const HorizontalSliderContainer = styled.div`
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

export const Label = styled.div<{ darkMode: boolean }>`
  box-sizing: border-box;
  font-size: 14px;
  font-weight: bold;
  line-height: 1.6;
  color: ${({ darkMode }) =>
    darkMode ? css`var(--white, #fff)` : css`inherit`};
`;

export const ThumbLabel = styled.span<{
  showThumbLabels: boolean;
  darkMode: boolean;
}>`
  box-sizing: border-box;
  position: absolute;
  top: calc(100% + ${thumbBorder}px);
  padding: 5px;
  font-size: 14px;
  font-weight: normal;
  text-align: center;
  line-height: 1.35;
  border-radius: 5px;
  opacity: ${({ showThumbLabels }) => (showThumbLabels ? 1 : 0)};
  transition: opacity 0.4s ease-in-out;
  user-select: none;

  ${({ darkMode }) =>
    darkMode
      ? css`
          border: 1px solid var(--white);
          background-color: var(--neutral80);
          color: var(--white, #fff);
        `
      : css`
          border: 1px solid var(--blue20);
          background-color: var(--neutral10);
          color: var(--black, #000);
        `}
`;

export const ThumbContainer = styled.div`
  &:focus,
  &.active {
    outline: none;
  }
`;

export const Thumb = styled.div`
  box-sizing: border-box;
  position: relative;
  width: ${thumbHeight}px;
  height: ${thumbHeight}px;
  color: var(--white, #fff);
  text-align: center;
  cursor: grab;
  background-color: var(--turquoise55);
  border: ${thumbBorder}px solid var(--neutral10);
  border-radius: 50%;

  &:focus,
  &:active,
  &.active {
    cursor: grabbing;
    outline: none;

    ${ThumbLabel} {
      opacity: 1;
    }
  }
`;

export const Track = styled.div<{ color: string }>`
  box-sizing: border-box;
  border-radius: ${trackHeight / 2}px;
  background-color: ${({ color }) => color};
  height: ${trackHeight}px;
`;

export const HorizontalSlider = styled(ReactSlider)`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  height: ${sliderHeight}px;
  background-color: var(--neutral10);
  border: ${sliderBorder}px solid var(--neutral40);
  border-radius: 20px;

  & + & {
    margin-top: 43px;
  }
`;
