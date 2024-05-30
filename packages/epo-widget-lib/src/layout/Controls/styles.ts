"use client";
import styled from "styled-components";
import { token } from "@rubin-epo/epo-react-lib/styles";
import Loader from "@/atomic/Loader";

export const WidgetLayout = styled.div`
  --default-widget-padding: calc(var(--PADDING_SMALL, 20px) / 2);
  --widget-gap: var(--widget-padding, var(--default-widget-padding));

  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 100%;
  gap: var(--widget-gap);
  overflow-y: auto;

  @container (min-width: ${token("BREAK_PHABLET_MIN")}) {
    --default-widget-padding: var(--PADDING_SMALL, 20px);
  }

  @media (orientation: landscape) {
    height: 100%;
    overflow-y: initial;
  }
`;

export const InteractionRow = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: var(--widget-gap);

  @media (orientation: landscape) {
    flex-direction: row-reverse;
  }
`;

export const Widget = styled.div`
  aspect-ratio: 1;
  flex: 1 1 auto;
  max-height: 100%;
  max-width: 100%;
  justify-self: center;
  position: relative;

  @media (orientation: landscape) {
    max-height: unset;
    height: 100%;
  }
`;

export const Controls = styled.form`
  display: flex;
  flex-direction: column;
  gap: var(--widget-gap);
  flex: 0 1 100%;
`;

export const Actions = styled.div`
  display: flex;
  gap: var(--widget-gap);
`;

export const PortraitCaption = styled.div`
  @media (orientation: landscape) {
    display: none;
  }
`;

export const LandscapeCaption = styled.div`
  @media (orientation: portrait) {
    display: none;
  }
`;

export const StackedLoader = styled(Loader)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;
