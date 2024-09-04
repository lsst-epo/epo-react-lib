"use client";
import styled from "styled-components";

export const Label = styled.label`
  color: var(--color-font-primary);
  font-weight: var(--weight-font-bold, 600);

  > * + * {
    margin-block-start: var(--size-spacing-3xs);
  }
`;

export const Description = styled.span`
  color: var(--color-font-muted);
  display: block;
  font-weight: var(--weight-font-normal);
  font-size: 0.75em;
`;
