import styled, { css } from "styled-components";
import Button from "@rubin-epo/epo-react-lib/Button";
import HorizontalSlider from "@rubin-epo/epo-react-lib/HorizontalSlider";
import { token } from "@rubin-epo/epo-react-lib/styles";

export const WidgetContainer = styled.section`
  container: colorTool / inline-size;
`;

const breakSize = token("BREAK_DESKTOP_SMALL");

export const WidgetLayout = styled.div`
  --widget-areas: "image" "controls" "actions" "title";
  --controls-row: "controls image";
  display: grid;
  gap: var(--PADDING_SMALL, 20px);
  grid-template-areas: var(--widget-areas);
  grid-template-columns: 1fr;

  @container colorTool (min-width: ${breakSize}) {
    --widget-areas: var(--controls-row) "actions actions" "title title";
    grid-template-columns: 1fr var(--image-width, 1fr);
  }
`;

export const Title = styled.dl`
  grid-area: title;
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

export const Image = styled.canvas`
  user-select: none;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  mix-blend-mode: screen;
  opacity: var(--image-opacity, 0);
  visibility: var(--image-visibility, hidden);
`;

export const SelectionContainer = styled.div`
  position: absolute;
  top: var(--PADDING_SMALL, 20px);
  left: var(--PADDING_SMALL, 20px);
  width: calc(100% - var(--PADDING_SMALL, 20px) * 2);
`;

export const ToolsHeader = styled.div`
  font-weight: var(--FONT_WEIGHT_BOLD, 600);
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
