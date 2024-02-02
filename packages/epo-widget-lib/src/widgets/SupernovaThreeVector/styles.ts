import styled from "styled-components";
import { token } from "@rubin-epo/epo-react-lib/styles";
import * as Button from "@/atomic/Button";
import DistanceHistogram from "./Histogram";
import BaseSkymap from "./Skymap";

export const ThreeVectorContainer = styled.div`
  container-type: inline-size;
`;

export const ThreeVectorLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: min-content 1fr min-content min-content;
  grid-template-areas:
    "skymap"
    "histogram"
    "slider"
    "reset";
  gap: var(--PADDING_SMALL, 20px);

  @container (min-width: ${token("BREAK_PHABLET_MIN")}) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr min-content min-content;
    grid-template-areas:
      "histogram skymap"
      "slider skymap"
      "reset reset";
  }
`;

export const HistogramContainer = styled.div`
  container-type: inline-size;
  grid-area: histogram;
`;

export const Histogram = styled(DistanceHistogram)`
  font-size: 2em;

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

export const SliderContainer = styled.div`
  grid-area: slider;
`;

export const ResetButton = styled(Button.Reset)`
  grid-area: reset;
`;

export const Skymap = styled(BaseSkymap)`
  grid-area: skymap;
  max-width: 100%;
`;

export const OffscreenLabel = styled.span`
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
  height: 1px;
  width: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
`;
