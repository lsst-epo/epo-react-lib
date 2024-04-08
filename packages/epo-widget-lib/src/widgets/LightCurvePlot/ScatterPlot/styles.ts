"use client";
import styled from "styled-components";
import { token } from "@rubin-epo/epo-react-lib/styles";
import { Base } from "@/charts/index";

export const PlotContainer = styled.div`
  --label-height: 3em;

  aspect-ratio: 1;
  color: var(--neutral95, #1f2121);
  container-type: inline-size;
  background-color: var(--white, #fff);
  border: 1px solid var(--turquoise55, #009fa1);
  gap: var(--light-curve-padding);
  position: relative;
`;

export const Chart = styled(Base)`
  font-size: 2.5em;
  overflow: visible;

  @container (
  min-width: ${token("BREAK_MOBILE")}
) {
    font-size: 1.75em;
  }

  @container (
  min-width: ${token("BREAK_PHABLET_MIN")}
) {
    font-size: 1.5em;
  }

  @container (
  min-width: ${token("BREAK_LARGE_TABLET_MIN")}
) {
    font-size: 1.25em;
  }
`;

export const SliderOuterWrapper = styled.div`
  position: absolute;
  width: calc(100% - calc(var(--label-height) * 2));
  height: calc(100% - calc(var(--label-height) * 2));
  top: var(--label-height);
  left: var(--label-height);
  pointer-events: none;
`;

export const SliderInnerWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: relative;
`;
