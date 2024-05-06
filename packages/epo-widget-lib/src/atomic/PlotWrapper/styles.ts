"use client";
import styled from "styled-components";
import { token } from "@rubin-epo/epo-react-lib/styles";

export const PlotWrapper = styled.div`
  --label-height: 2em;

  aspect-ratio: 1;
  color: var(--neutral95, #1f2121);
  background-color: var(--white, #fff);
  border: 1px solid var(--turquoise55, #009fa1);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  @container (min-width: ${token("BREAK_LARGE_TABLET")}) {
    --label-height: 3em;
  }
`;
