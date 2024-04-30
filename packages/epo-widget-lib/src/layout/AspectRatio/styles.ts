"use client";
import styled from "styled-components";
import { token } from "@rubin-epo/epo-react-lib/styles";

export const AspectRatio = styled.div`
  --aspect-ratio: var(--aspect-small-ratio, 1);

  height: 100vh;
  position: relative;

  @container (min-width: ${token("BREAK_MOBILE")}) {
    max-width: calc(var(--widget-max-width, 100vh) * var(--aspect-ratio));
    height: auto;
    aspect-ratio: var(--aspect-ratio);
  }
  @container (min-width: ${token("BREAK_LARGE_TABLET")}) {
    --aspect-ratio: var(--aspect-med-ratio, 1);
  }
  @container (min-width: ${token("BREAK_DESKTOP_SMALL")}) {
    --aspect-ratio: var(--aspect-large-ratio, 1);
  }
`;
