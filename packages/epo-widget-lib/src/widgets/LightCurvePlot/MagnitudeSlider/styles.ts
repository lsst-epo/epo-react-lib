import styled from "styled-components";
import ReactSlider from "react-slider";

export const Slider = styled(ReactSlider)`
  --thumb-size: 20px;
  --thumb-border-width: 2px;

  width: 100%;
  height: 100%;
`;

export const ThumbBar = styled.div`
  box-sizing: border-box;
  border: none;
  border-bottom: var(--thumb-border-width) dashed var(--black, #000);
  flex-grow: 1;
`;

export const ThumbHandle = styled.div`
  aspect-ratio: 1;
  box-sizing: border-box;
  background-color: var(--white, #fff);
  border: var(--thumb-border-width) solid var(--black, #000);
  border-radius: 50%;
  pointer-events: auto;
  width: var(--thumb-size);
`;

export const ThumbContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  height: 0px;
  width: 100%;
  overflow: visible;

  &:focus {
    outline: none;
  }

  &:not([aria-disabled="true"]) {
    ${ThumbHandle} {
      cursor: grab;
    }

    &:active,
    &.active {
      cursor: grabbing;
    }
  }
`;
