"use client";
import styled from "styled-components";
import { token } from "@rubin-epo/epo-react-lib/styles";

export const AspectRatio = styled.div`
  --aspect-ratio: var(--aspect-small-ratio, 1);

  aspect-ratio: var(--aspect-ratio);
  position: relative;
  width: calc(var(--widget-max-height, 100vh) * var(--aspect-ratio));
  max-height: var(--widget-max-height, 100vh);
  max-width: 100%;

  @container (min-width: ${token("BREAK_LARGE_TABLET")}) {
    --aspect-ratio: var(--aspect-med-ratio, 1);
  }
  @container (min-width: ${token("BREAK_DESKTOP_SMALL")}) {
    --aspect-ratio: var(--aspect-large-ratio, 1);
  }
`;
