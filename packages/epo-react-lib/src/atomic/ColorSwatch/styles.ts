import styled, { css } from "styled-components";

const small = css`
  width: 11px;
  height: 11px;
`;

const normal = css`
  width: var(--PADDING_SMALL, 20px);
  height: var(--PADDING_SMALL, 20px);
`;

const large = css`
  width: calc(var(--PADDING_SMALL, 20px) * 1.5);
  height: calc(var(--PADDING_SMALL, 20px) * 1.5);
`;

const sizes = { small, normal, large };

export const ColorSwatch = styled.span.attrs(({ color }) => ({
  style: { backgroundColor: color },
}))<{ size: "small" | "normal" | "large"; color: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--black, #000);
  transition: background-color var(--DURATION, 0.2s) ease-in-out;

  ${({ size }) => sizes[size]}
`;
