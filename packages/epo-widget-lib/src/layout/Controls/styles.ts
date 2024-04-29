"use client";
import styled from "styled-components";
import AspectRatio from "../AspectRatio";
import { token } from "@rubin-epo/epo-react-lib/styles";

export const WidgetLayout = styled.div`
  --widget-areas: "widget" "caption" "controls" "actions";
  --widget-padding: var(--PADDING_SMALL, 20px);

  box-sizing: border-box;
  display: grid;
  width: 100%;
  gap: var(--widget-padding);
  grid-template-areas: var(--widget-areas);
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  padding: var(--widget-padding);

  @container (min-width: ${token("BREAK_LARGE_TABLET")}) {
    --widget-areas: "controls widget" "actions actions" "caption caption";
    grid-template-columns: 1fr minmax(200px, max-content);
    grid-template-rows: auto auto auto;
  }

  @container (min-width: ${token("BREAK_DESKTOP_SMALL")}) {
    grid-template-columns: 1fr 1fr;
  }
`;
export const WidgetSlot = styled(AspectRatio)`
  grid-area: widget;
`;
export const ControlsSlot = styled.div`
  grid-area: controls;
  display: flex;
  flex-direction: column;
  gap: var(--widget-padding);
`;
export const ActionsSlot = styled.div`
  grid-area: actions;
`;
export const CaptionSlot = styled.div`
  grid-area: caption;
`;
