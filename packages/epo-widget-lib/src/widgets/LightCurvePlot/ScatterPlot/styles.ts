"use client";
import styled from "styled-components";
import { token } from "@rubin-epo/epo-react-lib/styles";
import { Base } from "@/charts/index";

export const PlotContainer = styled.div`
  display: flex;
  flex-direction: column;
  container-type: inline-size;
  background-color: var(--white, #fff);
  border: 1px solid var(--turquoise55, #009fa1);
  gap: var(--light-curve-padding);
  padding: var(--light-curve-padding, var(--PADDING_SMALL, 20px)) 0;
`;

export const Chart = styled(Base)`
  font-size: 2.25em;
  @container (
  min-width: ${token("BREAK_MOBILE")}
) {
    font-size: 1.5em;
  }

  @container (
  min-width: ${token("BREAK_PHABLET_MIN")}
) {
    font-size: 1.25em;
  }

  @container (
  min-width: ${token("BREAK_LARGE_TABLET_MIN")}
) {
    font-size: 1em;
  }
`;

export const PlotTitle = styled.h3`
  padding-inline: var(--light-curve-padding, var(--PADDING_SMALL, 20px));
  margin: 0;
`;
