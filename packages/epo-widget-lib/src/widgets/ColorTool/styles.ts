import styled, { css } from "styled-components";
import { Button, HorizontalSlider } from "@rubin-epo/epo-react-lib";
import FilterImage from "./FilterImage";

export const WidgetContainer = styled.section<{
  $isCondensed: boolean;
  $hideControls: boolean;
}>`
  display: grid;
  gap: var(--PADDING_SMALL, 20px);

  ${({ $isCondensed, $hideControls }) =>
    $isCondensed
      ? css`
          grid-template-areas:
            "title"
            "subtitle"
            "image"
            "caption"
            "controls"
            "reset";
        `
      : css`
          grid-template-areas:
            "title title"
            "subtitle subtitle"
            ${$hideControls ? "'image image'" : "'controls image'"}
            "reset reset"
            "caption caption";
        `}
`;

export const Title = styled.h2`
  grid-area: title;
  margin: 0;
`;

export const Subtitle = styled.dl`
  grid-area: subtitle;
  margin: 0;
  font-size: 18px;
  font-weight: var(--FONT_WEIGHT_NORMAL, 400);

  > dt,
  dd {
    margin: 0;
    white-space: nowrap;
  }

  > dt {
    display: inline-block;
  }

  > dd {
    display: inline;
    margin-left: 1ch;

    &::after {
      content: "\\A";
      white-space: pre;
    }
  }
`;

export const ControlsContainer = styled.div`
  display: grid;
  grid-template-columns: max-content minmax(100px, 1fr) minmax(100px, 2fr);
  grid-auto-rows: max-content;
  grid-area: controls;
  gap: 10px;
  align-items: center;
`;

export const Slider = styled(HorizontalSlider)`
  padding: 0;
  width: 100%;
`;

export const ImageContainer = styled.div`
  position: relative;
  aspect-ratio: 1 / 1;
  grid-area: image;
  background-color: rgba(0, 0, 0, 0.1);
`;

export const BackgroundImage = styled.img<{ $filtersActive: boolean }>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: ${({ $filtersActive }) => ($filtersActive ? "block" : "none")};
  width: 100%;
  height: 100%;
`;

export const FilteredImage = styled(FilterImage)<{ active: boolean }>`
  user-select: none;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  mix-blend-mode: screen;

  ${({ active }) =>
    active
      ? css`
          visibility: visible;
          opacity: 1;
        `
      : css`
          visibility: hidden;
          opacity: 0;
        `}
`;

export const SelectionContainer = styled.div`
  grid-column: span 3;
`;

export const ToolsHeader = styled.div`
  font-weight: var(--FONT_WEIGHT_BOLD, 600);
`;

export const Caption = styled.footer`
  grid-area: caption;
`;

export const ResetButton = styled(Button)`
  grid-area: reset;
  text-align: left;

  span {
    text-align: left;
  }
`;

export const FilterToggleButton = styled(Button)<{ $active: boolean }>`
  border-radius: 50%;
  font-weight: var(--FONT_WEIGHT_MEDIUM, 500);
  font-size: 22px;
  text-transform: lowercase;
  display: flex;
  width: 38px;
  height: 38px;
  padding: 0;

  ${({ $active }) =>
    $active
      ? css`
          background-color: var(--turquoise85, #12726c);
          &:not(:disabled):not([aria-disabled="true"]):hover {
            outline: 1px solid var(--white, #fff);
            outline-offset: -3px;
          }
        `
      : css`
          background-color: #f7f7f7;
          border-color: #6c6e6e;
          color: #6c6e6e !important;
          &:not(:disabled):not([aria-disabled="true"]):hover {
            outline: 2px solid #6c6e6e;
            outline-offset: -2px;
          }
        `}
`;
