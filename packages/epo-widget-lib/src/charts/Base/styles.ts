import styled from "styled-components";

export const ChartContainer = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr;
  grid-template-rows: 1fr min-content;
  grid-template-areas:
    "vertical-label chart"
    ". horizontal-label";
`;

export const HorizontalLabel = styled.span`
  font-size: 80%;
  grid-area: horizontal-label;
  place-self: center;
  align-self: center;
`;
export const VerticalLabel = styled.span`
  font-size: 80%;
  grid-area: vertical-label;
  place-self: center;
  align-self: center;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
`;

export const SVG = styled.svg`
  grid-area: chart;
  height: 100%;
  max-width: 100%;
  aspect-ratio: var(--aspect-ratio);
`;
