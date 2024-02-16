import styled from "styled-components";
import ReactSlider from "react-slider";

export const Slider = styled(ReactSlider)`
  --thumb-size: 1em;

  width: 100%;
  height: calc(100% + var(--thumb-size) + 2px);
  top: calc((var(--thumb-size) / 2) * -1);
`;

export const ThumbBar = styled.div`
  box-sizing: border-box;
  border: none;
  border-bottom: 2px dashed var(--black, #000);
  flex-grow: 1;
`;

export const ThumbContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 100%;
`;

export const ThumbHandle = styled.div`
  aspect-ratio: 1;
  box-sizing: border-box;
  cursor: grab;
  background-color: var(--white, #fff);
  border: 2px solid var(--black, #000);
  border-radius: 50%;
  pointer-events: auto;
  width: 1em;

  &:not([aria-disabled="true"]):active,
  &:not([aria-disabled="true"]).active,
  &:not([aria-disabled="true"]) {
    cursor: grabbing;
  }
`;
