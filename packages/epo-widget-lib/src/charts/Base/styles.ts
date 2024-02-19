import styled from "styled-components";

export const ChartContainer = styled.div`
  --label-gutter: 2em;

  display: grid;
  grid-template-columns: var(--label-gutter) 1fr;
  grid-template-rows: 1fr var(--label-gutter);
  grid-template-areas:
    "vertical-label chart"
    ". horizontal-label";
  padding-inline-end: var(--label-gutter);
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
