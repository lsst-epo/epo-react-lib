import styled from "styled-components";
import { token } from "@rubin-epo/epo-react-lib/styles";

export const WidgetContainer = styled.section`
  color: var(--neutral80, #404040);
  container: colorTool / inline-size;
`;

const breakSize = token("BREAK_LARGE_TABLET_MIN");

export const WidgetLayout = styled.div`
  --widget-areas: "image" "controls" "actions" "title";
  display: grid;
  gap: var(--color-tool-padding, var(--PADDING_SMALL, 20px));
  grid-template-areas: var(--widget-areas);
  grid-template-columns: 1fr;

  @container colorTool (min-width: ${breakSize}) {
    --widget-areas: "controls image" "actions actions" "title title";
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
  top: var(--color-tool-padding, var(--PADDING_SMALL, 20px));
  left: var(--color-tool-padding, var(--PADDING_SMALL, 20px));
  width: calc(100% - var(--color-tool-padding, var(--PADDING_SMALL, 20px)) * 2);
`;

export const ToolsHeader = styled.div`
  font-weight: var(--FONT_WEIGHT_BOLD, 600);
`;
