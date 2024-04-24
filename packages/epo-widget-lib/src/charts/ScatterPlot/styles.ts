"use client";
import styled from "styled-components";
import { token } from "@rubin-epo/epo-react-lib/styles";
import BaseChart from "../Base";

export const Chart = styled(BaseChart)`
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
