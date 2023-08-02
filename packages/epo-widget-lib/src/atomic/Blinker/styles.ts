import styled from "styled-components";
import { token } from "@rubin-epo/epo-react-lib/styles";
import Controls from "./Controls/Controls";
import Images from "./Images/Images";

export const BlinkerContainer = styled.div`
  container: blinker / inline-size;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr min-content;
  justify-items: center;
  position: relative;
  height: 100%;
`;

const breakSize = token("BREAK_MOBILE");

export const BlinkerControls = styled(Controls)`
  grid-row: 2;
  margin-block-start: var(--PADDING_SMALL, 20px);

  @container blinker (min-width: ${breakSize}) {
    margin-block-end: var(--PADDING_SMALL, 20px);
  }
`;

export const BlinkerImages = styled(Images)`
  aspect-ratio: 1;
  grid-row: 1;
  width: 100%;

  @container blinker (min-width: ${breakSize}) {
    position: absolute;
    grid-row: span 2;
  }
`;
