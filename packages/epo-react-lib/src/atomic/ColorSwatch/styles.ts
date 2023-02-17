import styled, { css } from "styled-components";
import { stripUnit } from "@castiron/style-mixins";
import { DURATION, PADDING_SMALL } from "@/styles/globalStyles";

const small = css`
  width: 11px;
  height: 11px;
`;

const normal = css`
  width: ${PADDING_SMALL};
  height: ${PADDING_SMALL};
`;

const large = css`
  width: ${stripUnit(PADDING_SMALL) * 1.5}px;
  height: ${stripUnit(PADDING_SMALL) * 1.5}px;
`;

const sizes = { small, normal, large };

export const ColorSwatch = styled.span.attrs(({ color }) => ({
  style: { backgroundColor: color },
}))<{ size: "small" | "normal" | "large"; color: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--black, #000);
  transition: background-color ${DURATION} ease-in-out;

  ${({ size }) => sizes[size]}
`;
