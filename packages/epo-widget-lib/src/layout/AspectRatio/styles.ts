"use client";
import styled from "styled-components";
import { token } from "@rubin-epo/epo-react-lib/styles";

export const AspectRatio = styled.div`
  --widget-max-width: 100vh;
  --aspect-ratio: var(--aspect-small-ratio, 1);

  aspect-ratio: var(--aspect-ratio);
  max-width: calc(var(--widget-max-width) * var(--aspect-ratio));

  @container (min-width: ${token("BREAK_LARGE_TABLET")}) {
    --aspect-ratio: var(--aspect-med-ratio, 1);
  }
  @container (min-width: ${token("BREAK_DESKTOP_SMALL")}) {
    --aspect-ratio: var(--aspect-large-ratio, 1);
  }
`;
