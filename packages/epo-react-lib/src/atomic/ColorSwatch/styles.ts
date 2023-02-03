import styled, { css } from "styled-components";
import { stripUnit } from "@castiron/style-mixins";
import { DURATION, PADDING_SMALL } from "@/styles/globalStyles";

export const ColorSwatch = styled.span.attrs(({ color }) => ({
  style: { backgroundColor: color },
}))<{ large: boolean; color: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  box-shadow: 0 3px 6px -2px rgba(0, 0, 0, 0.2), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: background-color ${DURATION} ease-in-out;

  ${({ large }) =>
    large
      ? css`
          width: ${stripUnit(PADDING_SMALL) * 1.5}px;
          height: ${stripUnit(PADDING_SMALL) * 1.5}px;
        `
      : css`
          width: ${PADDING_SMALL};
          height: ${PADDING_SMALL};
        `}
`;
