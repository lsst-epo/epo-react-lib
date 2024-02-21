import styled from "styled-components";
import { token } from "@rubin-epo/epo-react-lib/styles";
import * as Button from "@/atomic/Button";
import DistanceHistogram from "./Histogram";
import BaseSkymap from "./Skymap";

export const ThreeVectorContainer = styled.div`
  container-type: inline-size;
`;

export const ThreeVectorLayout = styled.div`
  --three-vector-gap: calc(var(--PADDING_SMALL, 20px) / 2);

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: min-content 1fr min-content min-content;
  grid-template-areas:
    "skymap"
    "histogram"
    "slider"
    "reset";
  gap: var(--three-vector-gap);

  @container (min-width: ${token("BREAK_PHABLET_MIN")}) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr min-content min-content;
    grid-template-areas:
      "histogram skymap"
      "slider ."
      "reset reset";
  }

  @container (min-width: ${token("BREAK_TABLET_MIN")}) {
    --three-vector-gap: var(--PADDING_SMALL, 20px);
    gap: var(--three-vector-gap);
  }
`;

export const HistogramContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--three-vector-gap);
  container-type: inline-size;
  grid-area: histogram;
`;

export const Histogram = styled(DistanceHistogram)`
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

export const SliderContainer = styled.div`
  grid-area: slider;
`;

export const ResetButton = styled(Button.Reset)`
  grid-area: reset;
`;

export const SkymapContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--three-vector-gap);
  container-type: inline-size;
  grid-area: skymap;
`;

export const Skymap = styled(BaseSkymap)`
  max-width: 100%;
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

export const ChartTitle = styled.h4`
  margin: 0;
`;
