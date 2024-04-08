import styled from "styled-components";

export const ChartContainer = styled.div`
  --label-height: 3em;
  --label-gutter: calc(var(--label-height) / 2);

  display: grid;
  grid-template-columns: min-content 1fr min-content;
  grid-template-rows: min-content 1fr min-content;
  grid-template-areas:
    "title title title"
    "vertical-label chart filler"
    ". horizontal-label filler";
  /* for Safari */
  align-items: center;
  width: 100%;
`;

export const HorizontalLabel = styled.div`
  place-self: center;
  align-self: center;
`;
export const VerticalLabel = styled.div`
  display: flex;
  align-items: center;
  place-self: center;
  align-self: center;
`;

export const Filler = styled.div`
  grid-area: filler;
  width: var(--label-height);
`;

export const SVG = styled.svg`
  grid-area: chart;
  max-width: 100%;
  max-height: 100%;
  aspect-ratio: var(--aspect-ratio);
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  grid-area: title;
  height: var(--label-height);
  padding-inline: var(--label-gutter);
`;

export const Title = styled.h3`
  margin: 0;
`;

export const VerticalLabelWrapper = styled.div`
  width: var(--label-height);
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  grid-area: vertical-label;
`;
export const HorizontalLabelWrapper = styled.div`
  height: var(--label-height);
  grid-area: horizontal-label;
`;

export const Label = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  font-size: 80%;
`;
