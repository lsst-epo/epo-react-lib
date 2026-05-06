import styled from "styled-components";
import { SortDirection } from ".";


export const SortButton = styled.div<{ sortDirection?: SortDirection }>`
  display: inline-flex;
  flex-direction: column;
  
  padding: 4px 2px;

  & > * {
    padding: 2px;
  }

  .top-caret {
    fill: ${({sortDirection}) => sortDirection === "asc" ? "var(--color-rubin-gray-300)" : "var(--color-rubin-gray-100)"};
  }

  .bottom-caret {
    fill: ${({sortDirection}) => sortDirection === "desc" ? "var(--color-rubin-gray-300)" : "var(--color-rubin-gray-100)"};
  }
`;