import styled from "styled-components";

interface ColumnsProps {
  $width?: number;
  $gap?: number;
}

export const Columns = styled.div<ColumnsProps>`
  ${({ $width = 300, $gap = 25 }) => `
    columns: ${$width}px auto;
    column-gap ${$gap}px;
  `}
`;
