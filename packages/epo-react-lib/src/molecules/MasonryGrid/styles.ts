import { token } from "@/styles/utils";
import styled from "styled-components";

export const BrickGrid = styled.ul`
  --size-spacing-masonry: var(--size-spacing-3xs-2xs, 0.5rem);

  display: grid;
  grid-auto-flow: row dense;
  grid-auto-rows: calc(var(--size-height-row) * 2);
  gap: var(--size-spacing-masonry);
  list-style: none;

  @media screen and (min-width: ${token("BREAK_PHABLET_MIN")}) {
    grid-auto-rows: var(--size-height-row);
    grid-template-columns: repeat(12, 1fr);

    & > *:nth-child(20n + 1),
    & > *:nth-child(20n + 2),
    & > *:nth-child(20n + 3),
    & > *:nth-child(20n + 8),
    & > *:nth-child(20n + 9),
    & > *:nth-child(20n + 10),
    & > *:nth-child(20n + 16),
    & > *:nth-child(20n + 17),
    & > *:nth-child(20n + 18) {
      grid-column: span 4;
    }
    & > *:nth-child(20n + 4),
    & > *:nth-child(20n + 5),
    & > *:nth-child(20n + 6),
    & > *:nth-child(20n + 7),
    & > *:nth-child(20n + 12),
    & > *:nth-child(20n + 13),
    & > *:nth-child(20n + 14),
    & > *:nth-child(20n + 15) {
      grid-column: span 3;
    }
    & > *:nth-child(20n + 11) {
      grid-column: span 12;
      grid-row: span 2;
    }
    & > *:nth-child(20n + 19),
    & > *:nth-child(20n + 20) {
      grid-column: span 6;
      grid-row: span 2;
    }
  }
`;
