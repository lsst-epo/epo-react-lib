"use client";
import styled from "styled-components";

export const Container = styled.div`
  > * + * {
    margin-block-start: var(--size-spacing-3xs, calc(1em * 0.25));
  }
`;

export const Label = styled.label`
  color: var(--color-font-primary);
  font-weight: var(--weight-font-bold, 600);

  &[data-show-required="true"] {
    &::after {
      content: "*";
      color: var(--color-rubin-red-300);
    }
  }
`;

export const Description = styled.span`
  color: var(--color-font-muted);
  display: block;
  font-weight: var(--weight-font-normal);
  font-size: 0.75em;
`;
