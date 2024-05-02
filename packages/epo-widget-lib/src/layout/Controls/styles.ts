"use client";
import styled from "styled-components";
import { token } from "@rubin-epo/epo-react-lib/styles";

export const WidgetLayout = styled.div`
  --widget-padding: calc(var(--PADDING_SMALL, 20px) / 2);

  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 100%;
  gap: var(--widget-padding);
  padding: var(--widget-padding);
  overflow-y: auto;

  @container (min-width: ${token("BREAK_PHABLET_MIN")}) {
    --widget-padding: var(--PADDING_SMALL, 20px);
  }

  @container (min-width: ${token("BREAK_LARGE_TABLET")}) {
    height: 100%;
    overflow-y: initial;
  }
`;

export const InteractionRow = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: var(--widget-padding);

  @container (min-width: ${token("BREAK_LARGE_TABLET")}) {
    flex-direction: row-reverse;
  }
`;

export const Widget = styled.div`
  aspect-ratio: 1;
  flex: 1 1 auto;
  max-height: 100%;
  max-width: 100%;
  justify-self: center;

  @container (min-width: ${token("BREAK_LARGE_TABLET")}) {
    max-height: unset;
    height: 100%;
  }
`;

export const Controls = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--widget-padding);
  flex: 0 1 100%;
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--widget-padding);

  @container (min-width: ${token("BREAK_LARGE_TABLET")}) {
    flex-direction: row;
  }
`;

export const PortraitCaption = styled.div`
  @container (min-width: ${token("BREAK_LARGE_TABLET")}) {
    display: none;
  }
`;

export const LandscapeCaption = styled.div`
  display: none;
  @container (min-width: ${token("BREAK_LARGE_TABLET")}) {
    display: block;
  }
`;
