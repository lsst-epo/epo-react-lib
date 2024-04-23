import styled from "styled-components";
import { layoutGrid } from "@/styles/utils";
import { BREAK_PHABLET_MIN, BREAK_TABLET } from "@/styles/abstracts";

export interface GridProps {
  columns: number;
  tablet: number;
  showFeature: boolean;
}

export const Grid = styled.ul<GridProps>`
  ${({ columns, tablet }: GridProps) => `${layoutGrid(columns)}
    @media (min-width: ${BREAK_PHABLET_MIN}) and (max-width: ${BREAK_TABLET}) {
      grid-template-columns: repeat(${tablet}, 1fr);
      > * {grid-column: span 1;}
    }    
  `}

  ${({ showFeature }: GridProps) =>
    showFeature
      ? `    > :first-child {
      grid-column: 1 / -1;
      }`
      : ``}
`;
