import styled from "styled-components";

export const ChartContainer = styled.div`
  --label-gutter: 2em;

  display: grid;
  grid-template-columns: var(--label-gutter) 1fr;
  grid-template-rows: auto 1fr var(--label-gutter);
  grid-template-areas:
    "title title"
    "vertical-label chart"
    ". horizontal-label";
  padding-inline-end: calc(var(--label-gutter) / 2);
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

export const Title = styled.h3`
  display: flex;
  align-items: center;
  grid-area: title;
  height: var(--label-gutter);
  padding-inline: calc(var(--label-gutter) / 2);
  margin: 0;
`;
