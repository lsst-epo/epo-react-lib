import WidgetControls from "@/layout/Controls";
import styled from "styled-components";

export const WidgetLayout = styled(WidgetControls)`
  color: var(--neutral80, #404040);
`;

export const Title = styled.dl`
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
  gap: var(--widget-padding);
  align-items: center;
`;

export const SelectionContainer = styled.div`
  position: absolute;
  top: var(--widget-padding);
  left: var(--widget-padding);
  width: calc(100% - var(--widget-padding) * 2);
`;

export const ToolsHeader = styled.div`
  font-weight: var(--FONT_WEIGHT_BOLD, 600);
`;
