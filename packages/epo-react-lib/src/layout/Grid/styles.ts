import styled from "styled-components";
import { layoutGrid, token } from "@/styles/utils";

const tabletMin = token("BREAK_PHABLET_MIN");
const tabletMax = token("BREAK_TABLET");

export const Grid = styled.ul`
  ${layoutGrid("var(--count-columns-grid)")}

  @media screen and (min-width: ${tabletMin}) and (max-width: ${tabletMax}) {
    grid-template-columns: repeat(var(--count-columns-grid-tablet), 1fr);
    > * {
      grid-column: span 1;
    }
  }

  &[data-show-feature="true"] {
    > :first-child {
      grid-column: 1 / -1;
    }
  }
`;
