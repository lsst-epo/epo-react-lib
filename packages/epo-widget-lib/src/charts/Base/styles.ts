import styled from "styled-components";

export const ChartContainer = styled.div`
  --label-height: 3em;
  --label-gutter: calc(var(--label-height) / 2);

  display: grid;
  grid-template-columns: var(--label-height) 1fr var(--label-height);
  grid-template-rows: var(--label-height) 1fr var(--label-height);
  grid-template-areas:
    "title title ."
    "vertical-label chart ."
    ". horizontal-label .";
  width: 100%;
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
  max-width: 100%;
  aspect-ratio: var(--aspect-ratio);
`;

export const Title = styled.h3`
  display: flex;
  align-items: center;
  grid-area: title;
  padding-inline: var(--label-gutter);
  margin: 0;
`;
