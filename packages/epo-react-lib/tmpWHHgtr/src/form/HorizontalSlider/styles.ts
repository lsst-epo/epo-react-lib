import styled, { css } from "styled-components";
import ReactSlider from "react-slider";

const sliderHeight = 18;
const sliderBorder = 8;
const trackHeight = 6;
const thumbBorder = 4;
const thumbHeight = 14;

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

export const Thumb = styled.div<{ color?: string; isDisabled: boolean }>`
  box-sizing: border-box;
  position: relative;
  width: ${thumbHeight}px;
  height: ${thumbHeight}px;
  color: var(--white, #fff);
  text-align: center;
  border-radius: 50%;

  ${({ color = "#313333", isDisabled }) => css`
    cursor: ${isDisabled ? "not-allowed" : "grab"};
    background-color: ${isDisabled ? "var(--neutral60, #6a6e6e)" : color};

    &:focus,
    &:active,
    &.active {
      cursor: ${isDisabled ? "not-allowed" : "grabbing"};
      outline: none;

      ${ThumbLabel} {
        opacity: 1;
      }
    }
  `}
`;

export const Track = styled.div<{ color?: string }>`
  box-sizing: border-box;
  border-radius: ${trackHeight / 2}px;
  background-color: ${({ color = "#313333" }) => color};
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
